// Source code is decompiled from a .class file using FernFlower decompiler (from IntelliJ IDEA).
package com.ecap.backend.repository;

import com.ecap.backend.entity.Timetable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimetableRepository extends JpaRepository<Timetable, Long> {

    List<Timetable> findBySemester(int semester);
    List<Timetable> findBySemesterAndSection(int semester, String section);
    List<Timetable> findByFacultyName(String facultyName);
}
