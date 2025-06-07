package com.example.KeibaStarter.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hi")
public class KeibaController {

    @GetMapping
    public String test() {
        return "Test message";
    }

    @GetMapping("/yo")
    public String testing() {
        return "this is testy";
    }
}
