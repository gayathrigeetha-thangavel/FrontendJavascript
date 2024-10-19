const drawBtn = document.querySelector('#drawBtn');
const imageDiv = document.querySelector('#imageDiv');


const getDrawCard = () => { 

    //url to get the random cards
    let url = new URL("https://deckofcardsapi.com/api/deck/new/draw/?count=1");

    console.log("draw URL : "+ url);

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => {
        if(res.ok)
            return res.json()
        throw new Error('Failed to get response')
    })
    
    .then(data => {
        console.log(data);

        imageDiv.innerHTML = ''
        
        //get the image url from the data
        const card = data.cards[0]; 
        const imageURL = card.image;
        console.log(imageURL);

        //creating element and set attributes
        const image = document.createElement("img");
        image.setAttribute("src",imageURL);
        image.setAttribute("alt", card);
        image.style.width = "150px";

        //placing the image to the div element
        imageDiv.appendChild(image);
        
    }) .catch(err => console.log(err))
}


//Method will call when the button is click
drawBtn.addEventListener('click', getDrawCard);