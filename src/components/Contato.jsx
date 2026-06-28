import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contato = () => {
    return (
        <section id='contato' className='w-full bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden'>

            {/* Detalhe de fundo */}
            <div className='absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>

                {/* Cabeçalho da seção */}
                <div className='text-center mb-16'>

                    <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-2'>
                        Entre em Contato
                    </h2>

                    <div className='w-16 h-1 bg-blue-500 mx-auto rounded-full'></div>

                    <p className='text-gray-500 text-sm sm:text-base mt-4 max-w-md mx-auto'>

                        Tem alguma proposta, dúvida ou gostaria de trocar ideias sobre computação? Sinta-se à vontade para enviar uma mensagem!
                    </p>
                </div>

                {/* Grid principal */}
                <div className='lg:col-span-5 space-y-6'>

                    <h3 className='text-xl font-bold text-blue-400 mb-4 text-center lg:text-left'>
                        Informações diretas
                    </h3>

                    {/* Email */}
                    <div className='bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm hover:border-blue-500/30 transition-all'>
                    
                        <div className='w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0'>
                        
                            <FaEnvelope className='text-lg'/>
                        </div>

                        <div className='overflow-hidden'>
                            <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider'>E-mail</h4>

                            <a href="mailto:luanestrela.oficial@gmail.com" className='text-sm sm:text-base text-gray-300 hover:text-white transition-colors block truncate'>
                                luanestrela.oficial@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Localização */}
                    <div className='bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm hover:border-blue-500/30 transition-all'>
                    
                        <div className='w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0'>
                        
                            <FaMapMarkerAlt className='text-lg'/>
                        </div>

                        <div className='overflow-hidden'>
                            <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider'>Localização</h4>

                            <p className='text-sm sm:text-base text-gray-300'>
                                Petrolina - PE, Brazil
                            </p>

                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className='bg-slate-900/20 border border-slate-800/40 rounded-xl p-4 text-center lg:text-left space-y-3'>

                        <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider'>Conecte-se comigo</h4>

                        <div className='flex justify-center lg:justify-start gap-4'>

                                <a href="https://github.com/Luan-E" target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-300' aria-label='GitHub'>
                                <FaGithub className='text-xl' />
                                </a>

                                <a href="https://www.linkedin.com/in/luan-e" target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-300' aria-label='GitHub'>
                                <FaLinkedin className='text-xl' />
                                </a>
                        </div>
                    </div>
                </div>

                {/* Formulário de contato */}
                <div className='lg:col-spawn-7 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 backdrop-blue-sm'>
                    
                    <h3 className='text-xl font-bold text-blue-400 mb-6 text-center lg:text-left'>
                        Envie uma mensagem
                    </h3>

                    <form action="https://api.web3forms.com/submit" method="POST" className='space-y-5'>

                        <input type="hidden" name="access_key" value="b28d72d3-8e8f-456d-9d65-adb368e0b884" />

                        {/* Nome e email */}
                        <div className='grid grid-cols-1 sm:grid-cols gap-5'>

                            <div className='flex flex-col space-y-1.5'>
                                
                                <label htmlFor="name" className='text-xs font-medium text-gray-400'>Seu Nome</label>

                                <input 
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    placeholder='Ex: Clara Beatriz'
                                    className='w-full bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue transition-all duration-200'
                                />
                            </div>

                            <div className='flex flex-col space-y-1.5'>
                                
                                <label htmlFor="email" className='text-xs font-medium text-gray-400'>Seu E-mail</label>

                                <input 
                                    type="email"
                                    id='email'
                                    name='email'
                                    required
                                    placeholder='Ex: clarabeatriz@gmail.com'
                                    className='w-full bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue transition-all duration-200'
                                />
                            </div>
                        </div>

                        {/* Campo: assunto */}
                            <div className='flex flex-col space-y-1.5'>
                                
                                <label htmlFor="subject" className='text-xs font-medium text-gray-400'>Assunto</label>

                                <input 
                                    type="text"
                                    id='subject'
                                    name='subject'
                                    required
                                    placeholder='Ex: Oportunidade de projeto / dúvida'
                                    className='w-full bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue transition-all duration-200'
                                />
                            </div>

                            <div className='flex flex-col space-y-1.5'>
                                
                                <label htmlFor="message" className='text-xs font-medium text-gray-400'>Mensagem</label>

                                <textarea  
                                    id='message'
                                    name='message'
                                    rows={5}
                                    required
                                    placeholder='Escreva aqui sua mensagem detalhada.'
                                    className='w-full bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none'
                                >
                                </textarea>
                            </div>

                            {/* Botão de envio */}
                            <button
                                type='submit'
                                className='w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300 active:scale-[0.98]'
                            >
                                Enviar mensagem
                            </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contato