// Source code is decompiled from a .class file using FernFlower decompiler (from IntelliJ IDEA).
package com.ecap.backend.controller;

import com.ecap.backend.entity.Timetable;
import com.ecap.backend.service.TimetableService;
import java.util.List;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/timetable")
@CrossOrigin
public class TimetableController {

    @Autowired
    private TimetableService service;

    @Generated
    public TimetableController() {}

    @GetMapping("/{semester}/{section}")
    public List<Timetable> getTimetable(@PathVariable int semester, @PathVariable String section) {
        return service.getBySemesterAndSection(semester, section);
    }

    @GetMapping("/{semester}")
    public List<Timetable> getTimetable(@PathVariable int semester) {
        return service.getBySemester(semester);
    }

    @GetMapping("/faculty/{facultyName}")
    public List<Timetable> getTimetable(@PathVariable String facultyName) {
        return service.getByFacultyName(facultyName);
    }

    @PostMapping("/add")
    public Timetable add(@RequestBody Timetable t) {
        return service.save(t);
    }
}
