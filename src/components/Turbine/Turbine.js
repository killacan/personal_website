import IdleIndustry from "../../assets/Turbine-Promo.png"

function Turbine () {


    return (
        <div className='turbine-container show-box'>
            <div className="turbine-text-container">
                <h2 className="text">Turbine</h2>
                <p className="text">Turbine is a clone of steam with a working 
                user auth system, a cart for each user,</p>
            </div>
            <div className="game-img-right">
                <img className="img" src={IdleIndustry} />
            </div>
        </div>
    )
}

export default Turbine;