import { FC } from 'react'
import { styled } from '@mui/material'
import { MealsItemForm } from './MealsItemForm'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { MealsItemType } from '../../store/meals/mealsSlice'
import { addPutItem } from '../../store/basket/basketThunk'
import { ActionsTypeSnackbar } from '../../store/snackbar/snackbarSlice'

interface MealItemType {
  item: MealsItemType
}

export const MealItem: FC<MealItemType> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootState) => state.basket)

  const addItemHandler = async (amount: number, id: string) => {
    try {
      const amountRes = items.find((el) => el.id === id)

      const dataPost = {
        ...item,
        amount: (amountRes?.amount || 0) + amount,
      }

      if (item.id === id) {
        return await dispatch(addPutItem(dataPost)).unwrap()
      }

      dispatch(ActionsTypeSnackbar.doSuccess())
    } catch (error) {
      if (error instanceof Error && error.message) {
        dispatch(ActionsTypeSnackbar.doError(error.message))
      } else {
        dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
      }
    }
  }

  return (
    <StyledItem key={item.id}>
      <StyledItemInfo>
        <StyledTitle>{item.title}</StyledTitle>
        <DescriptionStyles>{item.description}</DescriptionStyles>
        <span>{item.price} $</span>
      </StyledItemInfo>
      <div>
        <MealsItemForm addItemHandler={addItemHandler} id={item.id} />
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
