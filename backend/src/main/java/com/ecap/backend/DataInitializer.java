package com.ecap.backend;

import com.ecap.backend.entity.Faculty;
import com.ecap.backend.entity.Student;
import com.ecap.backend.repository.FacultyRepository;
import com.ecap.backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@DependsOn("entityManagerFactory") // FIX: ensures tables exist before running
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FacultyRepository facultyRepository;
    

    @Override
    public void run(String... args) throws Exception {

        try {
            if (!studentRepository.existsById("23211A05M7")) {
                Student student = new Student();
                student.setRollNumber("23211A05M7");
                student.setPassword("student123");
                student.setName("Test Student");
                student.setParentMobileNumber("9876543210");
                student.setParentName("Test Parent");
                student.setSemester(6);
                student.setSection("A");
                studentRepository.save(student);
                System.out.println("Initialized Student: 23211A05M7");
            }

            if (!facultyRepository.existsById("faculty")) {
                Faculty faculty = new Faculty();
                faculty.setUsername("faculty");
                faculty.setPassword("faculty123");
                faculty.setName("Test Faculty");
                faculty.setEmail("faculty@example.com");
                faculty.setDepartment("CSE");
                faculty.setSubjects("[\"DBMS\", \"Java\"]");
                facultyRepository.save(faculty);
                System.out.println("Initialized Faculty: faculty");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
