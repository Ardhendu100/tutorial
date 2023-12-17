import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

const SubCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createNewCategoryName, setCreateNewCategoryName] = useState('');
  const [updateCategory, setUpdateCategory] = useState(null);
  const [updateCategoryName, setUpdateCategoryName] = useState('');

  useEffect(() => {
    // Fetch categories from API
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(response => {
        setCategories(response.data.response);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCreateNewCategoryName('');
    setUpdateCategory(null);
    setUpdateCategoryName('');
  };

  const handleCreateCategory = () => {
    if (createNewCategoryName.trim() === '') {
      alert('Category name cannot be empty');
      return;
    }

    const data = {
      name: createNewCategoryName,
    };
    axios.post('http://127.0.0.1:8000/api/categories', data)
      .then(response => {
        console.log('Category created successfully:', response.data);
        getCategories();
      })
      .catch(error => {
        console.log('Error creating category:', error);
      });

    closeModal();
  };

  const handleUpdateClick = (category) => {
    setUpdateCategory(category);
    setUpdateCategoryName(category.name)
    setIsModalOpen(true);
  };
  

  const handleUpdateCategory = () => {
    if (updateCategoryName.trim() === '') {
      alert('Category name cannot be empty');
      return;
    }

    const data = {
      name: updateCategoryName,
    };
    axios.put(`http://127.0.0.1:8000/api/categories/${updateCategory.id}`, data)
      .then(response => {
        console.log('Category updated successfully:', response.data);
        getCategories();
      })
      .catch(error => {
        console.log('Error updating category:', error);
      });

    closeModal();
  };

  const handleDeleteClick = (categoryId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');

    if (isConfirmed) {
      axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`)
        .then(response => {
          console.log('Category deleted successfully:', response.data);
          getCategories();
        })
        .catch(error => {
          console.log('Error deleting category:', error);
        });
    } else {
      console.log('Deletion canceled.');
    }
  };

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
                  <button onClick={() => handleDeleteClick(category.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline p-2 border border-red-500 bg-blue-800 rounded" type="button">
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
