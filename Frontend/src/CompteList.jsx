import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './config';

export default function CompteList() {
  const [compte, setCompte] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/comptes`)
      .then(response => setCompte(response.data))
      .catch(error => console.error(error));
  }, [refresh]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">List of Comptes:</h2>
      <button 
        onClick={() => setRefresh(!refresh)} 
        className="btn btn-primary mb-3"
      >
        Refresh
      </button>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Solde</th>
            </tr>
          </thead>
          <tbody>
            {compte.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nom}</td>
                <td>{c.prenom}</td>
                <td>{c.solde}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
