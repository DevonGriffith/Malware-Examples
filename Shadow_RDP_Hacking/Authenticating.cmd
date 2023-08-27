@echo off
REM Created August 27th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
REM Run these commands in a Windows CMD Terminal - NOT AS A SCRIPT

runas.exe /noprofile /netonly /user:MYSERVER\Administrator powershell.exe
REM Enter the password for MYSERVER\Administrator:
REM Attempting to start powershell.exe as user "MYSERVER\Administrator" ...
REM C:\>

REM DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
