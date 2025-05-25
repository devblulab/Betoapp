import React from 'react';
import Head from 'next/head';

import Land from '@/components/home/land';
import Servicos from '@/components/home/servicos';
import Sobre from '@/components/home/sobre';


export default function Home() {
  return (
    <>
      <Head>
        <title>Despachante Beto Dheon | Documentação Veicular</title>
        <meta
          name="description"
          content="Despachante Beto Dheon - Soluções em documentação veicular no Brasil e no exterior. Atendimento ágil, digital e seguro!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/betologo.jpg" />
      </Head>

  
      <Land />
      <Servicos />
      <Sobre />
     
    </>
  );
}
