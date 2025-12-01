package com.ecap.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Entity
@Table(name = "resources")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String course;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_size")
    private String fileSize;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "upload_date")
    private LocalDateTime uploadDate;

    private Integer downloads;

    @Column(name = "faculty_name")
    private String facultyName;

    public Resource() {}

    public Resource(Long id, String title, String course, String fileType, String fileSize, 
                   String filePath, LocalDateTime uploadDate, Integer downloads, String facultyName) {
        this.id = id;
        this.title = title;
        this.course = course;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.filePath = filePath;
        this.uploadDate = uploadDate;
        this.downloads = downloads;
        this.facultyName = facultyName;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getCourse() { return course; }
    public String getFileType() { return fileType; }
    public String getFileSize() { return fileSize; }
    public String getFilePath() { return filePath; }
    public LocalDateTime getUploadDate() { return uploadDate; }
    public Integer getDownloads() { return downloads; }
    public String getFacultyName() { return facultyName; }

    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setCourse(String course) { this.course = course; }
    public void setFileType(String fileType) { this.fileType = fileType; }
    public void setFileSize(String fileSize) { this.fileSize = fileSize; }
    public void setFilePath(String filePath) { this.filePath = filePath; }
    public void setUploadDate(LocalDateTime uploadDate) { this.uploadDate = uploadDate; }
    public void setDownloads(Integer downloads) { this.downloads = downloads; }
    public void setFacultyName(String facultyName) { this.facultyName = facultyName; }
}