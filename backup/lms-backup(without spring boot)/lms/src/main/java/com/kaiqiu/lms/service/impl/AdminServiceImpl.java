package com.kaiqiu.lms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.AdminDAO;
import com.kaiqiu.lms.entity.Admin;
import com.kaiqiu.lms.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDAO adminDAO;
	
	
	@Override
	@Transactional
	public List<Admin> getAdmins() {
		
		return adminDAO.getAdmins();
	}


	@Override
	@Transactional
	public void saveAdmin(Admin theAdmin) {
		
		adminDAO.saveAdmin(theAdmin);
		
	}


	@Override
	@Transactional
	public Admin getAdmin(int theId) {
		
		return adminDAO.getAdmin(theId);
	}


	@Override
	@Transactional
	public void deleteAdmin(int theId) {
		
		adminDAO.deleteAdmin(theId);
		
	}

}
