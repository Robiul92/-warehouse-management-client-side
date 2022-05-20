import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useSingleItem = () => {
    const [product, setProduct] = useState({});
    const [isReload, setIsreload] = useState(false);
    const{id} =useParams();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIsreload(data)
            });
    }, [isReload])
    return [product, setProduct];
}

export default useSingleItem;
