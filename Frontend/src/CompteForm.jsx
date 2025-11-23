import React, { useState } from 'react'
import axios from 'axios'
import API_BASE_URL from './config'
export default function CompteForm() {
    const [compte,setCompte]=useState({nom:"",prenom:"",solde:0})
    const handleChange=(e)=>{
        setCompte({...compte,[e.target.name]:e.target.value })
    };
    const handleSubmit=(e)=>{

        e.preventDefault();
        axios.post(`${API_BASE_URL}/comptes`,compte)
        .then(response=>alert("Compte Ajouter"))
        .catch(error=>console.error(error));

    }
  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
         <div className="mb-3">
          <label>Prenom</label>
          <input type="text" name="prenom" className="form-control" onChange={handleChange} />
        </div>
         <div className="mb-3">
          <label>Nom</label>
          <input type="text" name="nom" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Solde</label>
          <input type="number" name="solde" className="form-control" onChange={handleChange} />
        </div>
       
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  )
}
