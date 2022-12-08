import React from 'react';
import '../App.css';
import Navibar from '../components/navigation/Navibar';
import Search from '../components/search/Search';

function SearchPage() {
  return (
      <div className='SearchPage'>
        <Navibar />
        <div className='main'>
          <Search />
        </div>
      </div>
  );
}

export default SearchPage;
