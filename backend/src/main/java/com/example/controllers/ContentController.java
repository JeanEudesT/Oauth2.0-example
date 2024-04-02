package com.example.controllers;

import com.example.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContentController {
    @GetMapping("/private")
    public ResponseEntity<MessageDto> privateHelloWorld(@AuthenticationPrincipal(expression = "name") String name) {
        return ResponseEntity.ok(new MessageDto("Hello " + name + "!"));
    }

    @GetMapping("/")
    public ResponseEntity<MessageDto> HelloWorld() {
        return ResponseEntity.ok(new MessageDto("This is a public content"));
    }
}
