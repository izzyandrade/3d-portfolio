import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl font-[17px] leading-[30px] text-secondary"
      >
        Self-taught in many aspects and development enthusiast, I seek to deepen
        my studies in Fullstack Web Development, Software Architecture, IT
        leadership, among other varied skills. My main technologies and tools
        are React, React Native, Node, AWS, Next JS, Three JS, Typescript,
        Apollo Client, combined with knowledge in several other related
        libraries. I also took training in Cloud DevOps Engineering, with
        knowledge in tools such as AWS, Docker, Kubernetes, CircleCI, Github
        Actions, Terraform, among others. I currently work as a Senior Software
        Engineer at Abercrombie & Fitch.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          );
        })}
      </div>
    </>
  );
};

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="w-screen xs:w-[250px]" options={{ reverse: true }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, 'about');
