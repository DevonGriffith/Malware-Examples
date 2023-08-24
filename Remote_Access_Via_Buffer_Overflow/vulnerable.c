// Created August 24st, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// A CGI script running on our Apache2 server
// This goes in /usr/lib/cgi-bin/

#include <string.h>
#include <stdio.h>
#include <stdlib.h>

void secretFunction() {
    // Here, you add the shell execution code
    system("/bin/sh");
}

void echo() {
    char buffer[20];  // We set exactly how long we want the buffer to be, so we can overflow it on the first try
    printf("Enter some text:\n");
    gets(buffer);
    printf("You entered: %s\n", buffer); 
}

int main() {
    echo(); // Exploiting the buffer overflow on the web page
    return 0;
}

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
