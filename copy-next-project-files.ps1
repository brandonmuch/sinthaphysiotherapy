$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$workspaceRoot = $PSScriptRoot
$nextProjectRoot = Join-Path $workspaceRoot 'sintha-physiotherapy'

if (-not (Test-Path -LiteralPath $nextProjectRoot -PathType Container)) {
    throw "The Next.js project folder was not found: $nextProjectRoot"
}

foreach ($folderName in @('app', 'components', 'lib')) {
    $source = Join-Path $workspaceRoot $folderName
    $destination = Join-Path $nextProjectRoot $folderName

    if (-not (Test-Path -LiteralPath $source -PathType Container)) {
        throw "The source folder was not found: $source"
    }

    New-Item -ItemType Directory -Path $destination -Force | Out-Null
    Copy-Item -Path (Join-Path $source '*') -Destination $destination -Recurse -Force
    Write-Host "Copied $folderName\"
}

$sourceImages = Join-Path $workspaceRoot 'public\images'
$destinationImages = Join-Path $nextProjectRoot 'public\images'
$imageExtensions = @('.avif', '.bmp', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg', '.tif', '.tiff', '.webp')

if (-not (Test-Path -LiteralPath $sourceImages -PathType Container)) {
    throw "The source image folder was not found: $sourceImages"
}

New-Item -ItemType Directory -Path $destinationImages -Force | Out-Null
$images = @(Get-ChildItem -LiteralPath $sourceImages -File -Recurse |
    Where-Object { $imageExtensions -contains $_.Extension.ToLowerInvariant() }
)

foreach ($image in $images) {
    $relativePath = $image.FullName.Substring($sourceImages.Length).TrimStart('\', '/')
    $destination = Join-Path $destinationImages $relativePath
    $destinationDirectory = Split-Path -Path $destination -Parent

    New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
    Copy-Item -LiteralPath $image.FullName -Destination $destination -Force
}

Write-Host "Copied $($images.Count) image(s)."
Write-Host ''
Write-Host 'No source files or folders were deleted.'
Write-Host "Open this folder in VS Code: $nextProjectRoot"
