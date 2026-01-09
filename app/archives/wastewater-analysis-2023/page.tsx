'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, FileText, ArrowLeft, Beaker, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function WastewaterAnalysisPage() {
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
                2023-2024
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                Lab Project
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Wastewater Analysis Project</h1>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl">
              Analysing wastewater through biofluorescence
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
                  This project explored innovative methods for wastewater analysis using biofluorescence 
                  techniques. Students investigated how fluorescent properties could be used to detect 
                  and analyze various components in wastewater samples, contributing to environmental 
                  monitoring and public health research.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Calendar className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                    <p className="text-gray-600 text-sm">
                      2023-2024 Academic Year
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Team</h4>
                    <p className="text-gray-600 text-sm">
                      MRT Research Team 2023-2024
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <FileText className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-primary mb-2">Status</h4>
                    <p className="text-gray-600 text-sm">
                      Completed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Key Focus Areas */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Key Focus Areas</h2>
              <div className="bg-linear-to-br from-primary/5 to-secondary/30 rounded-2xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Biofluorescence Techniques</h4>
                      <p className="text-gray-600">Utilized fluorescent microscopy and spectroscopy to identify biological markers in wastewater.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Environmental Monitoring</h4>
                      <p className="text-gray-600">Developed methods for assessing water quality and detecting contaminants.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Data Analysis</h4>
                      <p className="text-gray-600">Applied statistical methods to interpret fluorescence data and draw meaningful conclusions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Impact */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
              <p className="text-secondary leading-relaxed mb-6">
                This research contributed to the growing field of environmental biotechnology, 
                demonstrating how fluorescence-based techniques can provide rapid, cost-effective 
                methods for wastewater analysis. The project enhanced students' understanding of 
                environmental science while developing practical laboratory skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Skills Developed</h3>
                  <ul className="text-secondary text-sm space-y-1">
                    <li>• Fluorescence microscopy</li>
                    <li>• Spectroscopic analysis</li>
                    <li>• Water quality testing</li>
                    <li>• Data visualization</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Learning Outcomes</h3>
                  <ul className="text-secondary text-sm space-y-1">
                    <li>• Environmental biotechnology</li>
                    <li>• Analytical chemistry methods</li>
                    <li>• Scientific methodology</li>
                    <li>• Collaborative research</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
}
