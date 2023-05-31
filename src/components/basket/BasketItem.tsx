import { FC } from 'react'
import { BasketItemsType } from './Basket'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { styled } from '@mui/material'

interface PropsBasketItems {
  item: BasketItemsType
}

export const BasketItem: FC<PropsBasketItems> = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${item.price}</Price>
          <Amount>x{item.amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          {/* onClick={decrementFoodHandler} */}
          <ContainerStyleMinusBasket>
            <RemoveIcon />
          </ContainerStyleMinusBasket>

          {/* onClick={incrementFoodHandler} */}
          <ContainerStylePlusBasket>
            <AddIcon />
          </ContainerStylePlusBasket>
        </CounterContainer>
      </Content>
    </Container>
  )
}

const Container = styled('div')(() => ({
  padding: '24px 10px',
  width: '100%',
  borderBottom: '2px solid #d6d6d6',
}))

const Title = styled('p')(() => ({
  display: 'flex',
  alignSelf: 'flex-start',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
  color: '#222222',
  margin: '0 0 12px 0',
}))

const Content = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const PriceAndAmountContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '155px',
  justifyContent: 'space-between',
}))

const Price = styled('p')(() => ({
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '27px',
  color: '#ad5502',
  margin: '0',
}))

const Amount = styled('span')(() => ({
  boxSizing: 'border-box',
  border: '1px solid #d6d6d6',
  borderRadius: '6px',
  padding: '6px 14px',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#222222',
  display: 'block',
}))

const CounterContainer = styled('div')(() => ({
  display: 'flex',
  gap: '14px',
}))

const ContainerStyleMinusBasket = styled('button')(() => ({
  boxSizing: 'border-box',
  border: '1px solid #8a2b06',
  backgroundColor: '#fff',
  borderRadius: '6px',
  width: '48px',
  height: '36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#8a2b06',

  ':hover': {
    backgroundColor: '#8a2b06',
    color: '#fff',
  },

  ':active': {
    backgroundColor: '#993108',
  },
}))

const ContainerStylePlusBasket = styled('button')(() => ({
  boxSizing: 'border-box',
  border: '1px solid #8a2b06',
  backgroundColor: '#fff',
  borderRadius: '6px',
  width: '48px',
  height: '36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#8a2b06',

  ':hover': {
    backgroundColor: '#8a2b06',
    color: '#fff',
  },

  ':active': {
    backgroundColor: '#993108',
  },
}))
