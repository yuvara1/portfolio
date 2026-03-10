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
    { icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/yuvaraj-b-6b498528a/" },
    { icon: BsGithub, url: "https://github.com/yuvara1" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/yuvaraj0402/" },
    { icon: FaHackerrank, url: "https://www.hackerrank.com/profile/yuvarajacb11" },
    { icon: BiLogoInstagramAlt, url: "https://www.instagram.com/_yuvaraj_b/" },
    { icon: PiRedditLogoFill, url: "https://www.reddit.com/user/PruneNo3209/" },
    { icon: FaDev, url: "https://dev.to/yuvaraj_b_fa7716f8e4ce298" }
  ];


  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
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
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, I am <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                <TypeAnimation
                sequence={[
                  'YUVARAJ.',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight:600, WebkitTextStroke: "2px black", color: "transparent"}}
                repeat={Infinity}
               
              />
              </span>
              
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Software Developer passionate about solving complex problems and building scalable systems. I have a deep interest in System Design, Data Structures & Algorithms, and Blockchain, and I enjoy developing impactful applications using modern technologies.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* handle large screen sizes, small screen sizes */}
                <link.icon className="w-4 h-4 lg:w-5 lg:h-5 md:w-4 md:h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
