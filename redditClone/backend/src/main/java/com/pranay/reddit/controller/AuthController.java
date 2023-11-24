package com.pranay.reddit.controller;

import com.pranay.reddit.dto.RegisterRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/signup")
    public String signup(@RequestBody RegisterRequest registerRequest) {
        //simple code for testing this method
        System.out.println("Testing signup method");
        //print properties of RegisterRequest
        System.out.println(registerRequest.getEmail());
        System.out.println(registerRequest.getUsername());
        System.out.println(registerRequest.getPassword());
        return "success";

    }

    @GetMapping("/home")
    public String home() {
        return "This is home page";
    }



}
