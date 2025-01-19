import React from 'react';
import { FaJava, FaPython, FaNodeJs, FaReact, FaAws, FaGitAlt, FaClock, FaCalendarCheck, FaGlobeAmericas } from 'react-icons/fa'
import { SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'
import { BsLightningChargeFill } from "react-icons/bs";

const menuItems = [
  { title: 'Home', link: 'hero' },
  { title: 'About', link: 'about' },
  { title: 'Skills', link: 'skills' },
  // { title: 'Projects', link: 'projects' },
  { title: 'Experience', link: 'experience' },
  { title: 'Testimonials', link: 'testimonials' },
  { title: 'Contact', link: 'contact' },
]

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "January 17, 2025",
    badge: "/certifications/clf.png",
    validationId: "5abc5047ab254859c8d048961b681b3",
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "CommerceTools Certification",
    issuer: "CommerceTools",
    date: "July 26, 2023",
    badge: "/certifications/commercetools.png",
    validationId: "I9WL80QfAD",
    verifyUrl: "https://www.commercetools.com/"
  }
]
  
  const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'React', icon: FaReact },
    { name: 'Express', icon: SiExpress },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'AWS', icon: FaAws },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Git', icon: FaGitAlt },
  ]

  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://project1.com'
    },
    // Add more projects...
  ]

  const testimonials = [
    {
      name: 'Mayur Bhatia',
      position: 'Salesforce B2B/B2C Developer',
      image: './testimonials/Mayur.png',
      text: 'I worked with Nitin on various projects. He is very technical and gives all the dedication and detail observation for any work he takes out. He is very friendly and shows good team spirit. I would definitely recommend him.'
    },
    {
      name: 'Akshay Prakash',
      position: 'Lead Consultant at infosys',
      image: './testimonials/Akshay.png',
      text: 'I had the privilege of working with Nitin in different projects at TAISTech. Nitin is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill. He is a great asset to any company.'
    },
    {
      name: 'Adarsh Verma',
      position: 'Senior Application Analyst',
      image: './testimonials/Adarsh.png',
      text: 'I have worked with with Nitin on endeca search and it was really fun working along with him. He is a very good learner and I wish him best for his future projects.'
    },
    {
      name: 'Rakesh Singh',
      position: 'Software Developer at Optus',
      image: './testimonials/Rakesh.png',
      text: 'Nitin is hard and dedicated worker. He works with an alert mind. It was a pleasure to work with him.'
    },
    // Add more testimonials...
  ]

  const experiences = [
    {
      company: 'Company Name 1',
      position: 'Senior Developer',
      period: '2022 - Present',
      description: 'Led development of multiple full-stack applications, mentored junior developers, and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'AWS']
    },
    {
      company: 'Company Name 2',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams.',
      technologies: ['Vue.js', 'Python', 'Docker']
    },
    // Add more experiences...
  ]

  type TimelineEntry = {
    title: string;
    content: React.ReactNode;
  };
  
  const timelineData: TimelineEntry[] = [
    {
      title: "Technical Lead 2",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">Mastek</h4>
            <span className="text-sm text-gray-400">Jan 2020 - Present · 5 yrs</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Leading technical initiatives and architectural decisions</li>
            <li>Mentoring team members and conducting code reviews</li>
            <li>Implementing best practices and design patterns</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Java", "Spring Boot", "React", "AWS", "Microservices"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Technical Lead",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">TAISTech</h4>
            <span className="text-sm text-gray-400">May 2017 - Jan 2020 · 2 yrs 9 mos</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Led development teams and managed project deliverables</li>
            <li>Architected and implemented scalable solutions</li>
            <li>Collaborated with stakeholders to define technical requirements</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Java", "Spring", "Oracle", "REST APIs", "Agile"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Technical Analyst",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">TAISTech</h4>
            <span className="text-sm text-gray-400">Dec 2014 - May 2017 · 2 yrs 6 mos</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Analyzed and implemented complex technical solutions</li>
            <li>Developed and maintained enterprise applications</li>
            <li>Provided technical guidance to team members</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Java", "Spring MVC", "Hibernate", "SQL", "JavaScript"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Senior Software Engineer",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">TAISTech</h4>
            <span className="text-sm text-gray-400">Jan 2013 - Dec 2014 · 2 yrs</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">Gurgaon, India</div>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Developed and maintained enterprise-level applications</li>
            <li>Implemented new features and optimized existing codebase</li>
            <li>Collaborated with cross-functional teams</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Java", "J2EE", "Spring", "Hibernate", "SQL"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "ATG Developer",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">Collabera</h4>
            <span className="text-sm text-gray-400">Dec 2011 - Jan 2013 · 1 yr 2 mos</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">Bengaluru Area, India</div>
          <p className="text-gray-300/90 mt-2">Run.com</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Worked with ATG Repositories and Commerce Reference Store</li>
            <li>Created various Out Of Box components</li>
            <li>Implemented ATG Mail service and content personalization using ACC and BCC</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["ATG", "Java", "Commerce", "Oracle", "JSP"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Associate ATG Developer",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-blue-500/80">Collabera</h4>
            <span className="text-sm text-gray-400">May 2011 - Dec 2011 · 8 mos</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">Bengaluru Area, India</div>
          <p className="text-gray-300/90 mt-2">USAP/JCW</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300/90">
            <li>Worked with ATG Business Control Center for project deployment</li>
            <li>Identified and fixed performance and functional issues</li>
            <li>Managed application, web and database servers</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {["ATG", "Java", "BCC", "SQL", "Web Services"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400/80 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];


// const timeZones = [
//   { city: "Los Angeles", time: "PST", offset: "-8:00" },
//   { city: "New York", time: "EST", offset: "-5:00" },
//   { city: "London", time: "GMT", offset: "+0:00" },
//   { city: "Dubai", time: "GST", offset: "+4:00" },
//   { city: "Singapore", time: "SGT", offset: "+8:00" },
// ];

const features = [
  {
    icon: <FaClock className="w-6 h-6 text-blue-400" />,
    title: "Flexible Hours",
    description: "Available during your business hours, regardless of time zones"
  },
  {
    icon: <FaGlobeAmericas className="w-6 h-6 text-blue-400" />,
    title: "Global Reach",
    description: "Working with clients worldwide, adapting to different cultures"
  },
  {
    icon: <BsLightningChargeFill className="w-6 h-6 text-blue-400" />,
    title: "Quick Response",
    description: "Fast communication and regular progress updates"
  },
  {
    icon: <FaCalendarCheck className="w-6 h-6 text-blue-400" />,
    title: "Scheduled Meetings",
    description: "Regular sync-ups at times that work for you"
  }
];

  export {certifications, skills, projects, experiences, menuItems, timelineData, testimonials, features}