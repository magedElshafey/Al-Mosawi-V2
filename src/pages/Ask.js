import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import Chat from "../components/askAhmed/chat/Chat";
import EmptyChat from "../components/askAhmed/emptyChat/EmptyChat";

const Ask = ({ handleChangeTitle, details, appointment }) => {
  const chat = JSON.parse(window.localStorage.getItem("chat"))
    ? JSON.parse(window.localStorage.getItem("chat"))
    : [];
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="اسأل أحمد الموسوي"
        desc="يمكنك كتابة سؤالك وسيتم الرد عليك في اقرب وقت ممكن من أ أحمد الموسوي"
      />
      <Header handleChangeTitle={handleChangeTitle} />
      <div className="container py-4">
        {chat.length ? (
          <Chat data={chat} details={details} appointment={appointment} />
        ) : (
          <EmptyChat details={details} appointment={appointment} />
        )}
      </div>
    </div>
  );
};

export default Ask;
