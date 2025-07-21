package com.example.KeibaStarter.Models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
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

    @OneToMany(mappedBy = "race", cascade = CascadeType.ALL)
    private Set<Horse> racers;

    @OneToOne
    private Horse winner;

    public Race() {
    }

    public Race(int length) {
        this.length = length;
        this.racers = new HashSet<Horse>();
    }

    public Set<Horse> getRacers() {
        return racers;
    }

    public void addRacer(Horse horse) {
        this.racers.add(horse);
    }

    public void removeRacer(String racerName) {
        for (Horse racer : racers) {
            if (racer.getName().equals(racerName)) {
                racers.remove(racer);
                return;
            }
        }
    }

    public void setWinner(Horse winHorse) {
        this.winner = winHorse;
    }

    public Horse getWinner() {
        return this.winner;
    }

}
