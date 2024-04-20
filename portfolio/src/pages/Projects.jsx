import React from 'react';
import { useState, useEffect } from 'react';
import { fetchItems } from '../services/fetchItem';

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await fetchItems();
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description} - {item.thumbnail} - {item.url} - {item.languages}
          </li>
        ))}
      </ul>
    </div>
  );
}

