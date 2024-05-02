package dev.Innocent.service.Impl;

import dev.Innocent.DTO.TaskDTO;
import dev.Innocent.model.Submission;
import dev.Innocent.repository.SubmissionRepository;
import dev.Innocent.service.SubmissionService;
import dev.Innocent.service.TaskService;
import dev.Innocent.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
@RequiredArgsConstructor
@Slf4j
public class SubmissionServiceImpl implements SubmissionService {
    private final SubmissionRepository submissionRepository;
    private final TaskService taskService;
    @Override
    public Submission submitTask(Long taskId, String githubLink, Long userId, String jwt) throws Exception {
        TaskDTO task = taskService.getTasksById(taskId, jwt);
        if(task != null){
            Submission submission = new Submission();
            submission.setTaskId(taskId);
            submission.setUserId(userId);
            submission.setGithubLink(githubLink);
            submission.setSubmissionTime(LocalDateTime.now());
            return submissionRepository.save(submission);
        }
        throw new Exception("Task not found with id: " + taskId);
    }
    @Override
    public Submission getTaskSubmissionById(Long submissionId) throws Exception {
        return submissionRepository.findById(submissionId).orElseThrow(() ->
                new Exception("Task submission not found with id " + submissionId));
    }
    @Override
    public List<Submission> getAllTaskSubmissions() {
        return submissionRepository.findAll();
    }
    @Override
    public List<Submission> getTaskSubmissionsByTaskId(Long taskId) {
        return submissionRepository.findByTaskId(taskId);
    }
    @Override
    public Submission acceptDeclineSubmission(Long id, String status) throws Exception {
        Submission submission = getTaskSubmissionById(id);
        submission.setStatus(status);
        if(status.equals("ACCEPT")){
            taskService.completeTask(submission.getId());
        }
        return submissionRepository.save(submission);
    }
}
