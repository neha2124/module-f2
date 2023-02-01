const first = document.getElementById("first")
const sec = document.querySelector('.sec-img')
const tri = document.querySelector('#tri-img')
const four = document.querySelector('#for-img')
const fourthDIv = document.querySelector('.fourth-div')
const data = document.getElementById("data")
const dice = document.querySelector('#dice')
const play = document.querySelector('.play')
const score = document.querySelector('.score')
const totalScore = document.querySelector('.total')
const moveLeft = document.querySelector('.move') 
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
const result = document.querySelector('.result')
const game = document.querySelector('#game')
let secLink = document.querySelector("#second")
const final = document.querySelector('.final')
// export default secLink

let move =0

let userData = () => {
    let userName = localStorage.getItem('user-name')
    let name = localStorage.getItem('name')
    if(userName == null && name == null){
        alert("click on first image")
    
    }else{
        let div = document.createElement('div')
    let html = `
    <span> User-Name:  &nbsp; ${userName}</span>
    <br>
    <span> Your Name: &nbsp;${name}</sapn
    
    `
    
    div.innerHTML = html
    data.append(div)
    sec.setAttribute('class','hide')
    data.removeAttribute('class','hide')
    tri.removeAttribute('class' ,'pointer')
    }
    
    localStorage.clear()
    }
data.addEventListener('click',() =>{
    data.setAttribute('class','hide')
    sec.removeAttribute('class','hide')
    sec.setAttribute('class','pointer')
})
first.addEventListener("click",
    first.setAttribute("href", 'form.html'),
    sec.removeAttribute('class','pointer')
 
)
tri.addEventListener('click', ()=> {
   
    tri.setAttribute('class' , 'hide'),
    dice.removeAttribute('class','hide')
    game.removeAttribute('class','hide')
    

})
sec.addEventListener('click',() => {
    
    userData()
   
   
    
}

   
)


 





play.addEventListener('click' ,() => {
    playGame()
  

   
})
let playGame= () =>{
    move++;
    let total = 0;
   
    moveLeft . textContent =`move-left ${3-move}`
   let sum = Math.floor(Math.random() * 6)+1
   let x =+ sum;
    total = sum+x
    score.innerHTML = `Your score : ${sum}`
    
    if(move === 3){
        gameOver(move,total)
        totalScore.innerHTML = ` Total Score${total}`
    }
}

const gameOver = (moves,sum) =>{
    if(moves == 3 && sum >=10 ){
        win.innerHTML = 'You Won' 
        game.setAttribute('class','hide')
       four.removeAttribute('class','pointer')
    }else if (sum < 10){
       lose.innerHTML ='Try again'
       game.setAttribute('class','hide')
       alert('oops! start gain on first image')
     }
}
lose.addEventListener('click',()=>{
    if(lose.innerHTML != null){
        game.removeAttribute('class','hide')
        result.setAttribute('class','hide')
        score.innerHTML =""
        
        move = 0
    }
})
four.addEventListener('click' , ()=>{
    console.log("kkk")
    let div = document.createElement('div')
    if(div.innerHTML != null){
        four.classList.add('pointer')
    }
    four.innerHTML = ""
    let num = Math.floor(10000000000 + Math.random() * 90000000000)
    let html =  ` <p>Congratultion Your Coupon is</p> 
                <span> ${num}</span>   `;

    div.innerHTML = html
    
    div.classList.add('coupon')
    final.append(div)
  
})

   


