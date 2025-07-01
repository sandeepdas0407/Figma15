document.addEventListener('DOMContentLoaded', function() {
    // Close notification
    const closeBtn = document.querySelector('.close-btn');
    const notificationBar = document.querySelector('.notification-bar');
    
    closeBtn.addEventListener('click', function() {
        notificationBar.style.display = 'none';
    });

    // Filter pill interaction
    const filterPills = document.querySelectorAll('.filter-pill');
    
    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Remove active class from all pills
            filterPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            this.classList.add('active');
        });
    });

    // Function button interaction
    const functionBtns = document.querySelectorAll('.function-btn');
    
    functionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            functionBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Toggle switch interaction
    const toggles = document.querySelectorAll('.toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const handle = this.querySelector('.toggle-handle');
            const track = this.querySelector('.toggle-track');
            
            if (handle.style.left === '22px') {
                handle.style.left = '1.67px';
                track.style.backgroundColor = 'rgba(204, 204, 204, 0.8)';
            } else {
                handle.style.left = '22px';
                track.style.backgroundColor = '#004D99';
            }
        });
    });

    // AI Insights interaction
    const aiInsights = document.querySelectorAll('.ai-insights');
    
    aiInsights.forEach(insight => {
        insight.addEventListener('click', function() {
            alert('AI Summary: This patient has documented medical needs that justify approval of this non-formulary medication. Previous attempts with formulary alternatives were unsuccessful due to adverse reactions or lack of efficacy.');
        });
    });

    // View claim button interaction
    const viewClaimBtns = document.querySelectorAll('.view-claim-btn');
    
    viewClaimBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Claim details would be shown here in a real application.');
        });
    });
});
