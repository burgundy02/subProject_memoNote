package com.project.memorization_note.dto.request;

import com.project.memorization_note.entity.Todo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private String question;
    private String answer;
    private String explain;

    public Todo toEntity() {
        return Todo.builder()
                .question(question)
                .answer(answer)
                .explain(explain)
                .build();
    }
}
