import React, { useEffect, useState } from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";
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
  aboutUs,
  expertCourses,
  newCourses,
  accountDetails,
  monthlyWithdraw,
  
  recommendationDetails,
 
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
import MAX from "./pages/MAX.js";
import FixedBtn from "./components/utils/fixedBtn/FixedBtn.jsx";
import { QueryClientProvider, QueryClient } from "react-query";
import Spinner from "./components/utils/Spinner/Spinner.jsx";
import axios from "axios";
import Checkout from "./pages/Checkout.js";

const App = () => {
  // handle website settings data
  const lang = window.localStorage.getItem("lang")
    ? JSON.parse(window.localStorage.getItem("lang"))
    : "ar";
  const [loading, setLoading] = useState(true);
  const [settingsData, setSettingsData] = useState({});
  useEffect(() => {
    axios
      .get("https://almosawi.admin.technomasrsystems.com/api/settings", {
        headers: {
          lang,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setSettingsData(res.data.data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
  }, [lang]);

  // handle price box on course details page
  const [fixedContainer, setFixedContainer] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const footer = document.querySelector(".footer");
      const priceContainer = document.querySelector(".price-container");

      if (footer && priceContainer) {
        const footerTop = footer.getBoundingClientRect().top;
        const containerTop = priceContainer.getBoundingClientRect().top;

        if (containerTop < footerTop) {
          setFixedContainer(true);
        } else {
          setFixedContainer(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const queryClient = new QueryClient();

  const { i18n } = useTranslation();
  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);
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

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <QueryClientProvider client={queryClient}>
          <Router>
            <ScrollToTopAfterChangePage />
            <Meta data={settingsData.generalSetting} />
            <Nav
              data={settingsData.generalSetting}
              phoneNum={settingsData.contactSettings.phone}
              menus={settingsData.header}
            />
            <FixedBtn />
            {/*done*/}
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    slider={settingsData.slider}
                    tadwal={settingsData.trade}
                    weOffer={settingsData.adSections}
                    video={settingsData.adSections2}
                    courses={settingsData.courses}
                    partner={settingsData.sponser}
                  />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/login"
                element={
                  <Login phoneNum={settingsData.contactSettings.phone} />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/reg"
                element={
                  <Regester phoneNum={settingsData.contactSettings.phone} />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/forget" element={<ForgetPassword />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/contact"
                element={
                  <Contact
                    contactDetails={settingsData.contactSettings}
                    appointment={settingsData.schdule}
                  />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/blogs/:id" element={<Blog />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/forex-account"
                element={
                  <ForexAccount phoneNum={settingsData.contactSettings.phone} />
                }
              />
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
              <Route
                path="/prochart"
                element={
                  <Prochart phoneNum={settingsData.contactSettings.phone} />
                }
              />
            </Routes>
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/courses"
                element={
                  <Courses
                    expertCourses={expertCourses}
                    newCourses={newCourses}
                  />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route
                path="/course/:id"
                element={<CourseDetails fixedContainer={fixedContainer} />}
              />
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
              <Route path="/deals/:id" element={<Deals />} />
            </Routes>
            <Routes>
              <Route
                path="/recommendations"
                element={<Recommendations  />}
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
                  <Consulting phoneNum={settingsData.contactSettings.phone} />
                }
              />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/booking" element={<Booking />} />
            </Routes>
            {/*done*/}
            <Routes>
              <Route path="/booking/success" element={<SuccessBooking />} />
            </Routes>
            {/*donea*/}
            <Routes>
              <Route
                path="/ask"
                element={
                  <Ask
                    details={settingsData.contactSettings}
                    appointment={settingsData.schdule}
                  />
                }
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
            <Routes>
              <Route path="/account/:test" element={<MAX />} />
            </Routes>
            <Footer
              footer1={settingsData.footer1}
              footer2={settingsData.footer2}
              phoneNum={settingsData.contactSettings.phone}
              aboutUs={aboutUs}
              generalData={settingsData.generalSetting}
              socailData={settingsData.SocialMediaLinks}
            />
          </Router>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;
