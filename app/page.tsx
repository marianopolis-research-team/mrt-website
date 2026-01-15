"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Users,
  BookOpen,
  Target,
  ArrowRight,
  Beaker,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import SectionToc from "./_components/SectionToc";

const MetaballsHero = dynamic(() => import("./_components/MetaballsHero"), {
  ssr: false,
});

const homeSections = [
  { id: "home-welcome", label: "Welcome" },
  { id: "home-mission", label: "Our Mission" },
  { id: "home-what-we-do", label: "What We Do" },
  { id: "home-join", label: "Join Us" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionToc sections={homeSections} />

      {/* Full Screen Welcome Hero Section */}
      <section
        id="home-welcome"
        className="relative w-full h-screen overflow-hidden bg-white"
      >
        <MetaballsHero />

        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/10 to-black/30 pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-5xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-primary/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10"
                >
                  <Microscope className="w-12 h-12 text-primary" />
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Marianopolis Research Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Fostering scientific innovation and research excellence through
                collaboration, learning, and discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20"
                  >
                    Learn About Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research/"
                    className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 border-2 border-primary/20 shadow-md"
                  >
                    View Events
                    <Calendar className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12 lg:py-16">
        <div className="space-y-20">
          {/* Mission Statement */}
          <section id="home-mission">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="inline-flex w-16 h-16 bg-primary rounded-2xl items-center justify-center mb-6"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
              </div>

              <div className="">
                <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
                  MRT is dedicated to fostering an interconnected community at
                  Marianopolis focused on scientific innovation and research.
                </p>
                <p className="text-md text-gray-600 leading-relaxed text-center">
                  Whether it be through open collaboration with other clubs or
                  through interesting seminars and roundtable discussions, we
                  wish to spark interest in young talents across the campus to
                  adorn in <span className="text-sm">(hopefully!)</span> 
                  ground-breaking research that will tackle issues close to
                  heart!
                </p>
              </div>
            </motion.div>
          </section>

          {/* What We Do */}
          <section id="home-what-we-do">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  What We Do
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover the activities and opportunities we offer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Beaker,
                    title: "Research Projects",
                    description:
                      "Engage in hands-on research projects solving real-world problems. This year's lab topic is supercooling!",
                    color: "from-primary/20 to-accent/20",
                    link: "/lab-project/",
                  },
                  {
                    icon: Users,
                    title: "Seminars & Workshops",
                    description:
                      "Attend inspiring seminars by researchers and participate in skill-building workshops led by experts.",
                    color: "from-accent/20 to-primary/20",
                    link: "/research/",
                  },
                  {
                    icon: BookOpen,
                    title: "Collaborative Events",
                    description:
                      "Join roundtable discussions, club meetings, and social events.",
                    color: "from-primary/20 to-secondary/40",
                    link: "/research/",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link key={index} href={item.link}>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
                      >
                        <div
                          className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-6 flex items-center text-primary font-semibold">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Join Us CTA */}
          <section
            id="home-join"
            className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-accent text-white py-16 md:py-20"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto text-center px-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Interested in Joining?
              </h2>
              <p className="text-xl text-secondary/90 mb-10 leading-relaxed">
                Member applications are open year-round! Whether you have prior
                experience or not, we'd love to have you on board.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-lg"
                  >
                    Meet the Team
                    <Users className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://discord.gg/qtjTXya5mf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                  >
                    Join Discord
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <p className="text-secondary/80 text-sm">
                  Questions? Reach out at{" "}
                  <a
                    href="mailto:marianopolisresearch@maristudentunion.com"
                    className="underline hover:text-white transition-colors"
                  >
                    marianopolisresearch@maristudentunion.com
                  </a>
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
