import {useState, useEffect} from 'react'
import axios from 'axios'
const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'x-rapidapi-key': 'e878788af6mshb862883aaa2fde4p110ea1jsn3fdfcd7c2c2c',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response =  await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }
        catch (error){
            setError(error);
            alert("Something went wrong");
        }
        finally{
            setIsLoading(false);

        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
}
export default useFetch;