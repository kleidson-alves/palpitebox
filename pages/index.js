import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle';


const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () =>{
  const {data, error} = useSWR('/api/get-promo', fetcher);
  return (
    <div className='my-12 text-center'>
      <PageTitle title="Home"/>
      <p>O restaurante X sempre busca por atender melhor seus clientes.<br/>
      Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      <div className='text-center my-12'>
        <Link href="/pesquisa">
          <a className="px-16 py-4 bg-blue-400 rounded-lg hover:shadow-lg hover:bg-blue-500">Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && <p>{data.message}</p>}
    </div>
  )
}

export default Index;