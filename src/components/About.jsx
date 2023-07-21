import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { myselfinfo } from "../constants";

const MySelf = ({ image }) => (
  <motion.div variants={fadeIn("", "", 0.1, 1)} className="xs:w-[20%] md:w-[30%] flex justify-center w-full">
          <img
            src={image}
            alt="myself"
            className="xs:w-auto xs:max-h-[357px] w-[50%]"
          />
  </motion.div>
)

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex xs:flex-row flex-col justify-between content-end">
        <div className="xs:w-[50%] w-full">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a skilled designer with experience in 2D and 3D Graphic Design,
            and expertise in softwares like Blender, Photoshop, and Illustrator.
            I also have huge interests in UI-UX Designing and Web Development
            and constantly looking for opportunities to try out this new field.
            I'm a quick learner that can adapt to any situation to create the most
            magnificent, efficient, and user-friendly products that solve
            your problems. <br /> Let's work together to bring your ideas to life!
          </motion.p>
        </div>

        {myselfinfo.map((image, index) => (
          <MySelf key={myselfinfo.name} index={index} {...image} />
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");