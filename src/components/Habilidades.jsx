import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaLinux
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiPython
} from 'react-icons/si';

const Habilidades = () => {
    // Organização em categorias
    const categoriaHab = [
        {
            title: "Linguagens & Fundamentos",
            habilidades: [
                {
                    name: "Linguagem C",
                    icon: (
                        <div className='w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-mono'>
                            C
                        </div>
                    )
                },

                { name: "Python", icon: <SiPython className='text-yellow-400' />},

                { name: "Git & Github", icon: <FaGitAlt className='text-orange-600' />},
               
                { name: "Lógica & Algoritmos", icon: <div className='text-purple-400 font-mono text-sm font-bold'>&lt;&gt;</div>},
            ]
        },
        {
            title: "Front-end & Core",
            habilidades: [

                { name: "Next.js", icon: <SiNextdotjs className='text-white' />},

                { name: "JavaScript", icon: <FaJsSquare className='text-yellow-400' />},

                { name: "Tailwind CSS", icon: <SiTailwindcss className='text-cyan-400' />},

                { name: "HTML5 / CSS3", icon: <div className='flex gap-1'> <FaHtml5 className='text-orange-500'/> <FaCss3Alt className='text-blue-500'/> </div>},

            ]
        },
        {
            title: "DevOps & Infraestrutura",
            habilidades: [
                { name: "Linux / Terminal", icon: <FaLinux className="text-gray-300" /> }
            ]
        }
    ];

    return (
        <section id='habilidades' className='w-full bg-slate-900 text-white py-20 lg:py-38 relative overflow-hidden'>

            {/* Detalhe luminoso de fundo */}
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>

                {/* Cabeçalho da seção */}
                <div className='text-center mb-16'>
                    
                    <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-2'>
                        Minhas Habilidades
                    </h2>

                    <div className='w-16 h-1 bg-blue-500 mx-auto rounded-full'></div>

                    <p className='As tecnologias, ferramentas e conceitos que utilizo no meu dia a dia para construir soluções.'>
                    </p>
                </div>
            </div>

                {/* Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                    {categoriaHab.map((categoria, categoriaIndex) => (

                        //Card da categoria
                        <div
                            key={categoriaIndex}
                            className='bg-slate-950/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm flex flex-col'
                        >

                            <h3 className='text-ls font-bold text-blue-400 mb-6 border-b border-slate-800/80 pb-3'>
                                {categoria.title}
                            </h3>

                            {/* Lista de habilidades da categoria */}
                            <div className="flex flex-col space-y-4">
                                {categoria.habilidades.map((habilidade, habilidadeIndex) => (
                                    // Item de Habilidade
                                    <div
                                        key={habilidadeIndex}

                                        className='flex items-center gap-4 bg-slate-900/50 border border-slate-800/40 rounded-xl p-3 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 group'
                                    >

                                        {/* Ícone com animação */}
                                        <div className='text-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-8 h-8'>

                                        {habilidade.icon}
                                        </div> 

                                        {/* Nome da tag */}
                                        <span className='text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors'>
                                            {habilidade.name}
                                        </span>

                                    </div>
                                ))}

            
                            </div>
                        </div>
                    ))}

                </div>

        </section>
    )
}


export default Habilidades;