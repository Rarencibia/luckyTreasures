async function getJson(){
    let response = await fetch('./javascripts/carousel.json');
    let data = await response.json();

    let carouselWrapper = document.getElementById("carouselWrapper");


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    for(let i = 0; i < data.salesImage.length; i++){



        let img = document.createElement('img');
        img.src = data.salesImage[i].image;
        img.setAttribute("id", "carouselImg");



        carouselWrapper.appendChild(img);
        console.log(i);

        await sleep(2000);

        carouselWrapper.removeChild(img);

        if(i === 2){
            i = i - 3;
        }


    }
}

getJson();