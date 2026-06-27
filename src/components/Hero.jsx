import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        // Container principal
        <section className='w-full min-h-screen bg-slate-950 text-white flex items-center pt-16 overflow-hidden relative'>
            
            {/* Efeito de luz de fundo (Glow/Blur) */}
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none'></div>

            {/* Container responsivo centralizado */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full z-10 py-12 md:py-0'>
                {/* Grid adaptável */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    
                    {/* Coluna da Esquerda: Textos e Botões */}
                    <div className='flex flex-col space-y-6 text-center md:text-left animate-fade-in'>
                        
                        {/* Saudação */}
                        <span className='text-blue-400 font-medium tracking-wider uppercase text-sm sm:text-base'>
                            Olá, eu sou
                        </span>
                        
                        {/* Nome principal com efeito de Gradiente */}
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white'>
                            Luan Estrela
                        </h1>
                        
                        {/* Subbtítulo */}
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                            Desenvolvedor Full-Stack
                        </h2>
                        
                        {/* Descrição */}
                        <p className='text-gray-400 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed'>
                            Estudante de Licenciatura em Computação, segundo período. Sempre visando aprender mais a cada dia! Tenho conhecimento em Python, C, HTML5, CSS3, JavaScript, Next, Git e Github.
                        </p>
                        
                        {/* Botões */}
                        <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4'>

                            {/* Botão Primário: Ver Projetos */}
                            <Link 
                                href='/projetos' 
                                className='w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors group'
                            >
                                Ver Projetos
                                <FaArrowRight className='ml-2 text-sm transition-transform group-hover:translate-x-1' />
                            </Link>

                            {/* Botão Secundário: Download CV */}
                            <a 
                                href='/curriculo.pdf' 
                                download='Luan_Estrela_CV.pdf'
                                className='w-full sm:w-auto inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-gray-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all backdrop-blur-sm'
                            >
                                <FaDownload className='mr-2 text-sm' />
                                Baixar currículo virtual
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Direita: Espaço para Foto ou Arte Abstrata */}
                    <div className='flex justify-center items-center relative'>

                        {/* Moldura geométrica */}
                        <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-3 border-dashed border-blue-800/80 flex items-center justify-center p-4 animate-[spin_60s_linear_infinite]'>

                            <div className='w-full h-full rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-slate-800'></div>

                        </div>
                        {/* Foto */}
                        <div className='absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center shadow-2xl'>
                            
                            <Image 
                                src='/images/fotoPerfil.png'
                                alt="Foto de Luan Estrela"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 336px"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;