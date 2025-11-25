function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8">
      <h1 className="text-5xl font-extrabold underline mb-6">
        Tailwind is working! 🎉
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl mb-4">
        Resize the window to test responsive classes
      </p>

      <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300">
        Click Me
      </button>

      <div className="mt-8 flex space-x-4">
        <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-md animate-bounce"></div>
        <div className="w-20 h-20 bg-green-400 rounded-full shadow-md animate-spin"></div>
        <div className="w-20 h-20 bg-blue-400 rounded-full shadow-md animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;
