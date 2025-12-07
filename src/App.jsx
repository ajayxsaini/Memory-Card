import { Card } from "./components/Card"
import { GameHeader } from "./components/GameHeader"
import { useEffect, useState } from "react"

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
      }))

      setCards(finalCards)

  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (card) => {
    // Don't allow the clicking if the card is flipped, or matched
    if(card.isFlipped || card.isMatched) {
      return
    }
    
    // Update the card flipped state 
    const newCards = cards.map((c) => {
      if(c.id === card.id){
        return {...c, isFlipped: true }
      } else{
        return c
      }
    })

    setCards(newCards)
  }
  
  return( 
  <div className="app"> 
    <GameHeader score={3} moves={7} /> 

    <div className="cards-grid" >
        {cards.map((card) => (
            <Card card={card} onClick={handleCardClick} />
         ))}
    </div>

  </div>
  )
}

export default App
