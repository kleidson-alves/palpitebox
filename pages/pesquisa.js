import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [nota, setNota] = useState(); 
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({ showCoupon: false,
  Cupom: ' ',
  Promo: ' '});

  const notas = [0,1,2,3,4,5];

  const validateForm = () => {
    if(name && email && whatsapp && nota){
      return true;
    }
    return false;
  }

  const save = async() => {
    if(validateForm()){
      try {
        const form = {
          Nome: name,
          Email: email,
          Whatsapp: whatsapp,
          Nota: parseInt(nota)
        }
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json();
      
      setSuccess(true);
      setRetorno(data);
      
    }catch(err){
      console.log(err); 
    }
  }
  else{
    alert('Todos os campos devem ser preenchidos');
  }
}
   
  return(
    <div className="my-10 text-center">
      <PageTitle title="Pesquisa"/>
      <h1 className="font-bold mb-4 text-2xl">Críticas e sugestões</h1>
      <p>O restaurante X sempre busca por atender melhor seus clientes.<br/>
      Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      {!success && <div className="my-5 mx-auto w-96 text-left">
        <label className="font-bold">Seu nome:</label>
        <input onChange={(v) => setName(v.target.value)} type="text" className="w-full block bg-blue-100 mb-5 p-2 rounded" placeholder="Nome"/>
        <label className="font-bold">Email:</label>
        <input onChange={(v) => setEmail(v.target.value)} type="text" className="w-full block bg-blue-100 mb-5 p-2 rounded" placeholder="Email"/>
        <label className="font-bold">Whatsapp:</label>
        <input onChange={(v) => setWhatsapp(v.target.value)} type="text" className="w-full block bg-blue-100 mb-5 p-2 rounded" placeholder="Whatsapp"/>
        <label className="font-bold">Nota:</label>
        <div className="flex p-6">
          {notas.map((nota)=> {
            return <label key={nota} className="w-1/6">{nota}<br/><input onChange={(evt) => setNota(evt.currentTarget.value)} type="radio" value={nota} name="Nota"/></label>
          })}
        </div>
        <label className="font-bold block">Sua crítica ou sugestão:</label>
        <input type="text" className="w-full block bg-blue-100 mb-5 p-2 rounded"/> 
        <button onClick={save} type="button" className="px-16 py-4 bg-blue-400 block mx-auto rounded-lg hover:shadow-lg hover:bg-blue-500">
          Dar opinião ou sugestão
        </button>
      </div>
      }
      {success && <div className ="my-5 mx-auto w-96">
          <div className=" mb-5 bg-blue-100 border-4 border-blue-400 h-20">
            <p className="p-6 text-blue-500" >Obrigado por contribuir com a pesquisa</p>
          </div>
          {retorno.showCoupon && 
              <div className="mx-auto mb-5  w-96 border p-4">
                <p className="text-lg mb-5" >Seu cupom: </p>
                <span className="font-bold text-3xl" >{retorno.Cupom}</span>
              </div>
          }
          {retorno.showCoupon && 
          <div className="mx-auto w-96 mb-5 border p-4">
            <span className="font-bold" >{retorno.Promo}</span>
          </div>
          }
          {retorno.showCoupon && 
          <div className="mx-auto w-96 border p-4">
            <span className="italic" >Tire um print ou foto da tela e apresente ao atendente</span>
          </div>
          }
      </div>
      }
    </div> 
  );
}

export default Pesquisa;