import React from 'react';
import Image from 'next/image';
import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';

const Sobre = () => {
    return (
        // Container principal
        <section id='sobre' className='w-full bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden'>

            {/* Detalhe de fundo */}
            <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>

                {/* Titulo da seção */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-2'>
                        Sobre mim
                    </h2>
                    <div className='w-16 h-1 bg-blue-500 mx-auto rounded-full'></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Coluna da Imagem */}
                    <div className="lg:col-span-5 flex justify-center">

                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-full lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl group border border-slate-800">

                            {/* Efeito de sobreposição de cor */}
                            <div className="absolute inset-0 bg-blue-600/10 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>

                            <Image
                                src='/images/foto-formatura.png'
                                alt='Formatura 2024'
                                fill
                                className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
                                sizes='(max-width: 768px) 288px, (max-width: 1024px) 320px, 400px'
                            />
                        </div>
                    </div>

                    {/* Coluna de texto */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left mt-8 lg:mt-0">
                        <h3 className="text-2xl font-bold text-blue-400">
                            Quem é Luan?
                        </h3>
                        <p className='text-gray-400 leading-relaxed text-base sm:text-lg'>
                            Sou um estudante do curso Superior de Licenciatura em Computação, no Instituto Federal de Tecnologia, Ciência e Inovação do Sertão Pernambucano (IFSertãoPE).
                        </p>
                        <p className='text-gray-400 leading-relaxed text-base sm:text-lg'>
                            Atualmente busco conhecimentos sobre a linguagem de programação C e o conjunto de práticas de Development and Operations (DevOps). Como hobbies, pratico Muay Thai e calistenia, toco violão e leio obras como as de Franz Kafka. 
                        </p>
                        
                        {/* Cards informativos */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left'>

                            {/* Card 01 */}
                            <div className='bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm'>
                                <FaCode className='text-blue-500 text-xl mb-2' />
                                <h4 className='font-semibold text-white text-xl mb-1'>Desenvolvimento</h4>
                                <p className='text-base text-gray-500'>Código limpo e focado em boas práticas</p>                       
                            </div>

                            {/* Card 02 */}
                            <div className='bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm'>
                                <FaRocket className='text-blue-500 text-xl mb-2' />
                                <h4 className='font-semibold text-white text-xl mb-1'>Objetivo</h4>
                                <p className='text-base text-gray-500'>Ajudar quem eu puder com os meus conhecimentos.</p>                       
                            </div>

                            {/* Card 03 */}
                            <div className='bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm'>
                                <FaGraduationCap className='text-blue-500 text-xl mb-2' />
                                <h4 className='font-semibold text-white text-xl mb-1'>Aprendizado</h4>
                                <p className='text-base text-gray-500'>Sempre aprendendo algo novo por dia. Scientia potentia est!</p>                       
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Sobre;