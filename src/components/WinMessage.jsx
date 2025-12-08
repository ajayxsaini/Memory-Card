export const WinMessage = ({moves}) => {
    return (
        <div className="win-message">
            <h1>Congratulations!</h1>
            <p>You completed the game in {moves} moves</p>
        </div>
    )
}