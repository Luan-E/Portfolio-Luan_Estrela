import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      {/* 1. Renderiza Navbar no topo */}
      <Navbar/>

      <main className="pt-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800">
          Olá, eu sou Luan Estrela!
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Bem-vindo ao meu portfólio. Desenvolvedor Full Stack em construção!
        </p>
        
        {/* Resto das suas seções aqui (Hero, Sobre, etc) */}
      </main>
    </>
  );
}