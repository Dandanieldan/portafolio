"use client";

import { useState } from "react";
import { ArrowLeft, Printer, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cvData = {
  es: {
    title: "DANIEL VILLARREAL HERNANDEZ",
    subtitle: "INGENIERÍA EN SOFTWARE",
    contact: "(+52) 6183371209 | Victoria de Durango, Durango | danielvillarrealh@gmail.com",
    profile: "Desarrollador de Software con experiencia en desarrollo de software y tecnologías web, enfocado en construir aplicaciones funcionales, escalables y centradas en la experiencia del usuario, creando soluciones modernas que combinan rendimiento, diseño y usabilidad.",
    skillsTitle: "RESUMEN DE HABILIDADES",
    skills: [
      { name: "Roles Clave", desc: "Desarrollo Frontend, Desarrollo Backend, Herramientas y Control de Versiones." },
      { name: "Características", desc: "Desarrollo de Software, Desarrollo Web, HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Native, Bootstrap, Tailwind CSS, Node.js, PHP, Python, Git, GitHub, Postman, npm." },
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
          "Contribuyó al desarrollo de la plataforma oficial de comercio electrónico de Correos de México, enfocada en la venta de productos en línea y la gestión de servicios.",
          "Desarrolló funciones frontend utilizando Next.js y React, aplicando Tailwind CSS para diseños responsivos basados en diseños de Figma.",
          "Construyó una arquitectura basada en componentes con interacciones y animaciones de interfaz de usuario modernas.",
          "Colaboró en la integración de flujos de trabajo de comercio electrónico, incluyendo la visualización de productos y los flujos de interacción del usuario."
        ]
      },
      {
        role: "Sistema Web, Seguimiento de Fitness y Progreso",
        company: "Calorie Intake & Gym Tracker",
        bullets: [
          "Desarrolló una plataforma web para el seguimiento de la ingesta de calorías, el progreso en el gimnasio y las transformaciones físicas.",
          "Implementó el registro de progreso a través de métricas y registros basados en fotos.",
          "Integró rutinas de entrenamiento y planes de dieta dentro de un sistema de usuario centralizado."
        ]
      },
      {
        role: "Aplicaciones Móviles & Web",
        company: "Mobile & Web Applications (React Native / Expo)",
        bullets: [
          "Desarrolló aplicaciones móviles utilizando React Native y Expo.",
          "Implementó la lógica de la aplicación, el manejo de datos y las interacciones del usuario.",
          "Enfocado en arquitectura limpia, rendimiento y mantenibilidad."
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
          "Diagnosticó y resolvió problemas de hardware y software.",
          "Realizó mantenimiento de sistemas y soporte al usuario."
        ]
      },
      {
        role: "Walmart — Asistente de Soporte de TI",
        bullets: [
          "Soporte a sistemas internos y configuración de equipos.",
          "Colaboró con equipos de TI para resolver incidentes."
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
    backToPortfolio: "Volver al Portafolio",
    printText: "Imprimir / Guardar PDF",
    langText: "English Version"
  },
  en: {
    title: "DANIEL VILLARREAL HERNANDEZ",
    subtitle: "SOFTWARE ENGINEERING",
    contact: "(+52) 6183371209 | Victoria de Durango, Durango | danielvillarrealh@gmail.com",
    profile: "Software Developer with experience in web and mobile development. Focused on building functional, scalable, and user-centered applications, creating modern solutions that combine performance, design, and usability.",
    skillsTitle: "SKILLS SUMMARY",
    skills: [
      { name: "Core Roles", desc: "Frontend Development, Backend Development, Tools & Version Control." },
      { name: "Features", desc: "Software Development, Web Development, HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Native, Bootstrap, Tailwind CSS, Node.js, PHP, Python, Git, GitHub, Postman, npm." },
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
    backToPortfolio: "Back to Portfolio",
    printText: "Print / Save PDF",
    langText: "Versión en Español"
  }
};

export default function CVPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = cvData[lang];

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8 flex flex-col items-center">
      {/* Controls - Hidden on Print */}
      <div className="w-full max-w-[800px] flex justify-between items-center mb-8 bg-zinc-50 border border-zinc-200 p-4 print:hidden">
        <Link href="/" className="flex items-center gap-2 text-xs font-mono font-bold uppercase hover:opacity-60 transition-opacity">
          <ArrowLeft size={14} /> {t.backToPortfolio}
        </Link>
        <div className="flex gap-3">
          <button 
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase hover:bg-black hover:text-white border-2 border-black px-3 py-1.5 transition-colors"
          >
            <Globe size={14} /> {t.langText}
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase bg-black text-white hover:bg-zinc-800 px-3 py-1.5 transition-colors"
          >
            <Printer size={14} /> {t.printText}
          </button>
        </div>
      </div>

      {/* Main Resume Sheet - Perfect standard proportions for A4 / Letter */}
      <div className="w-full max-w-[800px] bg-white print:p-0 font-sans leading-tight text-xs">
        {/* Header */}
        <div className="text-center border-b border-black pb-4 mb-4">
          <h1 className="text-2xl font-black tracking-tight">{t.title}</h1>
          <h2 className="text-sm font-mono tracking-widest uppercase mt-1 text-zinc-600 print:text-black">{t.subtitle}</h2>
          <p className="font-mono text-[10px] mt-2 text-zinc-500 print:text-black">{t.contact}</p>
        </div>

        {/* Profile / Summary */}
        <div className="mb-4">
          <p className="text-justify leading-relaxed">{t.profile}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <h3 className="font-bold border-b border-black pb-1 mb-2 tracking-wider text-[11px]">{t.skillsTitle}</h3>
          <div className="space-y-1.5">
            {t.skills.map((skill, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="font-bold min-w-[100px]">{skill.name}:</span>
                <span className="flex-1 text-zinc-700 print:text-black">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-4">
          <h3 className="font-bold border-b border-black pb-1 mb-2 tracking-wider text-[11px]">{t.projectsTitle}</h3>
          <div className="space-y-3">
            {t.projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between font-bold">
                  <span>{proj.role}</span>
                </div>
                <div className="text-zinc-600 print:text-black italic mb-1">{proj.company}</div>
                <ul className="list-disc pl-4 space-y-0.5 text-zinc-700 print:text-black">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-snug">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Experience Section */}
        <div className="mb-4">
          <h3 className="font-bold border-b border-black pb-1 mb-2 tracking-wider text-[11px]">{t.experienceTitle}</h3>
          <div className="space-y-3">
            {t.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="font-bold">{exp.role}</div>
                <ul className="list-disc pl-4 space-y-0.5 text-zinc-700 print:text-black mt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-snug">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Grid for Education & Additional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Education */}
          <div>
            <h3 className="font-bold border-b border-black pb-1 mb-2 tracking-wider text-[11px]">{t.educationTitle}</h3>
            <div className="space-y-3">
              {t.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold">
                    <span>{edu.degree}</span>
                    <span className="font-normal text-[10px] font-mono">{edu.date}</span>
                  </div>
                  <div className="text-zinc-600 print:text-black">{edu.school}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certs & Info */}
          <div>
            <h3 className="font-bold border-b border-black pb-1 mb-2 tracking-wider text-[11px]">{t.certificationsTitle}</h3>
            <ul className="list-disc pl-4 space-y-0.5 text-zinc-700 print:text-black">
              {t.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>

            <h3 className="font-bold border-b border-black pb-1 mb-2 mt-4 tracking-wider text-[11px]">{t.additionalTitle}</h3>
            <ul className="list-disc pl-4 space-y-0.5 text-zinc-700 print:text-black">
              {t.additional.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
