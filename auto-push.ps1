# PowerShell script to commit and push every 5 minutes

$repoPath = "C:\path\to\your\repo"  # Change this to your repository path
$branch = "main"  # Change this to your branch name

Write-Host "Starting auto-commit script. Commits every 5 minutes..."

while ($true) {
    Set-Location -Path $repoPath
    
    # Check if there are any changes before committing
    $status = git status --porcelain
    if ($status) {
        Write-Host "Changes detected! Committing and pushing..."
        git add .
        git commit -m "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin $branch
    } else {
        Write-Host "No changes detected. Skipping commit."
    }
    
    # Wait for 5 minutes before checking again
    Start-Sleep -Seconds 300
}
