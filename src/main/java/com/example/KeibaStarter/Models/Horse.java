package com.example.KeibaStarter.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Horse {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private String name;
    private boolean runsTurf;
    private Integer age;
    private boolean isMale;

    // Constructor required by JPA
    public Horse() {
    }

    public Horse(String name, boolean runsTurf, Integer age, boolean isMale) {
        this.name = name;
        this.runsTurf = runsTurf;
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
}
