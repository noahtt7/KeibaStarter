package com.example.KeibaStarter.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.lang.annotation.Inherited;

// import org.springframework.security.core.userdetails.UserDetails;

// @Entity
// @Table(name = "users")
// @Getter
// @Setter
// public class User implements UserDetails{
//     @Id 
//     @GeneratedValue(strategy = GenerationType.AUTO)
//     private Long id;
//     @Column(unique = true, nullable = false)
//     private String username;
//     @Column(unique = true, nullable = false)
//     private String email;
//     @Column(nullable = false)
//     private String password;
//     private boolean enabled;
//     @Column(name = "verification_code")
//     private String verificationCode;
//     @Column(name = "verification_expiration")
//     private LocalDateTime verificaitonCodeExpiresAt;

//     public User(String username, String email, String password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     public User() {

//     }
    
//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return List.of();
//     }
//     @Override
//     public boolean isAccountNonExpired() {
//         return true;
//     }
//     @Override
//     public boolean isAccountNonLocked() {
//         return true;
//     }
//     @Override
//     public boolean isCredentialsNonExpired() {
//         return true;
//     }
//     @Override
//     public boolean isEnabled() {
//         return enabled;
//     }
// }
