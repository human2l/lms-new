package com.kaiqiu.lms.service;

import java.util.List;

import com.kaiqiu.lms.entity.Admin;

public interface AdminService {

	public List<Admin> getAdmins();

	public void saveAdmin(Admin theAdmin);

	public Admin getAdmin(int theId);

	public void deleteAdmin(int theId);
}
