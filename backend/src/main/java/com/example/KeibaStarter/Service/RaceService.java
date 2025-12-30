package com.example.KeibaStarter.Service;

import java.util.Random;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Models.Race;
import com.example.KeibaStarter.Repository.RaceRepository;
import com.example.KeibaStarter.Repository.HorseRepository;
import org.springframework.web.client.RestTemplate;

@Service
public class RaceService {

    private RestTemplate restTemplate = new RestTemplate();
    private String PYTHON_URL = "https://keibaml.onrender.com/predict";

    @Autowired
    RaceRepository raceRepository;

    @Autowired
    HorseRepository horseRepository;


    public RaceService(RaceRepository raceRepository) {
        this.restTemplate = restTemplate;
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
        } else if (raceName.equals("yk")) {
            race = new Race(1600);
        } else if (raceName.equals("fs")) {
            race = new Race(1600);
        } else if (raceName.equals("tmk")) {
            race = new Race(1200);
        } else if (raceName.equals("oc")) {
            race = new Race(2000);
        } else if (raceName.equals("nhk")) {
            race = new Race(1600);
        } else if (raceName.equals("vm")) {
            race = new Race(1600);
        } else if (raceName.equals("ht")) {
            race = new Race(3200);
        } else if (raceName.equals("at")) {
            race = new Race(2000);
        } else if (raceName.equals("jc")) {
            race = new Race(2400);
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

    // public void simulateRace(long raceId) {
    //     Race race = raceRepository.getById(raceId);
    //     //raceRepository
    //     Random rand = new Random();
    //     System.out.println("race repo " + raceRepository.count() + race.length);
    //     System.out.println("racer num " + race.getRacers().size());

    //     // simulate
    //     Horse winner = new Horse();
    //     int max = 0;
    //     for (Horse racer : race.getRacers()) {
    //         System.out.println("apt " + Math.abs(race.length - racer.getAptitude()));
    //         double performance = 1 + Math.abs(race.length - racer.getAptitude()) + (Math.random() * 5);
    //         if (performance >= max) {
    //             winner = racer;
    //         }
    //     }

    //     //Horse winner = race.getRacers().get(rand.nextInt((int) raceId));
    //     //raceRepository.getById(raceRepository.count()).setWinner(winner);
    //     race.setWinner(winner);
    //     raceRepository.save(race);//
    // }

    public void simulateRace(long raceId) {
        Race race = raceRepository.findById(raceId)
            .orElseThrow(() -> new RuntimeException("race not found"));
        List<String> horses = new ArrayList<>();

        for (Horse racer : race.getRacers()) {
            System.out.println("Adding horse " + racer);
            horses.add(racer.getName());
        }

        int distance = race.getDistance();

        Map<String, Object> payload = new HashMap<>();
        payload.put("horses", horses);
        payload.put("distance", distance);
        System.out.println("Horses: " + horses);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

        ResponseEntity<String> response =
                restTemplate.exchange(PYTHON_URL, HttpMethod.POST, entity, String.class);

        String winnerNameResponse = response.getBody();

        // problem was here: it got back the correct string format of winner's name (Kamunyak)
        // while postgres db uses lowercase + - (croix-du-nord)
        String winnerName = winnerNameResponse.toLowerCase().replace(" ", "-");
        System.out.println("THE WINNER ISSSSS " + winnerName);
        Horse winner = race.getRacers().stream()
            .filter(horse -> horse.getName().equals(winnerName))
            .findFirst()
            .orElse(null);

        // old
        // String winnerName = response.getBody();
        // Horse winner = new Horse(winnerName, true, 0, 0, true);

        if (winner != null) {
            race.setWinner(winner);
            raceRepository.save(race);
            raceRepository.flush();
        }
    }

    public String getWinner(long raceId) { 
        if (raceRepository.findById(raceId).get() == null) {
            return null;
        }
        Horse winner = raceRepository.getById(raceId).getWinner();
        if (winner == null) return null;
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
        raceRepository.count();
        return raceRepository.existsById(raceId);
    }

    public boolean isValidRacer(String racerName) {
        return horseRepository.existsById(racerName);
    }

    public int getNumRaces() {
        return (int) raceRepository.count();
    }
}
