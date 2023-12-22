import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createNewCategoryName, setCreateNewCategoryName] = useState('');
  const [updateCategory, setUpdateCategory] = useState(null);
  const [updateCategoryName, setUpdateCategoryName] = useState('');
  const apiUrl: string = import.meta.env.VITE_REACT_APP_CATEGORIES || '';
  const [subCategories, setSubCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories from API
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCategories(response.data.response);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCreateNewCategoryName('');
    setUpdateCategory(null);
    setUpdateCategoryName('');
  };

  const handleCreateCategory = async () => {
    try {
      if (createNewCategoryName.trim() === '') {
        alert('Category name cannot be empty');
        return;
      }

      const data = {
        name: createNewCategoryName,
      };

      await axios.post(apiUrl, data);
      console.log('Category created successfully');
      await getCategories();
    } catch (error) {
      console.error('Error creating category:', error);
    }

    closeModal();
  };

  const handleUpdateClick = (category) => {
    setUpdateCategory(category);
    setUpdateCategoryName(category.name);
    setIsModalOpen(true);
  };

  const handleUpdateCategory = async () => {
    try {
      if (updateCategoryName.trim() === '') {
        alert('Category name cannot be empty');
        return;
      }

      const data = {
        name: updateCategoryName,
      };

      await axios.put(`${apiUrl}/${updateCategory?.id}`, data);
      console.log('Category updated successfully');
      await getCategories();
    } catch (error) {
      console.error('Error updating category:', error);
    }

    closeModal();
  };

  const handleDeleteClick = async (categoryId: string | number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');

    if (isConfirmed) {
      try {
        await axios.delete(`${apiUrl}/${categoryId}`);
        console.log('Category deleted successfully');
        await getCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    } else {
      console.log('Deletion canceled.');
    }
  };

  const handleViewClick = async (slug: string | number) => {
    const newPath = `/categories/${slug}/sub-categories`;
    navigate(newPath);
  };


  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Category name', width: 200 },
    { field: 'slug', headerName: 'Slug', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      renderCell: (params: GridValueGetterParams) => (
        <div style={{ display: 'flex' }}>
          <button
            onClick={() => handleUpdateClick(params.row)}
            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary"
            type="button"
          >
            Update
          </button>
          <button
            onClick={() => handleDeleteClick(params.row.id)}
            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary"
            type="button"
          >
            Delete
          </button>
          <button
            onClick={() => handleViewClick(params.row.slug)}
            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary"
            type="button"
          >
            View
          </button>
        </div>
      ),
    },
  ];

  const rows = categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }));
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 w-96">
            <h2 className="text-lg font-medium mb-4 text-black">
              {updateCategory ? 'Update Category' : 'Create Category'}
            </h2>
            <input
              type="text"
              value={updateCategory ? updateCategoryName : createNewCategoryName}
              onChange={(e) => {
                updateCategory ? setUpdateCategoryName(e.target.value) : setCreateNewCategoryName(e.target.value);
              }}
              className="border-2 p-2 mb-4 w-full text-black"
              placeholder="Category Name"
              required
            />
            <div className="flex justify-end">
              <button
                onClick={updateCategory ? handleUpdateCategory : handleCreateCategory}
                className="bg-primary text-white px-4 py-2 rounded-md mr-2"
              >
                {updateCategory ? 'Update' : 'Add'}
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
                  <button onClick={() => handleUpdateClick(category)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2 p-2 border bg-blue-800 border-blue-500 rounded" type="button">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteClick(category.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mr-2 p-2 border border-red-500 bg-blue-800 rounded" type="button">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleViewClick(category.slug)} 
                    className="font-medium text-green-600 dark:text-green-500 hover:underline p-2 border border-green-500 bg-blue-800 rounded"
                    type="button"
                  >
                    <EyeIcon className="w-5 h-5" />
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

export default Categories;
