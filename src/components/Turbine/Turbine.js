import IdleIndustry from "../../assets/Turbine-Promo.png"

function Turbine () {


    return (
        <a className='turbine-container show-box' href="https://steam-turbine.herokuapp.com/" target="_blank">
            <div className="turbine-text-container">
                <h2 className="text">Turbine</h2>
                <p className="text">Turbine is a clone of steam with a working 
                user auth system, a cart for each user, and AWS hosting of all
                images to reduce server load.</p>
            </div>
            <div className="game-img-right">
                <img className="img" src={IdleIndustry} />
            </div>
        </a>
    )
}

export default Turbine;