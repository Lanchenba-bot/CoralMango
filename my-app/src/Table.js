import React, { useState } from 'react';
import './Table.css';

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [isTableView, setIsTableView] = useState(true);
  const [isSorted, setIsSorted] = useState(false);


  const handleSort = (property) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };
  const toggleSort = (property) =>{
    if(!isSorted){
        const sorted = [...sortedData].sort((a, b) => {
          if (a[property] < b[property]) return -1;
          if (a[property] > b[property]) return 1;
          return 0;
        });
        setSortedData(sorted);
        setIsSorted(true);
        console.log(isSorted);
      
    }else{
      setIsSorted(false);
        const sorted = [...sortedData].sort((a, b) => {
          if (a[property] > b[property]) return -1;
          if (a[property] < b[property]) return 1;
          return 0;
        });
        setSortedData(sorted);
    }
  }

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filtered = sortedData.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
      setIsFiltered(true);
    } else {
      setFilteredData([]);
      setIsFiltered(false);
    }
  };

  const toggleView = () => {
    setIsTableView((prevState) => !prevState);
  };

  const displayedData = isFiltered ? filteredData : sortedData;

  return (
    <div className='table-data'>
      <nav className='nav-bar'>
        <input
          className='nav-search'
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {isFiltered && <div className='popup-filter'>data is filtered</div>}
        <div className='button-sort'>
          <button onClick={toggleView}>
            {isTableView ? 'Card View' : 'Table View'}
          </button>
          <button onClick={() => toggleSort('name')}>Sort by Name</button>
          <button onClick={() => toggleSort('age')}>Sort by Age</button>
        </div>
      </nav>

      {isTableView ? (
        <div className='table-view'>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      ) : (
        <div className='card-container'>
          {displayedData.map((item, index) => (
            <div className='card' key={index}>
              <div className='card-image-box'>
                <img className='card-image' src={`https://robohash.org/${index}`} alt='thumbnail' />
              </div>
              <div className='card-info'>
                <h2 className='card-name'>{item.name}</h2>
                <p className='card-occupation'>{item.occupation}</p>
                <p className='card-age'>{item.age}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
