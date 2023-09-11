import React, { useEffect, useState } from 'react';
import './Featuredlist.css';

function FeaturedList({ title, apiUrl, mood }) {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(7); // Number of initially visible items
  const itemsPerPage = 3; // Number of items to show per "Load More" click
  const totalItems = 100; // Total number of items you expect

  useEffect(() => {
    async function fetchData() {
      try {
        // Modify the API URL based on the mood prop
        const apiURLWithFilter = mood
          ? `${apiUrl}?filter={"mood":"${mood}"}`
          : apiUrl;

        const response = await fetch(apiURLWithFilter, {
          headers: {
            'projectId': 'ybxi8hzrv99f'
          }
        });
        const responseData = await response.json();

        if (responseData.status === 'success') {
          const data = responseData.data;
          if (Array.isArray(data)) {
            setFeaturedItems(data);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [apiUrl, mood]);

  const loadMore = () => {
    setVisibleItems(Math.min(visibleItems + itemsPerPage, totalItems));
  };

  const showAll = () => {
    setVisibleItems(totalItems);
  };

  const showLess = () => {
    setVisibleItems(7); // Revert back to 7 initially visible items
  };

  return (
    <div className="featured-list-container">
      <h2 className='titles'>{title}</h2>
      <div className="button-container">
        {visibleItems > 0 && (
          <button onClick={showLess} className="show-less-button">
            &lt;
          </button>
        )}
        {visibleItems < totalItems && (
          <button onClick={loadMore} className="load-more-button">
            &gt;
          </button>
        )}
        {visibleItems < totalItems && (
          <button onClick={showAll} className="show-all-button">
            See All
          </button>
        )}
      </div>
      <ul className="featured-list">
        {featuredItems.slice(0, visibleItems).map((item, index) => (
          <li key={index} className="artist-card">
            <div className="buttons">
              <button className="plus-button">+</button>
              <button className="play-button">▶</button>
              <button className="dots-button">...</button>
            </div>
            {item.image && (
              <img src={item.image} alt={item.name} className="artist-image" />
            )}
            {item.thumbnail && (
              <img src={item.thumbnail} alt={item.name} className="artist-image" />
            )}
            <h3 className="artist-name">{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedList;
