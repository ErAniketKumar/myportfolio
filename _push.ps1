git add .

Write-Host "Enter your commit message: "
$message = Read-Host

git commit -m $message

Write-Host "Do you want to force push (y/n): " 
$force = Read-Host

if ($force -eq 'y') {
    git push -f
} else {
    git push
}