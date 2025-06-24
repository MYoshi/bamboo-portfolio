'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedName from '@/components/AnimatedName';
import CompanyDetails from '@/components/CompanyDetails';
import CompanySelector from '@/components/CompanySelector';
import SocialLinks from '@/components/SocialLinks';
import { kaushan } from '../fonts';

export default function Home() {
  const t = useTranslations('Home');
  const [selectedCompany, setSelectedCompany] = useState(0);
  const name = t('name');
  const portfolio = 'Portfolio';
  return (
    <main>
      <div className="h-screen w-full max-w-screen fixed top-0 left-0 overflow-hidden z-30 pointer-events-none">
        <div className="h-screen w-full max-w-screen border-20 sm:border-30 lg:border-40 xl:border-80 border-black/97 relative bg-transparent"></div>
      </div>
      <div className="h-screen w-full max-w-screen top-0 left-0 z-20 text-white relative">
        <div className="h-screen w-full max-w-screen border-20 sm:border-30 lg:border-40 xl:border-80 border-transparent relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="sm:p-10 p-5 absolute top-0 left-0 right-0 flex h-full"
          >
            <div className="flex lg:flex-row flex-col text-green-100 w-full gap-10 mx-auto max-w-[1200px]">
              <div className="lg:fixed flex flex-col flex-1 max-w-[450px] lg:w-1/4 w-full">
                <AnimatedName name={name} className="text-3xl sm:text-5xl lg:text-3xl xl:text-5xl" addedDelay={3} />
                <h2 className="mt-2 text-2xl text-green-200">{t('role')}</h2>
                <p className="mt-2 text-sm">
                  {t('about')}
                  <br />
                  <span>{t('aiTools')}</span>
                </p>
                <SocialLinks />
                <div className="flex flex-col justify-center items-center lg:items-start  w-full mt-7">
                  {/* Caramelo image at bottom right */}
                  <a
                    href="https://ocarameloaventureiro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-[80px] h-[80px] rounded-full overflow-hidden bg-white/10 shadow-lg"
                  >
                    <Image
                      src="/images/caramelo/caramelo.jpg"
                      alt="Caramelo"
                      width={100}
                      height={120}
                      className="object-cover w-full h-full"
                      priority
                    />
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
                  {t.raw('aboutParagraphs').map((paragraph: string) => (
                    <p className="mt-2" key={paragraph}>
                      {paragraph.split(' ').map((word, i) => {
                        const isCapital = /^[A-Z]{2,}$/.test(word.replace(/[^A-Z]/gi, '')) || /^[A-Z][a-z]+$/.test(word.replace(/[^A-Z]/gi, ''));
                        return (
                          <span key={word + i} className={isCapital ? 'text-green-300' : undefined}>
                            {word}
                            {i !== paragraph.split(' ').length - 1 ? ' ' : ''}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>
                <CompanySelector companies={t.raw('companies')} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
                <div className="bg-white/70 p-3 rounded-b-md border-2 text-green-800">
                  <CompanyDetails details={t.raw('companyDetails')[selectedCompany]} />
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
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2, duration: 1 }}
            className="h-full w-full border-1 xl:border-2 border-green-100 bg-black"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex h-full w-full justify-center items-center"
            >
              <div className="flex fit-content flex-col w-fit">
                <AnimatedName name={name} className={`text-3xl sm:text-5xl lg:text-7xl text-white font-bold ${kaushan.className}`} />
                <div className="flex flex-row">
                  {portfolio.split('').map((char, i) => (
                    <motion.h1
                      key={char + i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="text-2xl sm:text-2xl lg:text-3xl text-white font-bold"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.h1>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
