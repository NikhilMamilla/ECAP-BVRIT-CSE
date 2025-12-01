package com.ecap.backend.controller;

import com.ecap.backend.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "*")
public class UploadController {

    @Autowired
    private FileService fileService;

    @PostMapping("/file")
    public ResponseEntity<Map<String, String>> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("filename") String filename,
            @RequestParam("type") String type) {
        
        Map<String, String> response = new HashMap<>();
        
        try {
            // Validate file
            if (file.isEmpty()) {
                response.put("error", "File is empty");
                return ResponseEntity.badRequest().body(response);
            }

            // Validate file size (max 50MB)
            if (file.getSize() > 50 * 1024 * 1024) {
                response.put("error", "File size exceeds 50MB limit");
                return ResponseEntity.badRequest().body(response);
            }

            // Upload file
            String filePath = fileService.uploadFile(file, type);
            
            response.put("message", "File uploaded successfully");
            response.put("filePath", filePath);
            response.put("fileName", filename);
            response.put("fileSize", String.valueOf(file.getSize()));
            
            return ResponseEntity.ok(response);
            
        } catch (IOException e) {
            e.printStackTrace();
            response.put("error", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", "Unexpected error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}