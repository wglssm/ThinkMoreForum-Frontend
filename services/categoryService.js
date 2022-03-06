import http from '../utils/axios';

export const getColorCollection = () => [
  { id: '1', title: 'Blue' },
  { id: '2', title: 'Red' },
  { id: '3', title: 'Green' },
  { id: '4', title: 'Orange' },
];

export const getAllCategories = () => http(`/v1/category`, { method: 'GET' });
//   if (localStorage.getItem(KEYS.categories) == null)
//     localStorage.setItem(KEYS.categories, JSON.stringify([]));
//   const categories = JSON.parse(localStorage.getItem(KEYS.categories));
//   const colors = getColorCollection();
//   return categories.map((x) => ({
//     ...x,
//     color: colors[x.colorId - 1].title,
//   }));

export const insertCategory = ({ title, description, color }) =>
  http(`/v1/category/addCategory/${title}/${description}/${color}`, {
    method: 'POST',
  });

export const updateCategory = (categoryData) => {
  return http(`/v1/category`, {
    method: 'PUT',
    data: categoryData,
  });
};

export const deleteCategory = (id) => {
  return http(`/v1/category?category_id=${id}`, { method: 'DELETE' });
};
