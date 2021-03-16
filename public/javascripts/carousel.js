async function getJson(){
    let response = await fetch('./javascripts/carousel.json');
    let data = await response.json();

    let carouselWrapper = document.getElementById("carouselWrapper");

    let leftArrow = document.getElementById("leftArrow");
    let rightArrow = document.getElementById("rightArrow");


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }




    for(let i = 0; i < data.salesImage.length; i++){
        let img = document.createElement('img');
            img.src = data.salesImage[i].image;
            img.setAttribute("id", "carouselImg");

            let h1Header = document.createElement("h1");
            h1Header.innerHTML = data.salesImage[i].title;
            h1Header.setAttribute("id", "carouselHeader")

            carouselWrapper.appendChild(img);
            carouselWrapper.appendChild(h1Header);

            await sleep(3000);

            carouselWrapper.removeChild(img);
            carouselWrapper.removeChild(h1Header);

            if(i == 2){
                i = i - 3;
            }
        }
    

    



}

getJson();