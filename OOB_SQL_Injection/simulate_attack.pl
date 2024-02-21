#!/usr/bin/perl
# Created February 20th, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# This script demonstrates how SQL Injections can be input programmatically.

use strict;
use warnings;
use LWP::UserAgent;

my $ua = LWP::UserAgent->new;
my $server_endpoint = "http://localhost/submit.php";

# Simulate data submission
my $response = $ua->post($server_endpoint, [
    'username' => 'simulatedUser',
    'password' => 'simulatedPass'
]);

if ($response->is_success) {
    print "Successfully sent simulated data.\n";
    print $response->decoded_content;  # or however you want to process the response
} else {
    die $response->status_line;
}

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
