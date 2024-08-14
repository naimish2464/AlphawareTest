package com.AlphawareAssessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class AlphawareAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlphawareAssessmentApplication.class, args);
	}

}
