package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.entity.Role;
import com.kaiqiu.lms.entity.User;

@Repository("roleRepository")
public interface RoleRepository extends JpaRepository<Role, Integer> {
	User findByRole(String role);
}
