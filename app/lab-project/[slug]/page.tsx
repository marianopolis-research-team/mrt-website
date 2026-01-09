import { Calendar, Users, FileText, ExternalLink, Beaker, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { getLabProjectBySlug, labProjects, LabProject } from '@/app/_data/labProjectData';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function LabProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getLabProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <LabProjectContent project={project} />;
}

function LabProjectContent({ project }: { project: LabProject }) {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-br from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold">
                {project.year}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                Lab Project
              </span>
              {project.status === 'in-progress' && (
                <span className="px-4 py-2 bg-[#588157] text-white rounded-full text-sm font-semibold">
                  Applications Open
                </span>
              )}
              {project.status === 'completed' && (
                <span className="px-4 py-2 bg-[#344E41] text-white rounded-full text-sm font-semibold">
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mb-8">
              {project.shortDescription}
            </p>
            
            {/* Apply CTA in Hero for in-progress projects */}
            {project.status === 'in-progress' && project.applicationUrl && (
              <a
                href={project.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300 shadow-lg flex items-center gap-2">
                  Apply Now
                  <ExternalLink className="w-5 h-5" />
                </button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">

          {/* Overview */}
          <section>
            <div
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Project Overview</h2>
              </div>

              <div className="bg-linear-to-br from-secondary/30 to-white rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-12">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <Calendar className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {project.projectDetails.timeline}
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <Users className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Team Size</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {project.projectDetails.teamSize}
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <FileText className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Publication</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {project.projectDetails.publication}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Timeline/Phases */}
          {project.timeline && project.timeline.length > 0 && (
            <section>
              <div
              >
                <h2 className="text-4xl font-bold text-primary mb-6">Project Phases</h2>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="bg-surface rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                            item.status === 'in-progress' ? 'bg-[#588157]' : 
                            item.status === 'completed' ? 'bg-[#344E41]' : 'bg-sky-600'
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {item.status === 'in-progress' && (
                              <span className="px-3 py-1 bg-[#DAD7CD] text-[#344E41] border border-[#588157] rounded-full text-xs font-semibold">
                                In Progress
                              </span>
                            )}
                            {item.status === 'upcoming' && (
                              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-semibold">
                                Upcoming
                              </span>
                            )}
                            {item.status === 'completed' && (
                              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                                Completed
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-2">{item.phase}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Research Questions */}
          {project.researchQuestions && project.researchQuestions.length > 0 && (
            <section>
              <div
              >
                <h2 className="text-4xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Lightbulb className="w-10 h-10" />
                  Research Questions
                </h2>
                <div className="bg-linear-to-br from-primary/5 to-secondary/30 rounded-2xl p-8">
                  <ul className="space-y-4">
                    {project.researchQuestions.map((question, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white text-sm">?</span>
                        </div>
                        <p className="text-gray-700 text-lg">{question}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Methods */}
          {project.methods && project.methods.length > 0 && (
            <section>
              <div
              >
                <h2 className="text-4xl font-bold text-primary mb-6">Main Methods</h2>
                <div className="bg-linear-to-br from-primary/5 to-secondary/30 rounded-2xl p-8">
                  <ul className="space-y-4">
                    {project.methods.map((method, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{method.title}</h4>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
