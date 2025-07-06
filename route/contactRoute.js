const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
    console.log("✅ Backend'e Gelen Form Verisi:", req.body); // 📌 Burada form verisini kontrol ediyoruz

    if (!req.body || Object.keys(req.body).length === 0) {
        console.log("❌ HATA: Backend'e gelen veri BOŞ!");
        return res.status(400).json({ msg: "Sunucu, boş veri aldı!" });
    }

    let { name, email, message } = req.body;

    if (!name || !email || !message) {
        console.log("⚠️ Eksik Alanlar:", req.body);
        return res.status(400).json({ msg: "Lütfen tüm alanları doldurun!" });
    }

    let smtpTransporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Message from ${name}`,
        html: `
            <h3>Bilgiler</h3>
            <ul>
                <li><strong>Ad:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <h3>Mesaj</h3>
            <p>${message}</p>
        `,
    };

    smtpTransporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error("❌ Email Gönderim Hatası:", error);
            return res.status(500).json({ msg: "Mail gönderilirken hata oluştu" });
        }
        res.status(200).json({ msg: "Mesaj başarıyla gönderildi!" });
    });
});

module.exports = router;
