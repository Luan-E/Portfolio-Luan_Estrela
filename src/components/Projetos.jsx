import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projetos = () => {
    // 1. Array de objetos contendo os dados dos seus projetos para fácil manutenção
    const projectsList = [
        {
            id: 1,
            title: "Meu Portfólio Tech",
            description: "Portfólio moderno desenvolvido para apresentar meus projetos e habilidades. Conta com design responsivo, efeitos de vidro fosco (glassmorphism) e otimização de performance.",
            tags: ["Next.js", "React", "Tailwind CSS", "Git"],
            image: "/images/projeto-portfolio.png", // Você criará/colocará essa imagem depois
            github: "https://github.com/seu-usuario/seu-repositorio",
            deploy: "#"
        },
        {
            id: 2,
            title: "IA: Determinação de scores",
            description: "Usando Python, é modelada uma inteligência artificial usando um banco de dados e o framework SciKit-Learn.",
            tags: ["Python", "SciKit-Learn", "Pandas", "Inteligência Artificial"],
            //imagem a colocar
            github: "https://github.com/Luan-E/Inteligencia-artificial",
            deploy: "#"
        }

    ];

    return (
        <section id="projetos" className='w-full bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden'>
            
            {/* Efeito de luz */}
            <div className='absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>
                
                {/* Cabeçalho da seção */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-2'>
                        Projetos em Destaque
                    </h2>
                    <div className='w-16 h-1 bg-blue-500 mx-auto rounded-full'></div>
                    <p className='text-gray-500 text-sm sm:text-base mt-4 max-w-md mx-auto'>
                        Uma seleção dos principais trabalhos, laboratórios e aplicações que desenvolvi.
                    </p>
                </div>

                {/* Grid de Cards Responsivo */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectsList.map((project) => (
                        
                        // Card Individual com efeito de escala suave e borda iluminada no hover
                        <div 
                            key={project.id} 
                            className='bg-slate-900/40 rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col group hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 backdrop-blur-sm'
                        >
                            
                            {/* Container da Imagem do Projeto */}
                            <div className='relative h-48 w-full overflow-hidden bg-slate-950 flex items-center justify-center'>
                               
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10'></div>
                                
                                <Image 
                                    // PREENCHER
                                />
                                <FaCode className='text-slate-800 text-6xl absolute z-0' />
                            </div>

                            {/* Conteúdo do Card (Textos e Tags) */}
                            <div className='p-6 flex flex-col flex-grow space-y-4'>
                                <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                                    {project.title}
                                </h3>
                                
                                <p className='text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3'>
                                    {project.description}
                                </p>

                                {/* 4. Renderização das Tecnologias (Tags) */}
                                <div className='flex flex-wrap gap-2 pt-2'>
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className='bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-md'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Botões */}
                                <div className='flex items-center justify-between pt-4 border-t border-slate-800/60 mt-auto'>
                                    <a 
                                        href={project.github} 
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center text-sm text-gray-400 hover:text-white font-medium transition-colors gap-2'
                                    >
                                        <FaGithub className='text-lg' />
                                        Código
                                    </a>

                                    {project.deploy && (
                                        <a 
                                            href={project.deploy} 
                                            target='_blank' 
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors gap-2'
                                        >
                                            Demo
                                            <FaExternalLinkAlt className='text-xs' />
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projetos;