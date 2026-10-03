param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$taskRoot = $PSScriptRoot
$taskNode = (Get-Command node -ErrorAction SilentlyContinue).Source
$taskPython = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $taskNode) { $taskNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' }
if (-not $taskPython) { $taskPython = Join-Path $env:LOCALAPPDATA 'Programs/Python/Python310/python.exe' }
if (-not (Test-Path -LiteralPath $taskNode) -or -not (Test-Path -LiteralPath $taskPython)) { throw 'Node.js 또는 Python 실행 환경을 찾을 수 없습니다.' }
Push-Location -LiteralPath $taskRoot
try {
  & $taskNode scripts/build.mjs
  if ($LASTEXITCODE -ne 0) { throw '도감 확인에 실패했습니다. 서버를 시작하지 않습니다.' }
} finally { Pop-Location }
$taskUrl = 'http://127.0.0.1:8041'
try { $taskResponse = Invoke-WebRequest -Uri $taskUrl -UseBasicParsing -TimeoutSec 2 } catch { $taskResponse = $null }
if ($taskResponse) {
  if ($taskResponse.Content -notmatch '<title>Sea Atlas') { throw '8041 포트를 다른 프로그램이 사용하고 있습니다.' }
} else {
  $taskWork = Join-Path $taskRoot 'work'
  New-Item -ItemType Directory -Path $taskWork -Force | Out-Null
  $taskSite = Join-Path $taskRoot '_site'
  $taskArguments = @('-m', 'http.server', '8041', '--bind', '127.0.0.1', '--directory', ('"' + $taskSite + '"'))
  $taskServer = Start-Process -FilePath $taskPython -ArgumentList $taskArguments -WorkingDirectory $taskRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $taskWork 'server.stdout.log') -RedirectStandardError (Join-Path $taskWork 'server.stderr.log') -PassThru
  $taskServer.Id | Set-Content -LiteralPath (Join-Path $taskWork 'server.pid')
  for ($taskAttempt = 0; $taskAttempt -lt 15; $taskAttempt++) {
    Start-Sleep -Milliseconds 300
    try { $taskResponse = Invoke-WebRequest -Uri $taskUrl -UseBasicParsing -TimeoutSec 1; break } catch { }
  }
  if (-not $taskResponse -or $taskResponse.Content -notmatch '<title>Sea Atlas') { throw '도감 서버를 시작하지 못했습니다. work/server.stderr.log를 확인해 주세요.' }
}
Write-Output "Sea Atlas 준비 완료: $taskUrl"
if (-not $NoBrowser) { Start-Process $taskUrl }
