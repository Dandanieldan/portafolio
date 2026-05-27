"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  Sun, Moon, Package, Check, ArrowRight, Barcode,
  ArrowUpRight, Command,
  Calendar as CalendarIcon, MessageSquare, Layout
} from 'lucide-react';

// --- Dictionaries (i18n) ---
const translations = {
  es: {
    nav_projects: "PROYECTOS",
    nav_edu: "FORMACIÓN",
    nav_skills: "SKILLS",
    nav_contact: "CONTACTO",
    nav_cv: "CURRICULUM VITAE",
    hero_title1: "SOFTWARE",
    hero_title2: "ENGINEER.",
    hero_title3: "FRONTEND DEV.",
    hero_desc: "Soy Daniel Villarreal, desarrollador de software enfocado en crear experiencias web y móviles modernas, funcionales y escalables. Me apasiona construir productos digitales centrados en claridad, rendimiento y experiencia de usuario.",
    scroll_down: "DESCUBRE MI TRABAJO",
    proj0_cat: "PRÉSTAMOS FINANCIEROS",
    proj0_title: "SPAUJED",
    proj0_challenge: "Profesores perdían días en trámites presenciales, entrega física de comprobantes y estudios socioeconómicos en papel para solicitar préstamos.",
    proj0_solution: "Automaticé el 100% del proceso con una plataforma web. Un motor de cálculo evalúa la capacidad de pago instantáneamente y digitaliza la validación de documentos.",
    proj0_demo_title: "Simulador de Préstamo",
    proj0_demo_amount: "Monto",
    proj0_demo_biweekly: "Descuento Quincenal",
    proj0_demo_btn: "Evaluar Crédito",
    proj0_demo_validating: "Validando identidad...",
    proj0_demo_contract: "Calculando capacidad...",
    proj0_demo_approved: "CRÉDITO APROBADO",
    proj0_demo_sign: "Firmar Contrato",
    proj1_cat: "LOGÍSTICA Y E-COMMERCE",
    proj1_title: "Correos Clic",
    proj1_challenge: "El registro y checkout de envíos presentaba alta fricción cognitiva, validaciones lentas y un diseño desactualizado.",
    proj1_solution: "Desarrollé una interfaz moderna con Next.js y Tailwind CSS. Implementé un cotizador volumétrico en tiempo real y validaciones dinámicas con generación de guías imprimibles.",
    proj1_demo_title: "Interacciones de Compra",
    proj1_demo_item: "Producto",
    proj1_demo_drop: "Arrastra para comprar",
    proj1_demo_success: "¡En el carrito!",
    proj1_demo_reset: "Reiniciar",
    proj2_cat: "PLATAFORMA SAAS",
    proj2_title: "EcoFitness Hub",
    proj2_challenge: "Los entrenadores carecían de una herramienta centralizada para ver el progreso real de sus clientes, dependiendo de mensajes dispersos y hojas de cálculo.",
    proj2_solution: "Desarrollé un ecosistema digital completo conectando entrenadores con usuarios. Implementé un panel de control con visualización de métricas en tiempo real y registro de evidencia fotográfica.",
    proj2_demo_title: "Métricas de Progreso",
    proj2_demo_week: "Semana",
    proj2_demo_month: "Mes",
    proj3_cat: "APLICACIÓN MÓVIL",
    proj3_title: "Agenda & Notas",
    proj3_challenge: "Desarrollar un sistema multiplataforma fluido que pudiera manejar un estado complejo de tareas, calendario y recordatorios sin degradar el rendimiento del dispositivo móvil.",
    proj3_solution: "Construí la aplicación con React Native y Expo, implementando un gestor de estado robusto para garantizar que la interfaz reaccione instantáneamente a las acciones del usuario.",
    proj3_demo_title: "Gestor de Tareas Móvil",
    proj3_demo_todo: "Pendientes",
    proj3_demo_done: "Completadas",
    proj4_cat: "AUTOMATIZACIÓN",
    proj4_title: "Chatbot & APIs",
    proj4_challenge: "El equipo de soporte estaba saturado respondiendo preguntas repetitivas, afectando el tiempo de respuesta para problemas críticos.",
    proj4_solution: "Diseñé e integré un chatbot inteligente con flujos conversacionales. Consumí APIs REST para automatizar respuestas directas, reduciendo significativamente la carga operativa.",
    proj4_demo_title: "Interfaz Conversacional",
    proj4_demo_placeholder: "Escribe tu consulta...",
    proj4_demo_empty: "Flujo no encontrado",
    about_title: "SOBRE MÍ",
    about_text: "Desarrollador de Software con experiencia en desarrollo web y móvil. Me enfoco en construir aplicaciones funcionales, escalables y centradas en la experiencia del usuario, creando soluciones modernas que combinan rendimiento, diseño y usabilidad.",
    bento_frontend: "FRONTEND CORE",
    bento_frontend_desc: "Desarrollo de interfaces interactivas con React y Next.js. Fuerte enfoque en la experiencia de usuario (UX), diseño responsivo y arquitectura escalable basada en componentes.",
    bento_backend: "BACKEND & DATOS",
    bento_backend_desc: "Implementación de servidores en Node.js, diseño e integración de APIs REST, y modelado eficiente de estructuras de datos relacionales y no relacionales.",
    bento_mobile: "MÓVIL & HERRAMIENTAS",
    bento_mobile_desc: "Construcción de aplicaciones móviles nativas con React Native y Expo. Manejo fluido de control de versiones y metodologías ágiles en equipos remotos.",
    proj5_cat: "DATA VISUALIZATION",
    proj5_title: "Live Dashboard",
    proj5_challenge: "Visualizar miles de eventos en tiempo real sin saturar al usuario, manteniendo un rendimiento fluido de 60 FPS.",
    proj5_solution: "Desarrollé una arquitectura de renderizado optimizada, con estructuras de datos eficientes para procesar flujos masivos de información.",
    proj5_demo_title: "Real-Time Event Stream",
    edu_title: "EDUCACIÓN",
    edu_uni: "Universidad Politécnica de Durango (UNIPOLI)",
    edu1_title: "Ingeniería en Software",
    edu1_date: "2022 – 2026",
    edu2_title: "Redes y Telecomunicaciones",
    edu2_date: "2019 – 2021",
    cert_title: "CERTIFICACIONES",
    cert_cisco: "Cisco Networking Academy",
    cert_aws: "AWS",
    cert1: "IT Essentials",
    cert2: "Hacking Ético",
    cert3: "Fundamentos de HTML & CSS",
    cert4: "Fundamentos de Python",
    cert5: "Fundamentos de Cloud Computing",
    info_title: "INFORMACIÓN ADICIONAL",
    info1: "Inglés — B2 (ITEP Core)",
    info2: "Fuerte interés en aprendizaje continuo y crecimiento profesional.",
    info3: "Experiencia en proyectos reales y entornos de trabajo en equipo.",
    contact_desc: "Siempre estoy abierto a conversar sobre nuevas oportunidades, tecnologías o proyectos interesantes. ¡Hablemos!",
    stack_title: "STACK TÉCNICO",
    footer_text: "© 2026 Daniel Villarreal. Ing. de Software.",
    card_title: "Daniel Villarreal",
    card_sub: "Desarrollador de Software",
    card_status: "ESTADO: DISPONIBLE",
    card_focus: "Desarrollo Web y Móvil",
    card_ux: "Interfaces enfocadas en UX",
    card_systems: "Sistemas Frontend",
    card_loc: "Durango, México",
    card_remote: "✓ Abierto a oportunidades remotas",
    card_close: "[ CERRAR ]",
  },
  en: {
    nav_projects: "PROJECTS",
    nav_edu: "EDUCATION",
    nav_skills: "SKILLS",
    nav_contact: "CONTACT",
    nav_cv: "CURRICULUM VITAE",
    hero_title1: "SOFTWARE",
    hero_title2: "ENGINEER.",
    hero_title3: "FRONTEND DEV.",
    hero_desc: "I am Daniel Villarreal, a software developer focused on building modern, functional, and scalable web and mobile experiences. I'm passionate about crafting digital products centered on clarity, performance, and user experience.",
    scroll_down: "DISCOVER MY WORK",
    proj0_cat: "FINANCIAL LOANS",
    proj0_title: "SPAUJED",
    proj0_challenge: "Teachers lost days in in-person procedures, physical voucher delivery, and paper-based socio-economic studies to request loans.",
    proj0_solution: "Automated 100% of the process with a web platform. A calculation engine instantly evaluates payment capacity and digitizes document validation.",
    proj0_demo_title: "Loan Simulator",
    proj0_demo_amount: "Amount",
    proj0_demo_biweekly: "Bi-weekly Deduction",
    proj0_demo_btn: "Evaluate Credit",
    proj0_demo_validating: "Validating identity...",
    proj0_demo_contract: "Calculating capacity...",
    proj0_demo_approved: "CREDIT APPROVED",
    proj0_demo_sign: "Sign Contract",
    proj1_cat: "LOGISTICS & E-COMMERCE",
    proj1_title: "Correos Clic",
    proj1_challenge: "Shipment registration and checkout flow had high cognitive friction, slow validations, and outdated design.",
    proj1_solution: "Developed a modern interface with Next.js and Tailwind CSS. Implemented a real-time volumetric quoting engine with dynamic validations and instant label printing.",
    proj1_demo_title: "Purchase Interactions",
    proj1_demo_item: "Product",
    proj1_demo_drop: "Drop to buy",
    proj1_demo_success: "In Cart!",
    proj1_demo_reset: "Reset",
    proj2_cat: "SAAS PLATFORM",
    proj2_title: "EcoFitness Hub",
    proj2_challenge: "Coaches lacked a centralized tool to track their clients' real progress, relying on scattered messages and spreadsheets.",
    proj2_solution: "Developed a complete digital ecosystem connecting coaches with users. Built a real-time dashboard for metrics visualization and photographic evidence tracking.",
    proj2_demo_title: "Progress Metrics",
    proj2_demo_week: "Week",
    proj2_demo_month: "Month",
    proj3_cat: "MOBILE APPLICATION",
    proj3_title: "Agenda & Notes",
    proj3_challenge: "Develop a fluid cross-platform system capable of handling complex state management for tasks, calendars, and reminders without degrading mobile performance.",
    proj3_solution: "Built the application using React Native and Expo, implementing a robust state manager to ensure the interface reacts instantly to user actions.",
    proj3_demo_title: "Mobile Task Manager",
    proj3_demo_todo: "To Do",
    proj3_demo_done: "Completed",
    proj4_cat: "AUTOMATION",
    proj4_title: "Chatbot & APIs",
    proj4_challenge: "The support team was overwhelmed answering repetitive questions, negatively impacting response times for critical issues.",
    proj4_solution: "Designed and integrated an intelligent chatbot with conversational flows. Consumed REST APIs to automate direct responses, significantly reducing operational load.",
    proj4_demo_title: "Conversational Interface",
    proj4_demo_placeholder: "Type your query...",
    proj4_demo_empty: "Flow not found",
    about_title: "ABOUT ME",
    about_text: "Software Developer with experience in web and mobile development. Focused on building functional, scalable, and user-centered applications, creating modern solutions that combine performance, design, and usability.",
    bento_frontend: "FRONTEND CORE",
    bento_frontend_desc: "Interactive interface development with React and Next.js. Strong focus on user experience (UX), responsive design, and scalable component-based architecture.",
    bento_backend: "BACKEND & DATA",
    bento_backend_desc: "Server implementation using Node.js, REST API design and integration, and efficient modeling of relational and non-relational data structures.",
    bento_mobile: "MOBILE & TOOLS",
    bento_mobile_desc: "Building native mobile applications with React Native and Expo. Fluent in version control and agile methodologies in remote teams.",
    proj5_cat: "DATA VISUALIZATION",
    proj5_title: "Live Dashboard",
    proj5_challenge: "Visualize thousands of real-time events without overwhelming the user, maintaining a fluid 60 FPS performance.",
    proj5_solution: "Developed an optimized rendering architecture with efficient data structures to process massive information streams.",
    proj5_demo_title: "Real-Time Event Stream",
    edu_title: "EDUCATION",
    edu_uni: "Polytechnic University of Durango (UNIPOLI)",
    edu1_title: "Software Engineering",
    edu1_date: "2022 – 2026",
    edu2_title: "Networks and Telecommunications",
    edu2_date: "2019 – 2021",
    cert_title: "CERTIFICATIONS",
    cert_cisco: "Cisco Networking Academy",
    cert_aws: "AWS",
    cert1: "IT Essentials",
    cert2: "Ethical Hacking",
    cert3: "HTML & CSS Fundamentals",
    cert4: "Python Fundamentals",
    cert5: "Cloud Computing Fundamentals",
    info_title: "ADDITIONAL INFO",
    info1: "English — B2 (ITEP Core)",
    info2: "Strong interest in continuous learning and professional growth.",
    info3: "Experience in real-world projects and collaborative team environments.",
    contact_desc: "I am always open to discussing new opportunities, emerging technologies, or interesting projects. Let's talk!",
    stack_title: "TECH STACK",
    footer_text: "© 2026 Daniel Villarreal. Software Engineer.",
    card_title: "Daniel Villarreal",
    card_sub: "Software Developer",
    card_status: "STATUS: AVAILABLE",
    card_focus: "Web & Mobile Development",
    card_ux: "UX-focused interfaces",
    card_systems: "Frontend Systems",
    card_loc: "Durango, Mexico",
    card_remote: "✓ Open to remote opportunities",
    card_close: "[ CLOSE ]",
  }
};

type Lang = 'es' | 'en';

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
        className={`fixed top-0 left-0 border rounded-full hidden md:block z-[99] pointer-events-none mix-blend-difference border-white`}
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 18),
          y: mousePosition.y - (isHovering ? 30 : 18),
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          backgroundColor: isHovering ? 'white' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </>
  );
};

// --- Demos UX/UI (Monochromatic Full-Screen Layouts) ---

const SpaujedDemo = ({ dict }: { dict: any }) => {
  const [amount, setAmount] = useState(50000);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'approved'>('idle');
  const [scanProgress, setScanProgress] = useState(0);

  const handleRequest = () => {
    if (status !== 'idle') return;
    setStatus('scanning');
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setScanProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setStatus('approved');
      }
    }, 100);
  };

  const handleReset = () => {
    setStatus('idle');
    setAmount(50000);
    setScanProgress(0);
  };

  const biweekly = Math.round((amount * 1.08) / 48); // Fake math

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden relative bg-zinc-100 dark:bg-[#0a0a0a] text-black dark:text-white p-5 font-mono select-none group transition-colors duration-500">
      {/* Avant-garde Grid & Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none transition-colors duration-500" />
      
      {/* Light Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:30px_30px] opacity-100 dark:opacity-0 pointer-events-none transition-all duration-1000 group-hover:scale-105" />
      {/* Dark Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-0 dark:opacity-100 pointer-events-none transition-all duration-1000 group-hover:scale-105" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase text-black/70 dark:text-white/60">{dict.proj0_demo_title}</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-black/60 dark:text-white/40 border border-black/10 dark:border-white/10 px-2 py-1 rounded-full backdrop-blur-sm bg-black/5 dark:bg-transparent">
          SPJ-SYSTEM-v2
        </div>
      </div>

      <div className="flex-1 relative z-10 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              className="w-full flex flex-col gap-6"
            >
              {/* Dynamic Glass Amount Display */}
              <div className="relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors shadow-xl shadow-black/5 dark:shadow-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 dark:bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[10px] uppercase tracking-widest text-black/70 dark:text-white/60 block mb-2">{dict.proj0_demo_amount}</span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white">
                  ${amount.toLocaleString()}
                </div>
                
                {/* Advanced Slider */}
                <div className="mt-8 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-black dark:bg-white"
                      style={{ width: `${((amount - 5000) / 145000) * 100}%` }}
                    />
                  </div>
                  <input 
                    type="range" 
                    min="5000" max="150000" step="1000" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full appearance-none bg-transparent h-6 relative z-10 outline-none cursor-pointer slider-thumb-avant"
                  />
                  <style dangerouslySetInnerHTML={{__html: `
                    input[type=range].slider-thumb-avant::-webkit-slider-thumb {
                      appearance: none;
                      width: 20px;
                      height: 20px;
                      background: black;
                      border-radius: 50%;
                      box-shadow: 0 0 15px rgba(0,0,0,0.2);
                      cursor: pointer;
                      transition: transform 0.1s;
                    }
                    .dark input[type=range].slider-thumb-avant::-webkit-slider-thumb {
                      background: white;
                      box-shadow: 0 0 15px rgba(255,255,255,0.5);
                    }
                    input[type=range].slider-thumb-avant::-webkit-slider-thumb:hover {
                      transform: scale(1.2);
                    }
                  `}} />
                </div>
                <div className="flex justify-between mt-3 text-[9px] text-black/60 dark:text-white/50 font-mono">
                  <span>$5K</span>
                  <span>$150K</span>
                </div>
              </div>

              {/* Action Area */}
              <div className="flex gap-4 items-center">
                <div className="flex-1 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-black/70 dark:text-white/60">{dict.proj0_demo_biweekly}</span>
                  <span className="text-lg font-bold">${biweekly.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleRequest}
                  className="h-full px-6 rounded-xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {status === 'scanning' && (
            <motion.div 
              key="scanning"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full aspect-square max-w-[240px] rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center relative bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm"
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="48%" fill="none" className="stroke-black/10 dark:stroke-white/10" strokeWidth="2" />
                <motion.circle 
                  cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="300" strokeDashoffset={300 - (300 * scanProgress) / 100}
                  className="transition-all duration-100 ease-linear text-black dark:text-white"
                />
              </svg>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black">{scanProgress}%</span>
                <span className="text-[9px] uppercase tracking-widest text-black/70 dark:text-white/60 mt-2 w-32">
                  {scanProgress < 50 ? dict.proj0_demo_validating : dict.proj0_demo_contract}
                </span>
              </div>
            </motion.div>
          )}

          {status === 'approved' && (
            <motion.div 
              key="approved"
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full flex flex-col relative"
              style={{ perspective: 1000 }}
            >
              {/* Floating Ticket: High contrast inverse color based on theme */}
              <div className="bg-zinc-950 dark:bg-white text-white dark:text-black p-6 rounded-t-2xl rounded-bl-2xl rounded-br-md relative shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.15)] overflow-hidden transition-colors">
                <div className="absolute -top-10 -right-10 text-white/5 dark:text-black/5 rotate-12">
                  <Package size={120} strokeWidth={1} />
                </div>
                
                <div className="flex items-center gap-2 mb-6 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">{dict.proj0_demo_approved}</span>
                </div>

                <div className="space-y-4 font-mono relative z-10">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/70 dark:text-black/70">Capital Autorizado</div>
                    <div className="text-3xl font-black tracking-tighter">${amount.toLocaleString()}</div>
                  </div>
                  <div className="flex justify-between border-t border-white/10 dark:border-black/10 pt-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-white/70 dark:text-black/70">Tasa</div>
                      <div className="text-sm font-bold">8.0%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] uppercase tracking-widest text-white/70 dark:text-black/70">{dict.proj0_demo_biweekly}</div>
                      <div className="text-sm font-bold">${biweekly.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                {/* Fake Barcode */}
                <div className="mt-6 pt-4 border-t border-white/10 dark:border-black/10 flex flex-col items-center relative z-10">
                  {/* Light mode: white bars. Dark mode: black bars */}
                  <div className="w-full h-8 opacity-80 hidden dark:block bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px,black_4px,black_5px,transparent_5px,transparent_8px)]" />
                  <div className="w-full h-8 opacity-80 block dark:hidden bg-[repeating-linear-gradient(90deg,white,white_2px,transparent_2px,transparent_4px,white_4px,white_5px,transparent_5px,transparent_8px)]" />
                  
                  <span className="text-[8px] tracking-widest mt-1 opacity-50">SPJ-{Math.floor(Math.random() * 9999999)}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button 
                  onClick={handleReset}
                  className="px-4 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[10px] uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded-xl"
                >
                  ↺
                </button>
                <button className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform rounded-xl shadow-xl shadow-black/10 dark:shadow-none">
                  {dict.proj0_demo_sign}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ShippingDemo = ({ dict }: { dict: any }) => {
  const [generated, setGenerating] = useState(false);
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(40);
  const [weight, setWeight] = useState(10);

  const handleGenerate = () => {
    setGenerating(true);
  };

  const handleReset = () => {
    setGenerating(false);
  };

  // Escala visual de la caja (max 150px)
  const boxW = 60 + (width / 100) * 90;
  const boxH = 60 + (height / 100) * 90;
  
  // Sombra basada en peso
  const shadowOpacity = 0.1 + (weight / 50) * 0.4;

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden relative bg-zinc-100 dark:bg-[#0a0a0a] text-black dark:text-white p-4 md:p-5 font-mono select-none transition-colors duration-500">
      {/* Background grid for measurement aesthetic */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-2">
        <div className="text-[9px] tracking-widest uppercase text-black/70 dark:text-white/60">Simulador de Paquetes</div>
        <div className="flex items-center gap-2 border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm">
          <div className="text-[8px] uppercase tracking-widest text-black/60 dark:text-white/50">
            {generated ? 'GUÍA LISTA' : 'MODO DIMENSIÓN'}
          </div>
          <div className={`w-1.5 h-1.5 rounded-full ${generated ? 'bg-black dark:bg-white' : 'bg-black/20 dark:bg-white/20'}`} />
        </div>
      </div>

      <div className="flex-1 relative z-10 flex flex-col w-full h-full justify-between items-center overflow-hidden">
        <AnimatePresence mode="wait">
          {!generated ? (
            <motion.div 
              key="simulator"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 overflow-hidden py-2"
            >
              {/* Dynamic Box */}
              <div className="flex-1 flex items-center justify-center w-full relative min-h-[140px] md:min-h-0 md:h-full">
                
                {/* Weight Label (Floating inside container) */}
                <div className="absolute top-1.5 right-1.5 text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40">
                  Peso: {weight} kg
                </div>

                {/* Horizontal CAD Dimension Line (Width) */}
                <motion.div
                  className="absolute flex items-center justify-between text-[8px] text-zinc-400 dark:text-zinc-500 pointer-events-none"
                  animate={{
                    width: boxW,
                    y: -(boxH / 2) - 14,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <div className="w-[1px] h-2 bg-zinc-300 dark:bg-zinc-800" />
                  <div className="flex-1 h-[1px] border-t border-dashed border-zinc-300 dark:border-zinc-800 mx-1" />
                  <span className="text-[8px] font-bold text-zinc-500 dark:text-zinc-400 font-mono px-0.5">{width} cm</span>
                  <div className="flex-1 h-[1px] border-t border-dashed border-zinc-300 dark:border-zinc-800 mx-1" />
                  <div className="w-[1px] h-2 bg-zinc-300 dark:bg-zinc-800" />
                </motion.div>

                {/* Vertical CAD Dimension Line (Height) */}
                <motion.div
                  className="absolute flex flex-col items-center justify-between text-[8px] text-zinc-400 dark:text-zinc-500 pointer-events-none"
                  animate={{
                    height: boxH,
                    x: -(boxW / 2) - 14,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <div className="h-[1px] w-2 bg-zinc-300 dark:bg-zinc-800" />
                  <div className="flex-1 w-[1px] border-l border-dashed border-zinc-300 dark:bg-zinc-800 my-1" />
                  <span className="text-[8px] font-bold text-zinc-500 dark:text-zinc-400 font-mono py-0.5 -rotate-90 select-none whitespace-nowrap">{height} cm</span>
                  <div className="flex-1 w-[1px] border-l border-dashed border-zinc-300 dark:bg-zinc-800 my-1" />
                  <div className="h-[1px] w-2 bg-zinc-300 dark:bg-zinc-800" />
                </motion.div>

                <motion.div
                  layoutId="package-entity"
                  className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-black/20 dark:border-white/20 rounded-lg flex items-center justify-center relative"
                  animate={{ 
                    width: boxW, 
                    height: boxH,
                    boxShadow: `0 15px 30px rgba(0,0,0,${shadowOpacity})`
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <Package className="text-black/10 dark:text-white/10" size={32} />
                  {/* Cintas de embalaje (decorativo vectorial) */}
                  <div className="absolute w-full h-[2px] bg-black/5 dark:bg-white/5" />
                  <div className="absolute h-full w-[2px] bg-black/5 dark:bg-white/5" />
                </motion.div>
              </div>

              {/* Controles: Presets y Ajuste Fino */}
              <div className="w-full md:w-[180px] lg:w-[200px] flex flex-col gap-3 shrink-0 justify-center">
                
                {/* Presets de Talla */}
                <div className="flex gap-1 w-full p-0.5 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10">
                  {[
                    { id: 'chica', label: 'Chica', w: 20, h: 20, kg: 2 },
                    { id: 'mediana', label: 'Mediana', w: 40, h: 40, kg: 10 },
                    { id: 'grande', label: 'Grande', w: 70, h: 70, kg: 25 },
                  ].map((preset) => {
                    const isActive = width === preset.w && height === preset.h;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => {
                          setWidth(preset.w);
                          setHeight(preset.h);
                          setWeight(preset.kg);
                        }}
                        className={`flex-1 py-1 text-[8px] uppercase tracking-widest font-bold rounded transition-all ${
                          isActive 
                            ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm border border-black/10 dark:border-white/10' 
                            : 'text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                      >
                        {preset.label}
                      </button>
                    )
                  })}
                </div>

                {/* Ajuste Fino (Inputs numéricos) */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Ancho", val: width, set: setWidth, unit: "cm" },
                    { label: "Alto", val: height, set: setHeight, unit: "cm" },
                    { label: "Peso", val: weight, set: setWeight, unit: "kg" }
                  ].map((ctrl, i) => (
                    <div key={i} className="flex flex-col gap-0.5 relative group">
                      <div className="text-[7px] uppercase tracking-widest text-black/50 dark:text-white/50 px-0.5">
                        {ctrl.label}
                      </div>
                      <div className="relative">
                        <input 
                          type="number" 
                          value={ctrl.val}
                          onChange={(e) => ctrl.set(Number(e.target.value) || 0)}
                          className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-0.5 text-xs font-bold text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                        />
                        <span className="absolute right-0 bottom-1 text-[8px] text-black/30 dark:text-white/30 pointer-events-none">
                          {ctrl.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleGenerate}
                  className="w-full py-2 bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold uppercase tracking-widest rounded-lg hover:scale-[1.02] transition-transform shadow-md"
                >
                  Generar Guía
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="ticket"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 overflow-hidden py-2"
            >
              <motion.div 
                layoutId="package-entity"
                className="w-full md:flex-1 max-w-[280px] bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-xl shadow-lg p-4 flex flex-col relative overflow-hidden"
              >
                {/* Decoración superior ticket */}
                <div className="absolute top-0 left-0 w-full h-1 bg-black dark:bg-white opacity-10" />
                
                <div className="flex justify-between items-start mb-3 pt-1">
                  <Barcode className="w-12 h-6 text-black dark:text-white animate-pulse" strokeWidth={1} />
                  <div className="text-right font-mono">
                    <div className="text-[10px] font-black tracking-widest">CM-8472X</div>
                    <div className="text-[6px] uppercase tracking-widest text-black/50 dark:text-white/50">Tracking ID</div>
                  </div>
                </div>

                <div className="w-full h-[1px] border-t border-dashed border-black/20 dark:border-white/20 mb-2.5" />

                <div className="grid grid-cols-2 gap-2 mb-3 text-left">
                  <div>
                    <div className="text-[6px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-0.5">Remitente</div>
                    <div className="text-[9px] font-bold truncate">USR-DANIEL</div>
                    <div className="text-[8px] text-black/60 dark:text-white/60 mt-0.5 leading-tight">Av. Tecnológico<br/>Durango, Dgo.</div>
                  </div>
                  <div>
                    <div className="text-[6px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-0.5">Destinatario</div>
                    <div className="text-[9px] font-bold truncate">CLIENTE WEB</div>
                    <div className="text-[8px] text-black/60 dark:text-white/60 mt-0.5 leading-tight">Reforma 222<br/>CDMX</div>
                  </div>
                </div>

                <div className="bg-black/5 dark:bg-white/5 rounded p-1.5 flex justify-between items-center mt-auto">
                  <div className="flex gap-2 text-[8px] font-bold">
                    <div><span className="text-black/40 dark:text-white/40 mr-0.5">DIM</span>{width}x{height} cm</div>
                    <div><span className="text-black/40 dark:text-white/40 mr-0.5">PESO</span>{weight} kg</div>
                  </div>
                  <Check className="text-black dark:text-white w-3 h-3" />
                </div>
              </motion.div>

              <div className="flex flex-row md:flex-col gap-2 w-full md:w-[130px] shrink-0 justify-center">
                <button 
                  onClick={handleReset}
                  className="flex-1 md:w-full py-2 border border-black/10 dark:border-white/10 text-black dark:text-white text-[8px] uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-lg"
                >
                  ↺ Nueva
                </button>
                <button className="flex-[2] md:w-full py-2 bg-black dark:bg-white text-white dark:text-black text-[8px] font-bold uppercase tracking-widest rounded-lg hover:opacity-80 transition-opacity flex items-center justify-center gap-1">
                  Imprimir <ArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FitnessDemo = ({ dict }: { dict: any }) => {
  const [week, setWeek] = useState(1);
  const totalWeeks = 12;

  // Interpolated metrics
  const weight = 85 - ((85 - 72) * (week - 1) / (totalWeeks - 1));
  const bodyFat = 24.5 - ((24.5 - 11) * (week - 1) / (totalWeeks - 1));
  const adherence = 75 + ((98 - 75) * (week - 1) / (totalWeeks - 1));

  // Radar Chart Math
  const progress = (week - 1) / (totalWeeks - 1);
  const data = [
    90 - (progress * 60), // Grasa (Contrae)
    40 + (progress * 50), // Músculo (Expande)
    30 + (progress * 60), // Resistencia (Expande)
    70 + (progress * 25), // Adherencia (Expande leve)
    45 + (progress * 45)  // Fuerza (Expande)
  ];

  const labels = ['Grasa', 'Músculo', 'Resist.', 'Plan', 'Fuerza'];

  const getPoints = (values: number[]) => {
    return values.map((val, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
      const radius = (val / 100) * 40; // Max radius is 40
      return `${50 + radius * Math.cos(angle)},${50 + radius * Math.sin(angle)}`;
    }).join(' ');
  };

  const currentPoints = getPoints(data);
  const basePoints = getPoints([100, 100, 100, 100, 100]);
  const midPoints = getPoints([50, 50, 50, 50, 50]);

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden relative bg-zinc-100 dark:bg-[#0a0a0a] text-black dark:text-white p-6 font-mono select-none transition-colors duration-500">
      <div className="flex justify-between items-center mb-6 border-b border-black/10 dark:border-white/10 pb-4">
        <div className="text-[10px] tracking-widest uppercase text-black/70 dark:text-white/60">
          Fitness Ecosystem
        </div>
        <div className="text-[8px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 text-black dark:text-white bg-transparent px-3 py-1 rounded-full backdrop-blur-sm">
          Live Sync
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative w-full h-full min-h-[200px]">
        {/* Floating Text Metrics (Left/Right) */}
        <div className="absolute top-0 left-0 z-10">
          <div className="text-[8px] uppercase tracking-widest text-black/50 dark:text-white/50 mb-1">Peso</div>
          <div className="text-2xl font-black">{weight.toFixed(1)}<span className="text-sm font-normal text-black/40 dark:text-white/40 ml-1">kg</span></div>
        </div>
        
        <div className="absolute bottom-0 right-0 text-right z-10">
          <div className="text-[8px] uppercase tracking-widest text-black/50 dark:text-white/50 mb-1">Adherencia</div>
          <div className="text-2xl font-black">{Math.round(adherence)}<span className="text-sm font-normal text-black/40 dark:text-white/40 ml-1">%</span></div>
        </div>

        {/* Radar Chart */}
        <div className="relative w-full max-w-[240px] aspect-square flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Grids */}
            <polygon points={basePoints} fill="none" stroke="currentColor" strokeWidth="0.2" className="text-black/20 dark:text-white/20" />
            <polygon points={midPoints} fill="none" stroke="currentColor" strokeWidth="0.2" className="text-black/20 dark:text-white/20" />
            
            {/* Axes Lines */}
            {[0, 1, 2, 3, 4].map(i => {
              const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
              return (
                <line 
                  key={i} 
                  x1="50" y1="50" 
                  x2={50 + 40 * Math.cos(angle)} 
                  y2={50 + 40 * Math.sin(angle)} 
                  stroke="currentColor" 
                  strokeWidth="0.2" 
                  className="text-black/20 dark:text-white/20"
                />
              )
            })}

            {/* Dynamic Data Polygon */}
            <motion.polygon 
              points={currentPoints}
              fill="currentColor"
              fillOpacity="0.05"
              stroke="currentColor"
              strokeWidth="0.8"
              className="text-black dark:text-white"
              animate={{ points: currentPoints }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            {/* Dynamic Data Points (Dots) */}
            {data.map((val, i) => {
              const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
              const radius = (val / 100) * 40;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <motion.circle 
                  key={`dot-${i}`}
                  r="1.5"
                  fill="currentColor"
                  className="text-black dark:text-white"
                  animate={{ cx: x, cy: y }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              )
            })}

            {/* Axis Labels */}
            {labels.map((label, i) => {
              const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
              const x = 50 + 48 * Math.cos(angle);
              const y = 50 + 48 * Math.sin(angle);
              return (
                <text 
                  key={`label-${i}`}
                  x={x} y={y}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className="text-[3px] uppercase tracking-widest fill-black/60 dark:fill-white/60"
                >
                  {label}
                </text>
              )
            })}
          </svg>
        </div>
      </div>

      {/* Scrubbing Dashboard */}
      <div className="mt-4 border-t border-black/10 dark:border-white/10 pt-4">
        <div className="flex justify-between items-end mb-4">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-black/50 dark:text-white/50">Progreso Temporal</span>
            <span className="text-lg font-bold">Semana {week} / {totalWeeks}</span>
          </div>
        </div>
        
        <div className="relative w-full h-10 flex items-center group cursor-ew-resize">
          <input 
            type="range" 
            min="1" 
            max={totalWeeks} 
            value={week} 
            onChange={(e) => setWeek(parseInt(e.target.value))}
            className="w-full absolute z-10 opacity-0 cursor-ew-resize h-full"
          />
          {/* Custom Slider Track */}
          <div className="w-full h-1 bg-black/10 dark:bg-white/10 rounded-full relative overflow-hidden group-hover:h-2 transition-all">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-black dark:bg-white"
              animate={{ width: `${((week - 1) / (totalWeeks - 1)) * 100}%` }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            />
          </div>
          {/* Custom Slider Thumb */}
          <motion.div 
            className="absolute w-3 h-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full shadow-lg pointer-events-none group-hover:scale-150 transition-transform"
            animate={{ left: `calc(${((week - 1) / (totalWeeks - 1)) * 100}% - 6px)` }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

const DashboardDemo = ({ dict }: { dict: any }) => {
  const [view, setView] = useState<'week' | 'month'>('week');
  const dataWeek = [40, 70, 45, 90, 65, 30, 85];
  const dataMonth = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 95, 85, 90];
  const currentData = view === 'week' ? dataWeek : dataMonth;

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 px-4 md:px-8 py-6 md:py-16">
      <div className="flex justify-between items-center mb-6 md:mb-16">
        <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">{dict.proj2_demo_title}</div>
        <div className="flex border-2 border-black dark:border-white p-1">
          <button onClick={() => setView('week')} className={`px-2 md:px-4 py-1 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest relative transition-colors ${view === 'week' ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
            {view === 'week' && <motion.div layoutId="dash-tab" className="absolute inset-0 bg-black dark:bg-white" />}
            <span className="relative z-10">{dict.proj2_demo_week}</span>
          </button>
          <button onClick={() => setView('month')} className={`px-2 md:px-4 py-1 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest relative transition-colors ${view === 'month' ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
            {view === 'month' && <motion.div layoutId="dash-tab" className="absolute inset-0 bg-black dark:bg-white" />}
            <span className="relative z-10">{dict.proj2_demo_month}</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-1 md:gap-2 justify-between w-full h-full relative border-b-2 border-black dark:border-white pb-1">
        {currentData.map((val, idx) => (
          <div key={`${view}-${idx}`} className="relative flex flex-col items-center group w-full h-full justify-end">
            <div className="absolute -top-10 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {val}k
            </div>
            <motion.div
              layout
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-black dark:group-hover:bg-white transition-colors origin-bottom"
              style={{ maxWidth: view === 'week' ? '30px' : '15px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const KanbanDemo = ({ dict }: { dict: any }) => {
  const [items, setItems] = useState([
    { id: 1, title: 'UX Research', status: 'todo' },
    { id: 2, title: 'A/B Testing', status: 'todo' },
    { id: 3, title: 'API Integration', status: 'done' },
  ]);

  const moveItem = (id: number, newStatus: string) => setItems(items.map(i => i.id === id ? { ...i, status: newStatus } : i));

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-4 md:p-8">
      <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 text-center mb-4 md:mb-12">{dict.proj3_demo_title}</div>

      <div className="flex gap-3 md:gap-8 h-full max-w-lg mx-auto w-full">
        {['todo', 'done'].map((status) => (
          <div key={status} className="flex-1 border-t-2 border-black dark:border-white pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest">
              {status === 'todo' ? dict.proj3_demo_todo : dict.proj3_demo_done}
            </h5>
            <div className="flex-1 flex flex-col gap-2 md:gap-3">
              <AnimatePresence>
                {items.filter(i => i.status === status).map((item) => (
                  <motion.div
                    layout
                    layoutId={`kanban-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => moveItem(item.id, status === 'todo' ? 'done' : 'todo')}
                    className="bg-white dark:bg-black p-2.5 md:p-4 border border-black/20 dark:border-white/20 cursor-pointer hover:border-black dark:hover:border-white transition-colors flex items-center justify-between"
                  >
                    <span className="text-xs md:text-sm font-bold truncate">{item.title}</span>
                    <ArrowRight size={12} className="opacity-50 shrink-0" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommandPaletteDemo = ({ dict }: { dict: any }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const options = [
    { id: 1, icon: <CalendarIcon size={14} />, text: 'Agendar reunión / Schedule mtg' },
    { id: 2, icon: <MessageSquare size={14} />, text: 'Soporte / Contact support' },
    { id: 3, icon: <Layout size={14} />, text: 'Preferencias / Preferences' },
  ];

  const filtered = options.filter(o => o.text.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col items-center justify-center h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-4 md:p-8">
      <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-4 md:mb-12">{dict.proj4_demo_title}</div>

      <div
        className={`w-full max-w-md bg-white dark:bg-black border-2 transition-all duration-300 ${open ? 'border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]' : 'border-zinc-300 dark:border-zinc-800'}`}
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center px-3 md:px-4 py-2 md:py-4 border-b-2 border-transparent">
          <Command size={16} className="text-zinc-400 mr-2 md:mr-3 shrink-0" />
          <input
            type="text"
            placeholder={dict.proj4_demo_placeholder}
            className="bg-transparent border-none outline-none text-sm md:text-base w-full placeholder:text-zinc-400 font-bold font-mono cursor-none"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
          />
          <div className="text-[9px] border border-zinc-300 px-1 rounded text-zinc-400 font-mono shrink-0">⌘K</div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t-2 border-black/10 dark:border-white/10"
            >
              <div className="flex flex-col max-h-48 overflow-y-auto">
                {filtered.length > 0 ? filtered.map((opt, i) => (
                  <div key={opt.id} className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 cursor-pointer text-xs md:text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ${i === 0 ? 'bg-zinc-100 dark:bg-zinc-900' : ''}`}>
                    <span className="shrink-0">{opt.icon}</span>
                    <span className="truncate">{opt.text}</span>
                  </div>
                )) : (
                  <div className="px-4 py-6 text-center text-xs md:text-sm font-mono text-zinc-500">{dict.proj4_demo_empty}</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


// --- Live Dashboard Demo ---
// --- Live Dashboard Demo ---
const LiveDashboardDemo = ({ dict }: { dict: any }) => {
  const [logs, setLogs] = useState<{ id: number; method: string; path: string; status: number; ms: number }[]>([]);
  const [requestCount, setRequestCount] = useState(14820);
  const [latency, setLatency] = useState(38);
  const [chartBars, setChartBars] = useState<number[]>([40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 90, 100, 95]);

  useEffect(() => {
    // Generate initial logs
    const initialPaths = [
      { method: 'GET', path: '/api/v1/users', status: 200 },
      { method: 'POST', path: '/api/v1/checkout', status: 201 },
      { method: 'GET', path: '/api/v1/analytics', status: 200 },
      { method: 'PUT', path: '/api/v1/settings', status: 204 }
    ];
    const initialLogs = initialPaths.map((p, idx) => ({
      id: Date.now() - idx * 1000,
      method: p.method,
      path: p.path,
      status: p.status,
      ms: Math.floor(Math.random() * 80) + 10
    }));
    setLogs(initialLogs);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new log
      const paths = [
        { method: 'GET', path: '/api/v1/users', status: 200 },
        { method: 'POST', path: '/api/v1/checkout', status: 201 },
        { method: 'GET', path: '/api/v1/analytics', status: 200 },
        { method: 'PUT', path: '/api/v1/settings', status: 204 },
        { method: 'GET', path: '/api/v1/products', status: 200 },
        { method: 'DELETE', path: '/api/v1/sessions', status: 200 },
        { method: 'GET', path: '/api/v1/auth/me', status: 304 }
      ];
      const selected = paths[Math.floor(Math.random() * paths.length)];
      const newLog = {
        id: Date.now(),
        method: selected.method,
        path: selected.path,
        status: selected.status,
        ms: Math.floor(Math.random() * 85) + 12
      };

      setLogs(prev => [newLog, ...prev.slice(0, 3)]);
      setRequestCount(c => c + 1);
      setLatency(Math.floor(Math.random() * 40) + 25);
      
      // Update sparkline chart
      setChartBars(prev => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(Math.random() * 60) + 40);
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden bg-background text-foreground p-4 md:p-6 relative select-none">
      {/* Editorial Header */}
      <div className="flex justify-between items-center pb-3 border-b border-foreground/10 mb-4">
        <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground/60">{dict.proj5_demo_title || "METRICS PANEL"}</div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[8px] font-mono tracking-widest font-bold text-green-500">LIVE</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="border border-foreground/10 bg-foreground/[0.02] p-2 flex flex-col">
            <span className="text-[8px] font-mono tracking-widest uppercase text-foreground/45">AVG LATENCY</span>
            <span className="text-sm font-mono font-bold mt-1 text-foreground">{latency}ms</span>
          </div>
          <div className="border border-foreground/10 bg-foreground/[0.02] p-2 flex flex-col">
            <span className="text-[8px] font-mono tracking-widest uppercase text-foreground/45">REQUESTS</span>
            <span className="text-sm font-mono font-bold mt-1 text-foreground">{requestCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Live Sparkline Graph */}
        <div className="border border-foreground/10 bg-foreground/[0.02] p-3 flex flex-col justify-between h-20 relative overflow-hidden">
          <span className="text-[8px] font-mono tracking-widest uppercase text-foreground/45 absolute top-2 left-2">REQUEST FLOW</span>
          <div className="flex items-end gap-1 h-8 w-full mt-auto">
            {chartBars.map((h, i) => (
              <motion.div 
                key={i}
                animate={{ height: `${h}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="flex-1 bg-foreground/20 hover:bg-foreground/40 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Real-time Console Log Stream */}
        <div className="flex-1 border border-foreground/10 bg-foreground/[0.02] p-3 flex flex-col overflow-hidden text-left">
          <span className="text-[8px] font-mono tracking-widest uppercase text-foreground/45 mb-2 block">HTTP EVENT STREAM</span>
          <div className="flex-1 flex flex-col gap-1.5 font-mono text-[9px] overflow-hidden">
            <AnimatePresence initial={false}>
              {logs.map(log => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between border-b border-foreground/[0.03] pb-1"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span className={`px-1 rounded-[2px] text-[8px] font-bold ${
                      log.method === 'POST' ? 'bg-zinc-200 dark:bg-zinc-800 text-foreground' : 'bg-transparent text-foreground/60 border border-foreground/20'
                    }`}>
                      {log.method}
                    </span>
                    <span className="text-foreground/75 truncate">{log.path}</span>
                  </span>
                  <span className="flex items-center gap-2 shrink-0">
                    <span className="text-foreground/50">{log.ms}ms</span>
                    <span className={`font-bold ${log.status === 201 ? 'text-green-500' : 'text-foreground/75'}`}>{log.status}</span>
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Skills Bento Component ---
const SkillsBento = ({ dict }: { dict: any }) => {
  return (
    <section id="skills" className="min-h-screen w-full md:snap-start flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24">
      <div className="text-xs font-mono tracking-widest uppercase mb-12 flex items-center gap-4 text-zinc-500">
        <div className="w-8 h-[2px] bg-zinc-500"></div>
        {dict.nav_skills}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full max-w-[1400px] mx-auto flex-1">

        {/* Bento 1: About Me */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 row-span-1 bg-black text-white dark:bg-white dark:text-black p-6 md:p-12 flex flex-col justify-center shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
        >
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{dict.about_title}</h3>
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-xl">
            {dict.about_text}
          </p>
        </motion.div>

        {/* Bento 2: Frontend */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-1 row-span-1 border-2 border-black dark:border-white p-6 md:p-8 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/20"
        >
          <div>
            <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{dict.bento_frontend}</h4>
            <p className="text-sm font-medium opacity-70 mb-6">{dict.bento_frontend_desc}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Tailwind', 'TS'].map(t => <span key={t} className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-wider">{t}</span>)}
          </div>
        </motion.div>

        {/* Bento 3: Backend */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-1 row-span-1 border-2 border-black dark:border-white p-6 md:p-8 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/20"
        >
          <div>
            <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{dict.bento_backend}</h4>
            <p className="text-sm font-medium opacity-70 mb-6">{dict.bento_backend_desc}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'Python', 'SQL', 'APIs'].map(t => <span key={t} className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-wider">{t}</span>)}
          </div>
        </motion.div>

        {/* Bento 4: Mobile & Tools */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 row-span-1 border-2 border-black dark:border-white p-6 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between bg-zinc-50 dark:bg-zinc-900/20"
        >
          <div className="max-w-md">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{dict.bento_mobile}</h4>
            <p className="text-base font-medium opacity-70">{dict.bento_mobile_desc}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['React Native', 'Expo', 'Git', 'Figma', 'Postman'].map(t => <span key={t} className="px-3 py-1 border border-black dark:border-white text-xs font-bold uppercase tracking-wider">{t}</span>)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}


const AdditionalProjectsDemo = () => {
  const extras = [
    {
      title: "Agenda & Notas",
      desc: "Tablero Kanban reactivo para la gestión de tareas móviles y web.",
      tech: ["React Native", "Expo", "Firebase"]
    },
    {
      title: "Chatbot & APIs",
      desc: "Integración conversacional inteligente consumiendo APIs REST.",
      tech: ["Node.js", "REST APIs", "Express"]
    },
    {
      title: "Live Dashboard",
      desc: "Visualizador en tiempo real de logs y métricas de red a 60 FPS.",
      tech: ["React", "WebSockets", "Framer Motion"]
    }
  ];

  return (
    <div className="flex flex-col h-full w-full justify-center p-6 md:p-8 font-mono bg-zinc-50 dark:bg-[#060606] text-black dark:text-white select-none transition-colors duration-500 overflow-y-auto">
      <div className="text-[9px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-6 border-b border-black/10 dark:border-white/10 pb-2 flex justify-between items-center font-bold">
        <span>Otros Desarrollos</span>
        <span className="text-[8px] opacity-65">Daniel Villarreal</span>
      </div>
      <div className="flex flex-col gap-4">
        {extras.map((proj, idx) => (
          <motion.div
            key={idx}
            className="group relative p-4 border border-black/5 dark:border-white/5 rounded-xl bg-white/40 dark:bg-white/[0.02] hover:bg-white/60 dark:hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/10 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300" />
            
            <div className="flex justify-between items-center mb-1.5 pl-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">{proj.title}</span>
              <span className="text-[7px] text-zinc-500 dark:text-zinc-400 font-bold border border-zinc-200 dark:border-zinc-800/60 px-2 py-0.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm">
                {proj.tech[0]}
              </span>
            </div>
            <p className="text-[10px] text-black/60 dark:text-white/50 leading-relaxed font-sans font-medium pl-2 text-left">
              {proj.desc}
            </p>
            <div className="flex gap-1.5 mt-3 pl-2 flex-wrap">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-[7px] bg-black/5 dark:bg-white/5 px-2 py-0.5 text-black/50 dark:text-white/40 font-bold rounded-sm border border-black/[0.02] dark:border-white/[0.02]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Project Carousel Component ---
const ProjectCarousel = ({ dict, isDark, lang }: { dict: any, isDark: boolean, lang: Lang }) => {
  const [active, setActive] = useState(0);

  const projects = [
    {
      cat: dict.proj0_cat, title: dict.proj0_title, challenge: dict.proj0_challenge, solution: dict.proj0_solution,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demo: <SpaujedDemo dict={dict} />,
      role: ""
    },
    {
      cat: dict.proj1_cat, title: dict.proj1_title, challenge: dict.proj1_challenge, solution: dict.proj1_solution,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      demo: <ShippingDemo dict={dict} />,
      role: ""
    },
    {
      cat: "SAAS PLATFORM", 
      title: "EcoFitness Hub", 
      challenge: dict.proj2_challenge, 
      solution: dict.proj2_solution,
      tags: ['React', 'TypeScript', 'Framer Motion'],
      demo: <FitnessDemo dict={dict} />,
      role: ""
    },
    {
      cat: "DESARROLLOS VARIOS",
      title: "Otros Proyectos",
      challenge: "Optimización de procesos internos, flujos automatizados de mensajería y visualización de datos en tiempo real.",
      solution: "Una colección de módulos y herramientas desarrolladas para resolver tareas específicas de comunicación, productividad y monitoreo de red.",
      tags: ['React Native', 'WebSockets', 'REST APIs', 'Node.js'],
      demo: <AdditionalProjectsDemo />,
      role: "Módulos de Integración y Herramientas Auxiliares"
    }
  ];

  const handleNext = () => setActive((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="min-h-screen w-full md:snap-start flex flex-col pt-24 pb-12 overflow-hidden relative">
      <div className="flex w-full px-6 md:px-16 lg:px-24 mb-8 justify-between items-end">
        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[8px] font-mono tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
            {lang === 'es' ? 'RETO / SOLUCIÓN' : 'CHALLENGE / SOLUTION'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            {dict.nav_projects}
          </h2>
        </div>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            <ArrowRight className="rotate-180" />
          </button>
          <button onClick={handleNext} className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full h-full pb-8">
        {/* Left Side: Demo (45% width on lg) */}
        <div className="w-full md:w-1/2 lg:w-[45%] h-[40vh] md:h-[60vh] border border-black/20 dark:border-white/20 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/20 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              {projects[active].demo}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Text (55% width on lg) */}
        <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col justify-center h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="text-xs font-mono tracking-widest uppercase mb-2 flex items-center gap-4 text-zinc-500">
                <div className="w-8 h-[2px] bg-zinc-500"></div>
                0{active + 1} / {projects[active].cat}
              </div>

              {projects[active].role && (
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1.5 block">
                  {projects[active].role}
                </span>
              )}

              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 md:mb-12 uppercase leading-[0.9]">
                {projects[active].title}
              </h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-4 md:mb-12">
                <div className="border-l-[1px] border-zinc-200 dark:border-zinc-800/80 pl-5 text-left">
                  <h4 className="font-mono text-[9px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500 uppercase font-semibold mb-2.5">
                    {lang === 'es' ? 'EL RETO' : 'THE CHALLENGE'}
                  </h4>
                  <p className="text-sm md:text-base font-sans font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {projects[active].challenge}
                  </p>
                </div>
                <div className="border-l-[1px] border-zinc-200 dark:border-zinc-800/80 pl-5 text-left">
                  <h4 className="font-mono text-[9px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500 uppercase font-semibold mb-2.5">
                    {lang === 'es' ? 'LA SOLUCIÓN' : 'THE SOLUTION'}
                  </h4>
                  <p className="text-sm md:text-base font-sans font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {projects[active].solution}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap mt-4 md:mt-auto">
                {projects[active].tags.map(tag => (
                  <span key={tag} className="border border-black/20 dark:border-white/20 px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {projects.map((_, i) => (
          <div key={i} className={`h-1 transition-all duration-300 ${i === active ? 'w-8 bg-black dark:bg-white' : 'w-2 bg-black/20 dark:bg-white/20'}`} />
        ))}
      </div>
    </section>
  );
};

// --- Main Application ---
export default function Portfolio() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>('es');
  const [isProfileActive, setIsProfileActive] = useState(false);

  // States to track scroll direction to show/hide navigation menu items
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const d = translations[lang];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down -> hide links
      setShowNavLinks(false);
    } else {
      // Scrolling up -> show links
      setShowNavLinks(true);
    }
    setLastScrollY(currentScrollY);
  };

  return (
    <div 
      onScroll={handleScroll}
      className="h-screen w-full overflow-y-scroll md:snap-y md:snap-mandatory bg-background text-foreground font-sans relative"
    >
      <div className="noise-overlay" />
      <CustomCursor isDark={isDark} />

      {/* Full-Screen Backdrop Dim Overlay (Z-[35]) */}
      <AnimatePresence>
        {isProfileActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProfileActive(false)}
            className="fixed inset-0 bg-black/10 dark:bg-black/35 z-[35] pointer-events-auto backdrop-blur-[1px] cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Navbar Minimalista Monocromático */}
      <nav className="fixed w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <a href="#home" className="font-bold text-2xl tracking-tighter pointer-events-auto cursor-pointer">
            DV.
          </a>

          {/* Animating links container: hides when scrolling down, shows when scrolling up */}
          <motion.div
            animate={{ 
              opacity: showNavLinks ? 1 : 0, 
              y: showNavLinks ? 0 : -20,
              pointerEvents: showNavLinks ? "auto" : "none" 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex gap-8 items-center font-mono text-xs uppercase font-bold tracking-widest"
          >
            <a href="#skills" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_skills}</a>
            <a href="#projects" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_projects}</a>
            <a href="#education" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_edu}</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_contact}</a>
          </motion.div>

          <div className="flex gap-6 items-center pointer-events-auto">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="font-mono text-xs font-bold tracking-widest hover:opacity-50 transition-opacity cursor-pointer"
            >
              [ {lang.toUpperCase()} ]
            </button>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="hover:opacity-50 transition-opacity cursor-pointer"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Sections --- */}

      {/* Hero Section */}
      <section id="home" className="min-h-[100svh] w-full md:snap-start flex flex-col justify-center pt-24 pb-20 px-6 md:px-16 lg:px-24 relative">

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="mb-24 relative">
          
          {/* Circular Trigger */}
          <div className="flex items-center gap-4 mb-6 select-none relative z-40">
            <button 
              onClick={() => setIsProfileActive(!isProfileActive)}
              className="w-10 h-10 rounded-full border border-foreground/30 hover:border-foreground flex items-center justify-center transition-colors pointer-events-auto relative group bg-background"
              title={isProfileActive ? "Restore Title" : "Activate Profile"}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-125" />
              {isProfileActive && (
                <span className="absolute inset-0 rounded-full border border-foreground animate-ping opacity-45" />
              )}
            </button>
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">
              {isProfileActive ? "System: Profile Active" : "Click to view profile card"}
            </span>
          </div>

          {/* 3D Flip Container */}
          <div 
            className={`relative z-40 transition-all duration-500 ease-in-out ${
              isProfileActive 
                ? "w-[92vw] sm:w-[500px] md:w-[600px] lg:w-[750px] xl:w-[900px] h-[360px] sm:h-[280px] md:h-[270px] lg:h-[280px] xl:h-[300px]" 
                : "w-fit h-fit"
            }`}
            style={{ perspective: 1500 }}
          >
            <motion.div
              animate={{ rotateY: isProfileActive ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 16 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full"
            >
              {/* FRONT SIDE: Original typography with restored dragging and click-to-flip gestures */}
              <div 
                style={{ backfaceVisibility: "hidden" }}
                className={`w-fit transition-all duration-300 ${isProfileActive ? "pointer-events-none select-none opacity-0" : "pointer-events-auto opacity-100"}`}
              >
                <motion.div
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                  onTap={() => setIsProfileActive(true)}
                  className="cursor-grab active:cursor-grabbing group inline-block relative z-10 w-fit"
                >
                  <h1 className="text-[11vw] md:text-[10vw] leading-[0.95] font-black tracking-tighter uppercase px-4 -mx-4 rounded-sm group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    {d.hero_title1}<br />
                    {d.hero_title2}<br />
                    {d.hero_title3}
                  </h1>
                </motion.div>
              </div>

              {/* BACK SIDE: Minimal Editorial Digital Identity Card - Fits container dimensions */}
              <div 
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                className={`absolute inset-0 w-full h-full border-2 border-foreground bg-background text-foreground p-5 md:p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_rgba(255,255,255,0.03)] font-mono text-xs md:text-sm tracking-tight leading-tight select-text transition-all duration-300 ${
                  isProfileActive ? "pointer-events-auto opacity-100 z-50" : "pointer-events-none opacity-0"
                }`}
              >
                {/* ID Header */}
                <div className="flex justify-between items-center border-b border-foreground/20 pb-2 uppercase text-[10px] md:text-xs lg:text-sm font-bold opacity-80">
                  <span>{d.card_status}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                    ONLINE
                  </span>
                </div>

                {/* Main Body */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 my-auto text-left">
                  <div className="border-b sm:border-b-0 sm:border-r border-foreground/20 pb-3 sm:pb-0 sm:pr-4 lg:pr-8 flex flex-col justify-center py-1">
                    <div className="text-[10px] md:text-xs lg:text-sm opacity-50 uppercase">DEVELOPER</div>
                    <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-black tracking-tighter uppercase leading-none mt-1">
                      {d.card_title}
                    </h2>
                    <span className="text-xs md:text-base lg:text-lg xl:text-xl opacity-80 mt-1 block">
                      {d.card_sub}
                    </span>
                  </div>

                  <div className="pl-0 sm:pl-4 lg:pl-8 flex flex-col justify-center py-1 font-sans">
                    <div className="space-y-1.5 lg:space-y-2.5 text-xs md:text-base lg:text-lg xl:text-xl leading-snug">
                      <p className="font-bold text-foreground">{d.card_focus}</p>
                      <p className="text-foreground/80">{d.card_ux}</p>
                      <p className="text-foreground/80 font-mono text-[10px] md:text-xs lg:text-sm uppercase tracking-tight">{d.card_systems}</p>
                    </div>

                    <div className="mt-3 lg:mt-5 text-[10px] md:text-xs lg:text-sm opacity-75 font-mono">
                      <span>{d.card_loc}</span>
                      <span className="block text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-bold mt-1 opacity-90">{d.card_remote}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="border-t border-foreground/20 pt-2 flex flex-wrap justify-between items-center gap-2">
                  <div className="flex gap-4 uppercase font-bold text-[10px] md:text-xs lg:text-sm pointer-events-auto">
                    <Link href="/cv" className="hover:bg-foreground hover:text-background px-1.5 py-0.5 transition-colors cursor-pointer relative z-50">
                      [ {lang === 'es' ? 'VER CV' : 'DOWNLOAD CV'} ]
                    </Link>
                    <a href="https://github.com/Dandanieldan" target="_blank" rel="noreferrer" className="hover:bg-foreground hover:text-background px-1.5 py-0.5 transition-colors cursor-pointer relative z-50">
                      [ GitHub ]
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-villarreal-h" target="_blank" rel="noreferrer" className="hover:bg-foreground hover:text-background px-1.5 py-0.5 transition-colors cursor-pointer relative z-50">
                      [ LinkedIn ]
                    </a>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsProfileActive(false);
                    }}
                    className="opacity-60 hover:opacity-100 transition-opacity font-bold cursor-pointer relative z-50 text-[10px] md:text-xs"
                  >
                    {d.card_close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="mt-12 max-w-xl text-lg md:text-2xl font-medium tracking-tight border-l-4 border-black dark:border-white pl-6 relative z-0">
            {d.hero_desc}
          </p>
        </motion.div>

        <div className="absolute bottom-10 left-6 md:left-16 font-mono text-xs tracking-widest uppercase flex items-center gap-4">
          <div className="w-12 h-[1px] bg-foreground"></div>
          {d.scroll_down}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsBento dict={d} />

      {/* Projects Carousel */}
      <ProjectCarousel dict={d} isDark={isDark} lang={lang} />

      {/* Education & Contact */}
      <section id="education" className="min-h-screen w-full md:snap-start flex flex-col md:flex-row bg-foreground text-background">

        {/* Left Side: Education & Certs */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:h-full flex flex-col justify-center px-6 py-16 md:py-12 md:px-16 lg:px-24 xl:px-32 border-b md:border-b-0 md:border-r border-background/20 relative">

          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-tight">{d.edu_title}</h2>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-background/20 space-y-8">
              <div className="relative">
                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-background"></div>
                <div className="font-mono text-[10px] uppercase opacity-60 mb-1">{d.edu1_date}</div>
                <h3 className="text-xl font-bold uppercase leading-tight">{d.edu1_title}</h3>
                <p className="text-sm opacity-80 mt-1">{d.edu_uni}</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 border-background bg-foreground"></div>
                <div className="font-mono text-[10px] uppercase opacity-60 mb-1">{d.edu2_date}</div>
                <h3 className="text-xl font-bold uppercase leading-tight">{d.edu2_title}</h3>
                <p className="text-sm opacity-80 mt-1">{d.edu_uni}</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4 opacity-60 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-background"></div>
              {d.cert_title}
            </h3>

            {/* Draggable Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { name: d.cert1, org: d.cert_cisco },
                { name: d.cert2, org: d.cert_cisco },
                { name: d.cert3, org: d.cert_cisco },
                { name: d.cert4, org: d.cert_cisco },
                { name: d.cert5, org: d.cert_aws },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.4}
                  whileDrag={{ scale: 1.1, zIndex: 50, rotate: i % 2 === 0 ? 5 : -5 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-grab active:cursor-grabbing bg-background text-foreground px-4 py-2 rounded-full border border-transparent hover:border-foreground/50 transition-colors shadow-lg"
                >
                  <span className="font-bold text-sm whitespace-nowrap">{cert.name}</span>
                  <span className="text-[10px] opacity-50 ml-2 uppercase tracking-widest hidden lg:inline-block">{cert.org}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4 opacity-60 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-background"></div>
              {d.info_title}
            </h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li className="flex items-start gap-2"><span className="opacity-50 mt-1">▹</span> {d.info1}</li>
              <li className="flex items-start gap-2"><span className="opacity-50 mt-1">▹</span> {d.info2}</li>
              <li className="flex items-start gap-2"><span className="opacity-50 mt-1">▹</span> {d.info3}</li>
            </ul>
          </div>

        </div>

        {/* Right Side: Contact */}
        <div id="contact" className="w-full md:w-1/2 min-h-[50vh] md:h-full flex flex-col justify-center px-6 pt-12 pb-20 md:py-12 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">{d.nav_contact}</h2>
          <p className="text-lg mb-12 opacity-80 max-w-md leading-relaxed">
            {d.contact_desc}
          </p>

          <a href="mailto:danielvillarrealh@gmail.com" className="text-base sm:text-xl md:text-3xl font-bold underline decoration-2 underline-offset-8 mb-16 hover:opacity-50 transition-opacity break-all">
            danielvillarrealh@gmail.com
          </a>

          <div className="flex gap-4 md:gap-8 flex-wrap mb-auto items-center">
            <Link href="/cv" className="flex items-center gap-2 text-sm font-bold uppercase hover:bg-foreground hover:text-background border-2 border-foreground px-4 py-2 transition-colors">
              {d.nav_cv} <ArrowUpRight size={16} />
            </Link>
            <a href="https://github.com/Dandanieldan" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xl font-bold uppercase hover:opacity-50 transition-opacity">
              GITHUB <ArrowUpRight size={24} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-villarreal-h" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xl font-bold uppercase hover:opacity-50 transition-opacity">
              LINKEDIN <ArrowUpRight size={24} />
            </a>
          </div>

          <p className="font-mono text-xs opacity-40 uppercase tracking-widest mt-16">{d.footer_text}</p>
        </div>
      </section>

    </div>
  );
}
