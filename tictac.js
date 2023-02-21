let gridElement = document.getElementsByClassName("grid")
let click = new Audio("MouseClick.mp3")
let audio = new Audio("BhijGayiKurtiLal.mp3")
let change = ""
let btXo = true
buttons = document.getElementsByClassName("xo")
let reset = document.getElementById("reset")
let won = document.getElementById("won")
for(button of buttons)
{
button.addEventListener("click", (e)=>{
    if(btXo)
    {
    change = e.target.textContent
    audio.play()
    btXo = false
    }
})
}
function win()
{
    let wins = [ [0,1,2,1,4,0]
    , [3,4,5, 1,12,0]
    , [6,7,8, 1,20,0]
    , [0,3,6,-7,12,90]
    ,[1,4,7,1,12,90]
    ,[2,5,8,9,12,90]
    ,[0,4,8,1,12,45]
    ,[2,4,6,1,12,135] ] 
    wins.forEach(e=>{
if((gridElement[e[0]].textContent === gridElement[e[1]].textContent) && (gridElement[e[2]].textContent === gridElement[e[1]].textContent) && (gridElement[e[0]].textContent !== ""))
       { 
        document.getElementById("won").textContent = "Player with" + " " + gridElement[e[0]].textContent + " Won"
        if(gridElement[e[0]].textContent === "O")
        {
            document.querySelector(".line").style.backgroundColor = "white"
        }
        document.querySelector(".line").style.width = "22vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`  
              // 0 3 6 translate(-62px, 167px) rotate(90deg);
        // 1 4 7 translate(27px, 163px) rotate(90deg)
        // 2 5 8 164,163 90
        // 0 1 2 transform: translate(54px, 52px) rotate(0deg)
        // 3 4 5 transform: translate(54px, 162px) rotate(0deg);
        // 6 7 8 54 272 0
        // 0 4 8 transform: translate(-20px, 164px) rotate(45deg);
        // 2 4 6 transform: translate(-7px, 163px) rotate(135deg);
        // freset()
        change = ""
}
})
}
function changeover()
{
        if(change == "X")
    {   
        click.play()
        change = "O";
    }
        else if(change == "O"){
            click.play()
        change = "X";
        }
}
let turn = 1
function turnPlayer()
{                     
    if(turn == 1) {
    document.getElementById("won").textContent = "Player 2's turn"
    turn++
}
    else
    {
    document.getElementById("won").textContent = "Player 1's turn"
    turn--
    }
}
// function freset()
// {
//     Array.from(gridElement).forEach((element) =>
// {
//     elements.style.animation = "fadeIn 5s"
// })
// }
Array.from(gridElement).forEach((element) =>
{
    element.addEventListener("click", (e)=>{
        if(e.target.textContent === ""){
            if(change == "X")
            {
                element.style.color = "#bd2121"
            }
            else if(change == "O"){
                element.style.color = "white"
            }
            e.target.textContent = change
            turnPlayer()
            win()
        changeover()
}
})
})
reset.addEventListener("click", ()=>{
    won.textContent = "Select your Player"
    Array.from(gridElement).forEach((element) =>
{
    element.textContent = ""  
    document.querySelector(".line").style.width= "0vw"
    change = ""
    btXo = true
})
})