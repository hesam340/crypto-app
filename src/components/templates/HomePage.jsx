import { useEffect, useState } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      console.log(json);
      setCoins(json);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
