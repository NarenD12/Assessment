package com.infinite.VizagMunicipalCorp.service;
//Service interface for necessary methods
import com.infinite.VizagMunicipalCorp.model.User;

public interface IUserService {

	public void registerUser(User user);
	
	public User loginUser(User user);
}
