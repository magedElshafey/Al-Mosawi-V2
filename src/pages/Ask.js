import React, { useState, useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import Chat from "../components/askAhmed/chat/Chat";
import EmptyChat from "../components/askAhmed/emptyChat/EmptyChat";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "react-query";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
const Ask = ({ handleChangeTitle, details, appointment }) => {
  const [msg, setMsg] = useState("");
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userId"));
  const headers = {
    userId: user,
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      return;
    }
  }, [user, navigate]);
  const fetchData = () => {
    return request({
      url: "/chat",
      headers: {
        userId: user,
      },
    });
  };
  const {
    isLoading: loadingMsg,
    data,
    refetch,
  } = useQuery("chat-page", fetchData);

  const handleSendMsg = (data) => {
    return request({ url: "/chat/send", headers, method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data?.data.status === "success") {
        toast.success(
          i18n.language === "en"
            ? "your message sent succfully"
            : "تم ارسال رسالتك بنجاح"
        );
        setMsg("");
        refetch();
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleClick = (e) => {
    e.preventDefault();

    if (msg.trim() === "") {
      toast.error(
        i18n.language === "ar"
          ? "يرجي ارسال الاستشارة"
          : "please write your message them send"
      );
      return;
    } else {
      const contactData = { message: msg };
      mutate(contactData);
    }
  };

  return (
    <>
      {loadingMsg ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            img={data.data.ask.image}
            title={data.data.ask.title}
            desc={data.data.ask.des}
          />
          <Header handleChangeTitle={handleChangeTitle} />
          <div className="container py-4">
            {data.data.data.length ? (
              <Chat
                msg={msg}
                setMsg={setMsg}
                handleClick={handleClick}
                data={data.data.data}
                details={details}
                appointment={appointment}
              />
            ) : (
              <EmptyChat
                msg={msg}
                setMsg={setMsg}
                handleClick={handleClick}
                details={details}
                appointment={appointment}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Ask;
