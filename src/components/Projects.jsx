import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
import TiltedCard from "../utils/TiltedCard";
const projects = [
  {
    id: 1,
    title: "Krishi Setu - Farmer - Buyer Connect Platform",
    description:
      "A web application that connects farmers directly with buyers, eliminating intermediaries and ensuring fair prices for agricultural produce.",
    image: "/assets/project1.png",
    link: "https://krishi-setuu.vercel.app/",
  },
  {
    id: 2,
    title: "Olii - A OTT Platform for Movie Enthusiasts",
    description:
      "Olii is a web application that provides a platform for movie enthusiasts to discover, review, and discuss their favorite films. It offers personalized recommendations based on user preferences and viewing history.",
    image: "/assets/project1.png",
    link: "https://olii-ott.web.app",
  },
  {
    id: 3,
    title: "Kellikai - A Mini social media platform",
    description:
      "A lightweight social media platform for connecting with friends and sharing updates.",
    image: "/assets/project1.png",
    link: "https://kellikai.web.app/",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-center px-2">
                      {project.title}
                    </p>
                  </div>
                }
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-white mt-3 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
