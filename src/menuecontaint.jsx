import { useState } from "react";

function Menuecontain() {
  const items = [
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle and strength with our expert-designed program.",
      image: "src/programe1.jpg",
      details: "This program focuses on heavy lifting and strength-building exercises. It includes squats, deadlifts, and bench presses, all with a focus on progressive overload to maximize muscle growth. Over time, the program will help you increase your strength and muscle mass, making you more powerful and resilient in everyday activities.",
      price: "$40 per month",
    },
    {
      id: 2,
      title: "Cardio Burn",
      description: "A high-intensity cardio program designed to burn fat.",
      image: "src/programe2.jpg",
      details: "Includes HIIT sessions, running, cycling, and jump rope exercises that are designed to elevate your heart rate and maximize fat burn. This program improves cardiovascular health, boosts metabolism, and increases endurance, ensuring you get the best results in the shortest amount of time.",
      price: "$30 per month",
    },
    {
      id: 3,
      title: "Yoga for Beginners",
      description: "A gentle yoga program for relaxation and flexibility.",
      image: "src/programe3.jpg",
      details: "Focuses on mindfulness, flexibility, and reducing stress through yoga. It offers a calm and nurturing environment for beginners to explore poses, breathing techniques, and meditation practices. As you progress, you’ll notice enhanced flexibility, improved posture, and a more balanced mind and body.",
      price: "$20 per month",
    },
    {
      id: 4,
      title: "Pilates",
      description: "Improve core strength and stability with Pilates.",
      image: "src/programe4.jpg",
      details: "Strengthen your body with Pilates-based movements and breathing techniques. This program focuses on strengthening the core, improving posture, and enhancing balance. Pilates exercises engage both the body and mind to create a harmonious workout that targets muscles in a way that’s gentle on the joints but highly effective for toning and sculpting.",
      price: "$25 per month",
    },
    {
      id: 5,
      title: "Advanced Strength Training",
      description: "Take your strength training to the next level.",
      image: "src/programe5.jpg",
      details: "Advanced techniques focusing on compound lifts and muscular endurance. This program is designed for experienced lifters who are ready to push their limits. It incorporates heavier weights, more complex exercises, and intensity techniques such as drop sets and supersets, all to challenge your muscles and help you break through plateaus.",
      price: "$50 per month",
    },
    {
      id: 6,
      title: "HIIT Training",
      description: "High-intensity interval training for quick results.",
      image: "src/programe6.jpg",
      details: "Short bursts of intense exercise followed by recovery periods to maximize fat burning. HIIT helps you burn fat and build muscle in the shortest amount of time. It combines cardio, strength, and endurance training for a full-body workout that’s guaranteed to improve your fitness level and increase calorie burn long after the workout ends.",
      price: "$35 per month",
    },
    {
      id: 7,
      title: "Nutrition Coaching",
      description: "Get personalized nutrition advice and meal planning.",
      image: "src/programe7.jpg",
      details: "Work with an expert to create a nutrition plan tailored to your goals. Whether you aim to lose weight, gain muscle, or improve your overall health, this coaching service offers personalized advice on food choices, meal timing, portion control, and supplementation. Stay on track and achieve your goals faster with expert guidance.",
      price: "$40 per month",
    },
    {
      id: 8,
      title: "Cycling Program",
      description: "Improve endurance and strength with cycling sessions.",
      image: "src/programe8.jpg",
      details: "Build cardiovascular endurance and leg strength with structured cycling workouts. This program includes interval training, long-distance rides, and hill climbs to improve your cycling performance. Whether you're a beginner or an experienced cyclist, this program will help you increase your stamina, strength, and pedal power.",
      price: "$30 per month",
    },
    {
      id: 9,
      title: "Flexibility & Mobility",
      description: "Increase your flexibility and reduce muscle tightness.",
      image: "src/programe9.jpg",
      details: "Stretching and mobility exercises designed to improve range of motion and reduce injuries. This program focuses on increasing flexibility, improving joint mobility, and alleviating tension in the muscles. It’s perfect for athletes, office workers, or anyone looking to improve their movement quality and reduce discomfort caused by tight muscles.",
      price: "$25 per month",
    },
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const showProgramDetails = (program) => {
    setSelectedProgram(program);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setSelectedProgram(null);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <>
      <div className="program-page text-white p-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 flex justify-center">
      <div className='flex  justify-center items-center '>
      <button className=' fixed z-20 right-2 bottom-4 border-e-red-500 '
      onClick={scrollToTop}
      
      
      ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#10B981"><path d="M440-320h80v-168l64 64 56-56-160-160-160 
      160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 
      0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
    </div>
        <div className="programs-container">
          <h1 className="text-4xl font-bold text-green-500 mb-6">Our Programs</h1>

          {/* Program List - 9 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {items.map((program) => (
              <div key={program.id} className="program-card hover:cursor-pointer bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl text-green-500 font-semibold">{program.title}</h3>
                <p className="text-gray-300">{program.description}</p>
                <div className="mt-4 text-xl text-green-500">{program.price}</div>
                <button
                  className="mt-4 px-6 py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-700 transition-colors duration-200"
                  onClick={() => showProgramDetails(program)}
                >
                  See more
                </button>
              </div>
            ))}
          </div>

          {/* Modal for program details */}
          {isVisible && selectedProgram && (
          <div
          style={{
            display: isVisible ? 'block' : 'none',
            position: 'fixed',
            inset: '0',
            zIndex: '50',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
          className="w-full h-full flex relative justify-center items-center px-4 md:px-8 py-8"
        >

                <div className="flex justify-between items-center mb-4 relative">
                {/* Close Button */}
                <button
                  className="text-white text-3xl absolute right-4 top-8"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg
                    className="hover:fill-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="10 -960 960 960"
                    width="28px"
                    fill="#FFFFFF"
                  >
                    <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0-83-31.5-156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                  </svg>
                </button>
              </div>
          <div className="w-full  h-full pt-24 px-10   flex flex-col md:flex-row bg-black bg-opacity-90 rounded-xl shadow-xl overflow-hidden">
            
            {/* Left Section (Program Details) */}
              <div className="flex flex-col w-full md:w-1/3 ">
              <h2 className="text-4xl text-green-500 font-bold mb-4">{selectedProgram.title}</h2>
              <p className="text-lg text-white mb-6">{selectedProgram.description}</p>
              <p className="text-white mb-6">{selectedProgram.details}</p>
              <div className="text-xl text-green-500 font-semibold">{selectedProgram.price}</div>
              </div>
      
        
            {/* Right Section (Image and Close Button) */}
            <div className="w-full md:w-2/3 p-6 overflow-y-auto flex flex-col gap-6 bg-black bg-opacity-20">
        
        
              {/* Program Image */}
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full max-w-sm object-cover rounded-lg shadow-lg"
                />
                <button
  className="mt-4 px-6 py-2 bg-green-500 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 text-black rounded-lg font-bold hover:bg-green-700 transition-colors duration-200"
  onClick={() => showProgramDetails(program)}
>
  Join Now
</button>

                
              </div>
             
            </div>
          </div>
        </div>
        
          )}
        </div>
      </div>
    </>
  );
}

export default Menuecontain;
