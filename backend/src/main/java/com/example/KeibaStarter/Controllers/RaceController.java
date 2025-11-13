package com.example.KeibaStarter.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.KeibaStarter.Service.RaceService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/race")
public class RaceController {

    private RaceService raceService;

    public RaceController(RaceService raceService) {
        this.raceService = raceService;
    }

    // should be post
    @PostMapping("/createrace/{raceName}")
    public void createRace(@PathVariable String raceName) {
        raceService.createRace(raceName);
    }

    @GetMapping("/simulaterace/{raceId}")
    public void simulateRace(@PathVariable long raceId) {
        raceService.simulateRace(raceId);
    }

    // @GetMapping("/simulaterace")
    // public Object simulateRace() {
    //     String mlServiceUrl = "http://localhost:5000/predict";

    //     List<String> horses = Array
    // }

    @GetMapping("/getwinner/{raceId}")
    public String getWinner(@PathVariable long raceId) {
        return raceService.getWinner(raceId);
    }

    @GetMapping("/count")
    public int getNumRaces() {
        return raceService.getNumRaces();
    }

    @PostMapping("/addracer/{raceId}/{racerName}")
    public void addRacer(@PathVariable long raceId, @PathVariable String racerName) {
        if (!raceService.isValidRace(raceId) || !raceService.isValidRacer(racerName)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        raceService.addRacer(raceId, racerName);
    }
}
