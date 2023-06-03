import { styled } from '@mui/material'
import { OrderBasket } from './OrderBasket'
import { FC, useEffect, useState } from 'react'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface PropsHeader {
  toggleHandler: () => void
}

export const Header: FC<PropsHeader> = ({ toggleHandler }) => {
  const [animationClass, setAnimationClass] = useState('')
  const { items } = useSelector((state: RootState) => state.basket)

  const plusAnimation = () => {
    setAnimationClass('bump')

    const animationTimePlus = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(animationTimePlus)
    }
  }

  useEffect(() => {
    plusAnimation()
  }, [items])

  return (
    <HeaderStyle>
      <Container>
        <Logo>React Meals</Logo>
        <OrderBasket className={animationClass} toggleHandler={toggleHandler}>
          Your Cart
        </OrderBasket>
      </Container>
    </HeaderStyle>
  )
}

const HeaderStyle = styled('header')(() => ({
  '& ': {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '101px',
    margin: '0',
    zIndex: '100',
    backgroundColor: '#8a2b06',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',

    '& .bump': {
      animation: 'bump 300ms ease-out',
    },

    '@keyframes bump': {
      '0%': {
        transform: 'scale(1)',
      },
      '10%': {
        transform: 'scale(0.9)',
      },
      '30%': {
        transform: 'scale(1.1)',
      },
      '50%': {
        transform: 'scale(1.15)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}))

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const Logo = styled('p')(() => ({
  fontFamily: 'Poppins',
  fontWeight: 600,
  fontSize: '38px',
  lineHeight: '57px',
  color: '#fff',
  margin: 0,
}))
