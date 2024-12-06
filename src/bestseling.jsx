import React, { useState } from 'react';
import Header from './header';
import Panier from './Panier';


function Best() {
  // Use state to manage visibility of the "show" div and selected food
  const [isVisible, setIsVisible] = useState(false);
  const[isvis,setisvis] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const[selectbest,setselectbest]=useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [product, setProduct] = useState({
    name: "",
    price: "",
    picture: ""
  });
  
  const handleOrderNow = (name, price, picture) => {
    setProduct({
      name: name,
      price: price,
      picture: picture
    });

  };

  const bestfood = [
    {
      name: "Adjustable Dumbbell Set",
      description: "Adjustable dumbbells that range from 5 to 52.5 lbs. Perfect for all strength training exercises.",
      price: 299.99,
      picture: "src/dumbbell.jpg"
    },
    {
      name: "Resistance Bands Set",
      description: "A durable set of resistance bands with varying resistance levels. Ideal for strength and mobility training.",
      price: 39.99,
      picture: "src/resistancebands.jpg"
    },
    {
      name: "Foam Roller",
      description: "High-density foam roller for muscle recovery and tension relief. Great for post-workout stretching.",
      price: 19.99,
      picture: "src/foamroller.jpg"
    },
    {
      name: "Yoga Mat",
      description: "Non-slip yoga mat with excellent cushioning. Offers a stable surface for yoga, Pilates, and floor exercises.",
      price: 29.99,
      picture: "src/yogamat.jpg"
    },
    {
      name: "Adjustable Kettlebell",
      description: "Adjustable kettlebell with weight options ranging from 5 to 40 lbs. Versatile for various workouts and strength training.",
      price: 129.99,
      picture: "src/kettlebell.jpg"
    },
    {
      name: "Jump Rope",
      description: "Speed jump rope for cardio workouts. Adjustable length and lightweight for a smooth, fast rhythm.",
      price: 14.99,
      picture: "src/jumprope.jpg"
    },
    {
      name: "Resistance Loop Bands",
      description: "Set of 5 resistance loop bands. Perfect for strengthening and toning the legs, glutes, and arms.",
      price: 16.99,
      picture: "src/resistanceloop.jpg"
    },
    {
      name: "Protein Powder (Chocolate)",
      description: "High-quality protein powder with 25g of protein per serving. Ideal for muscle recovery and growth.",
      price: 39.99,
      picture: "src/protein.jpg"
    }
  
  ];
  

  
  
  const food = [
    {
      title: "Gym Gear & Apparel",
      description: "Clothing and accessories designed for comfort and performance during workouts.",
      items: [
        {
          name: "Gym Shorts",
          description: "Comfortable shorts for your workouts.",
          price: 25.00,
          picture: "src/gym/gear1.jpg"
        },
        {
          name: "Compression Shirt",
          description: "Tight-fitting shirt to improve performance.",
          price: 30.00,
          picture: "src/gym/gear2.jpg"
        },
        {
          name: "Training Shoes",
          description: "Shoes designed for high-impact training.",
          price: 75.00,
          picture: "src/gym/gear3.jpg"
        },
        {
          name: "Sports Bra",
          description: "Supportive sports bra for intense workouts.",
          price: 20.00,
          picture: "src/gym/gear4.jpg"
        }
      ]
    },
    {
      title: "Protein & Supplements",
      description: "Nutritional supplements to support muscle growth, endurance, and recovery.",
      items: [
        {
          name: "Whey Protein",
          description: "High-quality protein for muscle recovery.",
          price: 40.00,
          picture: "src/supplements/protein1.jpg"
        },
        {
          name: "BCAA Powder",
          description: "Branched-chain amino acids to boost endurance.",
          price: 25.00,
          picture: "src/supplements/protein2.jpg"
        },
        {
          name: "Creatine Monohydrate",
          description: "Supports muscle growth and strength.",
          price: 20.00,
          picture: "src/supplements/protein3.jpg"
        },
        {
          name: "Pre-workout Supplement",
          description: "Boosts energy and focus before exercise.",
          price: 30.00,
          picture: "src/supplements/protein4.jpg"
        }
      ]
    },
    {
      title: "Fitness Tools & Equipment",
      description: "Tools and equipment to enhance your workouts, from resistance training to yoga.",
      items: [
        {
          name: "Resistance Bands",
          description: "Portable resistance bands for strength training.",
          price: 15.00,
          picture: "src/tools/equipment1.jpg"
        },
        {
          name: "Dumbbells Set",
          description: "Set of adjustable dumbbells for home workouts.",
          price: 50.00,
          picture: "src/tools/equipment2.jpg"
        },
        {
          name: "Kettlebell",
          description: "Versatile kettlebell for full-body training.",
          price: 35.00,
          picture: "src/tools/equipment3.jpg"
        },
        {
          name: "Yoga Mat",
          description: "Non-slip mat for yoga and stretching.",
          price: 20.00,
          picture: "src/tools/equipment4.jpg"
        }
      ]
    },
    {
      title: "Recovery & Wellness",
      description: "Products focused on recovery, muscle relaxation, and overall well-being.",
      items: [
        {
          name: "Massage Gun",
          description: "Percussion massager for muscle recovery.",
          price: 100.00,
          picture: "src/recovery/massagegun1.jpg"
        },
        {
          name: "Epsom Salt",
          description: "Relaxing bath salt to soothe sore muscles.",
          price: 10.00,
          picture: "src/recovery/epsomsalt1.jpg"
        },
        {
          name: "CBD Oil",
          description: "Natural oil for muscle relief and relaxation.",
          price: 40.00,
          picture: "src/recovery/cbd1.jpg"
        },
        {
          name: "Post-Workout Recovery Shake",
          description: "Protein shake designed for post-exercise recovery.",
          price: 35.00,
          picture: "src/recovery/recoveryshake1.jpg"
        }
      ]
    },
    {
      title: "Strength Training",
      description: "Essential equipment for building strength, from barbells to pull-up bars.",
      items: [
        {
          name: "Barbell Set",
          description: "Heavy-duty barbell set for powerlifting.",
          price: 150.00,
          picture: "src/strength/barbell1.jpg"
        },
        {
          name: "Weight Plates",
          description: "High-quality weight plates for various lifts.",
          price: 60.00,
          picture: "src/strength/plates1.jpg"
        },
        {
          name: "Squat Rack",
          description: "Adjustable squat rack for safe heavy lifting.",
          price: 200.00,
          picture: "src/strength/squatrack1.jpg"
        },
        {
          name: "Pull-Up Bar",
          description: "Sturdy pull-up bar for bodyweight exercises.",
          price: 50.00,
          picture: "src/strength/pullup1.jpg"
        }
      ]
    },
    {
      title: "Yoga & Flexibility",
      description: "Products to enhance your yoga practice and improve flexibility.",
      items: [
        {
          name: "Yoga Blocks",
          description: "Supportive blocks for improving flexibility.",
          price: 15.00,
          picture: "src/yoga/blocks1.jpg"
        },
        {
          name: "Foam Roller",
          description: "Foam roller to improve flexibility and muscle recovery.",
          price: 25.00,
          picture: "src/yoga/roller1.jpg"
        },
        {
          name: "Stretching Strap",
          description: "Strap for deep stretching and flexibility training.",
          price: 12.00,
          picture: "src/yoga/strap1.jpg"
        },
        {
          name: "Yoga Bolster",
          description: "Soft bolster for added support in restorative poses.",
          price: 30.00,
          picture: "src/yoga/bolster1.jpg"
        }
      ]
    }
  ];
  
  
  
  
  
  

  // Toggle visibility when an image is clicked and set the selected food
  const handleImageClick = (index) => {
    setSelectedFood(food[index]); // Get food data by index
    setIsVisible(!isVisible); // Toggle visibility
  };
  const handleImageClick1 = (index) => {
    setselectbest(bestfood[index]); // Get food data by index
    setisvis(!isvis); // Toggle visibility
  };
  const hideit = ()=>{
    setisvis(false);
  };



 const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Find the category within food that is selected
  const currentCategory = food.find((category) => category.title === selectedFood?.title);

  // Filter the items based on the search term inside the selected category
  const filteredItems = currentCategory?.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm));
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll
    });
  };
 

  

 

  return (
    <>
    <Panier name={product.name} prix={product.price} picture={product.picture}  />

  
   

      <div className="relative mt-1 mb-1 bg-gradient-to-b from-black via-gray-900 to-gray-800     ">
      <div className='flex  justify-center items-center '>
      <button className=' fixed z-20 right-2 bottom-4 border-e-red-500 '
      onClick={scrollToTop}
      
      
      ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#10B981"><path d="M440-320h80v-168l64 64 56-56-160-160-160 
      160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 
      0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
    </div>
      <div className="text-center pt-20 mb-16">
  <h1 className="flex  justify-center items-center text-5xl text-white font-bold font-title underline decoration-green-500 decoration-4  mb-20">
    Categories
    <svg
      className="ml-4"
      xmlns="http://www.w3.org/2000/svg"
      height="46px"
      viewBox="0 -960 960 960"
      width="46px"
      fill="#10B981" // Adjust color to match theme
    >
      <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 
        56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" />
    </svg>
  </h1>
</div>

<ul className="mt-16 px-8 mx-auto sm:mx-60  sm:px-16 grid gap-8 md:gap-12 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center items-center">
  {/* Category 1 */}
  <li
    className="text-center font-title hover:cursor-pointer text-2xl md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
    onClick={() => handleImageClick(0)}
  >
    <img
      src="src/categorie1.jpg"
      alt="Gym Gear & Apparel"
      className="mb-6 h-64 w-full object-cover rounded-lg"
    />
    <h2 className="text-green-400">Gym Gear & Apparel</h2>
  </li>

  {/* Category 2 */}
  <li
    className="text-center font-title hover:cursor-pointer text-2xl md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
    onClick={() => handleImageClick(1)}
  >
    <img
      src="src/gategorie2.jpg"
      alt="Protein & Supplements"
      className="mb-6 h-64 w-full object-cover rounded-lg"
    />
    <h2 className="text-green-400">Protein & Supplements</h2>
  </li>

  {/* Category 3 */}
  <li
    className="text-center font-title text-2xl hover:cursor-pointer md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
    onClick={() => handleImageClick(2)}
  >
    <img
      src="src/categorie3.jpg"
      alt="Fitness Tools & Equipment"
      className="mb-6 h-64 w-full object-cover rounded-lg"
    />
    <h2 className="text-green-400">Fitness Tools & Equipment</h2>
  </li>

  {/* Category 4 */}
  <li
    className="text-center font-title text-2xl hover:cursor-pointer md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
    onClick={() => handleImageClick(3)}
  >
    <img
      src="src/categorie4.jpg"
      alt="Recovery & Wellness"
      className="mb-6 h-64 w-full object-cover rounded-lg"
    />
    <h2 className="text-green-400">Recovery & Wellness</h2>
  </li>
  <li
  className="text-center font-title text-2xl hover:cursor-pointer md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
  onClick={() => handleImageClick(4)}
>
  <img
    src="src/strenght.jpg"
    alt="Strength Training"
    className="mb-6 h-64 w-full object-cover rounded-lg"
  />
  <h2 className="text-green-400">Strength Training</h2>

</li>

<li
  className="text-center font-title text-2xl hover:cursor-pointer md:text-3xl transform transition hover:scale-105 hover:shadow-2xl bg-gray-800 rounded-xl p-6"
  onClick={() => handleImageClick(5)}
>
  <img
    src="src/categorie5.jpg"
    alt="Yoga & Flexibility"
    className="mb-6 h-64 w-full object-cover rounded-lg"
  />
  <h2 className="text-green-400">Yoga & Flexibility</h2>
 
</li>

</ul>



        <div className="mt-36">
  <div className=" pb-20 flex-col   px-10 py-5 mt-10 relative ">
  <div
  style={{
    display: isvis ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 50,
    width: "90%",
    maxWidth: "600px",
    borderRadius: "12px",
    backgroundColor: "black", // Black background for contrast
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Professional shadow
    color: "white", // White text for readability
  }}
  className="rounded-md overflow-hidden"
>
  {/* Header Section */}
  <div className="flex justify-between items-center px-6 py-4 bg-green-500 text-black font-bold">
    <h2 className="text-xl">Iron Pulse Center</h2>
    <button
      onClick={() => handleImageClick1()}
      className="text-black hover:text-white transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    </button>
  </div>

  {/* Content Section */}
  <div className="px-8 py-6 flex flex-col items-center text-center">
    {selectbest && (
      <>
        <img
          src={selectbest.picture}
          alt={selectbest.name}
          className="w-40 h-40 rounded-lg mb-4 border-2 border-green-500"
        />
        <h3 className="text-2xl font-bold mb-2">{selectbest.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{selectbest.description}</p>
        <p className="text-xl font-bold text-green-500 mb-6">
          {selectbest.price}$
        </p>
        <button
          onClick={() => {
            handleOrderNow(selectbest.name, selectbest.price, selectbest.picture);
            hideit();
          }}
          className="px-6 py-3 bg-green-500 text-black rounded-lg font-bold hover:bg-green-700 transition-all"
        >
          Add to Cart
        </button>
      </>
    )}
  </div>
</div>




<div className="py-12  bg-black bg-opacity-70">
  {/* Header Section */}
  <div className="text-center mb-10">
    <h1 className="flex justify-center items-center text-5xl font-bold font-title underline decoration-green-500 decoration-4 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="42px"
        viewBox="0 -960 960 960"
        width="42px"
        fill="#10B981"
        className="mr-4"
      >
        <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
      </svg>
      Top Fitness Picks
    </h1>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center hover:cursor-pointer gap-8 px-8 font-title">
    {/* Product Cards */}
    {[
      {
        image: "src/dumbbell.jpg",
        title: "Adjustable Dumbbell Set",
        price: "$299.99",
        description:
          "Adjustable dumbbells that range from 5 to 52.5 lbs. Perfect for all strength training exercises.",
        onClick: () => handleImageClick1(0),
      },
      {
        image: "src/resistancebands.jpg",
        title: "Resistance Bands Set",
        price: "$39.99",
        description:
          "A durable set of resistance bands with varying resistance levels. Ideal for strength and mobility training.",
        onClick: () => handleImageClick1(1),
      },
      {
        image: "src/foamroller.jpg",
        title: "Foam Roller",
        price: "$19.99",
        description:
          "High-density foam roller for muscle recovery and tension relief. Great for post-workout stretching.",
        onClick: () => handleImageClick1(2),
      },
      {
        image: "src/yogamat.jpg",
        title: "Yoga Mat",
        price: "$29.99",
        description:
          "Non-slip yoga mat with excellent cushioning. Offers a stable surface for yoga, Pilates, and floor exercises.",
        onClick: () => handleImageClick1(3),
      },
      {
        image: "src/kettlebell.jpg",
        title: "Adjustable Kettlebell",
        price: "$129.99",
        description:
          "Adjustable kettlebell with weight options ranging from 5 to 40 lbs. Versatile for various workouts and strength training.",
        onClick: () => handleImageClick1(4),
      },
      {
        image: "src/jumprope.jpg",
        title: "Jump Rope",
        price: "$14.99",
        description:
          "Speed jump rope for cardio workouts. Adjustable length and lightweight for a smooth, fast rhythm.",
        onClick: () => handleImageClick1(5),
      },
      {
        image: "src/resistanceloop.jpg",
        title: "Resistance Loop Bands",
        price: "$16.99",
        description:
          "Set of 5 resistance loop bands. Perfect for strengthening and toning the legs, glutes, and arms.",
        onClick: () => handleImageClick1(6),
      },
      {
        image: "src/protein.jpg",
        title: "Protein Powder (Chocolate)",
        price: "$39.99",
        description:
          "High-quality protein powder with 25g of protein per serving. Ideal for muscle recovery and growth.",
        onClick: () => handleImageClick1(7),
      },
    ].map((product, index) => (
      <div
        key={index}
        className="text-white border-2 border-gray-800 bg-black rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        onClick={product.onClick}
      >
        <div className="flex px-6 py-4 items-center">
          <img
            src={product.image}
            alt={product.title}
            className="mr-4 rounded-lg object-cover w-24 h-24"
          />
          <div>
            <h2 className="text-2xl font-semibold text-left">{product.title}</h2>
            <p className="text-xl font-bold text-left text-green-400">{product.price}</p>
          </div>
        </div>
        <div className="px-6 pb-6">
          <p className="text-lg text-gray-400">{product.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  </div>
</div>


        {/* Conditional Display Using Inline Style */}
        <div
  style={{
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    inset: '0',
    zIndex: '50',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
  }}
  className="w-full h-full flex justify-center items-center px-4 md:px-8 py-8"
>
  <div className="w-full pt-24 px-10 relative h-full flex flex-col md:flex-row bg-black bg-opacity-90 rounded-xl shadow-xl overflow-hidden">
    {/* Category Section */}
    <div className="flex flex-col w-full md:w-1/3 ">
      <h2 className="text-3xl text-green-500 font-bold mb-2">{selectedFood?.title}</h2>
      <p className="text-xl text-white font-bold mb-2">{selectedFood?.description}</p>

      {/* Input field for search */}
   
    </div>

    {/* Product List Section */}
    <div className="w-full md:w-3/4 p-6 overflow-y-auto flex flex-col gap-6">
      <div className="flex justify-between items-center mb-4">
        {/* Close Button */}
        <button
          className="text-white text-2xl absolute right-8 top-4"
          onClick={handleImageClick}
          aria-label="Close"
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

      {/* Filtered Product List */}
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mt-2 bg-black text-white border border-gray-500 rounded-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    
        {filteredItems?.length === 0 ? (
          <p className="text-white text-xl">No products found</p>
        ) : (
          filteredItems?.map((item, index) => (
            <div
              key={index}
              className="flex relative min-w-40  pb-14 flex-col items-center bg-black bg-opacity-80 p-4 rounded-lg shadow-lg border-2 border-gray-700"
            >
              {/* Item Image */}
              <img
                src={item.picture}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
              />

              {/* Item Details */}
              <div className="mt-4  text-center">
                <h3 className="text-2xl text-green-500 font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-300 mb-12">{item.description}</p>
               
              </div>

              {/* Order Button */}


              <div className='flex flex-col items-center absolute bottom-4  '>

              <div className="mt-4   text-xl text-green-500 font-semibold">{item.price}$</div>
              <button
                className="mt-4 px-6  py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-700 hover:text-white transition-colors duration-200"
                onClick={() => {
                  handleOrderNow(item.name, item.price, item.picture);
                  alert(item.name+'has been successfully added')
                  hideit();
                }}
              >
                 
                Order Now
              </button>
              
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
</div>










 



      </div>
    </>
  );
}

export default Best;
