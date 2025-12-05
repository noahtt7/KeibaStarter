package com.example.KeibaStarter.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.KeibaStarter.Models.Horse;
import com.example.KeibaStarter.Service.HorseService;

@CrossOrigin("https://keibastarter.onrender.com")
@RestController
@RequestMapping("/keiba")
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

    @PostMapping("/add")
    public void createHorse(@RequestBody Horse horse) {
        horseService.createHorse(horse);
    }

    @DeleteMapping("/delete/{name}")
    public void deleteHorse(@PathVariable String name) {
        horseService.deleteHorse(name);
    }
}
