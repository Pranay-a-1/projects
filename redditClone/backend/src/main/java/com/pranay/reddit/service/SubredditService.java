package com.pranay.reddit.service;

import com.pranay.reddit.dto.SubredditDto;
import com.pranay.reddit.model.Subreddit;
import com.pranay.reddit.repository.SubredditRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class SubredditService {

    private final SubredditRepository subredditRepository;

    public SubredditDto save(SubredditDto subredditDto) {
        Subreddit save = subredditRepository.save(mapSubredditDto(subredditDto));
        subredditDto.setId(save.getId());
        return subredditDto;

    }

    @Transactional(readOnly = true)
    public List<SubredditDto> getAll() {
        List<Subreddit> subreddits = subredditRepository.findAll();
        List<SubredditDto> subredditDtos = new ArrayList<>();

        for (Subreddit subreddit : subreddits) {
            SubredditDto dto = mapToDto(subreddit);
            subredditDtos.add(dto);
        }

        return subredditDtos;
    }


    private SubredditDto mapToDto(Subreddit subreddit) {
        return SubredditDto.builder()
                .name(subreddit.getName())
                .numberOfPosts(subreddit.getPosts().size())
                .id(subreddit.getId())
                .description(subreddit.getDescription())
                .build();

    }

    private Subreddit mapSubredditDto(SubredditDto subredditDto) {
        return Subreddit.builder()
                .name(subredditDto.getName())
                .description(subredditDto.getDescription())
                .build();
    }


    public SubredditDto getSubreddit(Long id) {
        Subreddit subreddit = subredditRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subreddit not found"));
        return mapToDto(subreddit);

    }

}
