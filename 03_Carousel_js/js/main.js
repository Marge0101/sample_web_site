
let span = document.getElementsByTagName(`span`);//ボタン
let product = document.getElementsByClassName(`product`);//商品
let product_page = Math.ceil(product.length/4) ;
let l = 0;
let movePer = 25.34;
let maxMove =203;

//mobile view
let mobile_view = window.matchMedia(`(max-width:768px)`);
if (mobile_view.matches){
    movePer = 50.36;
    maxMove = 504;
};

let right_mover = ()=>{
   l = l + movePer;
    if (product == 1){l = 0}
    for(const b of product)
    { 
        if(l > maxMove){l = l- movePer;}
    b.style.left = `-` + l + `%`;
    }
};

let left_mover =() =>{
l = l -movePer;
if (l<=0){l=0;}
for(const b of product)
    { 
        if(product_page >1)
    b.style.left = `-` + l + `%`;
    }

}


span[1].onclick = () => {right_mover();};
span[0].onclick = () => {left_mover();};
console.log(`hello`);