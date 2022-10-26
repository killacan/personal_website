import GitHubLogo from '../../assets/GitHub-Mark-Light-120px-plus.png';

function BottomNav () {


    return (
        <div className='bottom-nav-container'>
            <div className="button-container">
            <a href="https://github.com/killacan" target="_blank"><img className="github-logo" src={GitHubLogo} /></a>
                <form action="https://www.linkedin.com/in/cameron-sands-a97183169/" method="GET" target="_blank">
                    <button type="submit" className="button">Connect on LinkedIn</button>
                </form>
            </div>
    </div>
    )
}

export default BottomNav;