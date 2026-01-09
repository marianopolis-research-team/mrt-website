'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, FileText, ArrowLeft, Beaker, ExternalLink, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function SupercoolingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-br from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/archives/" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Archives
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold">
                2025-2026
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                Current Lab Project
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                Applications Open
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Supercooling Fruits: Effects on Food Preservation</h1>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl">
              Our lab project this year is on supercooling!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          
          {/* Overview */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Beaker className="w-8 h-8" />
                Project Overview
              </h2>
              <div className="bg-surface rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our 2026 research project investigates the fascinating phenomenon of supercooling and its
                  practical applications in food preservation. This experiment explores how controlled
                  supercooling affects the cellular structure, nutritional content, and longevity of various
                  fruits, potentially revolutionizing food storage methods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Calendar className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                    <p className="text-gray-600 text-sm">
                      Experiment during activity period<br />
                      Writing at your own pace
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Team Size</h4>
                    <p className="text-gray-600 text-sm">
                      Collaborative groups<br />
                      All experience levels welcome
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <FileText className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Publication</h4>
                    <p className="text-gray-600 text-sm">
                      Published on MRT website<br />
                      Featured by researchers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Project Phases */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Project Phases</h2>
              <div className="space-y-4">
                {[
                  {
                    phase: '1. Experimental Design',
                    description: 'Collaborate on developing the lab procedure and methodology',
                    status: 'in-progress'
                  },
                  {
                    phase: '2. Hands-On Experimentation',
                    description: 'Participate in the supercooling experiment during activity period',
                    status: 'upcoming'
                  },
                  {
                    phase: '3. Scientific Writing Workshop',
                    description: 'Attend mandatory workshop to learn research paper structure and analysis techniques',
                    status: 'upcoming'
                  },
                  {
                    phase: '4. Analysis & Writing',
                    description: 'Contribute to data analysis and write sections of the final research paper',
                    status: 'upcoming'
                  },
                  {
                    phase: '5. Publication',
                    description: 'Co-author the final paper published on our website and shared with the research community',
                    status: 'upcoming'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                          item.status === 'in-progress' ? 'bg-green-500' : 'bg-primary'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {item.status === 'in-progress' && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                              In Progress
                            </span>
                          )}
                          {item.status === 'upcoming' && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                              Upcoming
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{item.phase}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Research Questions */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8" />
                Research Questions
              </h2>
              <div className="bg-linear-to-br from-primary/5 to-secondary/30 rounded-2xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">?</span>
                    </div>
                    <div>
                      <p className="text-gray-700">How does supercooling affect the cellular structure of different fruit types?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">?</span>
                    </div>
                    <div>
                      <p className="text-gray-700">What is the impact of supercooling on nutritional content preservation compared to traditional freezing?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">?</span>
                    </div>
                    <div>
                      <p className="text-gray-700">Can supercooling extend the shelf life of fruits without compromising texture and flavor?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">?</span>
                    </div>
                    <div>
                      <p className="text-gray-700">What are the optimal supercooling conditions for different fruit species?</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Apply Now CTA */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-2xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Want to Join This Project?</h2>
              <p className="text-secondary mb-8 max-w-2xl mx-auto">
                Applications are now open! Join us in conducting groundbreaking research on supercooling 
                and food preservation. All experience levels are welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCi9QrOVWp9tC5Gy3y2mw621uwWzfuUr3HEAW2lFXtQSMzNQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </a>
                <Link href="/research/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
}
