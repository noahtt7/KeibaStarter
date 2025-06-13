package com.example.KeibaStarter.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Repository.HorseRepository;

@Service
public class HorseService {
    @Autowired
    private final HorseRepository horseRepository;
    private List<Horse> lst = new ArrayList<>(List.of(new Horse(1, "Tokai Teio"), new Horse(2, "Stay Gold")));

    @Autowired
    public HorseService(HorseRepository horseRepository) {
        this.horseRepository = horseRepository;
    }

    public List<Horse> getAllHorses() {
        //return horseRepository.findAll();
        return lst;
    }

    public void createHorse(Horse horse) {
        //horseRepository.save(horse);
        lst.add(new Horse(horse.getId(), horse.getName()));
    }
}
