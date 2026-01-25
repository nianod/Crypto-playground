#  Crypto Playground - Encryption & Decryption App

A simple React-based application for **learning and experimenting with cryptography fundamentals**, specifically **AES encryption and decryption** using `crypto-js`.

This project helps bridge the gap between **theory and practice** by visually demonstrating how encryption and decryption work.

---

## 🚀 Features

- 🔒 AES Encryption
- 🔓 AES Decryption
- 🔑 Secret key–based encryption
- 📋 Copy encrypted or decrypted text
- 🧭 Tab-based UI (Encryption / Decryption)
- ⚛️ Built with React + TypeScript
- 🎨 Clean and responsive UI

---

## Learning Purpose

This project is ideal for:

- Understanding **cryptography fundamentals**
- Learning the difference between **encryption vs hashing**
- Exploring **symmetric-key cryptography (AES)**
- Seeing why **encrypted data can be decrypted** but **hashed data cannot**
- Practicing **React state management**
- Building real-world UI logic with tabs

> ⚠️ **Disclaimer:**  
> This project is for **educational purposes only**.  
> Client-side encryption and hardcoded secret keys are **not secure for production systems**.

---

## How It Works

### Encryption Flow

1. User enters plain text  
2. The text is encrypted using **AES** with a **secret key**  
3. The encrypted output is displayed to the user  

### Decryption Flow

1. User pastes the encrypted text  
2. The **same secret key** used during encryption is applied  
3. The original plain text is successfully recovered  

> **Note:**  
> Decryption only works if the **exact same secret key** used for encryption is provided.


## Key Concepts

### 🔐 Encryption vs Hashing

- **Encryption**
  - Reversible
  - Uses a secret key
  - Original message can be recovered
  - Example: AES

- **Hashing**
  - One-way (irreversible)
  - Used for password storage
  - Cannot retrieve original value
  - Example: SHA-256, bcrypt

This app demonstrates **encryption**, not hashing.

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **CryptoJS**
- **Lucide Icons**
- **Tailwind CSS**

 