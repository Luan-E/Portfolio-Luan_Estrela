import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre'
import Projetos from '@/components/Projetos'

export default function Home() {
  return (
    // 2. Alteração: Wrapper principal com fundo escuro para manter a identidade visual
    <main className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      
  
      <Navbar />
      
      <Hero />
      
      <Sobre />

      <Projetos />
      {/* Futuras seções do seu portfólio entrarão aqui embaixo, como: */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}

    </main>
  );
}