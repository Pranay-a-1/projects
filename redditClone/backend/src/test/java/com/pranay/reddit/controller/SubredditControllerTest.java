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

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
        SubredditDto subredditDto = new SubredditDto();
        subredditDto.setName("test");
        subredditDto.setDescription("testDescription");
        when(subredditService.save(any())).thenReturn(subredditDto);
        mockMvc.perform(post("/api/subreddit")
               .contentType(MediaType.APPLICATION_JSON)
               .content(new ObjectMapper().writeValueAsString(subredditDto)))
               .andExpect(status().isCreated())
               .andExpect(jsonPath("$.name").value("test"))
               .andExpect(jsonPath("$.description").value("testDescription"));
    }

    @Test
    public void getAllSubredditsTest() throws Exception {
        SubredditDto subredditDto = new SubredditDto();
        subredditDto.setName("test");
        subredditDto.setDescription("testDescription");
        // Mocking Service
        List<SubredditDto> subredditDtos = List.of(subredditDto);
        when(subredditService.getAll()).thenReturn(subredditDtos);

        // Perform GET Request and Validate
        mockMvc.perform(get("/api/subreddit").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(subredditDtos.size())));
    }

    @Test
    public void getSubredditTest() throws Exception {
        // Mocking Service
        Long subredditId = 1L;
        SubredditDto subredditDto = new SubredditDto(); // Assuming constructor without parameters
        subredditDto.setId(subredditId); // Setting the ID
        subredditDto.setName("test");
        subredditDto.setDescription("testDescription");

        // Mock the behavior before making the request
        when(subredditService.getSubreddit(subredditId)).thenReturn(subredditDto);

        // Perform GET Request and Validate
        mockMvc.perform(get("/api/subreddit/" + subredditId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(subredditId.intValue())))
                .andExpect(jsonPath("$.name", is("test")))
                .andExpect(jsonPath("$.description", is("testDescription")));
    }




}