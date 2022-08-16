import { useState, useEffect } from 'react';

import { ButtonBuy, OfferCard, StyledOffer, SubTitle, Title, Titles, Wrapper } from './styled';

import { BsArrowRightShort } from 'react-icons/bs';

export default function Offers() {
  const [offers, setOffers] = useState([]);
  
  const url = 'https://gist.githubusercontent.com/lucianosants/cd3c8761fad5d441185cfa7365553e4b/raw/';
  useEffect(() => {
      fetch(url, {
          method: 'GET'
      }).then(
          res => res.json()
      ).then(
          data => setOffers(data)
      )
      .catch((e) => console.log(e));
  }, []);

  return (
    <Wrapper>
      <Titles>
        <SubTitle>Conheça nossas</SubTitle>
        <Title>Ofertas</Title>
      </Titles>

      <StyledOffer>
        {offers.map((offer, index) => {
          return (
            <OfferCard key={index}>
              <figure>
                <img src={offer.img} alt={offer.name} />
              </figure>

              <div>
                <div>
                    <h2>{offer.name}</h2>
                    <p>R$ {offer.price}</p>
                </div>

                <div className='button__area'>
                    <ButtonBuy href="/">Comprar <BsArrowRightShort size={30}/> </ButtonBuy>
                </div>
                  
              </div>
            </OfferCard>
          )
        })}
      </StyledOffer>
    </Wrapper>
  )
};