import React, { useState } from 'react'; 
import { useForm } from "react-hook-form";
import axios from 'axios';  
import { useEffect } from 'react';

const Admin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', 'f35da1b30e5217ea94f90ccafa6c077c')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(response => {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = data => {
        const productInfo = {
            name: data.name,
            price: data.price,
            description: data.des,
            imageURL: imageURL
        } 
        fetch('https://shrouded-depths-01821.herokuapp.com/addProduct', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };
 
    const handleAddProduct = () => {

    }

    
    const [product, setProduct] = useState([])
    useEffect( () => {
        fetch('https://shrouded-depths-01821.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    console.log(product.name )
    return (
        <div>
            <div className="leftPart">
                <button>Manage Product</button>
                <button onClick={handleAddProduct}>Add Product</button>
                <button>Edit Product</button>
            </div>
            <hr />
            <div className="rightPart">
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <label htmlFor="name">Product Name:</label>
                    <br />
                    <input defaultValue="Name" {...register("name")} /> 
                    <br />
                    <br />
                    <label htmlFor="price">Product Price:</label>
                    <br />
                    <input placeholder="Enter price" type="number" {...register("price")} /> 
                    <br />
                    <br />
                    <label htmlFor="des">Product Description:</label>
                    <br /> 
                    ​<textarea placeholder="Description" {...register("des")} rows="5" cols="30"></textarea>
                    <br />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />  
                    <br />
                    <input type="submit" />
                </form> 
            </div> 
            <div>   
                {
                    product.map( pd => <ul>
                        <li>Name: {pd.name} -- Price: ${pd.price}</li> 
                    </ul>)
                }
            </div>
        </div>
    );
};

export default Admin;