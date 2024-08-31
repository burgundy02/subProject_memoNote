package com.project.memorization_note.dto.request;

import com.project.memorization_note.entity.Memo;
import lombok.Data;

@Data
public class ReqUpdateMemoDto {
    private int memoId;
    private String question;
    private String answer;
    private String explainMemo;

    // dto를 entity로 바꿈
    public Memo toEntity() {
        return Memo.builder()
                .memoId(memoId)
                .question(question)
                .answer(answer)
                .explainMemo(explainMemo)
                .build();
    }

}
