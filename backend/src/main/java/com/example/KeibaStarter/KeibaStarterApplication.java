package com.example.KeibaStarter;

import java.beans.BeanProperty;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotaion.Bean;

@SpringBootApplication
public class KeibaStarterApplication {
	public static void main(String[] args) {
		SpringApplication.run(KeibaStarterApplication.class, args);
	}

	// @Bean
	// public RestTemplate restTemplate() {
	// 	return new RestTemplate();
	// }
}
