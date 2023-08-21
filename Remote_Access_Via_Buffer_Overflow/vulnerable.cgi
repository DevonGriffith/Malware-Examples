#!/usr/bin/perl
# Created August 21st, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# A CGI script running on our Apache2 server
# This goes in /usr/lib/cgi-bin/

use CGI;
my $cgi = new CGI;
print $cgi->header('text/plain');  # A header on the page
my $input = $cgi->param('input');  # This is where the vulnerability allows input
my $buffer = "A" x 256;  #  Overflowing the buffer by filling the memory with "A"s
$buffer .= $input;  # Fill the buffer
print "Buffer: $buffer\n";  # Overflow the buffer.

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
