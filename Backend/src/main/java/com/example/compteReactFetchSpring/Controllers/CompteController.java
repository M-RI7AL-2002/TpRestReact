package com.example.compteReactFetchSpring.Controllers;


import com.example.compteReactFetchSpring.Repositories.CompteRepository;
import com.example.compteReactFetchSpring.entities.Compte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CompteController {

    @Autowired
    private CompteRepository compteRepository;

    @GetMapping(value = "/comptes",produces = {"application/json"})
    public List<Compte> comptes(){
        return compteRepository.findAll();
    }

    @PostMapping(value = "/comptes" ,consumes = {"application/json"},produces = {"application/json"})
    public Compte comptes(@RequestBody Compte compte){
        return compteRepository.save(compte);
    }

}
