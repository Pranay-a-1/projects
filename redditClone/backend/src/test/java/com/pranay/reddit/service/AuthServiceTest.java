package com.pranay.reddit.service;

import com.pranay.reddit.dto.RegisterRequest;
import com.pranay.reddit.model.User;
import com.pranay.reddit.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.mockito.Mockito.*;

class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AuthService authService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldCreateUserOnSignup() {
        RegisterRequest request = new RegisterRequest("test@example.com", "TestUser", "password");
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");

        authService.signup(request);

        verify(userRepository, times(1)).save(any(User.class));
        verify(passwordEncoder, times(1)).encode("password");
    }

    @Test
    void shouldFailToCreateUserWhenRepositoryFails() {
        RegisterRequest request = new RegisterRequest("test@example.com", "TestUser", "password");
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");

        // Simulate a repository failure
        doThrow(new RuntimeException("Database error")).when(userRepository).save(any(User.class));

        Assertions.assertThrows(RuntimeException.class, () -> authService.signup(request), "Database error");

        verify(userRepository, times(1)).save(any(User.class));
        verify(passwordEncoder, times(1)).encode("password");
    }

}
