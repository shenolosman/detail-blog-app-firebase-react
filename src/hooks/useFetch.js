import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [options, SetOptions] = useState(null);

  const postData = (data) => {
    SetOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
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
          setError(`Fetch is not seccussful! Reason: ${error}`);
        }
      }
    };
    // fetchData(); //fetching data methods runs
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
    return () => {
      //then returns it for abort the rest of async process
      controller.abort();
    };
  }, [url,options,method]);
  return { data, error, loading, postData };
};

export default useFetch;
