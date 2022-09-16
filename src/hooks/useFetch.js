import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();
        setLoading(false);
        setData(data);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetching aborted");
        } else {
          setLoading(false);
          setError("Fetch is not seccussful,reason : ",error.message);
        }
      }
    };
    fetchData(); //fetching data methods runs
    return () => { //then returns it for abort the rest of async process
      controller.abort();
    };
  }, [url]);
  return { data, error, loading };
};

export default UseFetch;
