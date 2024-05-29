import Image from "next/image";
import Hero from "./components/Hero";
import NavVerti from "./components/NavHori";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div>
        <h2 className="text-white text-4xl">
          Hi, I am{" "}
          <span className="text-blue-950 font-extrabold">Isuru Dilshan</span>{" "}
        </h2>
        <h2 className="text-white text-3xl">Software Engineer</h2>
        <div className="flex gap-2 justify-center text-center">
          <Link href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-2x text-blue-500 hover:text-blue-700"
            />
          </Link>
          <Link href="#">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-2x text-blue-500 hover:text-blue-700"
            />
          </Link>{" "}
          <Link href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-2x text-blue-500 hover:text-blue-700"
            />
          </Link>
          {/* 
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-500 hover:text-gray-700"
          />

          <h1 className="text-xl">
            {" "}
            <Link href="# ">
              &nbsp; <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </h1>*/}
        </div>
      </div>
    </div>
  );
}
