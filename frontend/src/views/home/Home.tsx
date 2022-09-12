import './_Home.scss';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Crag } from '../../../../common/Crag';

function Home(): ReactElement {
  const [crags, setCrags] = useState<Crag[]>([]);

  const fetchAllCrags = async () => {
    const response = await fetch('http://localhost:3000/crags');
    const promisedCrags = response.json() as Promise<Crag[]>;
    setCrags(await promisedCrags);
  };

  useEffect(() => { void fetchAllCrags(); }, []);

  return (
    <main role="main" className="home">
      <h1>Home</h1>
      <ul>
        {crags.map((crag) => (
          <li key={crag.id as number}>
            <span>{crag.location}</span>
            <span>{crag.name}</span>
          </li>
        ))}
      </ul>
      <Link to="/add">Add a crag</Link>
    </main>
  );
}

export { Home };
