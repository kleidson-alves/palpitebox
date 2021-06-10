import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return(
    <React.Fragment>
      <div className="bg-gray-200 p-4">
        <div className="container mx-auto text-center bg-gray-200">
          <Link  href="/">
            <a><Image src="/logo-palpitebox.png" alt="PalpiteBox" width="144" height="120" /></a>
          </Link>
        </div>        
      </div>
      <div className="bg-gray-300 p-4 text-center">
            <Link href="/sobre">
              <a className="px-2 font-bold hover:underline">Sobre</a>
            </Link>
          <Link href='/contato'>
            <a className="px-2 font-bold hover:underline">Contato</a>
          </Link>
          <Link href="/pesquisa">
            <a className="px-2 font-bold hover:underline">Pesquisa</a>
          </Link>
        </div>  
    </React.Fragment>
  );
}

export default Header;