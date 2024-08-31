package com.project.memorization_note.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private int memoId;
    private String question;
    private String answer;
    private String explain;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;


}
