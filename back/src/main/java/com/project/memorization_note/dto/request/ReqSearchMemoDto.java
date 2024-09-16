package com.project.memorization_note.dto.request;

import com.project.memorization_note.entity.Memo;
import lombok.Data;

@Data
public class ReqSearchMemoDto {
    private String question;
    private String answer;
    private String all;

    public Memo toEntity() {
        return Memo.builder()
                .question(question)
                .answer(answer)
                .all(all)
                .build();
    }
}
