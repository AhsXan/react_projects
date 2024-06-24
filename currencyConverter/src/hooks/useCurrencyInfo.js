import { useEffect, useState } from "react";

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-06-20/v1/currencies.json
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})


    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-06-20/v1/currencies/usd.json')
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            //.then((res)=>console.log(Object.keys(data)))
            
    }, [currency])


    return[data]
}

export default useCurrencyInfo;

// function useCurrencyInfo(){
// const [data,setData]= useState({})

// useEffect(()=>{

//     fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-06-20/v1/currencies.json")
//     .then((res)=>res.json())
//     .then((res)=> setData(res[currency]))

// console.log(data)
// },[currency])


// }
// export default useCurrencyInfo;

//         console.log(data);