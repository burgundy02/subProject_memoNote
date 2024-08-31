package com.project.memorization_note.repository;

import com.project.memorization_note.entity.Memo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemoMapper {
    int save(Memo todo);

    int delete(int id);

    int update(Memo todo);


}
