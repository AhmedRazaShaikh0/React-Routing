import React from 'react'
import './nav.css'
import closed from './closed-03.jpg'

export default function Body() {
  return (
    
    <section className="banner1">
        <div className="main">
            <div className="dab1">
                <h3>CLOSED <span> PHOTOGRAPHY</span> CONTESTS</h3>
            </div>
            <div className="dab2">
                <h1>Previous <span>Contests With Handpicked</span> Winners</h1>
            </div>
            <div className="imgs">
                <div className="card">
                    <img src={closed} alt="" />
                    <div className="gg">
                        <div className="ff1">
                            <h4>45 Participants</h4>
                            <p>Limited Tickets</p>
                        </div>
                        <div className="ff2">
                            <h5>Memorable Journey</h5>
                            <p>Complete Guidance</p>
                        </div>
                    </div>
                    <button>Book Now</button>
                    <button>More Info</button>

                </div>
                <div className="card">
                    <img src={closed} alt="" />
                    <div className="gg">
                        <div className="ff1">
                            <h4>45 Participants</h4>
                            <p>Limited Tickets</p>
                        </div>
                        <div className="ff2">
                            <h5>Memorable Journey</h5>
                            <p>Complete Guidance</p>
                        </div>
                    </div>
                    <button>Book Now</button>
                    <button>More Info</button>

                </div>
                <div className="card">
                    <img src={closed} alt="" />
                    <div className="gg">
                        <div className="ff1">
                            <h4>45 Participants</h4>
                            <p>Limited Tickets</p>
                        </div>
                        <div className="ff2">
                            <h5>Memorable Journey</h5>
                            <p>Complete Guidance</p>
                        </div>
                    </div>
                    <button>Book Now</button>
                    <button>More Info</button>

                </div>
                <div className="card">
                    <img src={closed} alt="" />
                    <div className="gg">
                        <div className="ff1">
                            <h4>45 Participants</h4>
                            <p>Limited Tickets</p>
                        </div>
                        <div className="ff2">
                            <h5>Memorable Journey</h5>
                            <p>Complete Guidance</p>
                        </div>
                    </div>
                    <button>Book Now</button>
                    <button>More Info</button>
                </div>
            </div>
            <div className="dab3">
                <input type="button" value="Browse More" />
            </div>
        </div>
    </section>
  )
}
