import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useSingleItem = () => {
    
    const [category, setCategory] = useState();
    
    useEffect(() =>{
        const url = `http://localhost:5000/inventory`;

        fetch(url)
        .then(res => res.json())
        .then(data => setCategory(data));
    },[])
    return [category]
};

export default useSingleItem;