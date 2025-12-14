import { useState, useEffect } from "react";

interface CoinPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker = () => {
  const [coins, setCoins] = useState<CoinPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );
        const data = await response.json();
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
        setIsLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full bg-card/80 backdrop-blur-sm border-b border-border py-2">
        <div className="text-center text-xs text-muted-foreground">Loading prices...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-card/80 backdrop-blur-sm border-b border-border overflow-hidden">
      <div className="animate-scroll flex gap-8 py-2 px-4 whitespace-nowrap">
        {[...coins, ...coins].map((coin, index) => (
          <div key={`${coin.id}-${index}`} className="flex items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground uppercase">{coin.symbol}</span>
            <span className="text-primary font-semibold">${coin.current_price.toLocaleString()}</span>
            <span className={coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
              {coin.price_change_percentage_24h >= 0 ? "+" : ""}
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
