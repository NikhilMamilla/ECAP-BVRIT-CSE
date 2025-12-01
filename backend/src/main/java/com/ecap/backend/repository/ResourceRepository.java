package com.ecap.backend.repository;

import com.ecap.backend.entity.Resource;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

    List<Resource> findByCourse(String course);
    List<Resource> findByFacultyName(String facultyName);
    List<Resource> findByCourseAndFacultyName(String course, String facultyName);
}