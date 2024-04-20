import axios from 'axios';

export const fetchItems = async () => {
  try {
    const response = await axios.get('http://localhost:8888/api/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};