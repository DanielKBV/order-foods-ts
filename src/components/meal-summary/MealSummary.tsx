import { styled } from '@mui/material'
import foodPhoto from '../../assets/img/foodPhoto.png'
import { MealSummaryCard } from './MealSummaryCard'

export const MealSummary = () => {
  return (
    <Container>
      <Img src={foodPhoto} alt="Food Photos" />
      <MealSummaryCard />
    </Container>
  )
}

const Container = styled('div')(() => ({
  width: '100%',
  height: '432px',
  marginTop: '101px',
}))

const Img = styled('img')(() => ({
  width: '100%',
  height: '100%',
}))
