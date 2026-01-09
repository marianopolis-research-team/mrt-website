'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Beaker, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';
import SectionToc from './_components/SectionToc';

gsap.registerPlugin(ScrollTrigger);

const homeSections = [
  { id: 'home-hero', label: 'Welcome' },
  { id: 'home-work', label: 'Our Projects' },
  { id: 'home-process', label: 'Process' },
  { id: 'home-join', label: 'Join' },
];

export default function HomePage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <SectionToc sections={homeSections} title="Navigate" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-32">
          {/* Hero */}
          <section
            id="home-hero"
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent text-white px-8 md:px-12 py-16 md:py-20 fade-up"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Marianopolis Research Team
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                A student lab at Marianopolis College. We design year-long
                experiments, analyze data, and publish findings. Open to
                undergrads who want to work with real equipment and tight
                deadlines.
              </p>
              <div className="flex gap-4">
                <Link href="/lab-project/">
                  <button className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-white transition-colors shadow-lg">
                    Current project
                  </button>
                </Link>
                <Link href="/about/">
                  <button className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Team
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Bento Grid - Our Projects */}
          <section id="home-work" className="fade-up space-y-6">
            <h2 className="text-sm uppercase tracking-wide text-primary font-semibold">
              Our Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Large card - Current project */}
              <Link href="/lab-project/" className="md:col-span-2 group">
                <div className="bg-surface rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                        Lab Project
                      </span>
                      <h3 className="text-2xl font-bold text-primary mt-2">
                        Supercooling Preservation
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 mb-6">
                    Testing whether controlled supercooling can extend fruit
                    shelf life without cellular damage. Students design
                    protocols, run experiments, and analyze nutrient retention.
                  </p>
                  <div className="flex gap-3 text-sm">
                    <span className="px-3 py-1 bg-secondary text-primary rounded-full">
                      Biochemistry
                    </span>
                    <span className="px-3 py-1 bg-secondary text-primary rounded-full">
                      In progress
                    </span>
                  </div>
                </div>
              </Link>

              {/* Recent publication */}
              <Link href="/archives/dna-extraction-2024/" className="group">
                <div className="bg-surface rounded-2xl p-6 border border-gray-200 hover:border-primary transition-all h-full">
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary">Published</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    DNA Yield Analysis
                  </h4>
                  <p className="text-sm text-gray-700">
                    Comparing extraction methods across fruit types.
                    Diphenylamine quantification and ethanol precipitation.
                  </p>
                </div>
              </Link>

              {/* Seminars */}
              <Link href="/research/" className="group">
                <div className="bg-surface rounded-2xl p-6 border border-gray-200 hover:border-primary transition-all h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary">Weekly</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Guest Seminars
                  </h4>
                  <p className="text-sm text-gray-700">
                    PhD students and professors talk about their research. Past
                    speakers from CERN, McGill, UdeM.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* How it works */}
          <section id="home-process" className="fade-up">
            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h2 className="text-sm uppercase tracking-wide text-primary font-semibold mb-6">
                    Process
                  </h2>
                  <h3 className="text-3xl font-bold text-primary leading-tight">
                    Full research cycle
                  </h3>
                </div>
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Design
                    </h4>
                    <p className="text-gray-700">
                      Teams spend fall semester developing hypotheses, sourcing
                      materials, and writing protocols. Safety training
                      mandatory.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Execute
                    </h4>
                    <p className="text-gray-700">
                      Lab work runs through winter. Students collect data,
                      troubleshoot failures, and document everything in lab
                      notebooks.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Publish
                    </h4>
                    <p className="text-gray-700">
                      Spring semester: statistical analysis, peer review, and
                      writing. Final papers use proper citations, methods
                      sections, and figures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Join */}
          <section id="home-join" className="fade-up">
            <div className="bg-surface rounded-2xl p-12 border border-gray-200">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Applications open each fall
                </h2>
                <p className="text-lg text-gray-700">
                  Lab projects require a full academic year commitment. Seminars
                  and workshops are drop-in. We meet Tuesdays during activity
                  period.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/research/">
                    <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-colors">
                      View events
                    </button>
                  </Link>
                  <Link href="/archives/">
                    <button className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-secondary transition-colors">
                      Past work
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <section className="fade-up">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-sm text-gray-600">
                Chemistry Lab · Marianopolis College
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

