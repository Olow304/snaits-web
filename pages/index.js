/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import * as FOUNDERS from "../data/SNAITSFOUNDER.json";
import * as SNAITSDATA from "../data/SNAITSITE.json";
import client from "../client";
import Image from "next/image";
import ImageCover from "../components/ImageCover";
import Founders from "../components/Founders";
import UpcomingEvents from "../components/UpcomingEvents";
import ActionButtons from "../components/ActionButtons";
import Head from "next/head";

export default function Home() {
  const [data, setData] = useState();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // fetching data from sanity api
    client
      .fetch(
        `*[_type == "snaits"] {
      title,
      text[0] {
        children[0] {
          text
        }
      }
      
    }`,
      )
      .then((res) => {
        if (res.length > 0) {
          setData({ data: res });
        } else {
          setData({
            data: SNAITSDATA.data,
            localCall: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>SNAITS - Somalis North America in Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="somali, tech, somali in tech, somali software engineer, somali coding, somali programmers"
        />
        <meta
          name="description"
          content="SNAIT is a website that provides resources and support for Somali tech professionals. The site aims to empower Somalis to build successful businesses and careers in the tech industry."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col pt-32 px-48 bg-snaitsBg-100 wrapper mobile:px-6">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="flex justify-center">
          <span className="text-5xl font-bold text-snaits-900">
            Snaits<span className="text-3xl text-snaits-700">.org</span>
          </span>
          <div style={{ marginBottom: "50px" }} className="ml-auto relative">
            <div className="w-[100px] h-[100px] bg-[#06b6d4] rounded-md absolute right-0 mobile:w-[80px] mobile:h-[80px]"></div>
            <div className="w-[100px] h-[100px] bg-[#91d6e2] rounded-md absolute right-6 -top-6 mobile:w-[80px] mobile:h-[80px]"></div>
          </div>
        </div>

        <div className="mt-20">
          {data &&
            data.data.map((item) => {
              // Server call failed, so we are using local data
              if (data.localCall) {
                if (item.title === "About us") {
                  return (
                    <div key={item.title}>
                      <span className="text-md font-bold text-snaits-700 ">
                        Somalis North America in Tech - {item.title}
                      </span>
                      <div className="text-snaits-600 leading-6 text-[15px] pt-2">
                        {item.description}
                      </div>
                    </div>
                  );
                }
              } else {
                if (item.title === "About us") {
                  return (
                    <div key={item.title}>
                      <span className="text-md font-bold text-snaits-700 ">
                        Somalis North America in Tech - {item.title}
                      </span>
                      <div
                        className="text-snaits-600 leading-6 text-[15px] pt-2"
                        dangerouslySetInnerHTML={{
                          __html: item.text?.children.text,
                        }}
                      />
                    </div>
                  );
                }
              }
            })}
        </div>

        <ImageCover />

        <div className="mt-10">
          {data &&
            data.data.map((item) => {
              // Server call failed, so we are using local data
              if (data.localCall) {
                if (item.title === "Our Values") {
                  return (
                    <div key={item.title}>
                      <span className="text-md font-bold text-snaits-700 ">
                        We want to help build and grow the Somalis in North
                        America tech scene.
                      </span>
                      <div className="text-snaits-600 leading-6 text-[15px] pt-2">
                        {item.description}
                      </div>
                    </div>
                  );
                }
              } else {
                if (item.title === "Our Values") {
                  return (
                    <div key={item.title}>
                      <span className="text-md font-bold text-snaits-700 ">
                        We want to help build and grow the Somalis in North
                        America tech scene.
                      </span>
                      <div
                        className="text-snaits-600 leading-6 text-[15px] pt-2"
                        dangerouslySetInnerHTML={{
                          __html: item.text?.children.text,
                        }}
                      />
                    </div>
                  );
                }
              }
            })}
        </div>

        <div className="mt-10">
          <span className="text-md text-snaits-700">
            Our <span className="font-bold">core team</span>
          </span>
          <Founders founders={FOUNDERS.data} />
        </div>

        <div className="mt-10 bg-snaits-100 h-[1px]"></div>

        <div className="mt-10">
          {FOUNDERS.data &&
            FOUNDERS.data.map((data, index) => {
              return (
                <>
                  <UpcomingEvents
                    eventTopic={data.eventTopic}
                    speaker={[data]}
                    title="Speaker"
                  />
                  {index !== FOUNDERS.data.length - 1 ? (
                    <>
                      <div className="mt-10 bg-snaits-100 h-[1px]"></div>
                      <div className="mt-10"></div>
                    </>
                  ) : null}
                </>
              );
            })}
        </div>

        <div className="mt-20">
          <ActionButtons />
        </div>

        <div className="mt-20 mb-0 flex gap-2 items-center text-snaits-500 text-sm mobile:flex mobile:flex-col mobile:justify-center mobile:mt-14">
          <span className="underline">Send us your Feedback</span>
          <span className="">
            Follow Snaits on <span className="underline">Instagram,</span>{" "}
            <span className="underline">LinkedIn,</span> &{" "}
            <span className="underline">GitHub</span>
          </span>
        </div>
      </div>
    </>
  );
}
