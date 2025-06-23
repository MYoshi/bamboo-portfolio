'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { kaushan } from '../fonts';

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const name = 'Marcelo Fukumoto'.split('');
  const portfolio = 'Portfolio'.split('');
  return (
    <main>
      <div className="h-screen w-full max-w-screen fixed top-0 left-0 overflow-hidden z-30 pointer-events-none">
        <div className="h-screen w-full max-w-screen border-20 sm:border-30 lg:border-40 xl:border-80 border-black/97 relative bg-transparent"></div>
      </div>
      <div className="h-screen w-full max-w-screen top-0 left-0 z-20 text-white relative">
        <div className="h-screen w-full max-w-screen border-20 sm:border-30 lg:border-40 xl:border-80 border-transparent relative">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 3, duration: 1 }}
            className="sm:p-10 p-5 absolute top-0 left-0 right-0 flex h-full"
          >
            <div className="flex lg:flex-row flex-col text-green-100 w-full gap-10 mx-auto max-w-[1200px]">
              <div className="lg:fixed flex flex-col flex-1 max-w-[450px] lg:w-1/4 w-full">
                <div className="flex flex-row text-white">
                  {name.map((char, i) => (
                    <motion.h1
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3 + i * 0.05, duration: 0.3 }}
                      className="text-3xl sm:text-5xl lg:text-3xl xl:text-5xl"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.h1>
                  ))}
                </div>
                <h2 className="mt-2 text-2xl text-green-200">Software Engineer</h2>
                <p className="mt-2 text-sm">
                  A passionate software engineer with a love for creating innovative solutions.
                  <br />
                  Making designs come to life with code, one project at a time.
                  <br />
                  Passionate about AI. Using it to enhance user experiences and streamline processes.
                  <br />
                  <a
                    href="https://claude.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-300 hover:text-green-600"
                  >
                    Claude
                  </a>
                  {' '}
                  ,
                  {' '}
                  <a
                    href="https://chat.openai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-300 hover:text-green-600"
                  >
                    ChatGPT
                  </a>
                  {' '}
                  , and
                  {' '}
                  <a
                    href="https://github.com/features/copilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-300 hover:text-green-600"
                  >
                    GitHub Copilot
                  </a>
                  {' '}
                  are my daily companions.
                  <br />
                  Always learning, always growing. Embracing new challenges and technologies.
                </p>
                <div className="flex flex-row gap-4 mt-7">
                  <a
                    href="https://github.com/marcelofukumoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-green-300 hover:text-green-500 transition-colors"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="inline-block"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcelo-yoshiaki-fukumoto-238322116/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-green-300 hover:text-green-500 transition-colors"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="inline-block"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                    </svg>
                  </a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="lg:w-2/3 w-full lg:max-w-[600px] ml-auto"
              >
                <div className="text-md text-white">
                  {[
                    'With over 10 years of experience in software engineering, I’ve been building and leading high-performing teams across Brazil and Japan—driving innovation in frontend and backend development with technologies like React, Next.js, Node.js, and Java.',
                    'I’ve led the architecture of scalable microservices on AWS + Kubernetes, introduced CI/CD pipelines that slashed deployment time by 90%, and championed modern practices like test automation, feature flags, and event-driven architecture.',
                    'At AXA Japan, I was recognized with the MVP award for my leadership and impact—mentoring engineers, leading pilots, and launching a company-wide design system integrated with Figma and Storybook.',
                    'From founding my own startup to integrating Generative AI into enterprise workflows, my journey reflects a hands-on, ownership-driven approach backed by strong technical depth and people-first leadership.',
                  ].map((paragraph, idx) => (
                    <p className="mt-2" key={idx}>
                      {paragraph.split(' ').map((word, i) => {
                        // Check if word is all uppercase or capitalized (first letter uppercase, rest lowercase)
                        const isCapital
                      = /^[A-Z]{2,}$/.test(word.replace(/[^A-Z]/gi, '')) // ALL CAPS
                        || /^[A-Z][a-z]+$/.test(word.replace(/[^A-Z]/gi, '')); // Capitalized
                        return (
                          <span
                            key={i}
                            className={isCapital ? 'text-green-300' : undefined}
                          >
                            {word}
                            {i !== paragraph.split(' ').length - 1 ? ' ' : ''}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row justify-between mt-5">
                  {['AXA Japan', 'Rakuten', 'Clube da Entrega'].map((company, idx) => (
                    <button
                      key={company}
                      type="button"
                      onClick={() => setSelectedCompany(idx)}
                      className={`mt-7 font-semibold flex-grow-1 text-center border-2 rounded-t-2xl flex items-center justify-center h-14 ${
                        selectedCompany === idx
                          ? 'bg-white/70 text-green-800 border-b-transparent'
                          : 'bg-white/30 text-green-950'
                      }`}
                    >
                      <span className={selectedCompany === idx ? '' : 'text-gray-400'}>
                        {company}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="bg-white/70 p-3 rounded-b-md border-2 text-green-800">
                  {selectedCompany === 0 && (
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Technical Lead and Solution Owner for a 10 members distributed team.
                      </li>
                      <li>
                        Architected 15 microservices in an AWS and Kubernetes empowered environment using Typescript, React, Next.js, Node.js, Java, Lambda, MongoDB, saving cost after removing previous framework and moving out of a Monolithic server.
                      </li>
                      <li>
                        Launched a company-wide Design System which had a direct impact on conversion rate.
                      </li>
                      <li>
                        Designed and created CI/CD pipelines with Jenkins and GitOps, cutting deployment time from more than 1 hour to less than 5 minutes. Introduced Test Automation in Playwright, reducing regression by 50%.
                      </li>
                      <li>
                        Built and maintained a scalable Design System in Figma, integrated with Storybook for seamless collaboration between design and engineering teams.
                      </li>
                      <li>
                        Led many successful pilots, like the introduction of Feature Flags, Alerts Improvement on Splunk, improving innovation in the company.
                      </li>
                      <li>
                        Mentored engineers via monthly 1on1 and quarterly review. Conducted a 2-year cycle of goal settings and feedback.
                      </li>
                      <li>
                        Maintained a hands-on approach, leading by example.
                      </li>
                      <li>
                        Led and mentored developer team to use GenAI for development.
                      </li>
                    </ul>
                  )}
                  {selectedCompany === 1 && (
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Led the team of 4 members to deliver projects on real time customer support applications.
                      </li>
                      <li>
                        Refactored support chat system for e-commerce to a new structure using Next.js, NodeJS, ReactJS, JAVA, Event Driven and WebSockets.
                      </li>
                      <li>
                        Improved process by introducing tools like CI/CD and Test Automation, removing need for manual regression test.
                      </li>
                    </ul>
                  )}
                  {selectedCompany === 2 && (
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Created the startup developing the first prototypes, creating the first architecture for all applications. That includes the entire setup on AWS, including server, databases, DNS, security.
                      </li>
                      <li>
                        Created and coached a new engineering team, introducing Agile, CI/CD, and Git workflows.
                      </li>
                      <li>
                        Established contract with McDonald’s.
                      </li>
                    </ul>
                  )}
                </div>
                <div className="border-20 sm:border-30 lg:border-40 xl:border-80 border-transparent"></div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-full max-w-screen fixed top-0 left-0 overflow-hidden z-10">
        <div className="h-screen w-full max-w-screen border-20 sm:border-30 lg:border-40 xl:border-80 border-transparent relative">
          <motion.div
            initial={{
              opacity: 0.9,
            }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2, duration: 1 }}

            className="h-full w-full border-1 xl:border-2 border-green-100 bg-black"
          >
            <motion.div
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{ delay: 2, duration: 1 }}

              className="flex h-full w-full justify-center items-center"
            >
              <div className="flex fit-content flex-col w-fit">
                <div className="flex flex-row">
                  {name.map((char, i) => (
                    <motion.h1
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`text-3xl sm:text-5xl text-white font-bold ${kaushan.className}`}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.h1>
                  ),
                  )}
                </div>

                <div className="flex flex-row">
                  {portfolio.map((char, i) => (
                    <motion.h1
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="text-3xl text-white font-bold"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.h1>
                  ),
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
