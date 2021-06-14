import React from 'react';

import PageTitle from '../components/Pagetitle/PageTitle';

const Contato = () => {
  return(
    <div>
      <PageTitle title="Contato"/>
      <div className="md:flex mt-20 mx-auto w-3/5 ">
        <div className="lg:w-1/2 ">
          <h2 className="font-bold uppercase tracking-wide text-lg lg:text-2xl marc">Dados</h2>
          <span className="block my-5 text-base lg:text-lg lg:text-2xl">Fone: +55 61 995115794</span>
          <span className="block mb-5 text-base lg:text-lg leading-8 w-80">Avenida Contorno - Quadra 89 Lote 5 Parque Estrela Dalva I - Luziânia - GO</span>
          <h2 className="font-bold uppercase tracking-wide text-lg lg:text-2xl marc">Redes Sociais</h2>
          <ul className="list">
            <li className="icon hover:border-gray-500">
              <a href="https://www.instagram.com/agropet_atacadaodosbichos/" target="_blank" 
              className= "block p-2.5 items-center justify-center">
                <img  className="my-auto" src = "/instagram.svg"  alt="Instagram Agropet"/>
              </a>
            </li>
            <li className="icon hover:border-gray-500">
              <a href="http://api.whatsapp.com/send?phone=++5561995115794" target="_blank" 
              className="block p-2.5">
                <img className="my-auto" src = "/whatsapp.svg"  alt="Instagram Agropet"/>
              </a>
            </li>
          </ul>
        </div>
        <div className=" md:pl-5 responsive">
          <img src="/pets.png" alt="Pets" />
        </div>
      </div>
      <div className="my-20 mx-auto w-3/5">
        <a target="_blank" href="https://www.google.com/maps/place/Agropet+Atacad%C3%A3o+dos+Bichos/@-16.2586871,-47.9187966,15z/data=!4m2!3m1!1s0x0:0xc52e5e40b9c24222?sa=X&ved=2ahUKEwih94igxI3xAhXyILkGHVZDBbgQ_BIwE3oECEEQBQ">
        <img src="/mapa.png"/>
        </a>
      </div>
    </div>
  )
}

export default Contato;