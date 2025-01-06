import React, { useState } from 'react';
import { Bug } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ProjectCard } from './components/ProjectCard';
import { Testimonial } from './components/Testimonial';
import { BugReportForm } from './components/BugReportForm';
import { SkillCard } from './components/SkillCard';
import { projects } from './data/projects';
import { testimonials } from './data/testimonials';
import { skillsData } from './data/skills';

function App() {
  const [showBugReport, setShowBugReport] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillsData).map(([key, data], index) => (
              <SkillCard
                key={key}
                title={data.title}
                skills={data.skills}
                icon={key as any}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="flex overflow-x-hidden">
            <div className="flex animate-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Get in Touch</h2>
          <a
            href="mailto:krishnag17503@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Bug Report Button */}
      <button
        onClick={() => setShowBugReport(true)}
        className="fixed bottom-4 right-4 bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
      >
        <Bug size={24} />
      </button>

      {/* Bug Report Modal */}
      {showBugReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Report a Bug</h3>
              <button
                onClick={() => setShowBugReport(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <BugReportForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;