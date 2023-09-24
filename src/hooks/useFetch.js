import { useEffect, useState } from "react";


const useFetch = (url, size) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            if (size.length) {
                let arr = [];
                for (let value = 0; value < size.length; value++) {
                    const filteredData = json.filter((item) =>
                        item.availableSizes.some((x) => x === size[value].toString())
                    );
                    if (!arr.includes(filteredData)) {
                        filteredData.map(x => arr.push(x));
                        const filteredArray = arr.filter((x, index) => {
                            return arr.indexOf(x) === index
                        })
                        setData(filteredArray)
                    }
                }
            } else {
                setData(json)
            }
        }
        
        fetchData()
    }, [url,size])
    

    return {data}
}

export default useFetch;