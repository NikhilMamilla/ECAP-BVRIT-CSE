package com.ecap.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "timetable")
public class Timetable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int semester;

    private String day;

    @Column(name = "time_slot")
    private String timeSlot;

    @Column(name = "subject_code")
    private String subjectCode;

    @Column(name = "faculty_name")
    private String facultyName;

    private String section;

    public Timetable() {}

    public Timetable(Long id, int semester, String day, String timeSlot,
                     String subjectCode, String facultyName, String section) {
        this.id = id;
        this.semester = semester;
        this.day = day;
        this.timeSlot = timeSlot;
        this.subjectCode = subjectCode;
        this.facultyName = facultyName;
        this.section = section;
    }

    public Long getId() { return id; }
    public int getSemester() { return semester; }
    public String getDay() { return day; }
    public String getTimeSlot() { return timeSlot; }
    public String getSubjectCode() { return subjectCode; }
    public String getFacultyName() { return facultyName; }
    public String getSection() { return section; }

    public void setId(Long id) { this.id = id; }
    public void setSemester(int semester) { this.semester = semester; }
    public void setDay(String day) { this.day = day; }
    public void setTimeSlot(String timeSlot) { this.timeSlot = timeSlot; }
    public void setSubjectCode(String subjectCode) { this.subjectCode = subjectCode; }
    public void setFacultyName(String facultyName) { this.facultyName = facultyName; }
    public void setSection(String section) { this.section = section; }
}
