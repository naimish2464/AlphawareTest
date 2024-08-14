package com.AlphawareAssessment.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.AlphawareAssessment.Entity.Continent;
import com.AlphawareAssessment.repositories.ContinentRepository;

import jakarta.annotation.PostConstruct;

@Service
public class ContinentService {

	    @Autowired
	    private ContinentRepository continentRepository;
	    
	    private final RestTemplate restTemplate = new RestTemplate();
	    
	    private static final String API_URL = "https://dummy-json.mock.beeceptor.com/continents";

	    @PostConstruct
	    public void fetchAndSaveContinents() {
	        Continent[] continents = restTemplate.getForObject(API_URL, Continent[].class);
	        if (continents != null) {
	            continentRepository.saveAll(Arrays.asList(continents));
	        }
	    }
}
