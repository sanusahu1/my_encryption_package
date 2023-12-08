# my_encryption_package
This a encryption package to provide security for the data stord in database 
you can use it as given bellow ->
const Encryption = require('my-encryption-package');

// Replace 'your-secret-key' with your actual secret key
const secretKey = 'asdfghjkl!@#$%^&*';

const encryption = new Encryption(secretKey);

const originalText = 'Hello, this is a secret message!';

// Encrypt the text
const encryptedData = encryption.encrypt(originalText);

console.log('Encrypted Data:', encryptedData);

// Decrypt the data
const decryptedText = encryption.decrypt(encryptedData);

console.log('Decrypted Text:', decryptedText);

