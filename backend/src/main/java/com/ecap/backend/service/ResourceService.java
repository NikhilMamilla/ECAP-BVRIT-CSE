package com.ecap.backend.service;

import com.ecap.backend.entity.Resource;
import com.ecap.backend.repository.ResourceRepository;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository repo;

    public ResourceService() {}

    public List<Resource> getAllResources() {
        return repo.findAll();
    }

    public List<Resource> getResourcesByCourse(String course) {
        return repo.findByCourse(course);
    }

    public List<Resource> getResourcesByFacultyName(String facultyName) {
        return repo.findByFacultyName(facultyName);
    }

    public List<Resource> getResourcesByCourseAndFaculty(String course, String facultyName) {
        return repo.findByCourseAndFacultyName(course, facultyName);
    }

    @PostConstruct
    public void test() {
        System.out.println("Resource Entity Loaded: " + repo.count());
    }

    public Resource save(Resource resource) {
        if (resource.getUploadDate() == null) {
            resource.setUploadDate(LocalDateTime.now());
        }
        if (resource.getDownloads() == null) {
            resource.setDownloads(0);
        }
        return repo.save(resource);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }

    public Resource getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Resource incrementDownloads(Long id) {
        Resource resource = repo.findById(id).orElse(null);
        if (resource != null) {
            resource.setDownloads(resource.getDownloads() + 1);
            return repo.save(resource);
        }
        return null;
    }
}