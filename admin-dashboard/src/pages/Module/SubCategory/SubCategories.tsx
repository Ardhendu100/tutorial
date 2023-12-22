import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Link, useParams } from 'react-router-dom';

const SubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubCategoryName, setNewSubCategoryName] = useState('');
  const [updateSubCategory, setUpdateSubCategory] = useState(null);
  const [updateSubCategoryName, setUpdateSubCategoryName] = useState('');
  const [categoryId, setcategoryId] = useState('');

  const { slug } = useParams();
  const categoryUrl: string = import.meta.env.VITE_REACT_APP_CATEGORIES || '';
  const subCategoryUrl: string = import.meta.env.VITE_REACT_APP_SUB_CATEGORIES || '';


  useEffect(() => {
    // Fetch categories from API
    getSubCategories();
  }, []);

  const getSubCategories = async () => {
    try {
      const response = await axios.get(categoryUrl + `/${slug}`);
      setSubCategories(response.data.response.sub_categories);
      setcategoryId(response.data.response.id);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewSubCategoryName('');
    setUpdateSubCategory(null);
    setUpdateSubCategoryName('');
  };

  const handleCreateCategory = async () => {
    try {
      if (newSubCategoryName.trim() === '') {
        alert('Sub Category name cannot be empty');
        return;
      }

      const data = {
        name: newSubCategoryName,
        category_id: categoryId
      };

      await axios.post(subCategoryUrl, data);
      console.log('Category created successfully');
      await getSubCategories();
    } catch (error) {
      console.error('Error creating category:', error);
    }

    closeModal();
  };

  const handleUpdateClick = (category) => {
    setUpdateSubCategory(category);
    setUpdateSubCategoryName(category.name);
    setIsModalOpen(true);
  };

  const handleUpdateCategory = async () => {
    try {
      if (updateSubCategoryName.trim() === '') {
        alert('Category name cannot be empty');
        return;
      }

      const data = {
        name: updateSubCategoryName,
        category_id: categoryId
      };

      await axios.put(`${subCategoryUrl}/${updateSubCategory?.id}`, data);
      console.log('Sub Category updated successfully');
      await getSubCategories();
    } catch (error) {
      console.error('Error updating category:', error);
    }

    closeModal();
  };

  const handleDeleteClick = async (categoryId: string | number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');

    if (isConfirmed) {
      try {
        await axios.delete(`${subCategoryUrl}/${categoryId}`);
        console.log('Category deleted successfully');
        await getSubCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    } else {
      console.log('Deletion canceled.');
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-1 mr-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create
        </button>
        <Link to="/categories" className="inline-flex items-center justify-center rounded-md bg-primary py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Back
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 w-96">
            <h2 className="text-lg font-medium mb-4 text-black">
              {updateSubCategory ? 'Update Sub Category' : 'Create Sub Category'}
            </h2>
            <input
              type="text"
              value={updateSubCategory ? updateSubCategoryName : newSubCategoryName}
              onChange={(e) => {
                updateSubCategory ? setUpdateSubCategoryName(e.target.value) : setNewSubCategoryName(e.target.value);
              }}
              className="border-2 p-2 mb-4 w-full text-black"
              placeholder="Sub Category Name"
              required
            />
            <div className="flex justify-end">
              <button
                onClick={updateSubCategory ? handleUpdateCategory : handleCreateCategory}
                className="bg-primary text-white px-4 py-2 rounded-md mr-2"
              >
                {updateSubCategory ? 'Update' : 'Add'}
              </button>
              <button onClick={closeModal} className="bg-danger text-white px-4 py-2 rounded-md mr-2 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sub Category name
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
          {subCategories.map(subCategory => (
            <tr key={subCategory.id} className="border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {subCategory.name}
              </th>
              <td className="px-6 py-4">
                {subCategory.slug}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex">
                  <button onClick={() => handleUpdateClick(subCategory)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2 p-2 border bg-blue-800 border-blue-500 rounded" type="button">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteClick(subCategory.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline p-2 border border-red-500 bg-blue-800 rounded" type="button">
                    <TrashIcon className="w-5 h-5" />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
};

export default SubCategories;
