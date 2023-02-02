import React, { useState } from 'react';

function PlantCard({ plant, onHandleRemovePlant }) {
  const [stock, setStock] = useState(true);
  const [edit, setEdit] = useState(false);
  const [newPrice, setNewPrice] = useState(0.0);

  function handleStock() {
    setStock(!stock);
  }

  function handleEdit() {
    setEdit(!edit);
    setNewPrice(plant.price);
  }

  function handleSaveChange(e) {
    e.preventDefault();

    const updatedPrice = {
      price: parseFloat(newPrice),
    };

    fetch('http://localhost:6001/plants/' + plant.id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedPrice),
    });
    setNewPrice(0.0);
    setEdit(!edit);
  }

  function handleDelete() {
    fetch('http://localhost:6001/plants/' + plant.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    onHandleRemovePlant(plant.id);
  }
  return (
    <li className='card' key={plant.id}>
      <img src={plant.image} alt={'plant name'} />
      <h4>{plant.name}</h4>
      {edit ? (
        <form>
          <input
            type='number'
            name='price'
            step='0.01'
            placeholder='Price'
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button onClick={handleSaveChange}>Save</button>
        </form>
      ) : (
        <p>Price: {plant.price}</p>
      )}
      {stock ? (
        <button className='primary' onClick={handleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      {edit ? (
        <button onClick={handleEdit}>Cancel</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
}

export default PlantCard;
