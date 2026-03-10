import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center py-8 my-8 lg:py-16 lg:my-16"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I&apos;m a Software Developer passionate about building scalable
          systems. Curious by nature, I focus on Data Structures & Algorithms,
          System Design, and backend development using Java, Spring Boot, SQL,
          and modern web frameworks.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I believe great software comes from continuous learning, clean code,
          and strong problem-solving skills. Beyond traditional development,
          I&apos;m actively exploring Blockchain and emerging technologies to
          understand how decentralized systems can reshape digital platforms.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          When I&apos;m not coding, I&apos;m learning new technologies, building
          side projects, and studying system design to grow as a developer.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I&apos;m driven by the desire to create meaningful impact through
          technology and contribute to solutions that solve real-world problems
          at scale.
        </p>
      </motion.div>
    </div>
  );
}
