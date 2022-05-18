import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h1>Add me</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3'  placeholder='Description'{...register("description")} />
                <input className='mb-3'  placeholder='Price'type="number" {...register("price")} />
                <input className='mb-3'  placeholder='Supplier'type="number" {...register("supplier")} />
                <input className='mb-3'  placeholder='Quantity'type="number" {...register("quantity")} />
                <input className='mb-3'  placeholder='Photo Url'type="number" {...register("img")} />
                <input className='mb-3' type="Submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItems;