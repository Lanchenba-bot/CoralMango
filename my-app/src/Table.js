import React, { useState } from 'react';

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSort = (property) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };

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

  const displayedData = isFiltered ? filteredData : sortedData;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {isFiltered && <div>You are viewing filtered results</div>}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
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
  );
};

export default Table;
