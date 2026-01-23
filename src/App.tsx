import { useState } from "react";
import { Lock, LockOpen } from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("encryption");

  const tabs = [
    {
      id: "encryption",
      label: "Encryption",
      icon: <Lock size={18} />,
    },
    {
      id: "decryption",
      label: "Decryption",
      icon: <LockOpen size={18} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-10">
      {/* Tabs */}
      <div className="flex gap-4 bg-gray-300 p-3 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg font-semibold transition
              ${
                activeTab === tab.id ? "bg-blue-500 text-white" : "text-black "
              }
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-10 w-full max-w-xl p-6 bg-gray-100 rounded-xl">
        {activeTab === "encryption" && (
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Input */}
            <div className="flex flex-col w-full">
              <textarea
                className="w-full text-white h-40 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2   resize-none placeholder-gray-400"
                placeholder="Enter your text here..."
              />
              <button
                className="mt-3 py-2 rounded-md cursor-pointer bg-green-500  text-white font-semibold hover:bg-green-600 transition"
              >
                Encrypt
              </button>
            </div>

            {/* Output */}
            <div className="flex flex-col w-full">
              <textarea
                className="text-gray-300 w-full h-40 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md resize-none placeholder-gray-400"
                placeholder="Encrypted text will appear here..."
                readOnly
              />
              <button
                className="mt-3 py-2 rounded-md bg-green-500 cursor-pointer text-white font-semibold hover:bg-green-600 transition"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        {activeTab === "decryption" && (
           <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Input */}
            <div className="flex flex-col w-full">
              <textarea
                className="w-full text-white h-40 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2   resize-none placeholder-gray-400"
                placeholder="Enter your text here..."
              />
              <button
                className="mt-3 py-2 rounded-md cursor-pointer bg-red-500  text-white font-semibold hover:bg-red-600 transition"
              >
                Decrypt
              </button>
            </div>

            {/* Output */}
            <div className="flex flex-col w-full">
              <textarea
                className="text-gray-300 w-full h-40 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md resize-none placeholder-gray-400"
                placeholder="decrypted text will appear here..."
                readOnly
              />
              <button
                className="mt-3 py-2 rounded-md bg-red-500 cursor-pointer text-white font-semibold hover:bg-red-600 transition"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
