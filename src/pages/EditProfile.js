import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import { useTranslation } from "react-i18next";
import EditForm from "../components/editProfile/EditForm";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { gitName, gitPp } from "../Redux/auth";
const EditProfile = ({ lang }) => {
  const dispatch = useDispatch();
  const isTickmill = JSON.parse(localStorage.getItem("tickmillUser"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const { isLogin, user } = useSelector((state) => state.authSlice);
  useEffect(() => {
    if (isLogin) {
      return;
    } else {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/user/my-profile", headers });
  };
  const { isLoading, data } = useQuery("edit-page", fetchData, {
    onSuccess: (data) => {
      if (data?.data?.status === "success") {
        // setName(data.data.data.name);
        setEmail(data.data.data.email);
        // setPhone(data.data.data.phone);
        // dispatch(gitName(data.data.data.name));
        setAddress(data.data.data.address ? data.data.data.address : "");
        // setPhoto(data.data.data.photo);
        // dispatch(gitPp(data.data.data.photo));
      } else {
        toast.error(
          i18n.language === "ar"
            ? "حدث خطأ اثناء الانتصال قم ب اعادة تحميل الصفحة من فضلك"
            : "there is an error occured , please refresh the page"
        );
      }
    },
  });
  const { i18n } = useTranslation();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            img={heroImg}
            isStatic={true}
            title={i18n.language === "ar" ? "تعديل الحساب" : "edit account"}
          />
          <div className="container py-5">
            <EditForm
              lang={lang}
              user={user}
              isTickmill={isTickmill}
              name={name}
              phone={phone}
              email={email}
              address={address}
              photo={photo}
              password={password}
              setPhoto={setPhoto}
              setName={setName}
              setPassword={setPassword}
              setPhone={setPhone}
              setAddress={setAddress}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
