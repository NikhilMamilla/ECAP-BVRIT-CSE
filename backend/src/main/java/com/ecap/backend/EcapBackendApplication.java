package com.ecap.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.ecap.backend.entity")
@EnableJpaRepositories(basePackages = "com.ecap.backend.repository")
public class EcapBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcapBackendApplication.class, args);
    }
}
