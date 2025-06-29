package com.example.KeibaStarter.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Repository.HorseRepository;

@Service
public class HorseService {
    @Autowired
    private final HorseRepository horseRepository;
    //private List<Horse> lst = new ArrayList<>(List.of(new Horse(1, "Tokai Teio"), new Horse(2, "Stay Gold")));

    @Autowired
    public HorseService(HorseRepository horseRepository) {
        this.horseRepository = horseRepository;
    }

    public List<Horse> getAllHorses() {
        return horseRepository.findAll();
        //return lst;
    }

    public Horse createHorse(Horse horse) {
        // if (horseRepository.existsById(horse.getName())) {
        //     throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        // }
        return horseRepository.save(horse);

        //lst.add(new Horse(horse.getId(), horse.getName()));
    }

    public void deleteHorse(String name) {
        horseRepository.deleteById(name);
    }
}
