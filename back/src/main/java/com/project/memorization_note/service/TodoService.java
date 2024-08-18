package com.project.memorization_note.service;

import com.project.memorization_note.dto.request.ReqRegisterTodoDto;
import com.project.memorization_note.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public int registerTodo(ReqRegisterTodoDto dto) {
        return todoMapper.save(dto.toEntity());
    }

    public boolean deleteMemoById(int id) {
        return todoMapper.delete(id) > 0;
    }
}
