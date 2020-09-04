package com.nikhil.springboot2securityjwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nikhil.springboot2securityjwt.models.Role;
import com.nikhil.springboot2securityjwt.repositories.RoleRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RoleController {
	@Autowired
	RoleRepository repo;
	
	@GetMapping("/roles")
	@ResponseBody()
	@PreAuthorize("hasRole('SUPERADMIN')")
	public List<Role> getrole() {
		
		return repo.findAll();
	}
	
	







}
