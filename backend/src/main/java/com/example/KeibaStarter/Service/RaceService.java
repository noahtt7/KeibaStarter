package com.example.KeibaStarter.Service;

import java.util.Random;

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
        Race race = new Race();
        if (raceName.equals("tk")) {
            race = new Race(2200);
        } else if (raceName.equals("ak")) {
            race = new Race(2500);
        } else if (raceName.equals("jd")) {
            race  = new Race(2400);
        } else if (raceName.equals("ks")) {
            race = new Race(3000);
        }

        System.out.println("racer");
        System.out.println(race.getRacers());
        
        
        if (race != null) {
            raceRepository.save(race);
        }
    }

    // public void addHorse() {
    //     if (race == null) {
    //         throw new ResponseStatusException(HTTP.NOT_FOUND);
    //     }
    // }

    // maybe add horses to races 1 by 1 using their names

    public void simulateRace(long raceId) {
        Race race = raceRepository.getById(raceId);
        //raceRepository
        Random rand = new Random();
        System.out.println("race repo " + raceRepository.count() + race.length);
        System.out.println("racer num " + race.getRacers().size());

        // simulate
        Horse winner = new Horse();
        int max = 0;
        for (Horse racer : race.getRacers()) {
            System.out.println("apt " + Math.abs(race.length - racer.getAptitude()));
            double performance = 1 + Math.abs(race.length - racer.getAptitude()) + (Math.random() * 5);
            if (performance >= max) {
                winner = racer;
            }
        }

        //Horse winner = race.getRacers().get(rand.nextInt((int) raceId));
        //raceRepository.getById(raceRepository.count()).setWinner(winner);
        race.setWinner(winner);
        raceRepository.save(race);//
    }

    public String getWinner(long raceId) { 
        Horse winner = raceRepository.getById(raceId).getWinner();
        return winner.getName();
    }

    public void addRacer(long raceId, String racerName) {
        Race race = raceRepository.getById(raceId);
        Horse racer = horseRepository.findById(racerName).orElseThrow();

        racer.setRace(race);

        horseRepository.save(racer);

        race.addRacer(racer);
        raceRepository.save(race);
    }

    public void removeRacer(long raceId, String racerName) {
        Race race = raceRepository.getById(raceId);
        race.removeRacer(racerName);
    }

    public boolean isValidRace(long raceId) {
        return raceRepository.existsById(raceId);
    }

    public boolean isValidRacer(String racerName) {
        return horseRepository.existsById(racerName);
    }
}
