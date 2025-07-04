package com.example.KeibaStarter.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Models.Race;
import com.example.KeibaStarter.Repository.RaceRepository;
import com.example.KeibaStarter.Repository.HorseRepository;

@Service
public class RaceService {

    @Autowired
    RaceRepository raceRepository;

    @Autowired
    HorseRepository horseRepository;

    public RaceService(RaceRepository raceRepository) {
        this.raceRepository = raceRepository;
    }

    public void createRace(String raceName) {
        Race race = null;
        if (raceName.equals("tk")) {
            race = new Race(2200);
        } else if (raceName.equals("ak")) {
            race = new Race(2500);
        }

        for (Horse horse : horseRepository.findAll()) {
            race.addRacer(horse);
        }

        
        if (race != null) {
            raceRepository.save(race);
        }
    }

    // public void addHorse() {
    //     if (race == null) {
    //         throw new ResponseStatusException(HTTP.NOT_FOUND);
    //     }
    // }

    public void simulateRace() {

    }
}
