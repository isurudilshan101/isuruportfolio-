import React from "react";
import AboutComponent from "../components/aboutComponent";
import Image from "next/image";
import aboutme from "../../../public/my_pic.jpg";

const page = () => {
  return (
    <>
      <div className="">
        <div className="ml-4">
          <div>
            <h1 className="mt-4 ml-6 text-4xl font-bold">ABOUT&nbsp;ME</h1>
          </div>
        </div>

        <div className="ml-4 flex justify-center items-center">
          <div className="px-4">
            {/* <h1 className=" text-3xl font-bold">Isuru Dilshan</h1> */}
            <p className="mt-10 text-xl">
              I‘ m graduate software engineer from the University of Kelaniya
              Sri Lanka. I have a 2+ years of extensive experience in software
              development as a software engineer. Mainly Specialized in
              JavaScript & TypeScript. A highly motivated and a hard working
              individual who has a passion of computer science and who loves to
              learn new technologies. Seeking an opportunity to gain more
              experience to become a qualified professional in the industry..
            </p>
            {/* cv format */}
            <div className="max-w-md ">
              <div className="mt-10 space-y-2">
                <div className="flex">
                  <span className="w-32 font-semibold">Full Name</span>
                  <span className="mr-2">:</span>
                  <span>Isuru Dilshan Kumara Herath</span>
                </div>

                <div className="flex">
                  <span className="w-48 font-semibold">Address</span>
                  <span className="mr-2"> :</span>
                  {/* <span>No: 705, 19 Division, Handungamuwa, Matale</span> */}

                  <span>
                    {" "}
                    Kanda Uda Niwasa, Inguruwatta, Pahala Diyadora,
                    Kuliyapitiya.
                  </span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Birthday</span>
                  <span className="mr-2">:</span>
                  <span>09.04.1995</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Nationality</span>
                  <span className="mr-2">:</span>
                  <span>Sri Lanka</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Language</span>
                  <span className="mr-2">:</span>
                  <span>Sinhala,English</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Career Goal</span>
                  <span className="mr-2">:</span>
                  <span>Tech Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
