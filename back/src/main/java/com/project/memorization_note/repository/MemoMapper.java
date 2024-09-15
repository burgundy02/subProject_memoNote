package com.project.memorization_note.repository;

import com.project.memorization_note.entity.Memo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemoMapper {
    int save(Memo todo);

    int delete(int id);

    int update(Memo todo);

    Memo getRandomMemo();

    Memo getMemo(int memoId);

    List<Memo> getMemos();


}
