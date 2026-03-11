import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { PiRedditLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { FaDev } from "react-icons/fa";
export default function Home() {
  const socialLinks = [
    {
      icon: IoLogoLinkedin,
      url: "https://www.linkedin.com/in/yuvaraj-b-6b498528a/",
    },
    { icon: BsGithub, url: "https://github.com/yuvara1" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/yuvaraj0402/" },
    {
      icon: FaHackerrank,
      url: "https://www.hackerrank.com/profile/yuvarajacb11",
    },
    { icon: BiLogoInstagramAlt, url: "https://www.instagram.com/_yuvaraj_b/" },
    { icon: PiRedditLogoFill, url: "https://www.reddit.com/user/PruneNo3209/" },
    { icon: FaDev, url: "https://dev.to/yuvaraj_b_fa7716f8e4ce298" },
  ];

  return (
    <div
      className="mt-10 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 lg:px-28"
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-8 md:py-10">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[45%] mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl flex flex-col gap-2 md:gap-4 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello, I am{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                <TypeAnimation
                  sequence={[
                    "YUVARAJ.",
                    1000,
                    // 'I am a Web Developer',
                    // 1000,
                    // 'I am a UI/UX Designer',
                    // 1000,
                  ]}
                  speed={10}
                  style={{
                    fontWeight: 600,
                    WebkitTextStroke: "2px black",
                    color: "transparent",
                  }}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-[#71717A] mt-4 md:mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Software Developer passionate about solving complex problems and
            building scalable systems. I have a deep interest in System Design,
            Data Structures & Algorithms, and Blockchain, and I enjoy developing
            impactful applications using modern technologies.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 mt-8 md:mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((link, index) => {
              // Only show Reddit and Dev.to on md+ screens
              const isExtra =
                link.icon === PiRedditLogoFill || link.icon === FaDev;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  className={`bg-white p-2 sm:p-2.5 md:p-3 rounded border-2 border-black
                    ${isExtra ? "hidden md:inline-flex" : ""}`}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          className="w-full lg:w-[55%] mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="w-full h-auto max-h-[350px] sm:max-h-[400px] md:max-h-[500px] object-contain"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
