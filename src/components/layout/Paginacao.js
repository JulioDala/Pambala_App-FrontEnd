import React from 'react';
import './Paginacao.css'

const Paginacao = ( { pages, setCurrentePaginas}) => {
  return (
    <div>
    {Array.from(Array(pages), (item, index) => {
      return <button className='botao' value={index} onClick={ (e) => setCurrentePaginas(Number(e.target.value)) }>{index + 1}</button>
    } )}
  </div>
  )
};

export default Paginacao;
