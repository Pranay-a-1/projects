package com.pranay.reddit.service;


import com.pranay.reddit.dto.RegisterRequest;
import com.pranay.reddit.model.User;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public void signup(RegisterRequest registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(registerRequest.getPassword());
        user.setEmail(registerRequest.getEmail());
    }


}
