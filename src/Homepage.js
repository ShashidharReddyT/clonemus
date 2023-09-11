import React from 'react';
import FeaturedList from './Featuredlist';

function HomePage() {
    return (
        <div>
           
            {/* Display featured songs */}
            <FeaturedList title="Featured Songs" apiUrl="https://academics.newtonschool.co/api/v1/music/song" mood="romantic" sort={{ release: 1 }}/>

            {/* Display featured albums */}
            
            <FeaturedList title="Featured Albums" apiUrl={`https://academics.newtonschool.co/api/v1/music/album`} />

            
            {/* Display featured artists */}
            <FeaturedList title="Featured Artists" apiUrl={`https://academics.newtonschool.co/api/v1/music/artist`} />
        </div>
    );
}

export default HomePage;
