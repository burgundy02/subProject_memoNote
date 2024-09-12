package com.project.memorization_note.dto.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespGetRandomMemoDto {
    private String question;
    private String answer;
    private String explainMemo;
}
