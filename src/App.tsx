/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ArrowLeft, 
  Info, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  LayoutGrid,
  Map as MapIcon,
  Activity,
  Heart,
  Navigation,
  Globe,
  Star,
  Zap,
  Users
} from 'lucide-react';
import { protocols, Protocol, clinicalDomains } from './data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function App() {
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
  const [detailMode, setDetailMode] = useState<'protocol' | 'milestone'>('protocol');
  const [viewMode, setViewMode] = useState<'grid' | 'journey'>('grid');
  const [persona, setPersona] = useState<string | null>(null);

  const handleNextProtocol = () => {
    if (!selectedProtocol) return;
    const currentIndex = protocols.findIndex(p => p.id === selectedProtocol.id);
    const nextIndex = (currentIndex + 1) % protocols.length;
    setSelectedProtocol(protocols[nextIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const personas = [
    { id: 'newly', label: 'Newly Diagnosed', icon: Sparkles },
    { id: 'longterm', label: 'Long-term Patient', icon: Activity },
    { id: 'caregiver', label: 'Caregiver', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#fffdfa] text-slate-900 font-sans selection:bg-indigo-100 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-100/40 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-amber-100/30 rounded-full blur-[80px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setSelectedProtocol(null)}>
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-1 shadow-sm group-hover:rotate-3 transition-transform overflow-hidden">
              <img 
                src="https://arthritispatient.ca/wp-content/uploads/2018/04/logo.png" 
                alt="CAPA Logo" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-slate-800 font-cute">Good Care Checklist</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Equity Tag */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border-2 border-amber-100 text-amber-700 shadow-sm animate-bounce-subtle">
              <Globe size={16} className="animate-spin-slow" />
              <span className="text-xs font-bold font-cute">Equity & Accessibility First</span>
            </div>

            {!selectedProtocol && (
              <div className="hidden md:flex bg-slate-100/50 p-1 rounded-2xl border border-slate-200/30 backdrop-blur-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
                    viewMode === 'grid' ? "bg-white shadow-md text-indigo-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <LayoutGrid size={16} /> Guide
                </button>
                <button 
                  onClick={() => setViewMode('journey')}
                  className={cn(
                    "px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
                    viewMode === 'journey' ? "bg-white shadow-md text-indigo-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <MapIcon size={16} /> Journey
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <AnimatePresence mode="wait">
          {!selectedProtocol ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              {/* Hero Section */}
              <section className="max-w-4xl mx-auto text-center space-y-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95] font-cute">
                    Your Path to <br />
                    <span className="relative inline-block mt-2">
                      <span className="relative z-10 text-indigo-600">Better Care</span>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute -bottom-2 left-0 h-4 bg-indigo-100 -z-0 rounded-full" 
                      />
                    </span>
                  </h2>
                </motion.div>
                <p className="text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium font-cute">
                  A streamlined guide built to help you navigate the complexities of psoriatic disease with confidence and clarity.
                </p>

                {/* Persona Selector - Only visible on Guide view */}
                {viewMode === 'grid' && (
                  <div className="pt-12 space-y-6">
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-px w-12 bg-slate-200" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">I am a...</p>
                      <div className="h-px w-12 bg-slate-200" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                      {personas.map((p, idx) => {
                        const Icon = p.icon;
                        return (
                          <motion.button
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1), type: "spring" }}
                            onClick={() => setPersona(persona === p.id ? null : p.id)}
                            className={cn(
                              "group flex items-center gap-3 px-8 py-4 rounded-[2rem] border-4 transition-all duration-500 font-bold text-lg relative overflow-hidden",
                              persona === p.id 
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105" 
                                : "bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/30"
                            )}
                          >
                            <Icon size={22} className={cn("transition-transform group-hover:scale-125", persona === p.id ? "animate-bounce" : "")} />
                            {p.label}
                            {persona === p.id && (
                              <motion.div 
                                layoutId="active-persona"
                                className="absolute inset-0 bg-white/10 pointer-events-none"
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>

              {/* View Modes */}
              <div className="relative">
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {protocols.map((protocol, index) => {
                      const isHighlighted = 
                        (persona === 'newly' && ['diagnosis', 'treatment'].includes(protocol.id)) ||
                        (persona === 'longterm' && ['management', 'holistic'].includes(protocol.id)) ||
                        (persona === 'caregiver' && ['decision', 'psychosocial'].includes(protocol.id));
                      
                      return (
                        <ProtocolCard 
                          key={protocol.id} 
                          protocol={protocol} 
                          index={index}
                          isHighlighted={isHighlighted}
                          onClick={() => {
                            setSelectedProtocol(protocol);
                            setDetailMode('protocol');
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <JourneyView onSelect={(p) => {
                    setSelectedProtocol(p);
                    setDetailMode('milestone');
                  }} />
                )}
              </div>

              {/* Equity & Accessibility Section */}
              <section className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border-2 border-slate-50 shadow-sm relative overflow-hidden group cute-shadow">
                  <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                      <Globe size={32} />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-800 font-cute">Equity & Accessibility</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        We are committed to making good care accessible to everyone. This includes plain language, cultural sensitivity, and tools for navigating coverage barriers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Clinical Domains Section */}
              {viewMode === 'grid' && (
                <section className="max-w-6xl mx-auto space-y-12">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                      <Activity size={12} /> Clinical Context
                    </div>
                    <h3 className="text-4xl font-bold text-slate-800 tracking-tight font-cute">Clinical Manifestations</h3>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto text-lg">Psoriatic disease can present in many ways. Explore the different clinical domains below.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clinicalDomains.map((domain, idx) => {
                      const DomainIcon = domain.icon;
                      return (
                        <motion.a 
                          key={domain.name} 
                          href={domain.resourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className="group relative p-8 rounded-[2.5rem] bg-white border-2 border-slate-50 shadow-sm hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 cute-shadow"
                        >
                          {/* Number Badge */}
                          <div className="absolute top-6 right-8 text-[10px] font-black text-slate-100 group-hover:text-indigo-100 transition-colors">
                            0{idx + 1}
                          </div>

                          {/* Icon Container */}
                          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300 shadow-inner">
                            <DomainIcon size={28} />
                          </div>

                          {/* Content */}
                          <div className="space-y-2">
                            <h4 className="text-lg font-bold text-slate-800 leading-tight font-cute">{domain.name}</h4>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                              {domain.desc}
                            </p>
                          </div>

                          {/* Action Hint */}
                          <div className="pt-2 flex items-center gap-2 text-indigo-500 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>View Resource</span>
                            <ArrowRight size={12} />
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </section>
              )}
            </motion.div>
          ) : detailMode === 'protocol' ? (
            <ProtocolDetail 
              protocol={selectedProtocol} 
              onBack={() => setSelectedProtocol(null)} 
              onNext={
                protocols.findIndex(p => p.id === selectedProtocol.id) < protocols.length - 1 
                  ? handleNextProtocol 
                  : undefined
              }
            />
          ) : (
            <MilestoneDetail 
              protocol={selectedProtocol} 
              onBack={() => setSelectedProtocol(null)} 
              onNext={
                protocols.findIndex(p => p.id === selectedProtocol.id) < protocols.length - 1 
                  ? handleNextProtocol 
                  : undefined
              }
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="py-16 border-t bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center p-1 shadow-sm overflow-hidden">
              <img 
                src="https://arthritispatient.ca/wp-content/uploads/2018/04/logo.png" 
                alt="CAPA Logo" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-800">Good Care Checklist</span>
          </div>
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em] pt-8">© 2026 Good Care Checklist</p>
        </div>
      </footer>
    </div>
  );
}

interface ProtocolCardProps {
  key?: React.Key;
  protocol: Protocol;
  index: number;
  isHighlighted?: boolean;
  onClick: () => void;
}

function ProtocolCard({ protocol, index, isHighlighted, onClick }: ProtocolCardProps) {
  const Icon = protocol.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isHighlighted ? 1.02 : 1,
      }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer transition-all duration-500",
        isHighlighted ? "ring-4 ring-indigo-500/20 rounded-[2.5rem]" : ""
      )}
    >
      <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white rounded-[3rem] cute-shadow cute-shadow-hover">
        <div className={cn("h-4 w-full", protocol.color)} />
        <CardHeader className="p-10 pb-4">
          <div className={cn(
            "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl shadow-indigo-100/30", 
            protocol.color, 
            protocol.textColor
          )}>
            <Icon size={40} />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors font-cute">{protocol.title}</CardTitle>
          <CardDescription className="text-slate-500 text-lg leading-relaxed font-medium mt-4 line-clamp-3">{protocol.shortDesc}</CardDescription>
        </CardHeader>
        <CardContent className="p-10 pt-0 flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce" />
            <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-500 transition-colors uppercase tracking-[0.2em]">Explore Guide</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-sm">
            <ChevronRight size={24} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function JourneyView({ onSelect }: { onSelect: (p: Protocol) => void }) {
  return (
    <div className="relative py-12 max-w-4xl mx-auto">
      {/* Vertical Journey Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-100 via-purple-100 to-rose-100 -translate-x-1/2 rounded-full hidden md:block" />
      
      <div className="space-y-12 relative z-10">
        {protocols.map((protocol, index) => {
          const Icon = protocol.icon;
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Content Card */}
              <div className={cn(
                "flex-1 w-full md:w-auto",
                isEven ? "md:text-right" : "md:text-left"
              )}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  onClick={() => onSelect(protocol)}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-indigo-100/20 border-2 border-slate-50 cursor-pointer group cute-shadow"
                >
                  <div className={cn(
                    "flex items-center gap-4 mb-4",
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  )}>
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center shadow-md",
                      protocol.color,
                      protocol.textColor
                    )}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 font-cute group-hover:text-indigo-600 transition-colors">{protocol.title}</h3>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{protocol.shortDesc}</p>
                  <div className={cn(
                    "mt-4 flex items-center gap-2",
                    isEven ? "md:justify-end" : "md:justify-start"
                  )}>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Explore Step {index + 1}</span>
                    <ChevronRight size={14} className="text-indigo-500" />
                  </div>
                </motion.div>
              </div>

              {/* Center Node */}
              <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
                <div className="absolute inset-0 bg-white rounded-full border-4 border-indigo-200 shadow-lg z-10" />
                <span className="relative z-20 font-bold text-indigo-600 font-cute">{index + 1}</span>
                <div className="absolute w-24 h-px bg-indigo-100 -z-0 hidden md:block" />
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function ProtocolDetail({ protocol, onBack, onNext }: { protocol: Protocol, onBack: () => void, onNext?: () => void }) {
  const Icon = protocol.icon;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
      className="max-w-5xl mx-auto space-y-12"
    >
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="hover:bg-slate-100 flex items-center justify-center p-2 hover:text-indigo-700 rounded-full transition-all duration-300 font-bold"
        >
          <ArrowLeft size={18} className="mr-2" /> Back
        </button>
        <div className="flex justify-center gap-1.5 flex-1">
          {protocols.map((p) => (
            <motion.div 
              key={p.id} 
              layoutId={`dot-${p.id}`}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                p.id === protocol.id ? "w-8 bg-indigo-600" : "w-2 bg-slate-200"
              )} 
            />
          ))}
        </div>
        <div className="w-20" />
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className={cn("w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-lg shrink-0", protocol.color, protocol.textColor)}
        >
          <Icon size={40} strokeWidth={2.5} />
        </motion.div>
        
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-cute">{protocol.title}</h2>
            <p className="text-2xl text-slate-500 font-cute font-medium">{protocol.shortDesc}</p>
          </div>
          
          <div className="p-8 bg-indigo-50 border-2 border-indigo-100/50 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-2 text-indigo-600 mb-3 relative z-10">
              <Zap size={18} />
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Why It Matters For You</h5>
            </div>
            <p className="text-lg font-medium text-slate-800 leading-relaxed relative z-10">
              {protocol.whyItMatters}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
        {protocol.sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col bg-white rounded-[2.5rem] border-2 border-slate-100 hover:border-indigo-200 shadow-xl shadow-slate-200/50 hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden group/card relative opacity-75 hover:opacity-100"
          >
            <div className="h-1.5 w-full bg-slate-100 group-hover/card:bg-indigo-100 transition-colors">
              <div className="h-full bg-indigo-500 transition-all duration-700 w-1/3 group-hover/card:w-2/3" />
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold text-sm transition-colors group-hover/card:bg-indigo-500 group-hover/card:text-white">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-cute transition-colors group-hover/card:text-indigo-900">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{section.description}</p>
              </div>
              
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Next Steps</h5>
                <ul className="space-y-3">
                  {section.checkpoints.map((cp, cpIdx) => (
                     <li key={cpIdx} className="flex items-start gap-3">
                       <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                       <span className="text-sm text-slate-600 leading-relaxed font-medium">{cp}</span>
                     </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-6 pt-4">
                <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-4 shadow-inner transition-colors group-hover/card:bg-rose-100/50">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-sm shrink-0 mt-1">
                    <Heart size={14} fill="currentColor" />
                  </div>
                  <div className="space-y-1">
                     <h5 className="text-[10px] uppercase tracking-widest font-bold text-rose-500">Community Insight</h5>
                     <p className="text-sm font-medium text-slate-700 italic leading-relaxed">"{section.patientTip}"</p>
                  </div>
                </div>

                {(section as any).integratedLink && (
                  <div className="pt-6 border-t border-slate-100">
                    <a
                      href={(section as any).integratedLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-300 shadow-sm transition-all group/btn"
                    >
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover/btn:bg-indigo-50 transition-colors">
                            <Globe size={14} />
                         </div>
                         <span className="text-sm font-bold text-slate-700 group-hover/btn:text-indigo-700">{(section as any).integratedLink.title}</span>
                       </div>
                       <ArrowRight size={16} className="text-slate-400 group-hover/btn:text-indigo-600 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-8 border-t border-slate-100 pb-12">
        {onNext ? (
          <button 
            onClick={onNext}
            className="flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-8 font-bold shadow-xl shadow-indigo-200 hover:-translate-y-1 transition-all text-lg w-full md:w-auto"
          >
            Continue Journey <ArrowRight size={20} className="ml-2" />
          </button>
        ) : (
          <button 
            onClick={onBack}
            className="flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-12 py-8 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg w-full md:w-auto"
          >
            Review Complete <CheckCircle2 size={20} className="ml-2 text-indigo-600" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

function MilestoneDetail({ protocol, onBack, onNext }: { protocol: Protocol, onBack: () => void, onNext?: () => void }) {
  const Icon = protocol.icon;
  const milestone = protocol.milestone;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-12 pb-24"
    >
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="hover:bg-slate-100 flex items-center justify-center p-2 hover:text-indigo-700 rounded-full transition-all duration-300 font-bold"
        >
          <ArrowLeft size={18} className="mr-2" /> Back
        </button>
      </div>

      <div className="text-center space-y-6">
         <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={cn("w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center shadow-lg", protocol.color, protocol.textColor)}
          >
            <Icon size={32} />
          </motion.div>
          
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-indigo-500">Journey Milestone</h5>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight font-cute">{protocol.title}</h2>
          </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <motion.div variants={itemVariants} className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
            <h4 className="text-indigo-800 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2"><Sparkles size={14}/> Core Summary</h4>
            <p className="text-slate-700 font-medium text-lg leading-relaxed">{milestone.summary}</p>
         </motion.div>
         <motion.div variants={itemVariants} className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
            <h4 className="text-amber-800 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2"><Activity size={14}/> What To Expect</h4>
            <p className="text-slate-700 font-medium text-lg leading-relaxed">{milestone.expectation}</p>
         </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-6">
        {(protocol.milestone as any).doctorDiscussionGuide && (
          <div className="bg-rose-50 border-2 border-rose-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
             <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-200 text-rose-600 flex items-center justify-center font-bold shadow-sm">
                   <Heart size={20} />
                </div>
                <div>
                   <h4 className="text-rose-600 font-bold uppercase tracking-widest text-xs">Talking to your doctor</h4>
                   <h3 className="text-2xl font-bold font-cute text-slate-800">Discussion Guide</h3>
                </div>
             </div>

             <div className="grid md:grid-cols-3 gap-6 relative z-10">
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100/50">
                 <h5 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                    <CheckCircle2 size={18} className="text-indigo-500" /> Questions to Ask
                 </h5>
                 <ul className="space-y-3">
                   {(protocol.milestone as any).doctorDiscussionGuide.questionsToAsk.map((q: string, i: number) => (
                     <li key={i} className="text-md font-medium text-slate-600 border-l-2 border-indigo-200 pl-3 py-1">{q}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100/50">
                 <h5 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                    <CheckCircle2 size={18} className="text-emerald-500" /> What to Bring
                 </h5>
                 <ul className="space-y-3">
                   {(protocol.milestone as any).doctorDiscussionGuide.whatToBring.map((q: string, i: number) => (
                     <li key={i} className="text-md font-medium text-slate-600 flex gap-2">
                       <span className="text-slate-300 mt-1">•</span> <span>{q}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100/50">
                 <h5 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                    <Zap size={18} className="text-rose-500" /> Mention Red Flags
                 </h5>
                 <ul className="space-y-3">
                   {(protocol.milestone as any).doctorDiscussionGuide.redFlagsToMention.map((q: string, i: number) => (
                     <li key={i} className="text-md font-medium text-slate-600 flex gap-2">
                       <span className="text-rose-400 font-bold mt-1">!</span> <span className="text-rose-900">{q}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
           <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">Additional Support</h4>
           <p className="text-2xl font-bold font-cute mb-8 text-slate-800 relative z-10">Explore tools, worksheets, and community links to help you manage this step.</p>
           
           <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {(protocol.milestone as any).journeyAids?.map((aid: any, i: number) => (
                <a
                  key={i}
                  href={aid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-300 shadow-sm transition-all"
                 >
                   <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-600 shadow-sm border border-slate-100">
                        {aid.type}
                      </span>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors group-hover:translate-x-1" />
                   </div>
                   <div>
                     <h5 className="font-bold text-slate-800 mb-2">{aid.title}</h5>
                     <p className="text-sm text-slate-600 leading-relaxed font-medium">{aid.description}</p>
                   </div>
                </a>
              ))}
           </div>
        </div>
      </motion.div>

      <div className="flex justify-center pt-8">
        {onNext ? (
          <button 
            onClick={onNext}
            className="flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 px-10 py-6 font-bold transition-all text-lg w-full md:w-auto"
          >
            Succeeding Milestone <ArrowRight size={20} className="ml-2 text-slate-400" />
          </button>
        ) : (
          <button 
            onClick={onBack}
            className="flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-10 py-6 font-bold shadow-lg hover:shadow-xl transition-all text-lg w-full md:w-auto"
          >
            Review Complete <CheckCircle2 size={20} className="ml-2 text-indigo-600" />
          </button>
        )}
      </div>
    </motion.div>
  );
}