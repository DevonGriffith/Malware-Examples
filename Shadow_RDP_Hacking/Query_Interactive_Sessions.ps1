@echo off
REM Created August 27th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
REM Run these commands in a Windows PowerShell Terminal - NOT AS A SCRIPT
REM All these commands communicate over the Microsoft-DS port (445/TCP).
REM Session ID is what you need...

PS C:\> quser.exe /SERVER:MYSERVER
 USERNAME              SESSIONNAME        ID  STATE   IDLE TIME  LOGON TIME
 administrator         console             1  Active      none   2/2/2021 11:09 AM
 domainuser2           rdp-tcp#0           2  Active          .  2/2/2021 11:10 AM
PS C:\>

REM Other command:
qwinsta.exe /server:MYSERVER

REM DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
