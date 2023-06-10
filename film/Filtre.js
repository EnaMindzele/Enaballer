import React from 'react';

const Filtre = ({ handleFilterChange }) => {
    return (
        <div className="filter">
        <input
        type="text"
        placeholder="Titre du film"
        onChange={(e) => handleFilterChange('title', e.target.value)}
        />
        <input
        type="number"
        placeholder="Classement"
        onChange={(e) => handleFilterChange('rating', e.target.value)}
        />
        </div>
    );
};

export default Filtre;
