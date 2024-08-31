package com.project.memorization_note.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class RespGetMemoDto {
    private int memoId;
    private String question;
    private String answer;
    private String explainMemo;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;
}
