"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Sun, Moon, Package, Check, ArrowRight,
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
    hero_title1: "SOFTWARE",
    hero_title2: "ENGINEER.",
    hero_title3: "FRONTEND DEV.",
    hero_desc: "Soy Daniel Villarreal. Desarrollador especializado en el ecosistema React (Next.js, React Native). Construyo plataformas escalables, desde e-commerce de alcance nacional hasta aplicaciones móviles multiplataforma.",
    scroll_down: "DESCUBRE MI TRABAJO",
    proj1_cat: "E-COMMERCE A GRAN ESCALA",
    proj1_title: "Correos Clic",
    proj1_challenge: "Modernizar la experiencia de compra heredada de Correos de México, reduciendo la fricción cognitiva en el checkout para competir con gigantes del retail digital.",
    proj1_solution: "Implementé una arquitectura frontend basada en componentes con Next.js y Tailwind CSS. Creé micro-interacciones fluidas y optimicé el rendimiento visualizando estados optimistas.",
    proj1_demo_title: "Interacciones de Compra",
    proj1_demo_item: "Producto",
    proj1_demo_drop: "Arrastra para comprar",
    proj1_demo_success: "¡En el carrito!",
    proj1_demo_reset: "Reiniciar",
    proj2_cat: "PLATAFORMA SAAS",
    proj2_title: "Fitness & Coaching",
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
    about_text: "Ingeniero en Software apasionado por el desarrollo de tecnología útil y escalable. Cuento con experiencia en proyectos web y móviles, combinando pensamiento analítico, aprendizaje continuo y atención al detalle para construir soluciones sólidas.",
    bento_frontend: "FRONTEND CORE",
    bento_frontend_desc: "Desarrollo de interfaces interactivas con React y Next.js. Fuerte enfoque en la experiencia de usuario (UX), diseño responsivo y arquitectura escalable basada en componentes.",
    bento_backend: "BACKEND & DATOS",
    bento_backend_desc: "Implementación de servidores en Node.js, diseño e integración de APIs REST, y modelado eficiente de estructuras de datos relacionales y no relacionales.",
    bento_mobile: "MÓVIL & HERRAMIENTAS",
    bento_mobile_desc: "Construcción de aplicaciones móviles nativas con React Native y Expo. Manejo fluido de control de versiones y metodologías ágiles en equipos remotos.",
    proj5_cat: "UI / UX DESIGN",
    proj5_title: "Product Card",
    proj5_challenge: "Mejorar la conversión de compra diseñando una tarjeta de producto moderna, atractiva y que proporcione feedback inmediato al usuario sin saturar la interfaz.",
    proj5_solution: "Desarrollé un componente interactivo con animaciones fluidas usando Framer Motion, logrando un 'Call to Action' dinámico que reacciona de forma intuitiva a la interacción.",
    proj5_demo_title: "Product Card Interactiva",
    proj5_demo_add: "Añadir al carrito",
    proj5_demo_added: "Agregado",
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
    footer_text: "© 2026 Daniel Villarreal. Ing. de Software."
  },
  en: {
    nav_projects: "PROJECTS",
    nav_edu: "EDUCATION",
    nav_skills: "SKILLS",
    nav_contact: "CONTACT",
    hero_title1: "SOFTWARE",
    hero_title2: "ENGINEER.",
    hero_title3: "FRONTEND DEV.",
    hero_desc: "I am Daniel Villarreal. Developer specializing in the React ecosystem (Next.js, React Native). I build scalable platforms, from national-reach e-commerce to cross-platform mobile applications.",
    scroll_down: "DISCOVER MY WORK",
    proj1_cat: "LARGE-SCALE E-COMMERCE",
    proj1_title: "Correos Clic",
    proj1_challenge: "Modernize Correos de Mexico's legacy shopping experience by reducing cognitive friction in the checkout process to compete with digital retail giants.",
    proj1_solution: "Implemented a component-based frontend architecture with Next.js and Tailwind CSS. Built fluid micro-interactions and optimized performance using optimistic UI states.",
    proj1_demo_title: "Purchase Interactions",
    proj1_demo_item: "Product",
    proj1_demo_drop: "Drop to buy",
    proj1_demo_success: "In Cart!",
    proj1_demo_reset: "Reset",
    proj2_cat: "SAAS PLATFORM",
    proj2_title: "Fitness & Coaching",
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
    about_text: "Software Engineer passionate about building useful and scalable technology. I have experience in web and mobile projects, combining analytical thinking, continuous learning, and attention to detail to build solid solutions.",
    bento_frontend: "FRONTEND CORE",
    bento_frontend_desc: "Interactive interface development with React and Next.js. Strong focus on user experience (UX), responsive design, and scalable component-based architecture.",
    bento_backend: "BACKEND & DATA",
    bento_backend_desc: "Server implementation using Node.js, REST API design and integration, and efficient modeling of relational and non-relational data structures.",
    bento_mobile: "MOBILE & TOOLS",
    bento_mobile_desc: "Building native mobile applications with React Native and Expo. Fluent in version control and agile methodologies in remote teams.",
    proj5_cat: "UI / UX DESIGN",
    proj5_title: "Product Card",
    proj5_challenge: "Improve purchase conversion by designing a modern, attractive product card that provides immediate user feedback without cluttering the interface.",
    proj5_solution: "Developed an interactive component with fluid animations using Framer Motion, achieving a dynamic 'Call to Action' that reacts intuitively to interaction.",
    proj5_demo_title: "Interactive Product Card",
    proj5_demo_add: "Add to cart",
    proj5_demo_added: "Added",
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
    footer_text: "© 2026 Daniel Villarreal. Software Engineer."
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

const CheckoutDemo = ({ dict }: { dict: any }) => {
  const [optimized, setOptimized] = useState(false);
  const [running, setRunning] = useState(false);
  const [frictionScore, setFrictionScore] = useState(87);
  const [tick, setTick] = useState(0);

  const handleOptimize = () => {
    if (running || optimized) return;
    setRunning(true);
    let score = 87;
    const interval = setInterval(() => {
      score = Math.max(12, score - Math.floor(Math.random() * 14 + 4));
      setFrictionScore(score);
      setTick(t => t + 1);
      if (score <= 12) {
        clearInterval(interval);
        setOptimized(true);
        setRunning(false);
      }
    }, 180);
  };

  const handleReset = () => {
    setOptimized(false);
    setRunning(false);
    setFrictionScore(87);
    setTick(0);
  };

  const highFrictionFields = [
    { label: 'Full Legal Name', w: 'w-full' },
    { label: 'Billing Address Line 1', w: 'w-full' },
    { label: 'Billing Address Line 2', w: 'w-2/3' },
    { label: 'ZIP Code', w: 'w-1/3' },
    { label: 'Card Number', w: 'w-full' },
    { label: 'CVV', w: 'w-1/4' },
    { label: 'Expiry MM/YY', w: 'w-1/3' },
    { label: 'Promo Code', w: 'w-2/3' },
  ];

  const lowFrictionFields = [
    { label: 'Email', w: 'w-full' },
    { label: 'Card', w: 'w-full' },
  ];

  const fields = optimized ? lowFrictionFields : highFrictionFields;
  const scoreColor = frictionScore > 60 ? 'text-foreground' : frictionScore > 30 ? 'text-foreground/70' : 'text-foreground/40';

  return (
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden relative bg-zinc-50 dark:bg-zinc-900/10 p-5">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-3">
        <div className="text-[9px] font-mono tracking-widest uppercase text-zinc-400">
          {dict.proj1_demo_title}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className={`text-[9px] font-mono uppercase tracking-widest ${scoreColor}`}>FRICTION</div>
            <motion.div
              key={frictionScore}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-[11px] font-black font-mono tabular-nums ${scoreColor}`}
            >
              {frictionScore}
            </motion.div>
          </div>
          <div className={`w-1.5 h-1.5 rounded-full ${
            running ? 'bg-foreground animate-pulse' : optimized ? 'bg-foreground/30' : 'bg-foreground/20'
          }`} />
        </div>
      </div>

      {/* System label */}
      <AnimatePresence mode="wait">
        {running && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
            >▸</motion.span>
            ADAPTIVE LAYOUT — OPTIMIZATION ACTIVE
          </motion.div>
        )}
        {optimized && !running && (
          <motion.div
            key="done"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-3"
          >
            ✓ COGNITIVE LOAD REDUCED — INTERACTION LATENCY MINIMIZED
          </motion.div>
        )}
        {!running && !optimized && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-3"
          >
            SYSTEM STATE — HIGH FRICTION DETECTED
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form fields */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence>
          <motion.div
            key={optimized ? 'opt' : 'raw'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 w-full"
          >
            {fields.map((field, i) => (
              <motion.div
                key={field.label}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`${field.w} flex flex-col gap-1`}
              >
                <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-400">{field.label}</div>
                <div className={`h-7 border ${
                  optimized
                    ? 'border-black dark:border-white'
                    : 'border-black/20 dark:border-white/20'
                } bg-transparent w-full`} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Eliminated fields ghost */}
        {optimized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 pt-3 border-t border-black/10 dark:border-white/10"
          >
            <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-300 dark:text-zinc-600 mb-2">6 fields eliminated</div>
            <div className="flex flex-wrap gap-1.5">
              {['Billing Line 2', 'ZIP', 'CVV', 'Expiry', 'Promo Code', 'Legal Name'].map(f => (
                <div key={f} className="text-[8px] font-mono text-zinc-300 dark:text-zinc-600 line-through">{f}</div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
        {!optimized ? (
          <motion.button
            onClick={handleOptimize}
            disabled={running}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest disabled:opacity-40 transition-opacity"
          >
            {running ? 'OPTIMIZING...' : 'RUN OPTIMIZATION →'}
          </motion.button>
        ) : (
          <div className="flex gap-2">
            <div className="flex-1 py-2.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest text-center">
              COMPLETE ORDER
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2.5 border border-black/20 dark:border-white/20 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:border-black dark:hover:border-white transition-colors"
            >
              RESET
            </button>
          </div>
        )}
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
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 px-8 py-16">
      <div className="flex justify-between items-center mb-16">
        <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">{dict.proj2_demo_title}</div>
        <div className="flex border-2 border-black dark:border-white p-1">
          <button onClick={() => setView('week')} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest relative transition-colors ${view === 'week' ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
            {view === 'week' && <motion.div layoutId="dash-tab" className="absolute inset-0 bg-black dark:bg-white" />}
            <span className="relative z-10">{dict.proj2_demo_week}</span>
          </button>
          <button onClick={() => setView('month')} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest relative transition-colors ${view === 'month' ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
            {view === 'month' && <motion.div layoutId="dash-tab" className="absolute inset-0 bg-black dark:bg-white" />}
            <span className="relative z-10">{dict.proj2_demo_month}</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-2 justify-between w-full h-full relative border-b-2 border-black dark:border-white pb-1">
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
              style={{ maxWidth: view === 'week' ? '40px' : '20px' }}
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
    <div className="flex flex-col h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-8">
      <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 text-center mb-12">{dict.proj3_demo_title}</div>

      <div className="flex gap-8 h-full max-w-lg mx-auto w-full">
        {['todo', 'done'].map((status) => (
          <div key={status} className="flex-1 border-t-2 border-black dark:border-white pt-4 flex flex-col gap-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest">
              {status === 'todo' ? dict.proj3_demo_todo : dict.proj3_demo_done}
            </h5>
            <div className="flex-1 flex flex-col gap-3">
              <AnimatePresence>
                {items.filter(i => i.status === status).map((item) => (
                  <motion.div
                    layout
                    layoutId={`kanban-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => moveItem(item.id, status === 'todo' ? 'done' : 'todo')}
                    className="bg-white dark:bg-black p-4 border border-black/20 dark:border-white/20 cursor-pointer hover:border-black dark:hover:border-white transition-colors flex items-center justify-between"
                  >
                    <span className="text-sm font-bold">{item.title}</span>
                    <ArrowRight size={14} className="opacity-50" />
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
    <div className="flex flex-col items-center justify-center h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-8">
      <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-12">{dict.proj4_demo_title}</div>

      <div
        className={`w-full max-w-md bg-white dark:bg-black border-2 transition-all duration-300 ${open ? 'border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]' : 'border-zinc-300 dark:border-zinc-800'}`}
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center px-4 py-4 border-b-2 border-transparent">
          <Command size={18} className="text-zinc-400 mr-3" />
          <input
            type="text"
            placeholder={dict.proj4_demo_placeholder}
            className="bg-transparent border-none outline-none text-base w-full placeholder:text-zinc-400 font-bold font-mono cursor-none"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
          />
          <div className="text-[10px] border border-zinc-300 px-1 rounded text-zinc-400 font-mono">⌘K</div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t-2 border-black/10 dark:border-white/10"
            >
              <div className="flex flex-col max-h-48 overflow-y-auto">
                {filtered.length > 0 ? filtered.map((opt, i) => (
                  <div key={opt.id} className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ${i === 0 ? 'bg-zinc-100 dark:bg-zinc-900' : ''}`}>
                    <span>{opt.icon}</span>
                    {opt.text}
                  </div>
                )) : (
                  <div className="px-4 py-6 text-center text-sm font-mono text-zinc-500">{dict.proj4_demo_empty}</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


// --- Product Card Demo (Correos Clic) ---
const ProductCardDemo = ({ dict }: { dict: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full interactive-demo overflow-hidden border-l border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-8">
      <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-8 absolute top-8 left-8">{dict.proj5_demo_title}</div>

      <motion.div
        className="relative w-64 bg-white dark:bg-zinc-800 border-2 border-black dark:border-white flex flex-col p-4 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5, x: -5, boxShadow: "10px 10px 0px rgba(0,0,0,1)" }}
        initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Placeholder with Parallax/Zoom */}
        <div className="w-full h-40 bg-zinc-100 dark:bg-zinc-700 mb-4 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.4 }}
            className="w-24 h-24 bg-black/10 dark:bg-white/10"
            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          />
        </div>

        <h4 className="font-black text-lg uppercase tracking-tighter mb-1 leading-tight">Premium<br />Hoodie</h4>
        <p className="font-mono text-xs opacity-50 mb-4">$120.00 USD</p>

        <motion.button
          onClick={() => setIsAdded(true)}
          whileTap={{ scale: 0.95 }}
          className={`mt-auto w-full py-3 text-xs font-bold uppercase tracking-widest transition-colors ${isAdded ? 'bg-green-500 text-white border-2 border-green-500' : 'bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white'}`}
        >
          {isAdded ? dict.proj5_demo_added : dict.proj5_demo_add}
        </motion.button>
      </motion.div>

      {isAdded && (
        <button onClick={() => setIsAdded(false)} className="absolute bottom-8 text-[10px] uppercase underline text-center hover:opacity-50 font-mono text-zinc-500">
          Reset Demo
        </button>
      )}
    </div>
  );
};


// --- Skills Bento Component ---
const SkillsBento = ({ dict }: { dict: any }) => {
  return (
    <section id="skills" className="min-h-screen w-full snap-start flex flex-col justify-center py-24 px-6 md:px-16 lg:px-24">
      <div className="text-xs font-mono tracking-widest uppercase mb-12 flex items-center gap-4 text-zinc-500">
        <div className="w-8 h-[2px] bg-zinc-500"></div>
        {dict.nav_skills}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full max-w-6xl mx-auto flex-1">

        {/* Bento 1: About Me */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 row-span-1 bg-black text-white dark:bg-white dark:text-black p-8 md:p-12 flex flex-col justify-center shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
        >
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{dict.about_title}</h3>
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-xl">
            {dict.about_text}
          </p>
        </motion.div>

        {/* Bento 2: Frontend */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-1 row-span-1 border-2 border-black dark:border-white p-8 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/20"
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
          className="col-span-1 md:col-span-1 row-span-1 border-2 border-black dark:border-white p-8 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/20"
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
          className="col-span-1 md:col-span-2 row-span-1 border-2 border-black dark:border-white p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between bg-zinc-50 dark:bg-zinc-900/20"
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
};


// --- Project Carousel Component ---
const ProjectCarousel = ({ dict, isDark }: { dict: any, isDark: boolean }) => {
  const [active, setActive] = useState(0);

  const projects = [
    {
      cat: dict.proj1_cat, title: dict.proj1_title, challenge: dict.proj1_challenge, solution: dict.proj1_solution,
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      demo: <CheckoutDemo dict={dict} />
    },
    {
      cat: dict.proj2_cat, title: dict.proj2_title, challenge: dict.proj2_challenge, solution: dict.proj2_solution,
      tags: ['React', 'Node.js', 'Database'],
      demo: <DashboardDemo dict={dict} />
    },
    {
      cat: dict.proj3_cat, title: dict.proj3_title, challenge: dict.proj3_challenge, solution: dict.proj3_solution,
      tags: ['React Native', 'Expo', 'Mobile'],
      demo: <KanbanDemo dict={dict} />
    },
    {
      cat: dict.proj4_cat, title: dict.proj4_title, challenge: dict.proj4_challenge, solution: dict.proj4_solution,
      tags: ['REST APIs', 'Automation', 'Chatbot'],
      demo: <CommandPaletteDemo dict={dict} />
    },
    {
      cat: dict.proj5_cat, title: dict.proj5_title, challenge: dict.proj5_challenge, solution: dict.proj5_solution,
      tags: ['UX/UI', 'Framer Motion', 'React'],
      demo: <ProductCardDemo dict={dict} />
    }
  ];

  const handleNext = () => setActive((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="min-h-screen w-full snap-start flex flex-col pt-24 pb-12 overflow-hidden relative">
      <div className="flex w-full px-6 md:px-16 lg:px-24 mb-8 justify-between items-end">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
          {dict.nav_projects}
        </h2>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            <ArrowRight className="rotate-180" />
          </button>
          <button onClick={handleNext} className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-24 h-full pb-8">
        {/* Left Side: Demo (1/3 width on md) */}
        <div className="w-full md:w-1/3 h-[40vh] md:h-[60vh] border border-black/20 dark:border-white/20 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/20 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]">
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

        {/* Right Side: Text (2/3 width on md) */}
        <div className="w-full md:w-2/3 flex flex-col justify-center h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="text-xs font-mono tracking-widest uppercase mb-4 flex items-center gap-4 text-zinc-500">
                <div className="w-8 h-[2px] bg-zinc-500"></div>
                0{active + 1} / {projects[active].cat}
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
                {projects[active].title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                <div className="border-l-2 border-black/20 dark:border-white/20 pl-4">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-3 opacity-50 text-foreground">Reto / Challenge</h4>
                  <p className="text-base md:text-lg font-medium opacity-90 leading-relaxed">
                    {projects[active].challenge}
                  </p>
                </div>
                <div className="border-l-2 border-black/20 dark:border-white/20 pl-4">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-3 opacity-50 text-foreground">Solución / Solution</h4>
                  <p className="text-base md:text-lg font-medium opacity-90 leading-relaxed">
                    {projects[active].solution}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap mt-auto">
                {projects[active].tags.map(tag => (
                  <span key={tag} className="border border-black/20 dark:border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest">
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

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const d = translations[lang];

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-background text-foreground font-sans relative">
      <div className="noise-overlay" />
      <CustomCursor isDark={isDark} />

      {/* Navbar Minimalista Monocromático */}
      <nav className="fixed w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <a href="#home" className="font-bold text-2xl tracking-tighter pointer-events-auto cursor-pointer">
            DV.
          </a>

          <div className="hidden md:flex gap-8 items-center pointer-events-auto font-mono text-xs uppercase font-bold tracking-widest">
            <a href="#skills" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_skills}</a>
            <a href="#projects" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_projects}</a>
            <a href="#education" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_edu}</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity cursor-pointer">{d.nav_contact}</a>
          </div>

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
      <section id="home" className="min-h-[100svh] w-full snap-start flex flex-col justify-center pt-24 pb-20 px-6 md:px-16 lg:px-24 relative">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="mb-24">
          <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            className="cursor-grab active:cursor-grabbing group inline-block relative z-10 w-fit"
          >
            <h1 className="text-[11vw] md:text-[10vw] leading-[0.95] font-black tracking-tighter uppercase px-4 -mx-4 rounded-sm group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              {d.hero_title1}<br />
              {d.hero_title2}<br />
              {d.hero_title3}
            </h1>
          </motion.div>

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
      <ProjectCarousel dict={d} isDark={isDark} />

      {/* Education & Contact */}
      <section id="education" className="min-h-screen w-full snap-start flex flex-col md:flex-row bg-foreground text-background">

        {/* Left Side: Education & Certs */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:h-full flex flex-col justify-center px-6 py-24 md:py-0 md:px-16 lg:px-24 border-b md:border-b-0 md:border-r border-background/20 relative">

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
        <div id="contact" className="w-full md:w-1/2 min-h-[50vh] md:h-full flex flex-col justify-center px-6 pt-16 pb-24 md:py-0 md:px-16 lg:px-24">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">{d.nav_contact}</h2>
          <p className="text-lg mb-12 opacity-80 max-w-md leading-relaxed">
            {d.contact_desc}
          </p>

          <a href="mailto:danielvillarrealh@gmail.com" className="text-xl md:text-3xl font-bold underline decoration-2 underline-offset-8 mb-16 hover:opacity-50 transition-opacity">
            danielvillarrealh@gmail.com
          </a>

          <div className="flex gap-8 mb-auto">
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
