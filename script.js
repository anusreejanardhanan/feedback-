document.getElementById('role').addEventListener('change', function() {
    const role = this.value;
    
    // Hide all feedback sections
    document.querySelectorAll('.feedback-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the corresponding feedback section based on the selected role
    if (role === 'student') {
        document.getElementById('studentFeedback').style.display = 'block';
    } else if (role === 'teacher') {
        document.getElementById('teacherFeedback').style.display = 'block';
    } else if (role === 'parent') {
        document.getElementById('parentFeedback').style.display = 'block';
    }
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    let feedback = '';
    
    if (role === 'student') {
        const marks = document.getElementById('marks').value;
        const behavior = document.getElementById('behavior').value;
        feedback = `Student Feedback:
        - Marks: ${marks}
        - Behavior: ${behavior}`;
    } else if (role === 'teacher') {
        const teaching = document.getElementById('teaching').value;
        const improvements = document.getElementById('improvements').value;
        feedback = `Teacher Feedback:
        - Teaching Style: ${teaching}
        - Things to Improve: ${improvements}`;
    } else if (role === 'parent') {
        const childProgress = document.getElementById('childProgress').value;
        const behaviorIssues = document.getElementById('behaviorIssues').value;
        feedback = `Parent Feedback:
        - Child's Progress: ${childProgress}
        - Behavior Issues: ${behaviorIssues}`;
    }

    // Display the feedback
    document.getElementById('result').textContent = 'Feedback Submitted Successfully!\n' + feedback;
})