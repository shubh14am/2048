import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/main.scss";
import App from './app';
var board = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
]
var score = 0;
ReactDOM.render(<App board={board}/>,document.getElementById('root'));


function update(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let a = 4 * i + j;
            let tile = document.querySelectorAll(".cell")[a];
            tile.innerHTML = board[i][j];
            let k = tile.innerHTML;
            if (k) {
                let myClass = "cell-filled-" + k;
                tile.classList.toggle(myClass);
                
            }

        }
    }
    let scoreBox = document.getElementsByClassName("scoreData")[0];
    scoreBox.innerHTML = score;
    

}

function fill_left() {

    for (let i = 0; i < 4; i++) {
        let arr = ["-1", "-1", "-1", "-1"];
        let j = 0;
    for (let k = 0; k < 4; ++k) {
        if (board[i][k] != "") {
            arr[j] = board[i][k];
            ++j;
        }
    }

    for (let k = 0; k < j; ++k) board[i][k] = arr[k];
    for (let k = j; k < 4; ++k) board[i][k] = "";

}
}

function fill_up() {

    for (let j = 0; j < 4; j++) {
        let arr = ["-1", "-1", "-1", "-1"];
        let k = 0;
    for (let i = 0; i < 4; ++i) {
        if (board[i][j] != "") {
            arr[k] = board[i][j];
            ++k;
        }
    }

    for (let i = 0; i < k; ++i) board[i][j] = arr[i];
    for (let i = k; i < 4; ++i) board[i][j] = "";

}
}

function fill_right() {

    for (let i = 0; i < 4; i++) {
        let arr = ["-1","-1","-1","-1"];
    let j = 0;
    for (let k = 3; k >= 0; --k) {
        if (board[i][k] != "") {
            arr[j] = board[i][k];
            ++j;
        }
    }

    for (let k = 3; k >= 4 - j; --k) board[i][k] = arr[3 - k];
    for (let k = 4 - j - 1; k >= 0; --k) board[i][k] = "";

}
}

function fill_down() {

    for (let j = 0; j < 4; j++) {
        let arr = ["-1","-1","-1","-1"];
    let k = 0;
    for (let i = 3; i >= 0; --i) {
        if (board[i][j] != "") {
            arr[k] = board[i][j];
            ++k;
        }
    }

    for (let i = 3; i >= 4 - k; --i) board[i][j] = arr[3 - i];
    for (let i = 4 - k - 1; i >= 0; --i) board[i][j] = "";

}
}


function merge_left(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== "" && board[i][j] === board[i][j + 1]) {
                let a = parseInt(board[i][j], 10);
                a *= 2;
                score += a;
                board[i][j] = "" + a;
                board[i][j + 1] = "";
            }
        }
    }
}



function merge_right(){
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j >= 0; j--) {
            if (board[i][j] !== "" && board[i][j] === board[i][j - 1]) {
                let a = parseInt(board[i][j], 10);
                a *= 2;
                score += a;
                board[i][j] = "" + a;
                board[i][j - 1] = "";
            }
        }
    }
}
function merge_up(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== "" && board[i][j] == board[i + 1][j]) {
                // B[i][j] *= 2;
                let a = parseInt(board[i][j],10);
                a *= 2;
                score += a;
                board[i][j] = "" + a;
                board[i + 1][j] = "";
            }
        }
    }
}
function merge_down(){
    for (let i = 1; i < 4; i++) {
        for (let j = 4; j >= 0; j--) {
            if (board[i][j] !== "" && board[i][j] === board[i - 1][j]) {
                let a = parseInt(board[i][j],10);
                a *= 2;
                if(a){
                    score += a;
                }
                board[i][j] = "" + a;
                board[i - 1][j] = "";
            }
        }
    }
}
function isFull(){
    for(let i =0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[i][j] === ""){
                return false;
            }
        }
    }
    return true;
}
function create_2s(){

    let r1 = Math.floor(Math.random()*4);
    let c1 = Math.floor(Math.random()*4);
    if(isFull()){
        return;
    }
    if (board[r1][c1] != 0) {
        return create_2s();
    }
    else {
        board[r1][c1] = "2";
    }
}



document.addEventListener("keypress",function(event){
    let input  = event.key;
    if (input == 'A' || input == 'a') {
        update();
        fill_left();
        merge_left();
        fill_left();
        create_2s();
        update();

    }
    else if (input == 'W' || input == 'w') {
        update();
        fill_up();
        merge_up();
        fill_up();
        create_2s();
        update();
        
    }
    else if (input == 'S' || input == 's') {
        update();
        fill_down();
        merge_down();
        fill_down();
        create_2s();
        update();
        
    }
    else if (input == 'D' || input == 'd') {
        update();
        fill_right();
        merge_right();
        fill_right();
        create_2s();
        update();
        
    }
});