import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crag } from '../../../../common/Crag';

function AddCrag(): ReactElement {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.trim());
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value.trim());
  };

  const addCrag = async (crag: Crag) => {
    await fetch('http://localhost:3000/crags', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crag),
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    void (async () => {
      await addCrag({ name, location });
      navigate('/');
    })();
  };

  return (
    <main role="main" className="add-crag">
      <h1>Add a crag</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="crag-name">Name</label>
        <input
          type="text"
          name="name"
          id="crag-name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="crag-location">Location</label>
        <input
          type="text"
          name="location"
          id="crag-location"
          value={location}
          onChange={handleLocationChange}
        />

        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export { AddCrag };
