document.addEventListener('DOMContentLoaded', function() {
    fetch('content/thoughts/first-thought.md')
        .then(response => response.text())
        .then(markdown => {
            // Basic Markdown to HTML conversion (for demonstration)
            // In a real application, you'd use a robust Markdown library
            let html = markdown
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/^\*\* (.*$)/gim, '<strong>$1</strong>')
                .replace(/^\* (.*$)/gim, '<li>$1</li>')
                .replace(/^\n/gim, '<br/>');

            document.getElementById('thoughts-content').innerHTML = html;
        })
        .catch(error => console.error('Error loading Markdown:', error));
});

