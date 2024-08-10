package com.project.memorization_note.repository;

import com.project.memorization_note.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
}
