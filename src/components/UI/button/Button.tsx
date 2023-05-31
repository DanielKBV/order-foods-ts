import { styled as MuiStyled } from '@mui/material/styles'
import { Button as MuiButton, Stack } from '@mui/material'
import { FC, MouseEvent, ReactNode } from 'react'

interface PropsButton {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  variants: string
  children: ReactNode
}

export const Button: FC<PropsButton> = ({ onClick, variants, children }) => {
  return (
    <Stack>
      <StyledButtonMui onClick={onClick} variants={variants}>
        {children}
      </StyledButtonMui>
    </Stack>
  )
}

interface propsCssFun {
  variants: string
}

const getBackgroundColor = (props: propsCssFun) => {
  return props.variants === 'contained' ? '#8A2B06' : '#fff'
}

const getBorder = (props: propsCssFun) => {
  return props.variants === 'contained' ? 'none' : '1px solid #8a2b06'
}

const getColor = (props: propsCssFun) => {
  return props.variants === 'contained' ? '#fff' : '#8a2b06'
}

const StyledButtonMui = MuiStyled(MuiButton)((variants: propsCssFun) => ({
  '& ': {
    padding: '10px 32px',
    background: getBackgroundColor(variants),
    borderRadius: '30px',
    color: getColor(variants),
    fontWeight: '600',
    fontSize: '16px',
    border: getBorder(variants),
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#7e2a0a',
      color: 'white',
    },

    ':active': {
      backgroundColor: '#7e2a0a',
    },
  },
}))
