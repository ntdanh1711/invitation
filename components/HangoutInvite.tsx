"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function HangoutInvite() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [pickupTime, setPickupTime] = useState("");

  const noTexts = ["No", "Are you sure?", "Seriously?", "Pleaseeee", "Last chance!", "🙁 "];

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      const time = prompt("What time should I pick you up?");
      if (time) {
        setPickupTime(time);
        console.log(`Pickup time set to: ${time}`);
        setAccepted(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-6">
      {!accepted ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-bold mb-6 p-6 rounded-lg"
        >
          I understand you have plans tonight, but would you be open to a slight adjustment?
          <br/>
          Perhaps a delightful dinner instead?
        </motion.div>
      ) : (
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-white text-4xl font-bold mb-6 shadow-md p-6 rounded-lg bg-white/10"
        >
          🎉 Yay! See you at {pickupTime}! 🎉
        </motion.div>
      )}

      {!accepted ? (
        <div className="flex space-x-6 mt-4">
          <button
            className="px-8 py-4 text-xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transform hover:scale-110 transition"
            onClick={handleAccept}
          >
            Yes! 😊
          </button>
          {Math.min(noClickCount, noTexts.length - 1) !== noTexts.length -1 && <button
            className="px-8 py-4 text-xl font-bold bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transform hover:scale-110 transition"
            onClick={() => setNoClickCount(noClickCount + 1)}
          >
            {noTexts[Math.min(noClickCount, noTexts.length - 1)]}
          </button>}
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 80, damping: 5 }}
          className="text-white text-6xl font-extrabold mt-6 animate-bounce"
        >
          🎊🎊 WOOHOOO! 🎊🎊
        </motion.div>
      )}
    </div>
  );
}
