package com.kaiqiu.lms.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.dao.AdminDAO;
import com.kaiqiu.lms.entity.Admin;

@Repository
public class AdminDAOImpl implements AdminDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Admin> getAdmins() {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Admin> theQuery = 
				currentSession.createQuery("from Admin", Admin.class);
		
		List<Admin> admins = theQuery.getResultList();
		
		return admins;
	}

	@Override
	public void saveAdmin(Admin theAdmin) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		currentSession.saveOrUpdate(theAdmin);
		
	}

	@Override
	public Admin getAdmin(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Admin theAdmin = currentSession.get(Admin.class, theId);
		
		return theAdmin;
	}

	@Override
	public void deleteAdmin(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query theQuery = currentSession.createQuery("delete from Admin where id=:theAdminId");
		
		theQuery.setParameter("theAdminId", theId);
		
		theQuery.executeUpdate();
		
	}

}
