package com.project.memorization_note.controller;

import com.project.memorization_note.dto.request.ReqRegisterTodoDto;
import com.project.memorization_note.dto.request.ReqSearchMemoDto;
import com.project.memorization_note.dto.request.ReqUpdateMemoDto;
import com.project.memorization_note.service.MemoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class MemoController {

    @Autowired
    private MemoService memoService;

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqRegisterTodoDto dto) {
        System.out.println(dto);
        int successCount = memoService.registerTodo(dto);
        return ResponseEntity.created(null).body(successCount);
    }


    @PutMapping("/memo")
    public ResponseEntity<?> update(@RequestBody ReqUpdateMemoDto dto) {
        return ResponseEntity.ok().body(memoService.updateMemo(dto));
    }

    @GetMapping("/memo")
    public ResponseEntity<?> getRandomMemo() {
        return ResponseEntity.ok().body(memoService.getRandomMemo());
    }

    @GetMapping("/memo/{memoId}")
    public ResponseEntity<?> getMemo(@PathVariable int memoId) {
        return ResponseEntity.ok().body(memoService.getMemoById(memoId));
    }

    @GetMapping("/memos")
    public ResponseEntity<?> getMemos() {
        return ResponseEntity.ok().body(memoService.getMemos());
    }

    @GetMapping("/memo/search")
    public ResponseEntity<?> searchMemos(ReqSearchMemoDto dto) {
        return ResponseEntity.ok().body(memoService.getSearchMemos(dto));
    }

    //추가 및 삭제

    @PostMapping("/memo")
    public ResponseEntity<?> addQuest(@RequestBody ReqRegisterTodoDto dto) {
        System.out.println(dto);
        return ResponseEntity.ok().body("성공");
    }

    @DeleteMapping("/{memoId}")
    public ResponseEntity<?> delete(@PathVariable("memoId") int memoId) {
        return ResponseEntity.ok().body(memoService.deleteMemoById(memoId) ? "성공" : "실패");
    }


}
