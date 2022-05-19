import { useEffect, useState } from "react";


const useItems = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory`)
        .then(res =>res.json())
        .then(data => setInventorys(data));
    },[])

    return [inventorys]
};

export default useItems;