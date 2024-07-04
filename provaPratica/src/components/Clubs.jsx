import React, { useState, useEffect } from 'react';
import ClubItem from './ClubItem';


function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        const clubsArray = Object.values(data);
        setClubs(clubsArray);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClubs = clubs.filter(club =>
    club.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.apelido.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pesquisar">
      <input
        type="text"
        placeholder="Pesquisar clubes"
        value={searchTerm}
        onChange={handleSearch}
        className="pesquisar-input"
      />
      <div className="club-list">
        {filteredClubs.map(club => (
          <ClubItem key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
