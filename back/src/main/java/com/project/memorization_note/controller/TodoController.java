package com.project.memorization_note.controller;

import com.project.memorization_note.dto.Dto;
import com.project.memorization_note.dto.request.ReqRegisterTodoDto;
import com.project.memorization_note.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqRegisterTodoDto dto) {
        int successCount = todoService.registerTodo(dto);
        return ResponseEntity.created(null).body(successCount);
    }

    @DeleteMapping("/{memoId}")
    public ResponseEntity<?> delete(@PathVariable("memoId") int memoId) {
        return ResponseEntity.ok().body(todoService.deleteMemoById(memoId) ? "성공" : "실패");
    }

}
