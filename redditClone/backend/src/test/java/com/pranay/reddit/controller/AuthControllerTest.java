package com.pranay.reddit.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pranay.reddit.dto.AuthenticationResponse;
import com.pranay.reddit.dto.LoginRequest;
import com.pranay.reddit.dto.RegisterRequest;
import com.pranay.reddit.service.AuthService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@WebMvcTest(AuthController.class)
@AutoConfigureMockMvc(addFilters = false)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthService authService;


    @Test
    public void testSignupSuccess() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest("test@example.com", "testUser", "testPass");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(registerRequest);

        mockMvc.perform(post("/api/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isOk());
    }

    @Test
    public void testSignupFailure() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest("", "", "");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(registerRequest);

        mockMvc.perform(post("/api/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void testLoginSuccess() throws Exception {
        // Mocking AuthService to return a predefined response
        AuthenticationResponse mockResponse = new AuthenticationResponse();
        mockResponse.setUsername("testUser");
        mockResponse.setSuccess("true");
        mockResponse.setExpiresAt(Instant.now().plusMillis(864000000));
        when(authService.login(any(LoginRequest.class))).thenReturn(mockResponse);

        // Preparing the request
        LoginRequest loginRequest = new LoginRequest("testUser", "testPassword");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(loginRequest);

        // Performing the test
        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Welcome testUser")));
    }


    @Test
    public void testLoginUnSuccess() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest("test@example.com", "testUser", "testPass");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(registerRequest);

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isUnauthorized());
    }

}

