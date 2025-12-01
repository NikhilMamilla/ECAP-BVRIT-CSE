package com.ecap.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "faculty")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Faculty {

    @Id
    private String username;
    
    private String password;
    private String name;
    private String email;
    private String department;

    @Column(columnDefinition = "TEXT")
    private String subjects;
}
