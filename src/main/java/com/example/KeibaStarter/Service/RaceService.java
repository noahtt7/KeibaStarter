package com.example.KeibaStarter.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.KeibaStarter.Repository.RaceRepository;

@Service
public class RaceService {

    @Autowired
    RaceRepository raceRepository;

    public RaceService(RaceRepository raceRepository) {
        this.raceRepository = raceRepository;
    }

    public void createRace(String raceName) {
        raceRepository.save(null);
    }

    public void simulateRace() {

    }
}
