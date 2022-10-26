import IdleProduction from "../../assets/Idle-Production-Promo.png"

function IndustryIdle () {

    return (
        <a href="https://killacan.github.io/IdleProduction/" target="_blank">
            <div className='Idle-Production-container show-box'>
                <div className="Idle-Production-text-container">
                    <h2 className="game-buddy-text text">Idle Production</h2>
                    <p className="game-buddy-text text">Game Buddy is a web application that allows for people
                    Idle Production is a fun idle game where you can build a massive factory. The game follows a 
                    steady progression of upgraded buildings and increasing amounts of money. The game can be played 
                    for basically ever. Eventually it will have a "win condition" after earning a certain amount. 
                    </p>
                </div>
                <div className="game-img-left">
                    <img className="img" src={IdleProduction} />
                </div>
            </div>
        </a>
    )

}

export default IndustryIdle; 