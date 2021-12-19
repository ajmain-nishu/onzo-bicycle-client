import React from 'react';
import { useForm } from 'react-hook-form';


// dashboard add product sectoin
const AddProduct = () => {

    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onSubmit = data => {

        //server api call
        fetch('https://still-sands-78439.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            alert('are you sure add this product')
            reset()
        })
    };

    return (
        <div className="my-5">
            <h2 className="text-center py-5">Add Product Here</h2>

            {/* add sevice form */}
            <form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control my-2" type="text" {...register("name")} placeholder="product name" />
                
                <input className="form-control my-2" type="number" {...register("price", { required: true })} placeholder="price" />
                <input className="form-control my-2" {...register("image", { required: true })} placeholder="image link" />
                <input className="form-control my-2" {...register("description", { required: true })} placeholder="description" />
                <input className="form-control my-2" type="text" {...register("star", { required: true })} placeholder="rating" />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input className="btn btn-secondary mt-3" type="submit" />
            </form>
        </div>
    );
};



export default AddProduct;