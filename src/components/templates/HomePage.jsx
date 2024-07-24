import { useEffect, useState } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      console.log(json);
      setCoins(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
