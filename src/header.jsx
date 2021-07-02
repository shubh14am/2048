import React from "react";

function Header(prop){
    return (
        <div className="header">
            <h1 id="title">2048</h1>
            <div class="scores-sec">
                <div className="score">
                    <p className="scoreText">Score</p>
                    <p className="scoreData">{prop.curScore}</p>
                </div>
                <div className="score">
                    <p className="scoreText">High Score</p>
                    <p className="scoreData">{prop.maxScore}</p>
                </div>
            </div>
            <a href = "localhost:3000" id="button">New Game</a>
        </div>
    )
}

export default Header;

// 