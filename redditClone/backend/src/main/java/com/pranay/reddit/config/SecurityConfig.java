//package com.pranay.reddit.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
////        return httpSecurity.cors().and()
////                .csrf().disable()
////                .authorizeRequests()
////                .requestMatchers("/api/**")
////                .permitAll()
////                .anyRequest()
////                .authenticated().and().build();
////    }
//
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
////        return httpSecurity
////                .cors().and()
////                .csrf().disable()
////                .authorizeRequests()
////                .requestMatchers("/api/auth/**").permitAll() // Specify permitAll for /api/** paths
////                .requestMatchers("/api/subreddit/**").permitAll() // Specify permitAll for /api/** paths
////                .requestMatchers("/api/subreddit").permitAll() // Specify permitAll for /api/** paths
////                .requestMatchers(HttpMethod.GET, "/api/subreddit").permitAll()
////                .requestMatchers(HttpMethod.POST, "/api/subreddit").permitAll()
////                .anyRequest().authenticated() // Ensure any other request is authenticated
////                .and().build();
////    }
//
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        return httpSecurity.cors().and()
//                .csrf().disable()
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/api/auth/**")
//                        .permitAll()
//                        .requestMatchers(HttpMethod.GET, "/api/subreddit")
//                        .permitAll()
//                        .requestMatchers(HttpMethod.POST, "/api/subreddit")
//                        .permitAll()
//                        .requestMatchers(HttpMethod.GET, "/api/posts/")
//                        .permitAll()
//                        .requestMatchers(HttpMethod.GET, "/api/posts/**")
//                        .permitAll()
//                        .requestMatchers("/v2/api-docs",
//                                "/configuration/ui",
//                                "/swagger-resources/**",
//                                "/configuration/security",
//                                "/swagger-ui.html",
//                                "/webjars/**")
//                        .permitAll()
//                        .anyRequest()
//                        .authenticated())
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .build();
//    }
//
//    @Bean
//    PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//
//
//}
