package com.project.memorization_note.service;

import com.project.memorization_note.dto.request.ReqRegisterTodoDto;
import com.project.memorization_note.dto.request.ReqSearchMemoDto;
import com.project.memorization_note.dto.request.ReqUpdateMemoDto;
import com.project.memorization_note.dto.response.RespGetMemoDto;
import com.project.memorization_note.dto.response.RespGetRandomMemoDto;
import com.project.memorization_note.entity.Memo;
import com.project.memorization_note.repository.MemoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public RespGetRandomMemoDto getRandomMemo() {
        Memo memo = memoMapper.getRandomMemo();

        return RespGetRandomMemoDto.builder()
                .question(memo.getQuestion())
                .answer(memo.getAnswer())
                .explainMemo(memo.getExplainMemo())
                .build();
    }

    public RespGetMemoDto getMemoById(int memoId) {
        return memoMapper.getMemo(memoId).toDto();
    }

    public List<RespGetMemoDto> getMemos() {
        List<Memo> memos = memoMapper.getMemos();
        List<RespGetMemoDto> dtos = new ArrayList<>();

        for(Memo memo : memos) {
            RespGetMemoDto dto = RespGetMemoDto.builder()
                    .memoId(memo.getMemoId())
                    .question(memo.getQuestion())
                    .answer(memo.getAnswer())
                    .explainMemo(memo.getExplainMemo())
                    .registerDate(memo.getRegisterDate())
                    .updateDate(memo.getUpdateDate())
                    .build();
            dtos.add(dto);
        }

        return dtos;
    }

    public List<RespGetMemoDto> getSearchMemos(ReqSearchMemoDto dto) {
        if(dto.getAll() == null || dto.getAll().equals("")) {
            if(dto.getQuestion() == null || dto.getQuestion().equals("")) {
                List<Memo> memos = memoMapper.getSearchMemosByAnswer(dto.toEntity());
                return toDto(memos);
            } else {
                List<Memo> memos = memoMapper.getSearchMemosByQuestion(dto.toEntity());
                return toDto(memos);
            }
        } else {
            List<Memo> memos = memoMapper.getSearchMemos(dto.toEntity());
            return toDto(memos);
        }
    }

    private List<RespGetMemoDto> toDto(List<Memo> memos) {
        List<RespGetMemoDto> dtos = new ArrayList<>();

        for(Memo memo : memos) {
            RespGetMemoDto memoDto = RespGetMemoDto.builder()
                    .memoId(memo.getMemoId())
                    .question(memo.getQuestion())
                    .answer(memo.getAnswer())
                    .explainMemo(memo.getExplainMemo())
                    .registerDate(memo.getRegisterDate())
                    .updateDate(memo.getUpdateDate())
                    .build();
            dtos.add(memoDto);
        }

        return dtos;
    }


}

