
const fetchBtn = document.querySelector('#fetchBtn');
const textResult = document.querySelector('#textResult');

const getApi = () => { 

    const textName = document.getElementById("textName").value;

    // url for the characters
    let url = new URL("https://www.swapi.tech/api/people/");
    let params = new URLSearchParams(url.search);
    
    //appending the name with base url 
    params.append("name", textName);

    //final URL
    url.search = params.toString();

    console.log("Final URL"+url);

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
        textResult.innerHTML = ''

        data.result.forEach(characterData =>{
            textResult.innerHTML +=
            `
            Name: ${characterData.properties.name}
            Height: ${characterData.properties.height}
            Mass: ${characterData.properties.mass}
            Gender: ${characterData.properties.gender}
            Hair Color: ${characterData.properties.hair_color}

            `
        })
    }) .catch(err => console.log(err))
}


//Method calling when button click
fetchBtn.addEventListener('click', getApi);