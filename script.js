const moves = [
  { x: 1, y: 2 },
  { x: 1, y: -2 },
  { x: -1, y: -2 },
  { x: -1, y: 2 },
  { x: -1, y: +2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
  { x: -2, y: 1 },
  { x: -2, y: +1 },
  { x: -2, y: -1 },
];

let currentKnightPosition = ''

const positions = document.getElementsByTagName("td");

for (var i = 0; i < positions.length; i++) {
  if (positions[i]) {
    positions[i].onmouseover = function(e) {
        const clickedPosition = e.target
        const seletedCoin = clickedPosition.innerText
        const [currentX, currentY] = e.target.id.split('_')
        console.log(currentX, currentY)
        if(seletedCoin === '♘'){
            // show posible moves
            moves.forEach((move) => {
                const posibleMove = (parseInt(currentX)+move.x) + '_' + (parseInt(currentY) + move.y)
                const posiblePosition = document.getElementById(posibleMove)
                console.log(posibleMove)
                if(posiblePosition){
                    document.getElementById(posibleMove).classList.add('posiblePosition')
                }
            })
        } else {
            // alert('empty space')
        }
    //   console.log('clicked', clickedPosition.id, clickedPosition.innerHTML);
    };
    positions[i].onmouseleave = function() {
        for (var i = 0; i < positions.length; i++) {
            if (positions[i]) {
                positions[i].classList.remove('posiblePosition')
            }
        }
    }
    positions[i].onclick = function(e) {
        const clickedPosition = e.target
        const seletedCoin = clickedPosition.innerText
        const [currentX, currentY] = e.target.id.split('_')
        console.log(currentX, currentY)
        if(seletedCoin === '♘'){
            // show posible moves
            currentKnightPosition = e.target.id
            clickedPosition.classList.add('positionPicked')
            moves.forEach((move) => {
                const posibleMove = (parseInt(currentX)+move.x) + '_' + (parseInt(currentY) + move.y)
                const posiblePosition = document.getElementById(posibleMove)
                console.log(posibleMove)
                if(posiblePosition){
                    document.getElementById(posibleMove).classList.add('movePosition')
                }
            })
        } else {
            if(clickedPosition.classList.contains('movePosition')){
                clickedPosition.innerText = '♘'
                document.getElementById(currentKnightPosition).innerText = ''
                for (var i = 0; i < positions.length; i++) {
                    if (positions[i]) {
                        positions[i].classList.remove('movePosition')
                        positions[i].classList.remove('positionPicked')
                    }
                }
            }
        }
    //   console.log('clicked', clickedPosition.id, clickedPosition.innerHTML);
    };
  }
}
