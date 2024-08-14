package com.AlphawareAssessment.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {
	 private final ContinentService service;
	 
	 public ScheduledTasks(ContinentService service) {
	        this.service = service;
	 }
	
     @Scheduled(fixedRate = 86400000) 
     public void fetchData() {
    	service.fetchAndSaveContinents();
     }
}
