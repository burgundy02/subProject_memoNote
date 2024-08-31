package com.project.memorization_note.service;

import com.project.memorization_note.dto.request.ReqRegisterTodoDto;
import com.project.memorization_note.dto.request.ReqUpdateMemoDto;
import com.project.memorization_note.repository.MemoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemoService {

    @Autowired
    private MemoMapper memoMapper;

    public int registerTodo(ReqRegisterTodoDto dto) {
        return memoMapper.save(dto.toEntity());
    }

    public boolean deleteMemoById(int id) {
        return memoMapper.delete(id) > 0;
    }

    public int updateMemo(ReqUpdateMemoDto dto) {
        return memoMapper.update(dto.toEntity());
    }

}
