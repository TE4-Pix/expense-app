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
                <div class="module-border-wrap"><div class="module"> 
                    <h2>
                    <span class='expenseTitle'>${item.fields['Short Description']}</span>
                    <div class=divTotal>$${item.fields.Total}</div>
                    </h2>
                    <p class="editDelete"><form action="/edit" method="get"><button class="btnDelete" name="delete" value="${item.id}">Delete</button><button class="btnEdit" name="e" value="${item.id}">Edit</button></form></p>
                </div></div> 
        `; //Module = Gradient border div

        
        
        li.innerHTML = markup;
        document.getElementById('entries').appendChild(li);
        

        console.log(item.id);
    });
    

})
.catch(() => {
    console.log('ERROR');
});
