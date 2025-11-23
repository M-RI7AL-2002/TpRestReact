package com.example.compteReactFetchSpring.Repositories;

import com.example.compteReactFetchSpring.entities.Compte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteRepository extends JpaRepository<Compte, Integer> {
}
