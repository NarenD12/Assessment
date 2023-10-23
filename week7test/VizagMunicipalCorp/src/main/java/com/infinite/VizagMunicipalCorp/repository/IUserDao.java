package com.infinite.VizagMunicipalCorp.repository;
//Interface to declare necessary methods
import com.infinite.VizagMunicipalCorp.model.User;

public interface IUserDao {

	public void registerUser(User user);
	
	public User loginUser(User user);
}
