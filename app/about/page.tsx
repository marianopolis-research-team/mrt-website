"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Github,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import SectionToc from "../_components/SectionToc";

const aboutSections = [
  { id: "about-hero", label: "About MRT" },
  { id: "about-story", label: "Our Story" },
  { id: "about-executives", label: "Current Team" },
  { id: "about-past", label: "Past Execs" },
  { id: "about-connect", label: "Connect" },
];

// Executives data
const currentExecutives = [
  {
    name: "Sabrine Djebbar",
    image: "/images/executives/sabrine-djebbar.png",
    bio: "Hey! I'm Sabrine and I'm in HHS. I'm interested in all things biology, baking, and chemistry!",
  },
  {
    name: "Lauren Engo",
    image: "/images/executives/lauren-engo.png",
    bio: "Hai!! I'm Lauren and I'm in P&A. I'm passionate about computer science and environmental engineering.",
  },
  {
    name: "Nicolas Huni",
    image: "/images/executives/nicolas-huni.png",
    bio: "Hi, I'm Nic! I'm in Health Science and I find genetics, herpetology, venomics and nuclear chemistry really interesting.",
  },
  {
    name: "Airan Zhang",
    image: "/images/executives/airan-zhang.jpg",
    bio: "Hi! I'm Airan and I'm in Health. Maybe you've met me last semester at MRT pins fundraising. I'm interested in almost anything remotely scientific, but I have a special spot for pharmacognosy.",
  },
  {
    name: "Sumin Woo",
    image: "/images/executives/sumin-woo.jpg",
    bio: "Hi! My name is Sumin and I like Zelda, running, and DNA (RNAs are cool too)",
  },
  {
    name: "Zhi Cheng Ma",
    image: "/images/executives/zhicheng-ma.png",
    bio: "Hey, I'm Zhi Cheng and I love both the wet and dry sides of research, especially anything programming-related!",
  },
];

const pastExecutives = [
  {
    year: "2023-2024",
    members: [
      { name: "Airan Zhang", position: "" },
      { name: "Lauren Engo", position: "" },
      { name: "Nicolas Huni", position: "" },
      { name: "Sabrine Djebbar", position: "" },
    ],
  },
  {
    year: "2022-2023",
    members: [
      { name: "Luc Bojorquez", position: "" },
      { name: "Sage Xiaoxiao", position: "" },
      { name: "Sudarsan Packirisamy", position: "" },
      { name: "Youdas Yessad", position: "" },
    ],
  },
];

function PastExecutivesAccordion() {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {pastExecutives.map((yearData) => (
        <div
          key={yearData.year}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            onClick={() =>
              setOpenYear(openYear === yearData.year ? null : yearData.year)
            }
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                {yearData.year.slice(-2)}
              </div>
              <span className="text-lg font-semibold text-primary">
                {yearData.year} Executive Team
              </span>
            </div>
            <motion.div
              animate={{ rotate: openYear === yearData.year ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openYear === yearData.year && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {yearData.members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {member.position}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionToc sections={aboutSections} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-16">
          {/* Hero Section */}
          <section
            id="about-hero"
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent text-white py-16 md:py-20"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl text-secondary">
                  Meet the passionate team behind Marianopolis Research Team and
                  learn about our journey
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission Statement */}
          <section id="about-story" className="bg-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MRT is a club that hopes to foster the development of an
                interconnected community at Marianopolis focused on scientific
                innovation and research. Whether it be through open
                collaboration with other clubs or through interesting seminars
                and roundtable discussions, we wish to spark interest in young
                talents across the campus to adorn in (hopefully!)
                ground-breaking research that will tackle issues close to heart.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our yearly research projects, workshops, seminars, and
                collaborative events, we empower students to explore their
                scientific interests, develop research skills, and contribute
                meaningfully to the scientific community starting from cegep.
              </p>
            </motion.div>
          </section>

          {/* Current Executives */}
          <section
            id="about-executives"
            className="bg-surface rounded-3xl p-8 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-4 text-center">
                Current Executive Team
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Current organizers of the research projects and events at MRT
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentExecutives.map((exec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary relative overflow-hidden">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {exec.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {exec.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Past Executives */}
          <section id="about-past" className="bg-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-primary mb-4 text-center">
                Past Executive Teams
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Honoring those who have shaped MRT&apos;s legacy
              </p>

              <PastExecutivesAccordion />
            </motion.div>
          </section>

          {/* Connect Section */}
          <section
            id="about-connect"
            className="rounded-3xl bg-linear-to-br from-primary to-accent text-white p-8 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
              <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
                Join our community and stay updated on all MRT activities
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: MessageCircle,
                    name: "Discord",
                    handle: "Join our server",
                    href: "https://discord.gg/qtjTXya5mf",
                  },
                  {
                    icon: Instagram,
                    name: "Instagram",
                    handle: "@marianopolisresearch",
                    href: "https://www.instagram.com/marianopolisresearch/",
                  },
                  {
                    icon: Github,
                    name: "GitHub",
                    handle: "marianopolis-research-team",
                    href: "https://github.com/marianopolis-research-team",
                  },
                  {
                    icon: Mail,
                    name: "Email",
                    handle: "marianopolisresearch@maristudentunion.com",
                    href: "mailto:marianopolisresearch@maristudentunion.com",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="bg-white/10 backdrop-blur-sm p-4 aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-1">
                        {social.name}
                      </h3>
                      <p className="text-secondary text-sm wrap-anywhere">
                        {social.handle}
                      </p>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-12">
                <p className="text-secondary mb-4">
                  Interested in joining the team?
                </p>
                <motion.a
                  href="/research/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg"
                >
                  View Current Projects
                </motion.a>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
