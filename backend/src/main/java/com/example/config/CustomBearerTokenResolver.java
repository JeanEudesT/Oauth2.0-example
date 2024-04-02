package com.example.config;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.oauth2.server.resource.web.BearerTokenResolver;

import java.util.Arrays;
import java.util.Optional;

public class CustomBearerTokenResolver implements BearerTokenResolver {
    @Override
    public String resolve(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        if(cookies != null) {
            Optional<Cookie> cookie = Arrays.stream(cookies)
                    .filter(name -> name.getName().equals("accessToken"))
                    .findFirst();

            if(cookie.isPresent()) {
                String token = cookie.get().getValue();
                return token;
            }
        }
        return null;
    }
}
