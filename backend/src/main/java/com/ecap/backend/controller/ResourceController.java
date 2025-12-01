package com.ecap.backend.controller;

import com.ecap.backend.entity.Resource;
import com.ecap.backend.service.ResourceService;
import java.util.List;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.File;

@RestController
@RequestMapping("/resources")
@CrossOrigin
public class ResourceController {

    @Autowired
    private ResourceService service;

    @Generated
    public ResourceController() {}

    @GetMapping
    public List<Resource> getAllResources() {
        return service.getAllResources();
    }

    @GetMapping("/course/{course}")
    public List<Resource> getResourcesByCourse(@PathVariable String course) {
        return service.getResourcesByCourse(course);
    }

    @GetMapping("/faculty/{facultyName}")
    public List<Resource> getResourcesByFaculty(@PathVariable String facultyName) {
        return service.getResourcesByFacultyName(facultyName);
    }

    @GetMapping("/course/{course}/faculty/{facultyName}")
    public List<Resource> getResourcesByCourseAndFaculty(@PathVariable String course, @PathVariable String facultyName) {
        return service.getResourcesByCourseAndFaculty(course, facultyName);
    }

    @PostMapping("/add")
    public Resource add(@RequestBody Resource resource) {
        return service.save(resource);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteById(id);
    }

    @PutMapping("/download/{id}")
    public Resource incrementDownloads(@PathVariable Long id) {
        return service.incrementDownloads(id);
    }

    @GetMapping("/file/{id}")
    public ResponseEntity<org.springframework.core.io.Resource> downloadFile(@PathVariable Long id) {
        Resource resource = service.getById(id);
        if (resource == null) {
            return ResponseEntity.notFound().build();
        }
        
        // Increment download count
        service.incrementDownloads(id);
        
        try {
            // Remove leading slash from filePath if present
            String filePath = resource.getFilePath();
            if (filePath.startsWith("/")) {
                filePath = filePath.substring(1);
            }
            
            File file = new File(filePath);
            if (!file.exists()) {
                return ResponseEntity.notFound().build();
            }
            
            FileSystemResource fileResource = new FileSystemResource(file);
            
            // Increment download count
            service.incrementDownloads(id);
            
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getTitle() + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(file.length())
                    .body(fileResource);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
}