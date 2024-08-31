package com.project.memorization_note.entity;

import com.project.memorization_note.dto.response.RespGetMemoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Memo {
    private int memoId;
    private String question;
    private String answer;
    private String explainMemo;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;

    public RespGetMemoDto toDto() {
        return RespGetMemoDto.builder()
                .memoId(memoId)
                .question(question)
                .answer(answer)
                .explainMemo(explainMemo)
                .registerDate(registerDate)
                .updateDate(updateDate)
                .build();
    }


}
