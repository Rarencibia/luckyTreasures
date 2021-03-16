// async function getJson(){
//     let response = await fetch('./javascripts/carousel.json');
//     let data = await response.json();

//     let carouselWrapper = document.getElementById("carouselWrapper");

//     let leftArrow = document.getElementById("leftArrow");
//     let rightArrow = document.getElementById("rightArrow");


//     let index = 0 ;

//     function carouselFunctionality(x) {
//         if(x == 0){
//             let img = document.createElement('img');
//             img.src = data.salesImage[0].image;
//             img.setAttribute("id", "carouselImg");

//             let h1Header = document.createElement("h1");
//             h1Header.innerHTML = data.salesImage[0].title;
//             h1Header.setAttribute("id", "carouselHeader")

//             carouselWrapper.replaceChild(img);
//             carouselWrapper.replaceChild(h1Header)


//         }else if(x == 1) { 
//             let img = document.createElement('img');
//             img.src = data.salesImage[1].image;
//             img.setAttribute("id", "carouselImg");

//             let h1Header = document.createElement("h1");
//             h1Header.innerHTML = data.salesImage[1].title;
//             h1Header.setAttribute("id", "carouselHeader")

//             carouselWrapper.replaceChild(img);
//             carouselWrapper.replaceChild(h1Header)


//         }else if(x == 2){
//             console.log(data.salesImage[2])
//         }
//     }



//     // window.onload = carouselLoop()


//     leftArrow.addEventListener("click", () => {
//         index -= 1;
//         carouselFunctionality(index);
//     });

//     rightArrow.addEventListener("click", () => {
//         index += 1;
//         carouselFunctionality(index);
//     });

//     carouselFunctionality(index);
//     // function sleep(ms) {
//     //     return new Promise(resolve => setTimeout(resolve, ms));
//     //   }



//     //   async function carouselLoop(){
//         // while(running){

//         //     for(let i = 0; i < data.salesImage.length; i++){
//             // let img = document.createElement('img');
//             //     img.src = data.salesImage[i].image;
//             //     img.setAttribute("id", "carouselImg");
    
//             //     let h1Header = document.createElement("h1");
//             //     h1Header.innerHTML = data.salesImage[i].title;
//             //     h1Header.setAttribute("id", "carouselHeader")
    
//                 // carouselWrapper.appendChild(img);
//                 // carouselWrapper.appendChild(h1Header);
    
//         //         await sleep(3000);
    
//                 // carouselWrapper.removeChild(img);
//                 // carouselWrapper.removeChild(h1Header);
    
//         //         if(i == 2){
//         //             i = i - 3;
//         //         }
//         //     }
//         // }
//     //   }







    



// }


// getJson();
