import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(response => {
        setCategories(response.data.response);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-end mb-4 ">
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create
        </Link>
        
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category name
            </th>
            <th scope="col" className="px-6 py-3">
              Slug
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id} className="border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
              </th>
              <td className="px-6 py-4">
                {category.slug}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2 p-2 border bg-blue-800 border-blue-500 rounded">
                    <PencilIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline p-2 border border-red-500 bg-blue-800 rounded">
                    <TrashIcon className="w-5 h-5" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
