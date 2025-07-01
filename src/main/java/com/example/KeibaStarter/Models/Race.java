package com.example.KeibaStarter.Models;

import java.util.List;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Race {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int length;
    private List<Horse> racers;
    private Horse winner;

    public Race() {
    }

    public Race(int length) {
        this.length = 2000;
    }

    public List<Horse> getRacers() {
        return racers;
    }

    public void addRacer(Horse horse) {
        racers.add(horse);
    }

    public void setWinner(Horse winHorse) {
        this.winner = winHorse;
    }

    public void getWinner() {

    }

}
