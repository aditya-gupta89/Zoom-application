import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex flex-col gap-4 size-full text-white">
      <div className="rounded-lg bg-hero bg-cover w-full h-[303px] box-border">
        <div className="ml-12  flex-between flex-col size-full box-border w-fit items-start">
          <p className="glassmorphism mt-8 text-white p-2 rounded-sm">
            Upcoming Meeting at: 12:30 PM
          </p>

          <div className="flex flex-col gap-4 mb-6">
            <h1 className="text-white font-extrabold text-6xl">{time}</h1>
            <h2 className=" text-blue-1 font-semibold text-2xl">{date}</h2>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
