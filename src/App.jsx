
import bg from './assets/bg.png';
import logo from './assets/logo.png';
import google from './assets/google.png';

function App() {
  const bgImageUrl = bg;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl p-8 rounded-lg">
        
        <div className="text-white text-center lg:text-left mb-8 lg:mb-0 lg:mr-16">
          <h1 className="text-5xl font-bold mb-4">RESEARCH</h1>
          <h1 className="text-5xl font-bold mb-4">PROPOSAL</h1>
          <h1 className="text-5xl font-bold">MANAGEMENT</h1>
          <p className="text-sm mt-10">
            © 2025 University of Southeastern Philippines. All rights reserved.
          </p>
        </div>

        <div className="bg-white bg-opacity-90 p-20 rounded-2xl shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-10 ">
            <img
              src={logo}
              alt="University Logo"
              className="w-30 h-30"
            />
          </div>
          
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="User ID"
                className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="text-center my-4">
            <span className="text-gray-600">or</span>
          </div>
          <button
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
          >
            <img
              src={google}
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-orange-500 hover:underline">
              Forgot Password <span className="font-bold">Click here</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
