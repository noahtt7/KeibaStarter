package com.example.KeibaStarter.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.KeibaStarter.Service.RaceService;

@RestController
@RequestMapping("/race")
public class RaceController {

    private RaceService raceService;

    public RaceController(RaceService raceService) {
        this.raceService = raceService;
    }

    @GetMapping("/createrace")
    public void createRace() {
        raceService.createRace(null);
    }
}
