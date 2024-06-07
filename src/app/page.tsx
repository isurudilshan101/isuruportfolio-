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
        <h2 className="text-white text-4xl mb-4">
          Hi, I am{" "}
          <span className="text-5xl text-blue-800 font-extrabold">
            Isuru Dilshan
          </span>{" "}
        </h2>
        <h2 className="mb-4 text-white text-4xl font-bold">
          Software Engineer
        </h2>
        <div className="flex gap-6 justify-center text-center">
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
          {/* <Link href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-2x text-blue-500 hover:text-blue-700"
            />
          </Link> */}
          <a
            href="https://www.linkedin.com/in/isuru-dilshan-b270a5184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-2x text-blue-500 hover:text-blue-700"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
