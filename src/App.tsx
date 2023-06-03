import { useCallback, useEffect, useState } from 'react'
import { Basket } from './components/basket/Basket'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'
import { AppDispatch, RootState } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from './store/basket/basketThunk'
import { SnackbarMui } from './components/UI/snackbar/Snackbar'
import { ActionsTypeSnackbar } from './store/snackbar/snackbarSlice'

function App() {
  const [openBasket, setOpenBasket] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { open } = useSelector((state: RootState) => state.snackbar)

  const toggleHandler = useCallback(() => {
    setOpenBasket((prev) => !prev)
  }, [])

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar())
  }

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  return (
    <div>
      {open && <SnackbarMui onClose={onCloseHandler} />}
      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {openBasket && <Basket open={openBasket} onClose={toggleHandler} />}
    </div>
  )
}

export default App
