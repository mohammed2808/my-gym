import { useState, useEffect } from "react";

function Coach() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const coaches = [
    {
      image: "src/coach1.jpg",
      name: "Coach Yasmine Benkhalifa",
      title: "Certified Personal Trainer & Strength Coach",
      description:
        "Coach Yasmine is a certified personal trainer with over 5 years of experience helping individuals achieve their fitness goals. She specializes in strength training and injury prevention, with a passion for empowering clients to build confidence and strength through tailored programs.",
    },
    {
      image: "src/coach2.jpg",
      name: "Coach Rachid Amrani",
      title: "Functional Training Specialist & Nutrition Expert",
      description:
        "Coach Rachid brings a unique approach to fitness with a combination of functional training and personalized nutrition plans. He has over 8 years of experience in helping clients transform their bodies and minds.",
    },
    {
      image: "src/coach3.jpg",
      name: "Coach Sabrina Djemai",
      title: "Yoga Instructor & Wellness Coach",
      description:
        "Coach Sabrina is a certified yoga instructor and wellness coach with a focus on mind-body connection and holistic health. With 6 years of experience, Sabrina teaches yoga, mindfulness, and stress management techniques to help clients enhance their flexibility, mental clarity, and overall well-being.",
    },
  ];

  // Automatic Slide Change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(timer);
  }, [coaches.length]);

  // Typing Animation
  useEffect(() => {
    const currentDescription = coaches[currentIndex].description;
    let index = 0;

    const typeText = () => {
      if (index < currentDescription.length) {
        setTypedText(currentDescription.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    };

    setTypedText(""); // Reset the text before starting
    const typeInterval = setInterval(typeText, 10); // Typing speed: 50ms per character

    return () => clearInterval(typeInterval); // Cleanup on slide or unmount
  }, [currentIndex]);

  // Handlers for manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="coach h-[100vh] mb-1   bg-[url('src/coachback.jpg')] bg-cover flex justify-center items-center z-0 relative px-4 py-8">
      {/* Coach Profile Section */}
      <div
        className="coach-profile relative flex flex-col justify-center items-center w-full sm:w-4/5 lg:w-3/5 h-auto lg:h-4/5 bg-black bg-opacity-90 p-6 sm:p-8 rounded-md"
        style={{ zIndex: 1 }}
      >
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
        {/* Navigation Arrows */}
     

        {/* Left Section (Image and Titles) */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/3 mb-4 sm:mb-0">
        
          <img
            src={coaches[currentIndex].image}
            alt={`coach${currentIndex + 1}`}
            className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover mb-3"
          />
          <h2 className="text-lg sm:text-xl text-white text-center font-semibold">
            {coaches[currentIndex].name}
          </h2>
          <h3 className="text-sm sm:text-lg text-green-500 mt-1 text-center mb-4">
            {coaches[currentIndex].title}
          </h3>
        </div>

        {/* Right Section (Description) */}
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-2/3 pl-4">
          <p className="text-white text-sm sm:text-base w-full text-center sm:text-left leading-relaxed">
            {typedText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coach;
