package com.pranay.reddit.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pranay.reddit.dto.SubredditDto;
import com.pranay.reddit.service.SubredditService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(SubredditController.class)
class SubredditControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SubredditService subredditService;

    @Test
    public void shouldCreateSubreddit() throws Exception {
    }
}