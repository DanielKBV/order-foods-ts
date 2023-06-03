import { Modal, Box } from '@mui/material'
import { styled } from '@mui/material'
import { FC } from 'react'
import { TotalAmount } from './TotalAmount'
import { BasketItem } from './BasketItem'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import {
  BasketType,
  deleteAmountFood,
  putDecrementAmountFood,
  putIncrementAmountFood,
} from '../../store/basket/basketThunk'
import { ActionsTypeSnackbar } from '../../store/snackbar/snackbarSlice'
import { Loading } from '../UI/loading/Loading'

interface PropsBasket {
  onClose: () => void
  open: boolean
}

export const Basket: FC<PropsBasket> = ({ onClose, open }) => {
  const { items, isLoading } = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch<AppDispatch>()

  const totalPrice = items?.reduce(
    (prev, current) => prev + (current.price ?? 0) * (current.amount ?? 0),
    0
  )

  const incrementFoodHandler = async (data: BasketType) => {
    try {
      const newData = { ...data, amount: data.amount + 1 }
      await dispatch(putIncrementAmountFood(newData)).unwrap()

      dispatch(ActionsTypeSnackbar.doSuccess())
    } catch (error) {
      if (error instanceof Error && error.message) {
        dispatch(ActionsTypeSnackbar.doError(error.message))
      } else {
        dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
      }
    }
  }

  const decrementFoodHandler = async (data: BasketType) => {
    try {
      const newData = { ...data, amount: data.amount - 1 }
      if (data.amount !== 1) {
        await dispatch(putDecrementAmountFood(newData)).unwrap()
      } else {
        await dispatch(deleteAmountFood(data)).unwrap()
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
    <>
      {isLoading && <Loading />}
      <Modal onClose={onClose} open={open}>
        <StyledModalContent>
          <Content>
            {items?.length ? (
              <FixedWidthContainer>
                {items.map((item) => {
                  return (
                    <BasketItem
                      key={item.id}
                      item={item}
                      incrementFoodHandler={incrementFoodHandler}
                      decrementFoodHandler={decrementFoodHandler}
                    />
                  )
                })}
              </FixedWidthContainer>
            ) : null}
            <TotalAmount toggleHandler={onClose} totalPrice={totalPrice} />
          </Content>
        </StyledModalContent>
      </Modal>
    </>
  )
}

const StyledModalContent = styled(Box)(() => ({
  '& ': {
    position: 'fixed',
    top: '26%',
    left: '28%',
    width: '44%',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: '30',
    border: 'none',

    animation: 'slide-down 300ms ease-out forwards',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(-4rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))

const Content = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '1.5rem 1rem',
}))

const FixedWidthContainer = styled('div')(() => ({
  overflowY: 'auto',
  maxHeight: '260px',
}))
