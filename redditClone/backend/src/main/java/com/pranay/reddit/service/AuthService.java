package com.pranay.reddit.service;


import com.pranay.reddit.dto.AuthenticationResponse;
import com.pranay.reddit.dto.LoginRequest;
import com.pranay.reddit.dto.RegisterRequest;
import com.pranay.reddit.model.User;
import com.pranay.reddit.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.Instant;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;


    @Transactional
    public void signup(RegisterRequest registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
//        user.setPassword(registerRequest.getPassword());
        user.setEmail(registerRequest.getEmail());
        user.setCreated(Instant.now());
        user.setEnabled(false);
        userRepository.save(user);
    }


    public AuthenticationResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                // Create and return AuthenticationResponse
                AuthenticationResponse authenticationResponse = new AuthenticationResponse();
                authenticationResponse.setUsername(loginRequest.getUsername());
                // Expires in 10 days
                authenticationResponse.setExpiresAt(Instant.now().plusMillis(864000000));
                authenticationResponse.setSuccess("true");
                return authenticationResponse;
            }
        }

        return null;


    }



}
