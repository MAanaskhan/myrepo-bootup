document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    button1.addEventListener('click', function() {
        // Show page 1 and hide page 2
        page1.style.display = 'block';
        page2.style.display = 'none';
        
        // Update button styles
        button1.classList.add('active');
        button2.classList.remove('active');
    });

    button2.addEventListener('click', function() {
        // Show page 2 and hide page 1
        page1.style.display = 'none';
        page2.style.display = 'block';
        
        // Update button styles
        button1.classList.remove('active');
        button2.classList.add('active');
    });
});