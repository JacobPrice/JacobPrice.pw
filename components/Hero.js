import { MdWavingHand } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section className="mt-20 layout">
      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
            Hello!
          </h2>
          <h2 className="pl-3 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
            <MdWavingHand className="text-teal-100" />
          </h2>
        </div>

        <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl">
          My name is{" "}
          <span className="transition colors bg-gradient-to-r from-teal-100 to-teal-500 text-transparent bg-clip-text">
            Jacob Price
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl sm:text-2xl md:text-3xl text-center">
          I'm a full stack developer with a passion for building beautiful,
          performant, and accessible websites and applications.
        </p>
      </div>
      <div className="flex flex-col justify-center mt-5 layout sm:flex-row sm:justify-between max-w-sm">
        <a
          href="https://www.github.com/jacobprice"
          className=" inline-flex justify-center sm:justify-self-start items-center gap-1 font-medium md:text-base text-white hover:text-teal-400 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab"
        >
          <FaLinkedin />
          jacobaprice
        </a>
        <a
          href="https://www.github.com/jacobprice"
          className="justify-center inline-flex items-center gap-1 font-medium md:text-base text-white hover:text-teal-400 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab"
        >
          <FaGithub />
          jacobprice
        </a>
        <a
          href="https://www.github.com/jacobprice"
          className="justify-center inline-flex items-center gap-1 font-medium md:text-base text-white hover:text-teal-400 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 transition-colors cursor-newtab"
        >
          <FaTwitter />
          @thatpriceguy
        </a>
      </div>
    </section>
  );
}
