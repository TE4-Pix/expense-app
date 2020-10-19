

document.getElementById('formEdit').addEventListener('submit', e => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let query = params.get('e');
    console.log(query);
    
    
    let inputTitle = document.getElementById('title').value;
    var inputPrice = document.getElementById('price').value;
    console.log(inputTitle, inputPrice);

    const url = `https://api.airtable.com/v0/appG8rx5wJGkinFFe/Receipt%20Log/${query}`;

    const expense = {
        
        "fields": {
            "Short Description": inputTitle,
            "Total": parseInt(inputPrice)
        }
        
    }

    fetch(url, { method: 'PATCH', body: JSON.stringify(expense), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    
    

});