package com.example.KeibaStarter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.KeibaStarter.Models.Race;

@Repository
public interface RaceRepository extends JpaRepository<Race, Long> {

}
