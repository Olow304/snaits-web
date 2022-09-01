import Image from "next/image";
import React from "react";
import Founders from "./Founders";

function UpcomingEvents({ eventTopic, speaker, title }) {
    
  return (
    <>
      <span className="text-md text-snaits-700">
        Topic: <span className="">{eventTopic}</span>
      </span>
      <Founders founders={speaker} title={title} />
    </>
  );
}

export default UpcomingEvents;
