import { Card } from "./components/Card"
import { GameHeader } from "./components/GameHeader"
import { useState } from "react"

const cardValues = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍋‍🟩",
  "🍌",
  "🍍",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍋‍🟩",
  "🍌",
  "🍍",
]




function App() {
const [cards, setCards] = useState([])

const initializeGame = () => {
  //Shuffle the cards


  const finalCards = cardValues.map((value, index) => (
    {
      id: index,
      value, 
      isFlipped: false,
      isMatched: false
    }
  ))
}


  
  return( 
  <div className="app"> 
    <GameHeader score={3} moves={7} /> 

    <div className="cards-grid" >
        {cardValues.map((card) => (
            <Card card={card} />
         ))}
    </div>

  </div>
  )
}

export default App
