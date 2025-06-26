"use client";

import QRcode from "qrcode";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQrcode = async () => {
    if (!text.trim()) return;
    const url = await QRcode.toDataURL(text);
    setQrCode(url);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">QR Code Generator</h1>

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={generateQrcode}
          className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"
        >
          Generate QR Code
        </button>
      </div>

      {qrCode && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-48 h-48 rounded-lg shadow-lg shadow-blue-500/30"
          />
          <a
            href={qrCode}
            download="qr-code.png"
            className="text-blue-400 hover:text-blue-300 underline transition"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
}
