
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import About from "./Page/About";
import Men from "./Page/Men";
import Women from "./Page/Women";
import Course from "./Page/Course";
import Coursed from "./Page/Coursed";
import Coursee from "./Page/Coursed";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      {/* <h1 className='text-white flex justify-center mt-59 text-9xl '>Welcome to our website</h1> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Products />}>
          
          //*this is nested route

          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
        </Route>
        <Route path="/Course" element={<Course />} />

   //* this is dynamic route

        <Route path="/course/:id" element={<Coursee />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
