import Image from "next/image";
import React from "react";

function Founders({founders, title}) {
  return (
    <>
      <div className="flex gap-10 ">
      {founders &&
        founders.map((founder) => (
          <div className="flex gap-6 pt-4 " key={founder.id}>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                alt=""
                src={founder.image}
                width={100}
                height={100}
                className="rounded-full hover:bg-snaits-200 mobile:w-18 mobile:h-18"
              />
              <div className="flex flex-col gap-1 items-center">
                <span className="text-snaits-800 text-sm font-bold">
                  {founder.name}
                </span>
                <span className="text-snaits-800 text-sm">{founder.title}</span>
                
                {title ? (
                    <span className="text-snaits-500 text-sm">Speaker</span>
                ) : (
                    <span className="text-snaits-500 text-sm">{founder.bio}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
    </>
  );
}

export default Founders;
