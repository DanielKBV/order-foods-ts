import { useCallback, useState } from 'react'
import { Basket } from './components/basket/Basket'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'

function App() {
  const [open, setOpen] = useState(false)

  const toggleHandler = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {open && <Basket open={open} onClose={toggleHandler} />}
    </div>
  )
}

export default App
