package com.kaiqiu.lms.dao;

import java.util.List;

import com.kaiqiu.lms.entity.Admin;

public interface AdminDAO {

	public List<Admin> getAdmins();

	public void saveAdmin(Admin theAdmin);

	public Admin getAdmin(int theId);

	public void deleteAdmin(int theId);
}
