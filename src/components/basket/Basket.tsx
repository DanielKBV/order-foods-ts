import { Modal, Box } from '@mui/material'
import { styled } from '@mui/material'
import { FC } from 'react'
import { TotalAmount } from './TotalAmount'
import { BasketItem } from './BasketItem'

interface PropsBasket {
  onClose: () => void
  open: boolean
}

export interface BasketItemsType {
  amount: number
  price: number
  title: string
  id: string
}

const items: BasketItemsType[] = [
  {
    id: '64747e13a67b1ca4c0182212',
    title: 'Испанские пинчос из Сан-Себастьяна',
    price: 199,
    amount: 76,
  },
]

export const Basket: FC<PropsBasket> = ({ onClose, open }) => {
  console.log('Hello')
  return (
    <Modal onClose={onClose} open={open}>
      <StyledModalContent>
        <Content>
          {items?.length ? (
            <FixedWidthContainer>
              {items.map((item) => {
                return <BasketItem key={item.id} item={item} />
              })}
            </FixedWidthContainer>
          ) : null}
          <TotalAmount toggleHandler={onClose} totalPrice={60} />
        </Content>
      </StyledModalContent>
    </Modal>
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
