const express = require('express');
const solanaWeb3 = require('@solana/web3.js');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Генерация нового Solana адреса
app.get('/generate-address', async (req, res) => {
    const keypair = solanaWeb3.Keypair.generate(); // Генерируем пару ключей
    const publicKey = keypair.publicKey.toString(); // Публичный ключ (адрес)
    const secretKey = keypair.secretKey; // Приватный ключ (для безопасности, не передаем его клиенту)

    // Можно сохранить ключи в базе данных тут
    // Пример: await saveKeyPairToDatabase(publicKey, secretKey);

    res.json({ publicKey }); // Отправляем только публичный ключ на фронтенд
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
