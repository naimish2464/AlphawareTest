package com.AlphawareAssessment.Entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.util.List;

@Entity
public class Continent {

    @Id
    private String code;
    
    private String name;
    
    @Column(name = "area_sq_km")
    private long areaSqKm;
    
    private long population;
    
    @ElementCollection
    @CollectionTable(name = "continent_lines", joinColumns = @JoinColumn(name = "continent_code"))
    @Column(name = "line")
    private List<String> lines;
    
    
    public Continent(String code, String name, long areaSqKm, long population, List<String> lines, int countries,
			List<String> oceans, List<String> developedCountries) {
		super();
		this.code = code;
		this.name = name;
		this.areaSqKm = areaSqKm;
		this.population = population;
		this.lines = lines;
		this.countries = countries;
		this.oceans = oceans;
		this.developedCountries = developedCountries;
	}
    
    

	public Continent() {
		super();
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "Continent [code=" + code + ", name=" + name + ", areaSqKm=" + areaSqKm + ", population=" + population
				+ ", lines=" + lines + ", countries=" + countries + ", oceans=" + oceans + ", developedCountries="
				+ developedCountries + "]";
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getAreaSqKm() {
		return areaSqKm;
	}

	public void setAreaSqKm(long areaSqKm) {
		this.areaSqKm = areaSqKm;
	}

	public long getPopulation() {
		return population;
	}

	public void setPopulation(long population) {
		this.population = population;
	}

	public List<String> getLines() {
		return lines;
	}

	public void setLines(List<String> lines) {
		this.lines = lines;
	}

	public int getCountries() {
		return countries;
	}

	public void setCountries(int countries) {
		this.countries = countries;
	}

	public List<String> getOceans() {
		return oceans;
	}

	public void setOceans(List<String> oceans) {
		this.oceans = oceans;
	}

	public List<String> getDevelopedCountries() {
		return developedCountries;
	}

	public void setDevelopedCountries(List<String> developedCountries) {
		this.developedCountries = developedCountries;
	}

	private int countries;
    
    @ElementCollection
    @CollectionTable(name = "continent_oceans", joinColumns = @JoinColumn(name = "continent_code"))
    @Column(name = "ocean")
    private List<String> oceans;
    
    @ElementCollection
    @CollectionTable(name = "continent_developed_countries", joinColumns = @JoinColumn(name = "continent_code"))
    @Column(name = "country")
    private List<String> developedCountries;
    
   

}
