'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { services } from '@/constants';
import ServiceCard from '@/components/ServiceCard';

export default function About() {
  const blockOfText =
    "I'm a software engineer with experience in TypeScript,\n" +
    '          JavaScript and Java and expertise in frameworks like React, Node.js, and\n' +
    "          Spring. I'm a quick learner and I enjoy learning new stuff.\n" +
    "Let's work together to bring your ideas to life!";
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview </p>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {blockOfText}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            index={index}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
}
