// src/ProductForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProductForm: React.FC = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.number()
      .typeError('Price must be a number')
      .required('Price is required')
      .positive('Price must be greater than zero'),
    description: Yup.string().required('Description is required'),
    status: Yup.boolean().required('Status is required'),
    quantity: Yup.number()
      .typeError('Quantity must be a number')
      .required('Quantity is required')
      .min(1, 'Quantity must be at least 1'),
    
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: '',
      description: '',
      status: false,
      quantity: '',
      img: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto bg-slate-100 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Product Information</h2>
      
      <div className="mb-4">
        <label className="block text-left font-medium text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder='Enter Your Name'
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-left font-medium text-gray-700">Category:</label>
        <input
          type="text"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder='Enter Your Category'
        />
        {formik.touched.category && formik.errors.category && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.category}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-left font-medium text-gray-700">Price:</label>
        <input
          type="text"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder='Enter Price'
        />
        {formik.touched.price && formik.errors.price && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.price}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-left font-medium text-gray-700">Description:</label>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition resize-none"
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.description}</div>
        )}
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="status"
          checked={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="ml-2 text-left font-medium text-gray-700">Status (In stock)</label>
        {formik.touched.status && formik.errors.status && (
          <div className="text-red-600 text-xs ml-2">{formik.errors.status}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-left font-medium text-gray-700">Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder='Enter you Quantity'
        />
        {formik.touched.quantity && formik.errors.quantity && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.quantity}</div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-left font-medium text-gray-700">Image URL:</label>
        <input
          type="text"
          name="img"
          value={formik.values.img}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
        />
        {formik.touched.img && formik.errors.img && (
          <div className="text-red-600 text-xs mt-1">{formik.errors.img}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
