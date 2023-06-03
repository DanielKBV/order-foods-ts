import { styled } from '@mui/material'
import { Card } from '../UI/card/Card'
import { MealItem } from './MealItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoods } from '../../store/meals/mealsThunk'
import { AppDispatch, RootState } from '../../store'
import { Loading } from '../UI/loading/Loading'

export const Meals = () => {
  const { items, isLoading } = useSelector((state: RootState) => state.meals)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getFoods())
  }, [dispatch])

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <Card>
          {items?.map((item) => (
            <MealItem key={item.id} item={item} />
          ))}
        </Card>
      </Container>
    </>
  )
}

const Container = styled('div')(() => ({
  marginTop: '135px',
  marginBottom: '100px',
}))
