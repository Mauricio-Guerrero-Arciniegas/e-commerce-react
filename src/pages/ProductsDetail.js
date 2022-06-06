import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ProductsDetail = () => {

    const [ product, setProducts ] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then(res => setProducts(res.data.data.product));
    }, [])

    console.log(product)

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.productImgs} alt="" className="fluid-img"/>
        </div>
    );
};

export default ProductsDetail;