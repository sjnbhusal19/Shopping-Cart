import { useEffect, useState } from "react"
import { TProduct } from "./type-product";


export const useCustomFetch = () => {
    const [product, setProduct] = useState<TProduct[]>([]);
    const [fetchingError, setFetchingError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true)
   

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(() => setFetchingError(true))
            .finally(() => setLoading(false))
    }, [])


    return [product, fetchingError, loading]

}

