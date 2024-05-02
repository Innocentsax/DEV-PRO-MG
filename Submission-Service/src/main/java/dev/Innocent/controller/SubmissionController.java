package dev.Innocent.controller;

import dev.Innocent.DTO.UserDTO;
import dev.Innocent.model.Submission;
import dev.Innocent.service.SubmissionService;
import dev.Innocent.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submission")
@RequiredArgsConstructor
public class SubmissionController {
    private final SubmissionService submissionService;
    private final UserService userService;

    @PostMapping()
    public ResponseEntity<Submission> submitTask(
            @RequestParam Long task_id,
            @RequestParam String github_link, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDTO user = userService.getUserProfile(jwt);
        Submission submission = submissionService.submitTask(task_id, github_link, user.getId(), jwt);
        return new ResponseEntity<>(submission, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Submission> getSubmissionById(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {
        UserDTO user = userService.getUserProfile(jwt);
        Submission submission = submissionService.getTaskSubmissionById(id);
        return new ResponseEntity<>(submission, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<Submission>> getAllTaskSubmission(@RequestHeader("Authorization") String jwt) throws Exception {
        UserDTO user = userService.getUserProfile(jwt);
        List<Submission> submissions = submissionService.getAllTaskSubmissions();
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }
    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<Submission>> getTaskSubmissionByTaskId(
            @PathVariable Long taskId,
            @RequestHeader("Authorization") String jwt) throws Exception {
        UserDTO user = userService.getUserProfile(jwt);
        List<Submission> submissions = submissionService.getTaskSubmissionsByTaskId(taskId);
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Submission> acceptOrDeclineSubmission(
            @PathVariable Long id,
            @RequestParam("status") String status,
            @RequestHeader("Authorization") String jwt) throws Exception {
        UserDTO user = userService.getUserProfile(jwt);
        Submission submission = submissionService.acceptDeclineSubmission(id, status);
        return new ResponseEntity<>(submission, HttpStatus.OK);
    }
}
