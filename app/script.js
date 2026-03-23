// Display the current deployment timestamp
// This value gets replaced during the GitHub Actions build step
document.addEventListener('DOMContentLoaded', () => {
    const deployTime = document.getElementById('deploy-time');
    
    // This placeholder gets replaced by the CI/CD pipeline with the actual build time
    const buildTimestamp = '__BUILD_TIMESTAMP__';
    
    if (buildTimestamp.startsWith('__')) {
        // Running locally, not deployed through the pipeline
        deployTime.textContent = 'Local Development';
        deployTime.style.color = '#facc15';
    } else {
        deployTime.textContent = buildTimestamp;
    }
});