import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaHackerrank, FaDev } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PiRedditLogoFill } from "react-icons/pi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          from_email: formData.email,
          subject: `Portfolio Contact from ${formData.name}`,
          website: formData.website || "Not provided",
          message: formData.message,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again or contact me directly.",
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);
    }
  };
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="contact"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row gap-10 lg:gap-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form
            className="w-full space-y-3 lg:space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              name="website"
              placeholder="Your website (If exists)"
              value={formData.website}
              onChange={handleChange}
            />
            <textarea
              className="resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full"
              name="message"
              placeholder="How can I help?*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {statusMessage.text && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded text-sm ${
                  statusMessage.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage.text}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
            >
              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                type="submit"
                disabled={isLoading}
                className="bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium"
              >
                {isLoading ? "Sending..." : "Get In Touch"}
              </motion.button>

              <div className="flex items-center gap-x-2 lg:gap-x-5">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">
            <h2>
              Let&apos;s{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                talk
              </span>{" "}
              for
            </h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="mailto:yuvarajacb11@zohomail.in"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              yuvarajacb11@zohomail.in
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="tel:+919443883036"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +91 9443883036
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
