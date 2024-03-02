// Encryption function
function encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    // Convert characters to ASCII codes
    const keyChar = key.charCodeAt(i % key.length);
    const messageChar = message.charCodeAt(i);

    // Apply XOR operation between message character and key character
    const encryptedChar = messageChar ^ keyChar;

    // Convert back to character and append to encrypted message
    encryptedMessage += String.fromCharCode(encryptedChar);
  }

  // Display the encrypted message
  document.querySelector("#result").value = encryptedMessage;
}

// Decryption function
function decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;
  let message = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    // Convert characters to ASCII codes
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = encryptedMessage.charCodeAt(i);

    // Apply XOR operation between encrypted character and key character
    const decryptedChar = encryptedChar ^ keyChar;

    // Convert back to character and append to decrypted message
    message += String.fromCharCode(decryptedChar);
  }

  // Display the decrypted message
  document.querySelector("#result").value = message;
}
