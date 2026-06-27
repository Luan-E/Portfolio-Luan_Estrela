"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Inicial', href: '/' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Habilidades', href: '#habilidades' }, 
        { name: 'Contato', href: '#contato' }
    ];

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-slate-950/80 backdrop-blur-md shadow-md border-b border-slate-800/50' 
                : 'bg-transparent shadow-none'
        }`}>

            {/* Container principal */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
                <div className='flex items-center justify-between h-16'>
                    
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Link href='/' className='text-xl font-bold tracking-wider hover:text-blue-400 transition-colors'>
                            Luan Estrela
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <div className='flex space-x-4'>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            isActive 
                                                ? 'text-blue-400 font-semibold border-b-2 border-blue-400 rounded-none' 
                                                : 'text-gray-300 hover:text-blue-400'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    
                        {/* Ícones sociais desktop */}
                        <div className='flex items-center space-x-4 border-l border-slate-700 pl-4'>
                            <a href="https://github.com/Luan-E" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/luan-e" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="mailto:luanestrela.oficial@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="E-mail">
                                <FaEnvelope className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Botão do Menu Mobile */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors'
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menu principal</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden grid transition-all duration-300 ease-in-out ${
                isOpen 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}>

                <div className='overflow-hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 shadow-lg'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        isActive 
                                            ? 'text-blue-400 bg-slate-800 font-semibold border-l-4 border-blue-400 rounded-l-none' 
                                            : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    
                    {/* Ícones sociais mobile */}
                    <div className='pt-4 pb-4 border-t border-slate-800 flex justify-center space-x-6'>
                        <a href="https://github.com/Luan-E" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/luan-e" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="mailto:luanestrela.oficial@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="E-mail">
                            <FaEnvelope className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;