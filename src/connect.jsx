import { useState } from "react";

function Connect() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const changeName = (event) => setName(event.target.value);
  const changeDateOfBirth = (event) => setDateOfBirth(event.target.value);
  const changePhone = (event) => setPhone(event.target.value);
  const changeEmail = (event) => setEmail(event.target.value);

  const confirm = () => {
    alert("Membership confirmed for: " + name);
    setFormVisible(false);
    setName("");
    setDateOfBirth("");
    setPhone("");
    setEmail("");
  };

  const plans = [
    {
      name: "Normal Plan",
      price: "$30/month",
      description: "Ideal for those looking to stay active and healthy.",
      benefits: [
        "Access to gym equipment",
        "Locker facility",
        "One group class per week",
      ],
    },
    {
      name: "VIP Plan",
      price: "$60/month",
      description: "Perfect for those who want more flexibility and luxury.",
      benefits: [
        "All Normal Plan benefits",
        "Unlimited group classes",
        "Priority customer service",
        "Access to spa facilities",
      ],
    },
    {
      name: "Elite Plan",
      price: "$100/month",
      description: "For the serious fitness enthusiast with premium perks.",
      benefits: [
        "All VIP Plan benefits",
        "Personal trainer sessions",
        "Diet consultation",
        "Exclusive merchandise",
      ],
    },
  ];

  return (
    <div id="membership" className=" relative border-2 border-solid bg-gradient-to-b from-gray-800 via-gray-900 to-black border-black items-center justify-center flex flex-col py-20 mt-1 w-full mb-1">

      <div className="text-center mb-12">
        <h1 className="text-white text-5xl font-bold flex items-center justify-center font-title mb-12 underline decoration-green-500 decoration-4">
          <svg
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#22c55e
"
          >
            <path d="M160-440v80h640v-80H160Zm0-440h640q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H640v200l-160-80-160 80v-200H160q-33 0-56.5-23.5T80-360v-440q0-33 23.5-56.5T160-880Zm0 320h640v-240H160v240Zm0 200v-440 440Z" />
          </svg>
          Membership Plans
        </h1>
      </div>

      {/* Membership Plans Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-10 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between py-12 px-8 bg-gray-900 text-white rounded-lg shadow-2xl transition transform hover:scale-105 hover:shadow-xl w-full"
          >
            {/* Plan Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 text-green-400">
              {plan.name}
            </h2>

            {/* Plan Price */}
            <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
              {plan.price}
            </p>

            {/* Plan Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 text-center">
              {plan.description}
            </p>

            {/* Plan Benefits */}
            <ul className="text-xs sm:text-sm md:text-base space-y-2 mb-8 text-gray-400">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2 mb-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2 4.8 12l-1.4 1.4 5.6 5.6L20.2 8.8 18.8 7.4z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Select Plan Button */}
            <button
              className="absolute bottom-8  bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => {
                setSelectedPlan(plan.name);
                setFormVisible(true);
              }}
            >
              Select {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* Input Form */}
      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex z-20 justify-center items-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-xl w-full max-w-lg">
            {/* Header */}
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
              Membership Form for <span className="text-blue-600">{selectedPlan}</span>
            </h2>

            {/* Full Name Field */}
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={changeName}
                className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of Birth Field */}
            <div className="flex flex-col mb-5">
              <label htmlFor="dob" className="text-sm font-semibold text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={changeDateOfBirth}
                className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col mb-5">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={changePhone}
                className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Address Field */}
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={changeEmail}
                className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => setFormVisible(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={confirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Connect;
