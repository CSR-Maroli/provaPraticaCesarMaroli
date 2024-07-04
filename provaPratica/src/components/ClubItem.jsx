import React from 'react';

function ClubItem({ club }) {
  return (
    <div className="times">
      <img src={club.escudos['60x60']} alt={`${club.nome} logo`} />
      <div className="time-info">
        <h3>{club.nome}</h3>
        <p>{club.apelido}</p>
      </div>
    </div>
  );
}

export default ClubItem;
