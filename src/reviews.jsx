import { useState, useEffect } from "react";

function Promo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const reviews = [
    {
      image: "src/clients/client1.jpg",
      name: "Yasmine Benkhalifa",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "I’ve been a member of this gym for over 6 months now, and I can confidently say that it's one of the best fitness centers I've ever been to. The equipment is top-notch, always clean, and well-maintained. The trainers are incredibly knowledgeable and always willing to help. Whether I need a personalized workout plan or some quick advice on proper form, they’re always available. The gym offers a wide range of classes from high-intensity interval training (HIIT) to yoga, and I love how they cater to all levels of fitness.",
    },
    {
      image: "src/clients/client2.jpg",
      name: "Rachid Amrani",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "As someone who’s been to various gyms, I can honestly say this one stands out. The staff is friendly, the gym is spacious and well-lit, and the trainers truly care about your progress. Their personalized training sessions are a game-changer. I’ve seen amazing improvements in strength and endurance, and the community atmosphere is unmatched.",
    },
    {
      image: "src/clients/client3.jpg",
      name: "Sabrina Djemai",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "I can’t recommend this gym enough! The variety of equipment, exceptional trainers, and engaging classes make every visit worthwhile. I’ve been coming here for a year now, and it has completely transformed my fitness level. The functional training area is particularly impressive, and the clean, vibrant atmosphere keeps me motivated.",
    },
  ];

  // Automatic slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Typing animation for description
  useEffect(() => {
    const currentDescription = reviews[currentIndex].description;
    let index = 0;
    const typeText = () => {
      if (index < currentDescription.length) {
        setTypedText(currentDescription.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    };
    setTypedText("");
    const typingInterval = setInterval(typeText, 20);
    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col  items-center min-h-screen relative px-6 py-12">
      <h1 className="text-white text-5xl flex font-title underline decoration-green-500 decoration-4 mb-20"><svg className="mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#22c55e
"><path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-733.33q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33v506.66q0 27-19.83 46.84Q840.33-240 813.33-240H240L80-80Zm131.33-226.67h602v-506.66H146.67v575l64.66-68.34Zm-64.66
       0v-506.66 506.66Z"/></svg>Clients Review</h1>
        
      <div className="w-full max-w-5xl bg-opacity-90 bg-black border-white border-solid border-2   rounded-lg shadow-lg p-8 sm:p-32  relative">
      <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-green-500 text-black p-3 rounded-full shadow-md hover:bg-green-400 transition"
          aria-label="Previous review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-green-500 text-black p-3 rounded-full shadow-md hover:bg-green-400 transition"
          aria-label="Next review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/* Navigation Buttons */}


        {/* Review Content */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-green-500"
            />
          </div>

          {/* Right: Review Text */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl text-white font-bold">
              {reviews[currentIndex].name}
            </h2>
            <p className="text-green-500 font-medium text-lg">
              {reviews[currentIndex].rating}
            </p>
            <p className="text-white mt-4 leading-relaxed">{typedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
