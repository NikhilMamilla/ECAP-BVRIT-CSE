package com.ecap.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    private String rollNumber;
    @Column(name = "semester")
    private int semester;
    private String password;
    private String name;
    private String email;
    private String parentMobileNumber;
    private String parentName;
    private String section;
}
