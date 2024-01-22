function sing(){
    let song = []
    let letItBe = "let it be,";
    for (let i = 0; i<4; i++){
        song.push(letItBe);
    }
    song.push("there will be an answer,");
    for (let i = 0; i<5; i++){
        song.push(letItBe);
    }
    song.push("whisper words of wisdom,");
    song.push("let it be");
    return song.join(' ')
}

//Your code above ^^^

console.log(sing());