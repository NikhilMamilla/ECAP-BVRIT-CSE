package com.ecap.backend.controller;

import com.ecap.backend.entity.Faculty;
import com.ecap.backend.entity.Student;
import com.ecap.backend.repository.FacultyRepository;
import com.ecap.backend.repository.StudentRepository;
import com.ecap.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login/student")
    public ResponseEntity<?> loginStudent(@RequestBody Map<String, String> loginRequest) {
        String rollNumber = loginRequest.get("username");
        String password = loginRequest.get("password");

        Optional<Student> studentOpt = studentRepository.findById(rollNumber);
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            if (student.getPassword().equals(password)) { // In real app, use BCrypt
                String token = jwtUtil.generateToken(student.getRollNumber(), "STUDENT");
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                response.put("userType", "student");
                response.put("name", student.getName());
                response.put("rollNumber", student.getRollNumber());
                response.put("semester", String.valueOf(student.getSemester()));
                response.put("section", student.getSection());
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @PostMapping("/login/faculty")
    public ResponseEntity<?> loginFaculty(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");

        Optional<Faculty> facultyOpt = facultyRepository.findById(username);
        if (facultyOpt.isPresent()) {
            Faculty faculty = facultyOpt.get();
            if (faculty.getPassword().equals(password)) { // In real app, use BCrypt
                String token = jwtUtil.generateToken(faculty.getUsername(), "FACULTY");
                Map<String, Object> response = new HashMap<>();
                response.put("token", token);
                response.put("userType", "employee");
                response.put("name", faculty.getName());
                response.put("username", faculty.getUsername());
                response.put("department", faculty.getDepartment());
                
                // Parse JSON string to List
                try {
                    ObjectMapper objectMapper = new ObjectMapper();
                    List<String> subjects = objectMapper.readValue(faculty.getSubjects(), new TypeReference<List<String>>() {});
                    response.put("subjects", subjects);
                } catch (Exception e) {
                    response.put("subjects", List.of());
                }
                
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @PostMapping("/login/parent")
    public ResponseEntity<?> loginParent(@RequestBody Map<String, String> loginRequest) {
        String rollNumber = loginRequest.get("rollNumber");
        String mobileNumber = loginRequest.get("mobileNumber");

        Optional<Student> studentOpt = studentRepository.findById(rollNumber);
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            if (mobileNumber.equals(student.getParentMobileNumber())) {
                String token = jwtUtil.generateToken(student.getRollNumber(), "PARENT");
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                response.put("userType", "parent");
                response.put("name", "Parent of " + student.getName());
                response.put("rollNumber", student.getRollNumber());
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
