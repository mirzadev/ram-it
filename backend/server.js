const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
// install multer      npm install multer nodemailer express cors
// then use this command  node server.js
// install----    npm install dotenv

// Middleware
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/apply", upload.single("resume"), async (req, res) => {
  const { name, email, message } = req.body;
  const resume = req.file;

  if (!resume) {
    return res.status(400).json({ message: "No resume file uploaded." });
  }

  // ✅ Use your Gmail and App Password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ramitservice2024@gmail.com",
      pass: "egkn bjlt sulv gyrc", // 🔐 Use App Password!
    },
  });

  const mailOptions = {
    from: "ramitservice2024@gmail.com",
    to: "ramitservice2024@gmail.com", // Receiver
    subject: `New Job Application from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    attachments: [
      {
        filename: resume.originalname,
        content: resume.buffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("Mail send error:", error);
    res.status(500).json({ message: "❌ Failed to send message.", error });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
