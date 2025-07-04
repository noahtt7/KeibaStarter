package com.example.KeibaStarter.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    // should be post
    @PostMapping("/createrace/{raceName}")
    public void createRace(@PathVariable String raceName) {
        raceService.createRace(raceName);
    }
}
