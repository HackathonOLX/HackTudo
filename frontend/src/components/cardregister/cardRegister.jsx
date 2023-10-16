import { React } from 'react';
import { Overlay, CardContainer } from './styles';
import X from "../../images/x.png";

export const Card = ({ isVisible, toggleCard }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={toggleCard} />
      <CardContainer isVisible={isVisible}>
        <div className='top-card'>
          <button onClick={toggleCard} className='btn-close'><img src={X}></img></button>
        </div>
        <h1>Cadastrar anúncio</h1>
        <div className='section'>
          <div className='name'>
            <p>Nome: </p>
            <input type='text'></input>
          </div>
          <div className='price'>
            <p>Preço: </p>
            <input type='text'></input>
          </div>
        </div>
        <div className='advert-image'>
          <input type='file'></input>
        </div>
        <div className='buttons'>
          <button>Cadastrar</button>
          <button onClick={toggleCard}>Cancelar</button>
        </div>
      </CardContainer>
    </>
  );
};