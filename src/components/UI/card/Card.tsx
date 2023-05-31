import { styled } from '@mui/material'
import { FC, ReactNode, memo } from 'react'

interface PropsCard {
  children: ReactNode
}

export const Card: FC<PropsCard> = memo(({ children }) => {
  return <CardStyle>{children}</CardStyle>
})

const CardStyle = styled('div')(() => ({
  background: '#ffffff',
  padding: '40px',
  borderRadius: '16px',
  maxWidth: '64.9375rem',
  margin: '0px auto',
}))
