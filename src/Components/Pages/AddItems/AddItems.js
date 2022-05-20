import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(result =>{
        
        toast('Item Added')
        console.log(result);
    })

};
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center text-danger'>Add a New Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3'  placeholder='Description'{...register("description")} />
                <input className='mb-3'  placeholder='Price'type="number" {...register("price")} />
                <input className='mb-3'  placeholder='Supplier'type="text" {...register("supplier")} />
                <input className='mb-3'  placeholder='Quantity'type="number" {...register("quantity")} />
                <input className='mb-3'  placeholder='Photo Url'type="text" {...register("img")} />
                <input className='mb-3' type="Submit" />
            </form>
        </div>
    );
};

export default AddItems;