import { styled } from '@mui/material'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'

export interface MealsItemType {
  id: string
  title: string
  description: string
  price: number
}

const meals: MealsItemType[] = [
  {
    id: '1',
    title: 'Besh barmak',
    description: 'By Zhakshylyk baarynarga jetet',
    price: 100,
  },
  {
    id: '2',
    title: 'Gulchotai',
    description: 'By Jypargul eje akyrkysy kaldy',
    price: 150,
  },
  {
    id: '3',
    title: 'Samsy',
    description: 'By Gulzat js-9 uchun 50 somdon po svoisky',
    price: 50,
  },
  {
    id: '4',
    title: 'Суп карри лакса из Куала-Лампура',
    description:
      'Карри Лакса или просто Лакса — одна из разновидностей популярнейшего азиатского супа карри малайзийской кухни из отварной лапши с бульоном.',
    price: 150,
  },
]

export const Meals = () => {
  return (
    <Container>
      <Card>
        {meals.map((item) => (
          <MealItem key={item.id} item={item} />
        ))}
      </Card>
    </Container>
  )
}

const Container = styled('div')(() => ({
  marginTop: '135px',
  marginBottom: '100px',
}))
