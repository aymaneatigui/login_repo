import { Link } from "react-router-dom";
function Nav() {
    return (
        // <div>
        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        // </div>
        <nav className="bg-gray-900 shadow-lg">
      <div className="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-lg mr-4">
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="text-gray-400 hover:text-white mr-4">
            Login
          </Link>
          <button className="text-gray-400 hover:text-white focus:outline-none mr-4">
            Logout
          </button>
          <div className="ml-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full m-auto"
            />
            <p className="text-gray-200 text-sm mt-1">Aymane Atigui</p>
          </div>

        </div>
      </div>
    </nav>
    );
}

export default Nav;