package com.ecap.backend.service;

import com.ecap.backend.entity.Timetable;
import com.ecap.backend.repository.TimetableRepository;

import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimetableService {

    @Autowired
    private TimetableRepository repo;

    public TimetableService() {}

    public List<Timetable> getBySemester(int semester) {
        return repo.findBySemester(semester);
    }

    public List<Timetable> getBySemesterAndSection(int semester, String section) {
        return repo.findBySemesterAndSection(semester, section);
    }

    public List<Timetable> getByFacultyName(String facultyName) {
        return repo.findByFacultyName(facultyName);
    }

    @PostConstruct
    public void test() {
        System.out.println("Timetable Entity Loaded: " + repo.count());
    }

    public Timetable save(Timetable t) {
        return repo.save(t);
    }
}
