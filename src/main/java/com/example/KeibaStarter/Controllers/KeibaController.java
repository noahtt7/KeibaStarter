package com.example.KeibaStarter.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Service.HorseService;

@RestController
@RequestMapping("/hi")
public class KeibaController {

    public final HorseService horseService;

    public KeibaController(HorseService horseService) {
        this.horseService = horseService;
    }

    @GetMapping
    public String test() {
        return "Test message";
    }

    @GetMapping("/yo")
    public String testing() {
        return "this is testy";
    }

    @GetMapping("/horses")
    public List<Horse> getHorses() {
        return horseService.getAllHorses();
    }
}
