import { useEffect, useState } from "react";

import { getCoinList } from "../../services/cryptoApi";

import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      console.log(json);
      setCoins(json);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
