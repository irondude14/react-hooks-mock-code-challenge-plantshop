import React, { useState, useEffect } from 'react';
import Header from './Header';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchResult, setSearchResult] = useState('');

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleRemovePlant(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <PlantPage
        plants={plants}
        onHandleNewPlant={handleNewPlant}
        onHandleRemovePlant={handleRemovePlant}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />
    </div>
  );
}

export default App;
