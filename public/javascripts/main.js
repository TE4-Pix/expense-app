//API-key: keylpPfWBTCbx5mnW

fetch(`https://api.airtable.com/v0/appG8rx5wJGkinFFe/Receipt%20Log?api_key=keylpPfWBTCbx5mnW`)
.then (response => response.json())
.then(data => {
    const {id} = data;
})
.catch(() => {
    console.log('ERROR');
});