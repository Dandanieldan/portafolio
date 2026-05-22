"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Printer, Globe, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const cvData = {
  es: {
    title: "DANIEL VILLARREAL HERNANDEZ",
    subtitle: "DESARROLLADOR DE SOFTWARE",
    contact: "(+52) 6183371209 | Victoria de Durango, Durango | danielvillarrealh@gmail.com",
    profile: "Desarrollador de Software con experiencia en desarrollo web y móvil. Me enfoco en construir aplicaciones funcionales, escalables y centradas en la experiencia del usuario, creando soluciones modernas que combinan rendimiento, diseño y usabilidad.",
    skillsTitle: "RESUMEN DE HABILIDADES",
    skills: [
      { name: "Roles Clave", desc: "Desarrollo Frontend, Desarrollo Backend, Dispositivos Móviles, Herramientas de Control de Versiones." },
      { name: "Tecnologías", desc: "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Native, Bootstrap, Tailwind CSS, Node.js, PHP, Python, Git, GitHub, Postman, npm." },
      { name: "Capacidades", desc: "Diseño responsivo y mobile-first, Arquitectura basada en componentes, Consumo e integración de APIs REST, Aplicaciones basadas en bases de datos, Manejo de estado y datos, Flujos de interacción de usuario y validación de formularios, Autenticación básica y gestión de usuarios." }
    ],
    projectsTitle: "PROYECTOS DE DESARROLLO",
    projects: [
      {
        role: "Sistema Web, Gestión de Citas y Comercio Electrónico",
        company: "Correos Clic — Plataforma de E-commerce (Correos de México)",
        bullets: [
          "Diseñé y desarrollé un sistema basado en web para la programación de citas y la gestión de servicios.",
          "Implementé un panel de administración para la gestión de productos, control de pedidos y actualizaciones de contenido.",
          "Integré flujos de trabajo basados en bases de datos para usuarios, servicios e inventario de productos."
        ]
      },
      {
        role: "Desarrollador Web Frontend",
        company: "Correos Clic — Plataforma de E-commerce (Correos de México)",
        bullets: [
          "Colaboré en el desarrollo de la plataforma oficial de comercio electrónico de Correos de México, enfocada en la venta de productos en línea y la gestión de servicios.",
          "Desarrollé funciones frontend utilizando Next.js y React, aplicando Tailwind CSS para diseños responsivos basados en especificaciones de Figma.",
          "Construuí una arquitectura basada en componentes con interacciones y animaciones de interfaz de usuario modernas.",
          "Colaboré en la integración de flujos de trabajo de comercio electrónico, incluyendo la visualización de productos y los flujos de interacción del usuario."
        ]
      },
      {
        role: "Sistema Web, Seguimiento de Fitness y Progreso",
        company: "Calorie Intake & Gym Tracker",
        bullets: [
          "Desarrollé una plataforma web para el seguimiento de la ingesta de calorías, el progreso en el gimnasio y las transformaciones físicas.",
          "Implementé el registro de progreso a través de métricas y registros basados en fotos.",
          "Integré rutinas de entrenamiento y planes de dieta dentro de un sistema de usuario centralizado."
        ]
      },
      {
        role: "Aplicaciones Móviles & Web",
        company: "Mobile & Web Applications (React Native / Expo)",
        bullets: [
          "Desarrollé aplicaciones móviles utilizando React Native y Expo.",
          "Implementé la lógica de la aplicación, el manejo de datos y las interacciones del usuario.",
          "Enfoque en arquitectura limpia, rendimiento y mantenibilidad."
        ]
      },
      {
        role: "Integración de Chatbot y APIs",
        company: "Chatbot & API Integration",
        bullets: [
          "Desarrolló un chatbot con flujos conversacionales estructurados.",
          "Integró APIs externas para automatizar respuestas y manejar las interacciones del usuario.",
          "Gestionó la lógica de mensajes y procesos básicos de automatización."
        ]
      }
    ],
    experienceTitle: "EXPERIENCIA TÉCNICA",
    experience: [
      {
        role: "HP — Soporte Técnico",
        bullets: [
          "Diagnostiqué y resolví problemas de hardware y software.",
          "Realicé mantenimiento de sistemas y soporte al usuario."
        ]
      },
      {
        role: "Walmart — Asistente de Soporte de TI",
        bullets: [
          "Brindé soporte a sistemas internos y configuración de equipos.",
          "Colaboré con equipos de TI para resolver incidentes."
        ]
      }
    ],
    educationTitle: "EDUCACIÓN",
    education: [
      { degree: "Ingeniería en Software", school: "Universidad Politécnica de Durango (UNIPOLI)", date: "2022 – Presente" },
      { degree: "Redes y Telecomunicaciones", school: "Universidad Politécnica de Durango (UNIPOLI)", date: "2019 – 2021" }
    ],
    additionalTitle: "INFORMACIÓN ADICIONAL",
    additional: [
      "Inglés — B2 (ITEP Core)",
      "Fuerte interés en el aprendizaje continuo y el crecimiento profesional.",
      "Experiencia trabajando en proyectos del mundo real y entornos basados en equipos."
    ],
    certificationsTitle: "CERTIFICACIONES",
    certifications: [
      "IT Essentials — Cisco Networking Academy",
      "Ethical Hacking — Cisco Networking Academy",
      "Cloud Computing Fundamentals — AWS",
      "HTML & CSS Essentials — Cisco Networking Academy",
      "Python Essentials — Cisco Networking Academy"
    ],
    portfolioLabel: "Portafolio",
    linkedinLabel: "LinkedIn",
    backToPortfolio: "Volver",
    printText: "Imprimir / PDF",
    langText: "English",
    downloadENText: "PDF en Inglés"
  },
  en: {
    title: "DANIEL VILLARREAL HERNANDEZ",
    subtitle: "SOFTWARE DEVELOPER",
    contact: "(+52) 6183371209 | Victoria de Durango, Durango | danielvillarrealh@gmail.com",
    profile: "Software Developer with experience in web and mobile development. Focused on building functional, scalable, and user-centered applications, creating modern solutions that combine performance, design, and usability.",
    skillsTitle: "SKILLS SUMMARY",
    skills: [
      { name: "Core Roles", desc: "Frontend Development, Backend Development, Mobile, Version Control Tools." },
      { name: "Technologies", desc: "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Native, Bootstrap, Tailwind CSS, Node.js, PHP, Python, Git, GitHub, Postman, npm." },
      { name: "Capabilities", desc: "Responsive and mobile-first design, Component-based architecture, REST API consumption and integration, Database-driven applications, State and data handling, Form validation and user interaction flows, Basic authentication and user management." }
    ],
    projectsTitle: "DEVELOPMENT PROJECTS",
    projects: [
      {
        role: "Web system, Appointment & E-Commerce Management",
        company: "Correos Clic — E-commerce Platform (Correos de México)",
        bullets: [
          "Designed and developed a web-based system for appointment scheduling and service management.",
          "Implemented an admin panel for product management, order control, and content updates.",
          "Integrated database-driven workflows for users, services, and product inventory."
        ]
      },
      {
        role: "Frontend Web Developer",
        company: "Correos Clic — E-commerce Platform (Correos de México)",
        bullets: [
          "Contributed to the development of the official e-commerce platform for Correos de México, focused on online product sales and service management.",
          "Developed frontend features using Next.js and React, applying Tailwind CSS for responsive layouts based on Figma designs.",
          "Built a component-based architecture with modern UI interactions and animations.",
          "Collaborated on the integration of e-commerce workflows, including product display and user interaction flows."
        ]
      },
      {
        role: "Web system, Fitness Tracking & Progress",
        company: "Calorie Intake & Gym Tracker",
        bullets: [
          "Developed a web platform for tracking calorie intake, gym progress, and physical transformations.",
          "Implemented progress logging through metrics and photo-based records.",
          "Integrated workout routines and diet plans within a centralized user system."
        ]
      },
      {
        role: "Mobile Applications",
        company: "Mobile & Web Applications (React Native / Expo)",
        bullets: [
          "Developed mobile applications using React Native and Expo.",
          "Implemented application logic, data handling, and user interactions.",
          "Focused on clean architecture, performance, and maintainability."
        ]
      },
      {
        role: "Chatbot & API Integration",
        company: "Chatbot & API Integration",
        bullets: [
          "Developed a chatbot with structured conversational flows.",
          "Integrated external APIs to automate responses and handle user interactions.",
          "Managed message logic and basic automation processes."
        ]
      }
    ],
    experienceTitle: "TECHNICAL EXPERIENCE",
    experience: [
      {
        role: "HP — Technical Support",
        bullets: [
          "Diagnosed and resolved hardware and software issues.",
          "Performed system maintenance and user support."
        ]
      },
      {
        role: "Walmart — IT Support Assistant",
        bullets: [
          "Supported internal systems and equipment configuration.",
          "Collaborated with IT teams to resolve incidents."
        ]
      }
    ],
    educationTitle: "EDUCATION",
    education: [
      { degree: "Software Engineering", school: "Universidad Politécnica de Durango (UNIPOLI)", date: "2022 – Present" },
      { degree: "Networks and Telecommunications", school: "Universidad Politécnica de Durango (UNIPOLI)", date: "2019 – 2021" }
    ],
    additionalTitle: "ADDITIONAL INFORMATION",
    additional: [
      "English — B2 (ITEP Core)",
      "Strong interest in continuous learning and professional growth.",
      "Experience working on real-world projects and team-based environments."
    ],
    certificationsTitle: "CERTIFICATIONS",
    certifications: [
      "IT Essentials — Cisco Networking Academy",
      "Ethical Hacking — Cisco Networking Academy",
      "Cloud Computing Fundamentals — AWS",
      "HTML & CSS Essentials — Cisco Networking Academy",
      "Python Essentials — Cisco Networking Academy"
    ],
    portfolioLabel: "Portfolio",
    linkedinLabel: "LinkedIn",
    backToPortfolio: "Back",
    printText: "Print / PDF",
    langText: "Español",
    downloadENText: "English PDF"
  }
};

// --- Custom Cursor Component ---
const CustomCursor = ({ isDark }: { isDark: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.interactive-demo') || target.closest('input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full hidden md:block z-[100] pointer-events-none mix-blend-difference bg-white`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border hidden md:block z-[100] pointer-events-none mix-blend-difference border-white`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)'
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  );
};

export default function CVPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = cvData[lang];

  useEffect(() => {
    setMounted(true);
    // Add cv-mode class to body & documentElement to allow scroll and custom cursor hide
    document.documentElement.classList.add("cv-mode");
    document.body.classList.add("cv-mode");
    return () => {
      document.documentElement.classList.remove("cv-mode");
      document.body.classList.remove("cv-mode");
    };
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="cv-page min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-0 md:p-8 flex flex-col items-center transition-colors duration-300">
      {/* Immersive Film Grain Overlay */}
      <div className="noise-overlay" />

      {/* Floating Control Header - Hidden on Print */}
      <div className="w-full max-w-[850px] sticky top-0 z-40 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/80 p-4 mb-4 md:mb-8 flex justify-between items-center rounded-none md:rounded-lg print:hidden">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-mono font-bold uppercase hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={14} /> {t.backToPortfolio}
        </Link>
        <div className="flex gap-2">
          {/* Language Switcher */}
          <button 
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white px-2.5 py-1.5 transition-colors"
          >
            <Globe size={12} /> {t.langText}
          </button>
          
          {/* Print Button */}
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white px-2.5 py-1.5 transition-colors"
          >
            <Printer size={12} /> {t.printText}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white px-2.5 py-1.5 transition-colors"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun size={12} /> : <Moon size={12} />}
          </button>
        </div>
      </div>

      {/* Main Resume Sheet - Proportional layout representing dynamic web + perfect print output */}
      <div className="w-full max-w-[850px] bg-white dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] p-6 md:p-14 font-sans leading-relaxed text-zinc-800 dark:text-zinc-300 text-xs transition-colors duration-300 print:bg-white print:text-black print:p-0 print:shadow-none print:border-none print:max-w-full">
        
        {/* Header */}
        <div className="text-center pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800 print:border-black">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white print:text-black uppercase">
            {t.title}
          </h1>
          <h2 className="text-xs md:text-sm font-mono tracking-widest uppercase mt-1.5 text-zinc-500 dark:text-zinc-400 print:text-black font-semibold">
            {t.subtitle}
          </h2>
          <p className="font-mono text-[9px] md:text-[10px] mt-3 text-zinc-400 dark:text-zinc-500 print:text-zinc-600 tracking-tight">
            {t.contact}
          </p>
          <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
            <a
              href="https://portafolio-teal-nine-16.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] md:text-[10px] text-zinc-400 dark:text-zinc-500 print:text-zinc-600 tracking-tight hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
            >
              {t.portfolioLabel}: portafolio-teal-nine-16.vercel.app
            </a>
            <span className="text-zinc-300 dark:text-zinc-700 print:text-zinc-400 select-none">|</span>
            <a
              href="https://www.linkedin.com/in/daniel-villarreal-h"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] md:text-[10px] text-zinc-400 dark:text-zinc-500 print:text-zinc-600 tracking-tight hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
            >
              {t.linkedinLabel}: linkedin.com/in/daniel-villarreal-h
            </a>
          </div>
        </div>

        {/* Profile / Summary */}
        <div className="mb-6">
          <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-300 print:text-black text-[11px] md:text-[12px]">
            {t.profile}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black border-b border-zinc-200 dark:border-zinc-800 print:border-black pb-1 mb-3 text-[10px] font-bold">
            {t.skillsTitle}
          </h3>
          <div className="space-y-2">
            {t.skills.map((skill, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 text-[11px] md:text-[12px]">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black font-mono uppercase text-[10px] tracking-wider pt-0.5">{skill.name}</span>
                <span className="text-zinc-600 dark:text-zinc-400 print:text-black leading-relaxed">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black border-b border-zinc-200 dark:border-zinc-800 print:border-black pb-1 mb-4 text-[10px] font-bold">
            {t.projectsTitle}
          </h3>
          <div className="space-y-5">
            {t.projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="hover:border-l-black dark:hover:border-l-white transition-all pl-0 md:pl-4 md:-ml-4 border-l-2 border-l-transparent text-[11px] md:text-[12px]"
              >
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-1">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black text-xs md:text-sm">{proj.role}</span>
                </div>
                <div className="text-zinc-500 dark:text-zinc-450 print:text-zinc-700 font-mono text-[10px] uppercase tracking-wider mb-2">{proj.company}</div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 print:text-black leading-relaxed">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Experience Section */}
        <div className="mb-6">
          <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black border-b border-zinc-200 dark:border-zinc-800 print:border-black pb-1 mb-4 text-[10px] font-bold">
            {t.experienceTitle}
          </h3>
          <div className="space-y-4">
            {t.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="hover:border-l-black dark:hover:border-l-white transition-all pl-0 md:pl-4 md:-ml-4 border-l-2 border-l-transparent text-[11px] md:text-[12px]"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black text-xs md:text-sm">{exp.role}</div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 print:text-black leading-relaxed mt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Columns for Education & Additional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 print:border-black pt-6">
          {/* Left Column: Education */}
          <div>
            <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black text-[10px] font-bold mb-3">
              {t.educationTitle}
            </h3>
            <div className="space-y-4 text-[11px] md:text-[12px]">
              {t.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    <span className="text-xs md:text-sm">{edu.degree}</span>
                    <span className="font-normal text-[10px] font-mono text-zinc-400 dark:text-zinc-500 print:text-zinc-600">{edu.date}</span>
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-450 print:text-zinc-700 text-[10px] uppercase font-mono tracking-wider mt-0.5">{edu.school}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certs & Additional */}
          <div className="space-y-4">
            <div>
              <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black text-[10px] font-bold mb-3">
                {t.certificationsTitle}
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 print:text-black text-[11px] md:text-[12px] leading-relaxed">
                {t.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono tracking-widest text-zinc-400 dark:text-zinc-500 print:text-black text-[10px] font-bold mb-3">
                {t.additionalTitle}
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-zinc-600 dark:text-zinc-400 print:text-black text-[11px] md:text-[12px] leading-relaxed">
                {t.additional.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
      <CustomCursor isDark={isDark} />
    </div>
  );
}
