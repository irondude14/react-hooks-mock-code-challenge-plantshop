import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onHandleRemovePlant, searchResult }) {
  return (
    <ul className='cards'>
      {plants
        .filter((plant) => {
          return searchResult.toLowerCase() === ''
            ? plant
            : plant.name
                .toLowerCase()
                .includes(searchResult.toLocaleLowerCase());
        })
        .map((plant) => (
          <PlantCard plant={plant} onHandleRemovePlant={onHandleRemovePlant} />
        ))}
    </ul>
  );
}

export default PlantList;
