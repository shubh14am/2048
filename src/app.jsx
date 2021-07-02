import React from "react";
import Grid from "./grid";
import Header from "./header";
var maxScore = 0;
var curScore = 0;

function App(prop){
    return (
        <div>
            <Header maxScore = {maxScore} curScore={curScore} />
            <Grid board={prop.board} />

        </div>
    )
}

export default App;