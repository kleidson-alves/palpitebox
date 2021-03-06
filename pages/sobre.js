import React from 'react';
import PageTitle from '../components/Pagetitle/PageTitle';



const Sobre = () =>{
  return (
    <div>
      <PageTitle title="Sobre"/>
      <div className="mt-20 mx-auto md:flex w-3/5">
      <div className="md:w-5/12 responsive-top">
          <img  src="/agropet-sobre.png" alt="Agropet" />
        </div>
        <div className="md:w-7/12">
          <h2 className="font-bold text-2xl marc">História e Objetivos</h2>
          <p className="md:w-10/12 mt-8 md:text-lg">
            Os amantes de pets têm o mesmo objetivo: dar ao seu pet o que há de melhor. 
            Com esse pensamento, fundamos a Agropet Atacadão dos Bichos, um lugar onde 
            poderá encontrar tudo o que seu pet precisa e com foco na qualidade do produto,
            pois eles merecem ser tratados bem.
          </p>
        </div>
        <div className="md:w-5/12 responsive">
          <img  src="/agropet-sobre.png" alt="Agropet" />
        </div>
      </div>
      <div className="my-7 md:my-20 mx-auto md:flex w-3/5">
        <div className="md:w-7/12 md:pr-20 responsive" >
          <img src="/pets-sobre.png" alt="cachorro coelho e canário"/>
        </div>
        <div className="md:w-5/12">
          <h2 className="font-bold text-2xl marc">Produtos</h2>
          <p className="mt-8 text-lg" >Encontre com a gente o que o seu pet precisa:</p>
          <ul className= "pl-5 list-disc mt-5 text-lg leading-10 uppercase">
            <li>Ração</li>  
            <li>Petiscos</li>
            <li>Brinquedos</li>
            <li>Remédios e</li>
            <li>Acessórios</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sobre;