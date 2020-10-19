document.getElementById('formEdit').addEventListener('submit', e => {
    e.preventDefault();

    console.log('hello');
    
    /**
    let inputTitle = document.getElementById('title').value;
    var inputPrice = document.getElementById('price').value;
    console.log(inputTitle, inputPrice);

    const url = 'https://api.airtable.com/v0/appG8rx5wJGkinFFe/Receipt%20Log';

    const apiHeaders = {
        'Authorization' : 'Bearer keylpPfWBTCbx5mnW',
        'Content-Type': 'application/json'

    };

    const expense = {
        
        "fields": {
            "Short Description": inputTitle,
            "Total": parseInt(inputPrice)
        }
        
    }

    fetch(url, { method: 'POST', body: JSON.stringify(expense), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    */
    

});