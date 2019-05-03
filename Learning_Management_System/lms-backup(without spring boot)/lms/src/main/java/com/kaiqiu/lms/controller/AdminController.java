package com.kaiqiu.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.entity.Admin;
import com.kaiqiu.lms.service.AdminService;

@RestController
@RequestMapping("/admins")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	// GET /admins - get all admins
	@GetMapping
	public List<Admin> getAdmins(){
		
		return adminService.getAdmins();
		
	}
	
	// GET /admins/{adminId} get one admin by ID
	@GetMapping("/{adminId}")
	public Admin getAdmin(@PathVariable int adminId) {
		//TODO: check adminId valid
//		Admin theAdmin = adminService.getAdmin(adminId);
//		if(theAdmin == null) {
//			throw new AdminNotFoundException("Admin id not found - " + adminId);
//		}
		Admin theAdmin = adminService.getAdmin(adminId);
		return theAdmin;
	}
	
	// add mapping for POST /admins - add one new admin
	@PostMapping
	public Admin addAdmin(@RequestBody Admin theAdmin) {
		
		// set id to 0 will force hibernate to save as a new item instead of update
		theAdmin.setId(0);
		
		adminService.saveAdmin(theAdmin);
		
		return theAdmin;
	}
	
	// PUT /admins update existing admin
	@PutMapping
	public Admin updateAdmin(@RequestBody Admin theAdmin) {
		adminService.saveAdmin(theAdmin);
		return theAdmin;
	}
	
	// DELETE /admins/{adminId} delete one admin
	@DeleteMapping("/{adminId}")
	public String deleteAdmin(@PathVariable int adminId) {
		//TODO: check admin exist
//		Admin theAdmin = adminService.getAdmin(adminId);
//		if(theAdmin == null) {
//			throw new AdminNotFoundException("Admin id not found - " + adminId);
//		}
		adminService.deleteAdmin(adminId);
		return "Admin with id: " + adminId + " deleted.";
	}
}
