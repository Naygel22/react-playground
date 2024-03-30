import { useEffect, useState } from "react";

export function useAPI<ResponseData>(url:string) {
  const [data, setData] = useState<ResponseData|null>(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState<string|null>(null);

  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      console.log("response",response)
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json() as ResponseData;
      setData(json);
      setIsError(null);
    } catch (error) {
      if(error instanceof Error){
        setIsError(`${error.message} Could not Fetch Data `);
      }
    }finally{
      setisLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, isLoading, isError };
};