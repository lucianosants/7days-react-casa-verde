import { ImageContainer, MainContent, Wrapper } from './styled';

import image from '../../assets/image-section.png';

export default function HowTake() {
  return (
    <Wrapper>
        <ImageContainer>
            <figure>
                <img src={image} alt="imagem de uma planta." />
            </figure>
        </ImageContainer>

        <div className='content__texts'>
            <h4>Como conseguir</h4>
            <h2>minha planta</h2>
            <MainContent>
                <h4><span className='bubble__rounded'></span> Escolha suas plantas</h4>
                <h4><span className='bubble__rounded'></span> Faça um pedido</h4>
                <h4><span className='bubble__rounded'></span> Aguarde na sua casa</h4>
            </MainContent>
        </div>
    </Wrapper>
  )
};