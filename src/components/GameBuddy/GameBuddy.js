import GameBuddyImg from "../../assets/GameBuddy-Room.png"

function GameBuddy () {

    return (
        <div className="game-buddy-container show-box">
            <div className="text-container">
                <h2 className="game-buddy-text text">GameBuddy</h2>
                <p className="game-buddy-text text">Game Buddy is a web application that allows for people
                to discover new communities of gamers. Our project features
                a connection to the Riot API for stat verification in League
                of Legends. It also has a functioning websocket for real time
                chat communications.
                </p>
            </div>
            <div className="game-img-left">
                <img className="img" src={GameBuddyImg} />
            </div>
        </div>
    )
}

export default GameBuddy;