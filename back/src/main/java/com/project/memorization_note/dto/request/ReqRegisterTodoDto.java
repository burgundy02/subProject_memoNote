package com.project.memorization_note.dto.request;

import com.project.memorization_note.entity.Memo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private String question;
    private String answer;
    private String explainMemo;

    public Memo toEntity() {
        return Memo.builder()
                .question(question)
                .answer(answer)
                .explainMemo(explainMemo)
                .build();
    }
}