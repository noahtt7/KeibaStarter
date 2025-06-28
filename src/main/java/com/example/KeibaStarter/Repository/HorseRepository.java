package com.example.KeibaStarter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.KeibaStarter.Models.Horse;

@Repository
public interface HorseRepository extends JpaRepository<Horse, String> {

}
