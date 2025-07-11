package com.example.KeibaStarter.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Setter;

@Entity
public class Horse {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private String name;
    private boolean runsTurf;
    private int lengthAptitude;
    private Integer age;
    private boolean isMale;

    @ManyToOne
    private Race race;

    // Constructor required by JPA
    public Horse() {
    }

    public Horse(String name, boolean runsTurf, int aptitude, Integer age, boolean isMale) {
        this.name = name;
        this.runsTurf = runsTurf;
        this.lengthAptitude = aptitude;
        this.age = age;
        this.isMale = isMale;
    }

    public String getName() {
        return this.name;
    }

    public boolean getRunsTurf() {
        return this.runsTurf;
    }

    public Integer getAge() {
        return this.age;
    }

    public boolean getIsMale() {
        return this.isMale;
    }

    public int getAptitude() {
        return this.lengthAptitude;
    }

    public void setRace(Race race) {
        this.race = race;
    }
}
