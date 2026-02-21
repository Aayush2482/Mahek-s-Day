import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function BirthdayPortfolio() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const correctPassword = "gudiya";

  /* 🎉 Opening Confetti */
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        particleCount: 6,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  /* 🤝 Slideshow Auto */
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const unlockSecret = () => {
    if (password.toLowerCase() === correctPassword) {
      setUnlocked(true);
      confetti({
        particleCount: 250,
        spread: 150,
        origin: { y: 0.6 },
      });
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 600);
    }
  };

  /* 💖 Floating Hearts */
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 20 });

    return (
      <>
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -800,
              opacity: [0, 1, 1, 0],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-400 text-2xl pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
            }}
          >
            💖
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-200 text-gray-800 overflow-x-hidden">


      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <FloatingHearts />

        {/* ✨ FOLLOW THROUGH GLIMPSE IMAGES */}
        {[1,2,3].map((_, i) => (
          <motion.img
            key={i}
            src={`https://source.unsplash.com/200x200/?birthday,girl&sig=${i}`}
            alt=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 2, delay: i }}
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-xl object-cover"
            style={{
              top: `${20 + i * 20}%`,
              left: i % 2 === 0 ? "5%" : "80%",
            }}
          />
        ))}

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold text-pink-600 drop-shadow-2xl"
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-5xl md:text-7xl mt-6 font-serif italic text-purple-700"
        >
          MAHEK
        </motion.h2>
      </section>

      {/* BIRTHDAY JOURNEY */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-pink-600">
          Your Beautiful Journey 🌸
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "✨ Favourite Things", text: "Coffee, soft music, late night talks." },
            { title: "💖 Likes & Dislikes", text: "Loves honesty & loyalty." },
            { title: "🦸 Superpower", text: "Making everyone feel special." },
            { title: "🌟 Dreams & Destiny", text: "To shine and achieve big dreams." },
          ].map((item, index) => (
            <div key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
                className="bg-white/70 p-6 rounded-3xl shadow-xl cursor-pointer"
              >
                <h4 className="font-bold text-purple-700">
                  {item.title}
                </h4>
                <p>{item.text}</p>
              </motion.div>

              {activeCard === index && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={`https://source.unsplash.com/400x300/?happy,girl&sig=${index}`}
                  alt=""
                  className="mt-4 rounded-2xl shadow-lg mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FRIENDSHIP SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-purple-600 text-center">
          Our Friendship 🤝
        </h3>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-6 text-lg leading-relaxed">
              From random hello to endless conversations, our journey has been
              filled with laughter and unforgettable memories.
            </p>
            <p className="text-lg leading-relaxed">
              You became my safe place, my happiness, and someone who makes
              every ordinary day extraordinary.
            </p>
          </div>

          {/* Slideshow */}
          <div className="relative w-full h-80 overflow-hidden rounded-3xl shadow-2xl">
            <motion.img
              key={slideIndex}
              src={`https://source.unsplash.com/600x400/?bestfriends&sig=${slideIndex}`}
              alt=""
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SURPRISE BUTTON */}
      <section className="py-20 text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="bg-purple-600 text-white px-10 py-4 rounded-full text-lg shadow-2xl"
        >
          🎁 Surprise Is Not Over Yet
        </motion.button>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full shadow-2xl text-center relative overflow-y-auto max-h-[90vh]">


            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✖
            </button>

            {!unlocked ? (
              <>
                <h3 className="text-2xl font-bold mb-4">
                  Enter the Secret Password 💝
                </h3>

                <motion.input
                  type="password"
                  placeholder="Hint: Your nickname 😉"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  animate={wrong ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="w-full p-3 rounded-full border text-center"
                />

                <button
                  onClick={unlockSecret}
                  className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full"
                >
                  Unlock
                </button>
              </>
            ) : (
  <>
    {/* 💌 REAL LETTER DESIGN */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 bg-[#fdf6e3] p-10 rounded-lg shadow-inner text-left font-serif leading-relaxed border border-yellow-300"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
      }}
    >
      <h3 className="text-3xl font-bold mb-6 text-center text-pink-600">
        A Letter From My Heart 💌
      </h3>

      <p className="mb-4">
        My dearest,
      </p>

      <p className="mb-4">
        On your special day, I just want you to know how incredibly
        precious you are to me. You are not just my best friend —
        you are my comfort, my happiness, and my biggest blessing.
      </p>

      <p className="mb-4">
        From our random conversations to our deep talks, every
        moment with you feels special. Your smile has the power to
        brighten even my darkest days.
      </p>

      <p className="mt-6 text-right">
        Forever grateful for you ❤️
      </p>
    </motion.div>

    {/* 🗺️ GOOGLE MAP INSIDE SURPRISE */}
    <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl">
      <h4 className="text-2xl font-bold mb-4 text-center text-purple-700">
        Our Special Place 🗺️
      </h4>

      <iframe
       
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60275.03045149992!2d72.73924705520552!3d19.23057553131078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b3001a72d9eb%3A0xdb8faded6cf5b95!2sHappy%20Place!5e0!3m2!1sen!2sin!4v1771633926684!5m2!1sen!2sin"
        title="Happy Place"
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        className="rounded-2xl"
      ></iframe>
    </div>
  </>
)}
          </div>
        </div>
      )}

      <footer className="text-center py-16 text-purple-800 font-semibold text-lg">
        Made with endless love just for you 💖 Happy Birthday 🎂
      </footer>
    </div>
  );
}
