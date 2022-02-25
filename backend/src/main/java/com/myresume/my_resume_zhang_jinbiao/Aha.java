package com.myresume.my_resume_zhang_jinbiao;

import java.io.*;

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "Aha")
public class Aha extends HttpServlet {
    private String message;
    private String name;
    private String programme;
    private String job;
    private String reason;


    public void init() {
        name = "James Bond";
        programme = "Software Engineering";
        job = "Full-stack Engineer";
        reason = "I am passionate about the world of CS";
        message = String.format("My name is %s and I studied in Xiamen University Malaysia under the program of %s. The reasons I am applying this job, %s because %s.",
                name,
                programme,
                job,
                reason);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.println(message);
    }

    public void destroy() {
    }
}
