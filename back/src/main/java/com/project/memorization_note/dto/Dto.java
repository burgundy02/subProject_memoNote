package com.project.memorization_note.dto;

import lombok.Builder;
import lombok.Data;

public class Dto {

    @Data
    @Builder
    public static class DeleteResp {
        private int successCount;
        private String message;
    }



}

