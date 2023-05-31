import { FC } from 'react'
import { styled } from '@mui/material'
import { MealsItemType } from './Meals'
import { MealsItemForm } from './MealsItemForm'

interface MealItemType {
  item: MealsItemType
}

export const MealItem: FC<MealItemType> = ({ item }) => {
  return (
    <StyledItem>
      <StyledItemInfo>
        <StyledTitle>{item.title}</StyledTitle>
        <DescriptionStyles>{item.description}</DescriptionStyles>
        <span>{item.price} $</span>
      </StyledItemInfo>
      <div>
        {/* onAdd={addBasket} */}
        <MealsItemForm id={item.id} price={item.price} />
      </div>
    </StyledItem>
  )
}

const StyledItem = styled('li')(() => ({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #d6d6d6',
  marginBottom: '20px',

  ':last-child': {
    border: 'none',
    marginBottom: '-10px',
  },
}))

const StyledItemInfo = styled('div')(() => ({
  marginBottom: '20px',

  span: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#ad5502',
    marginTop: '4px',
  },
}))

const DescriptionStyles = styled('p')(() => ({
  fontStyle: 'italic',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#222222',
}))

const StyledTitle = styled('h4')(() => ({
  fontWeight: '600',
  fontSize: '18px',
  color: '#222222',
}))
