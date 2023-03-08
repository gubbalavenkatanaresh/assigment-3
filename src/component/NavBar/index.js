import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <div className="score-timer">
        <div className="score">
          <p>Score: </p>
          <p className="yellow">{score}</p>
        </div>
        <div className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="yellow">{timer} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
