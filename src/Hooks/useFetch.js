/* eslint-disable react-hooks/exhaustive-deps */
 
import { useState, useEffect } from "react";

export default function useFetch(url, ...dependencies) {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, dependencies);

  return data;
}
