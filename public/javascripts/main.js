//API-key: keylpPfWBTCbx5mnW



fetch(`https://api.airtable.com/v0/appG8rx5wJGkinFFe/Receipt%20Log?api_key=keylpPfWBTCbx5mnW`)
.then (response => response.json())
.then(data => {
    var list;

    list = data.records;

    list.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('entry');

        const markup = `
                <div>
                    <h2>
                    <span>${item.fields['Short Description']}</span>
                    <div id=divTotal>$${item.fields.Total}</div>
                    </h2>
                </div>
        `;

        li.innerHTML = markup;
        document.getElementById('entries').appendChild(li);
        

        console.log('hello');
    });
    


    
});
/**
.catch(() => {
    console.log('ERROR');
});
*/