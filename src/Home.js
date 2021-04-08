import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="homeComponent" src={process.env.PUBLIC_URL + "/dress main page.png"} width="1130" alt="dress" />
            <h1>DEALS OF THE DAY</h1>
        </div>
    )
}


export default Home
