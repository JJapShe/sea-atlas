@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-sea-atlas.ps1"
if errorlevel 1 pause
