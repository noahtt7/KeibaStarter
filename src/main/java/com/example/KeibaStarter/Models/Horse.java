package com.example.KeibaStarter.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Horse {
    @Id
    private long id;
    private String name;

    public Horse(long id, String name) {
        this.id = id;
        this.name = name;
    }
}
