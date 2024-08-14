package com.AlphawareAssessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AlphawareAssessment.Entity.Continent;

public interface ContinentRepository extends JpaRepository<Continent, Long> {


}
