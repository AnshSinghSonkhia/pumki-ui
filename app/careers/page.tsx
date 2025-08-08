'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Clock, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import DynamicNavbar from '@/components/landing/ui/DynamicNavbar';
import { getNavigationConfig } from '@/lib/navigation';
import Footer from '@/components/layout/Footer';

interface JobListing {
  id: string;
  title: string;
  department: string;
  description: string;
  location: string;
  type: string;
  departmentColor: string;
  departmentShort: string;
  applyUrl: string;
}

const jobListings: JobListing[] = [
  {
    id: 'ui-ux-design-intern',
    title: 'UI/UX Design Intern',
    department: 'Design',
    description: `Goal: Improve product usability and visual appeal\n\nTasks:\n- Design UI components, illustrations, and layouts\n- Contribute to design system\n- Create brand-consistent visuals (e.g., hero banners, mascots, OG images)\n- Conduct small usability tests and collect user feedback\n\nIdeal for: Design students or self-taught designers with a Dribbble/Behance/Figma portfolio`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
    departmentShort: 'Design',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'frontend-dev-intern',
    title: 'Frontend Developer Intern (React/Next.js)',
    department: 'Software Engineering',
    description: `Goal: Help build and polish the component library\n\nTasks:\n- Implement new components\n- Write documentation examples\n- Fix bugs, optimize code, improve accessibility\n- Contribute animations, interactions\n\nIdeal for: B.Tech/BCA students who know React/TypeScript and want open-source exposure`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
    departmentShort: 'Software',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'branding-visual-identity-intern',
    title: 'Branding & Visual Identity Intern',
    department: 'Design',
    description: `Goal: Strengthen the brand personality of Pumki UI\n\nTasks:\n- Define brand colors, logo variants, and usage\n- Create brand kits, social banners, component showcase slides\n- Work closely with the design team to maintain consistency\n\nIdeal for: Visual design or communication students`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
    departmentShort: 'Design',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'sponsorship-partnerships-intern',
    title: 'Sponsorship & Partnerships Intern',
    department: 'Sales',
    description: `Goal: Help Pumki UI find sponsors, collaborators, or free tools\n\nTasks:\n- Research potential sponsors and draft outreach emails\n- Manage sponsorship CRM\n- Help pitch to relevant companies, dev tools, or communities\n\nIdeal for: Business, marketing, or management students`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-indigo-500/10 text-indigo-400 ring-indigo-500/20',
    departmentShort: 'Sales',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'social-media-community-intern',
    title: 'Social Media & Community Intern',
    department: 'Community',
    description: `Goal: Grow online presence, drive traffic, and build a developer community\n\nTasks:\n- Manage Pumki UI’s Twitter, LinkedIn, GitHub presence\n- Share new components, case studies, memes, and insights\n- Engage with developers, respond to comments, post updates\n\nIdeal for: Content creators, meme-savvy folks, or comms/PR students`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-orange-500/10 text-orange-400 ring-orange-500/20',
    departmentShort: 'Community',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'technical-content-writing-intern',
    title: 'Technical Content Writing Intern',
    department: 'Community',
    description: `Goal: Write guides, blogs, and dev-focused documentation\n\nTasks:\n- Write “How to use X component” blog posts\n- Create MDX docs, tutorials, changelogs\n- Write for producthunt, dev.to, Hashnode, Reddit, etc.\n\nIdeal for: CS students who love writing & explaining`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-orange-500/10 text-orange-400 ring-orange-500/20',
    departmentShort: 'Community',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'automation-devops-intern',
    title: 'Automation/DevOps Intern',
    department: 'Software Engineering',
    description: `Goal: Simplify CI/CD, docs deployment, or design-to-code tools\n\nTasks:\n- Automate deployment with GitHub Actions\n- Create design-token scripts\n- Help with cloudflare/vercel setup\n\nIdeal for: Interns who love DevOps or scripting workflows`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
    departmentShort: 'Software',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
  {
    id: 'mascot-design-animation-intern',
    title: 'Mascot Design & Animation Intern',
    department: 'Design',
    description: `Goal: Build fun branding via animations, storytelling, and mascot presence\n\nTasks:\n- Animate mascot in SVG/Lottie\n- Create Easter eggs, interactive docs pages\n- Help design onboarding animations, intro screens\n\nIdeal for: Creative artists, animators, motion design students`,
    location: 'Remote',
    type: 'Internship',
    departmentColor: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
    departmentShort: 'Design',
    applyUrl: 'https://forms.gle/design-intern-2025'
  },
];

const departments = [
  { id: 'all', name: 'View all' },
  { id: 'design', name: 'Design' },
  { id: 'softwareEngineering', name: 'Engineering' },
  { id: 'customerSuccess', name: 'Customer Success' },
  { id: 'sales', name: 'Sales' },
  { id: 'marketing', name: 'Community' }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => {
        switch (selectedDepartment) {
          case 'design':
            return job.department === 'Design';
          case 'softwareEngineering':
            return job.department === 'Software Engineering';
          case 'customerSuccess':
            return job.department === 'Customer Success';
          case 'sales':
            return job.department === 'Sales';
          case 'marketing':
            return job.department === 'Community';
          default:
            return true;
        }
      });

  return (
    <>
      <DynamicNavbar 
        navigationLinks={getNavigationConfig('careers')}
        variant="gradient"
      />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background effects for entire page */}
        <div className="absolute inset-0 z-0">
          <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" />
          <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 z-10">

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
              Open positions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground md:mt-5 md:text-xl max-w-2xl">
              We're a 100% remote team spread all across the world. Join us!
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 w-full md:mx-auto md:mt-16"
          >
            {/* Horizontal Scroll Tabs for All Devices */}
            <div className="w-full overflow-hidden">
              <div className="px-4 sm:px-6 md:px-8 lg:px-0">
                <div className="flex gap-2 overflow-x-auto careerscrollbar-hide pb-2 lg:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={cn(
                        "flex-shrink-0 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all whitespace-nowrap min-w-fit",
                        selectedDepartment === dept.id
                          ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                          : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                      )}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="relative pb-12 md:pb-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-full max-w-4xl"
          >
            <div className="grid gap-4 md:gap-5">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="w-full"
                >
                  <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary/50 bg-card border-border w-full">
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full ring-1 ring-inset text-xs font-semibold shrink-0",
                            job.departmentColor
                          )}
                        >
                          <Circle className="h-2 w-2 fill-current" />
                          {job.departmentShort}
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 h-auto p-0 shrink-0"
                          asChild
                        >
                          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                            <span className="text-sm underline decoration-transparent underline-offset-2 hover:decoration-current">
                              Apply
                            </span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>

                      {/* Job Title */}
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                          {job.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Footer */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-muted-foreground/70 shrink-0" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {job.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-muted-foreground/70 shrink-0" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {job.type}
                          </span>
                        </div>
                        {/* Mobile Apply Button */}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="sm:hidden ml-auto items-center gap-1 text-primary hover:text-primary/80 h-auto p-0"
                          asChild
                        >
                          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                            <span className="text-sm underline decoration-transparent underline-offset-2 hover:decoration-current">
                              Apply
                            </span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">
                  No positions available in this department at the moment.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Check back soon or view all positions.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
