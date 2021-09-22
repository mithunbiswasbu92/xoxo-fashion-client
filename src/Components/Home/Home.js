import React, { useState, useEffect } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://shrouded-depths-01821.herokuapp.com/products',)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div> 
            {
                <h1>We have total: {product.length} Products</h1>
            }
            {
                product.map( pd => <Products pd={pd}></Products>)
            }
        </div>
    );
};

export default Home;