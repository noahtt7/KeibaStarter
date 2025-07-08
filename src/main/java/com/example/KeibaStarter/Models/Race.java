package com.example.KeibaStarter.Models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Race {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    public int length;

    @OneToMany(mappedBy = "race")
    private List<Horse> racers;

    @OneToOne
    private Horse winner;

    public Race() {
    }

    public Race(int length) {
        this.length = length;
        this.racers = new ArrayList<Horse>();
    }

    public List<Horse> getRacers() {
        return racers;
    }

    public void addRacer(Horse horse) {
        this.racers.add(horse);
    }

    public void setWinner(Horse winHorse) {
        this.winner = winHorse;
    }

    public void getWinner() {

    }

}
