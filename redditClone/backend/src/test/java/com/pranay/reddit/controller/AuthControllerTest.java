package com.pranay.reddit.controller;

import com.pranay.reddit.dto.RegisterRequest;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AuthControllerTest {


    @Test
    void signup() {
        // Initialize the AuthController and RegisterRequest objects
        AuthController authController = new AuthController();
        RegisterRequest validRequest = new RegisterRequest("test@example.com", "testUser", "testPassword");

        // Test with a valid RegisterRequest
        assertDoesNotThrow(() -> authController.signup(validRequest));

        // Test with a null RegisterRequest
        RegisterRequest nullRequest = null;
        assertThrows(NullPointerException.class, () -> authController.signup(nullRequest));

        // Test with an invalid RegisterRequest
        RegisterRequest invalidRequest = new RegisterRequest("", "", "");
        assertThrows(RuntimeException.class, () -> authController.signup(invalidRequest));

        assertThrows(NullPointerException.class, () -> new RegisterRequest(null, null, null));

    }
}