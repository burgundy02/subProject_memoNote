package com.project.memorization_note.dto.request;

import com.project.memorization_note.entity.Memo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private String quest;
    private String answer;
    private String explainMemo;

    public Memo toEntity() {
        return Memo.builder()
                .question(quest)
                .answer(answer)
                .explainMemo(explainMemo)
                .build();
    }
}
