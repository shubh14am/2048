import React from "react";
import "./scss/main.scss";

function Grid(prop){
    return (
        <div className="grid">
            <div className="row">
                <div className="cell ">{prop.board[0][0]}</div>
                <div className="cell ">{prop.board[0][1]}</div>
                <div className="cell ">{prop.board[0][2]}</div>
                <div className="cell ">{prop.board[0][3]}</div>
            </div>
            <div className="row">
                <div className="cell ">{prop.board[1][0]}</div>
                <div className="cell ">{prop.board[1][1]}</div>
                <div className="cell ">{prop.board[1][2]}</div>
                <div className="cell ">{prop.board[1][3]}</div>
            </div>
            <div className="row">
                <div className="cell ">{prop.board[2][0]}</div>
                <div className="cell ">{prop.board[2][1]}</div>
                <div className="cell ">{prop.board[2][2]}</div>
                <div className="cell ">{prop.board[2][3]}</div>
            </div>
            <div className="row">
                <div className="cell ">{prop.board[3][0]}</div>
                <div className="cell ">{prop.board[3][1]}</div>
                <div className="cell ">{prop.board[3][2]}</div>
                <div className="cell ">{prop.board[3][3]}</div>
            </div>
            
        </div>
    )
}

export default Grid;