package com.pranay.reddit.controller;

import com.pranay.reddit.dto.AuthenticationResponse;
import com.pranay.reddit.dto.LoginRequest;
import com.pranay.reddit.dto.RegisterRequest;
import com.pranay.reddit.dto.SubredditDto;
import com.pranay.reddit.service.AuthService;
import com.pranay.reddit.service.SubredditService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Valid @RequestBody RegisterRequest registerRequest) {
        authService.signup(registerRequest);
        return new ResponseEntity<>("User Registration Successful",
                OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        AuthenticationResponse authenticationResponse = authService.login(loginRequest);
        if (authenticationResponse != null && authenticationResponse.getSuccess().equals("true")) {
            return new ResponseEntity<>("Welcome " + authenticationResponse.getUsername(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Login Failed", HttpStatus.UNAUTHORIZED);
        }
    }


}
