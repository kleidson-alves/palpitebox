import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return(
    <div className="bg-gray-700">
      <div className="container mx-auto text-center text-white text-bold p-4">
        <p className = "inline">Projeto desenvolvido por: Kleidson Alves /</p> {' '}
        <a className = "hover:underline" href="https://www.linkedin.com/in/kleidson-alves/" target="_blank">LinkedIn</a> {' '}/ 
        <a className = "hover:underline" href="https://github.com/kleidson-alves" target="_blank">Github</a>
        <div className="mt-3">
          <img className="inline mx-auto p-4" src="/logo_semana_fsm.png" width="214" height="75"/>
          <img className="inline mx-auto p-4" src="/logo_devpleno.png" width="240" height="60"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;