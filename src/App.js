import React, { useEffect, useState } from "react";
import Aos from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Meta from "./components/utils/meta/Meta.jsx";
import Nav from "./components/layout/nav/Nav.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Regester from "./pages/Regester.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import {
  slider,
  tadwal,
  weOffer,
  courses,
  social,
  aboutUs,
  heroAbout,
  aboutCompany,
  team,
  aboutAhmed,
  heroContact,
  details,
  appointment,
  blogs,
  expertCourses,
  newCourses,
  accountDetails,
  monthlyWithdraw,
  recommendations,
  nextAppointments,
  canclledAppointments,
  chooseAppointment,
  recommendationDetails,
  cartItems,
} from "./fakers/data.js";
import Blogs from "./pages/Blogs.js";
import Blog from "./pages/Blog.js";
import ForexAccount from "./pages/ForexAccount.js";
import Prochart from "./pages/Prochart.js";
import CourseDetails from "./pages/CourseDetails.js";
import ForexAccountDetails from "./pages/ForexAccountDetails.js";
import Courses from "./pages/Courses.js";
import Account from "./pages/Account.js";
import UserProchart from "./pages/UserProchart.js";
import Deals from "./pages/Deals.js";
import ProchartVideo from "./pages/ProchartVideo.js";
import Recommendations from "./pages/Recommendations.js";
import ForexCalc from "./pages/ForexCalc.js";
import Consulting from "./pages/Consulting.js";
import Booking from "./pages/Booking.js";
import SuccessBooking from "./pages/SuccessBooking.js";
import Ask from "./pages/Ask.js";
import Cart from "./pages/Cart.js";
import RecommendationHistory from "./pages/RecommendationHistory.js";
import ForgetPassword from "./pages/ForgetPassword.js";
import NewPassword from "./pages/NewPassword.js";
const App = () => {
  // handle direction
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.direction = "rtl";
  }, []);
  // handle animation effect
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  // handle scroll to top after page change
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // handle rendering hero title before render the title .

  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <Meta />
      <Nav />
      {/*done*/}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slider={slider}
              tadwal={tadwal}
              weOffer={weOffer}
              courses={courses}
            />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/reg" element={<Regester />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/about"
          element={
            <About
              aboutCompany={aboutCompany}
              heroAbout={heroAbout}
              team={team}
              aboutAhmed={aboutAhmed}
            />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/contact"
          element={
            <Contact
              heroContact={heroContact}
              details={details}
              appointment={appointment}
            />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/blogs/:id" element={<Blog blogs={blogs} />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/forex-account" element={<ForexAccount />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/forex-account/details"
          element={<ForexAccountDetails />}
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/prochart" element={<Prochart />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/courses"
          element={
            <Courses expertCourses={expertCourses} newCourses={newCourses} />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/account"
          element={
            <Account
              accountDetails={accountDetails}
              monthlyWithdraw={monthlyWithdraw}
            />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/user/prochart" element={<UserProchart />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/deals" element={<Deals />} />
      </Routes>
      <Routes>
        <Route
          path="/recommendations"
          element={<Recommendations data={recommendations} />}
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/prochart/video" element={<ProchartVideo />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/forex-calc" element={<ForexCalc />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/consulting"
          element={
            <Consulting
              nextAppointments={nextAppointments}
              canclledAppointments={canclledAppointments}
            />
          }
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/booking"
          element={<Booking chooseAppointment={chooseAppointment} />}
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/booking/success" element={<SuccessBooking />} />
      </Routes>
      {/*donea*/}
      <Routes>
        <Route
          path="/ask"
          element={<Ask details={details} appointment={appointment} />}
        />
      </Routes>
      {/*done*/}
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/*done*/}
      <Routes>
        <Route
          path="/recommendation-details"
          element={<RecommendationHistory data={recommendationDetails} />}
        />
      </Routes>
      <Routes>
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
      <Footer aboutUs={aboutUs} social={social} />
    </Router>
  );
};

export default App;
