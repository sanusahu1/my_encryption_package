const assert = require('assert');
const Encryption = require('../lib/encryption');

describe('Encryption', () => {
  const secretKey = 'SDFGHJ@#$%^&*JHGF@#$}|?#@!$%U**^TGE$^&&';
  const encryption = new Encryption(secretKey);

  it('should encrypt and decrypt text', () => {
    const originalText = 'Hello, world!';
    const encryptedData = encryption.encrypt(originalText);
    const decryptedText = encryption.decrypt(encryptedData);

    assert.strictEqual(decryptedText, originalText);
  });
});
