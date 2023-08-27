@echo off
REM Created August 27th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
REM Run these commands in a Windows PowerShell Terminal - NOT AS A SCRIPT
REM configuration of the remote machine can be performed through WinRM/WMI which are respectively
REM running on port 5985/TCP and/or 5986/TCP and 135/TCP.
REM In PowerShell, the DCOM connection to the remote host can be established using the following two lines:

$so = New-CimSessionOption -Protocol Dcom
$s = New-CimSession -ComputerName MYSERVER -SessionOption $so

REM The $s variable contains the session and will be used in all subsequent sections
REM WinRM can be used by removing the -SessionOption parameter
REM DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
