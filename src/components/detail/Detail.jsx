import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import {
        Heading
        } from '@chakra-ui/react';

export default function Detail(){
    const [product, setProduct] = useState();
    let { productID } = useParams();
    
    useEffect(()=>{
        async function getProduct(){
            const aux = await axios.get(`http://127.0.0.1:8000/api/products/${productID}`)
            setProduct(aux.data)
        };
        getProduct();
    }, [productID]);
    
    return(
        <>
            {product
                ? <Heading> {product.name} </Heading>
                : <> Loading </>
            }
        </>
    )
}