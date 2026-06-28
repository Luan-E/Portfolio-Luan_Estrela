import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre'
import Projetos from '@/components/Projetos'
import Habilidades from '@/components/Habilidades'
import Contato from '@/components/Contato'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      
      <Navbar />
      
      <Hero />
      
      <Sobre />

      <Projetos />
 
      <Habilidades />

      <Contato />
      
    </main>
  );
}