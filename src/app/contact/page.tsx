import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg max-w-4xl w-full md:flex md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/contactme.png"
            alt="Contact"
            className="rounded-full object-cover"
            width={192}
            height={192}
          />
        </div>
        <div className="space-y-4 text-center md:text-left w-full">
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-gray-300 pb-2">
            Contact Me
          </h1>
          <div className="flex gap-4 items-center justify-center md:justify-start space-x-4b bg-gray-950 p-4 rounded-lg">
            <FaEnvelope className="text-2xl text-white" />
            <p className="text-lg text-white">isuru.dilshan101@gmail.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-4  bg-gray-950 p-4 rounded-lg">
            <FaPhone className="text-2xl text-white" />
            <p className="text-lg text-white">0712859953 | 0764069953</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-4 bg  bg-gray-950 p-4 rounded-lg">
            <FaMapMarkerAlt className="text-2xl text-white" />
            <p className="text-lg text-white">
              {/* NO:705, 19 Division Handungamuwa, Matale, Sri Lanka */}
              Kanda Uda Niwasa, Inguruwatta, Pahala Diyadora, Kuliyapitiya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
