import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({
  plants,
  onHandleNewPlant,
  onHandleRemovePlant,
  setSearchResult,
  searchResult,
}) {
  return (
    <main>
      <NewPlantForm onHandleNewPlant={onHandleNewPlant} />
      <Search setSearchResult={setSearchResult} searchResult={searchResult} />
      <PlantList
        plants={plants}
        onHandleRemovePlant={onHandleRemovePlant}
        searchResult={searchResult}
      />
    </main>
  );
}

export default PlantPage;
