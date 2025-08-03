'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { NumberTicker } from '@/components/mvpblocks/counter';
import { Spotlight } from '@/components/mvpblocks/spotlight';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Navbar from "@/components/landing/aboutNavbar";
import { Lightning } from "@/components/landing/lightning";
import { ChevronRight } from 'lucide-react';
import { GradientBars } from '@/components/ui/gradient-bars';
import { TextReveal } from '@/components/ui/text-reveal';

import {
  Users,
  Award,
  Briefcase,
  Code,
  Sparkles,
  Building,
  LineChart,
  CheckCircle,
  Clock,
  Zap,
} from 'lucide-react';
import { Ripple } from '@/components/magicui/ripple';

interface StatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  decimalPlaces?: number;
  color?: string;
}

const StatItem = ({
  value,
  label,
  icon,
  delay = 0,
  decimalPlaces = 0,
  color = 'from-primary to-primary/70',
}: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className={cn(
        'group border-border/30 bg-card relative overflow-hidden rounded-xl border p-6',
        resolvedTheme === 'dark'
          ? 'shadow-xl shadow-black/5'
          : 'shadow-lg shadow-black/[0.03]',
      )}
    >
        <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />
      <div
        className={cn(
          'absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl',
          color,
        )}
      />

      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white',
            color,
          )}
        >
          {icon}
        </div>

        <div className="flex flex-col">
          <h3 className="flex items-baseline text-3xl font-bold tracking-tight">
            <NumberTicker
              value={value}
              decimalPlaces={decimalPlaces}
              className="tabular-nums"
            />
            <span className="ml-1 text-sm font-medium opacity-70">+</span>
          </h3>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  // const stats = [
  //   {
  //     value: 5000,
  //     label: 'Happy Clients',
  //     icon: <Users className="h-5 w-5" />,
  //     delay: 0,
  //     color: 'from-rose-500 to-orange-500',
  //     decimalPlaces: 0,
  //   },
  //   {
  //     value: 15,
  //     label: 'Years Experience',
  //     icon: <Clock className="h-5 w-5" />,
  //     delay: 0.1,
  //     color: 'from-blue-500 to-cyan-500',
  //     decimalPlaces: 0,
  //   },
  //   {
  //     value: 100,
  //     label: 'Projects Completed',
  //     icon: <CheckCircle className="h-5 w-5" />,
  //     delay: 0.2,
  //     color: 'from-green-500 to-emerald-500',
  //     decimalPlaces: 0,
  //   },
  //   {
  //     value: 24,
  //     label: 'Awards Won',
  //     icon: <Award className="h-5 w-5" />,
  //     delay: 0.3,
  //     color: 'from-purple-500 to-violet-500',
  //     decimalPlaces: 0,
  //   },
  // ];

  return (
    <>
        <Navbar />

    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Lightning Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Lightning
          hue={270}
          xOffset={0}
          speed={0.5}
          intensity={0.8}
          size={1.5}
          className="absolute inset-0"
        />
      </div>

       {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="from-primary/10 via-background/90 to-background/80 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" />
        <div className="bg-primary/10 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center">
                <GradientBars />
            </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />


      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />

      {/* Ripple effect overlay */}
      {/**
      <div className="pointer-events-none absolute left-0 top-40 z-10 h-[800px] w-full overflow-hidden">
        <Ripple />
      </div>
      */}

      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header Section with Badge */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4 flex justify-center"
          >
              <span className="bg-primary mr-2 rounded-full px-2 py-0.5 text-xs font-semibold text-white">
                About Us
              </span>
            {/* <div className="border-border bg-background/80 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm cursor-pointer"> */}
              {/* <span className="text-muted-foreground">
                
              </span> */}
              {/* <ChevronRight className="text-muted-foreground ml-1 h-4 w-4" /> */}
            {/* </div> */}
          {/* </motion.div> */}

          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
          >
            About Our Company
          </motion.h1> */}

          <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            >
                We're Pumki UI
            </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-muted-foreground mt-4 text-xl"
          >
            Delivering excellence for over 15 years
          </motion.p> */}
        </div>

        {/* Stats Section */}
        {/* <div ref={statsRef} className="mb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"> */}
            {/* {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={stat.delay || index * 0.1}
                decimalPlaces={stat.decimalPlaces}
                color={stat.color}
              />
            ))} */}
          {/* </div>
        </div> */}

        {/* About Content Section */}
        <div ref={aboutRef} className="relative mx-auto -mt-8 mb-20">
          {/* <div className="grid gap-16 md:grid-cols-2"> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="relative space-y-6"
            >
              <div className="from-primary/80 to-primary/60 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                <Zap className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>

              <p className="text-muted-foreground text-base leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving technological landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="relative space-y-6"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-blue-500/60 text-white shadow-lg">
                <LineChart className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">Our Vision</h2>

              <p className="text-muted-foreground text-base leading-relaxed">
                To be the leading provider of transformative digital
                experiences, recognized globally for our commitment to
                excellence, innovation, and client success.
              </p>
            </motion.div> */}
          {/* </div> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="mt-16 flex items-start gap-4"
          >
            <div className="from-primary/20 to-primary/5 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-muted-foreground text-base leading-relaxed space-y-4">
              <p>
                PumkiUI exists to simplify how developers build beautiful, modern interfaces.
                Built by a solo developer, the mission is simple:
                Ship stunning UIs from one library, not ten.

                No bloated design systems. No scattered dependencies. Just clean, customizable, 
                production-ready components: ready to drop into your app.
              </p>
              {/* <p>
                No bloated design systems. No scattered dependencies. Just clean, customizable, 
                production-ready components: ready to drop into your app.
              </p> */}
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl"
          >
            Our Journey
          </motion.h2> */}
          <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl mb-8"
            >
                Our Journey
            </motion.h3>

          <div className="border-border/60 relative ml-4 border-l pl-8 md:ml-0 md:border-none md:pl-0">
            {[
            //   {
            //     year: '2008',
            //     title: 'Founded',
            //     description:
            //       'Our company was established with a vision to transform digital experiences.',
            //   },
            //   {
            //     year: '2015',
            //     title: 'Global Expansion',
            //     description:
            //       'Expanded operations to serve clients across 20+ countries worldwide.',
            //   },
              {
                year: 'Aug, 2025',
                title: 'Launched MVP',
                description:
                  'We released the first version of Pumki UI, empowering developers to build beautiful interfaces faster and more efficiently.',
              },
              {
                year: 'Jul, 2025',
                title: 'Research & Development Phase',
                description:
                  'Pumki UI was founded with a mission to help teams ship stunning UIs from one library, not ten.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: 'easeOut',
                }}
                className="relative mb-10 md:grid md:grid-cols-5 md:gap-8"
              >
                <div className="md:col-span-1">
                    <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center tracking-tighter text-balance text-transparent md:text-xl mb-2 font-bold"
            >
                {item.year}
            </motion.p>
                  {/* <div className="border-border bg-card absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl">
                    {item.year}
                  </div> */}
                </div>
                <div className="md:col-span-4">
                  <h3 className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text tracking-tighter text-balance text-transparent text-lg md:text-xl mb-2 font-bold">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

            
        {/* Team Section */}
        <div className="relative mx-auto max-w-4xl mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl mb-16"
          >
            Team PumkiUI
          </motion.h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-8 text-center shadow-lg shadow-black/[0.03] transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.08]"
            >
              <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(216, 100%, 50%, 0.08) 0, hsla(221, 100%, 55%, 0.04) 50%, hsla(216, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(213, 100%, 85%, 0.08) 0, hsla(215, 100%, 55%, 0.04) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(212, 100%, 85%, 0.06) 0, hsla(207, 100%, 85%, 0.06) 80%, transparent 100%)"
              />
              
              {/* Avatar */}
              <a
                href="https://www.linkedin.com/in/anshsinghsonkhia"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                title="View LinkedIn profile"
              >
                <div className="relative z-20 mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-500/20 shadow-lg">
                  <img
                    src="/ansh.png"
                    alt="Ansh Singh Sonkhia"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>

              {/* Name */}
              <h4 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Ansh Singh Sonkhia
              </h4>

              {/* Position */}
              <p className="mb-4 text-sm font-medium text-blue-500">
                Founder & Creator, PumkiUI
              </p>

              {/* About */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                A solopreneur software engineer who loves building things that feel as good as they look. Ansh created PumkiUI to help developers ship stunning UIs without juggling ten different libraries. Clean code, thoughtful design, and fast shipping, that's his thing.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-8 text-center shadow-lg shadow-black/[0.03] transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.08]"
            >
              <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(216, 100%, 50%, 0.08) 0, hsla(221, 100%, 55%, 0.04) 50%, hsla(216, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(213, 100%, 85%, 0.08) 0, hsla(215, 100%, 55%, 0.04) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(212, 100%, 85%, 0.06) 0, hsla(207, 100%, 85%, 0.06) 80%, transparent 100%)"
              />
              
              {/* Avatar */}
              <a
                href="https://www.linkedin.com/company/pumkiui"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                title="View LinkedIn profile"
              >
                <div className="relative z-20 mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-500/20 shadow-lg">
                  <img
                    src="/logo-pumkiui.png"
                    alt="Mr. Pumki"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>

              {/* Name */}
              <h4 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Pumki - The Cutie
              </h4>

              {/* Position */}
              <p className="mb-4 text-sm font-medium text-blue-500">
                Mascot & Chief Delight Officer
              </p>

              {/* About */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                The fluffy-headed genius behind the smiles. With big sparkling eyes and a heart full of cozy vibes, he's here to make UI building feel less like work and more like magic. Always curious, always cheerful. Pumki reminds us that great design can be both powerful and playful.
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-8 text-center shadow-lg shadow-black/[0.03] transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.08]"
            >
              <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
              /> */}
              
              {/* Avatar */}
              {/* <a
                href="https://www.linkedin.com/company/pumkiui"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                title="View LinkedIn profile"
              >
                <div className="relative z-20 mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                  <img
                    src="/logo-pumkiui.png"
                    alt="Mr. Pumki"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a> */}

              {/* Name */}
              {/* <h4 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Pumki - The Cutie
              </h4> */}

              {/* Position */}
              {/* <p className="mb-4 text-sm font-medium text-primary">
                Mascot & Chief Delight Officer
              </p> */}

              {/* About */}
              {/* <p className="text-muted-foreground text-sm leading-relaxed">
               The fluffy-headed genius behind the smiles. With big sparkling eyes and a heart full of cozy vibes, he's here to make UI building feel less like work and more like magic. Always curious, always cheerful. Pumki reminds us that great design can be both powerful and playful.
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
