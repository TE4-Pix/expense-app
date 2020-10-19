document.getElementById('formAdd').addEventListener('submit', e => {
    e.preventDefault();
    
    let inputTitle = document.getElementById('title').value;
    let inputPrice = document.getElementById('price').value;
    console.log(inputTitle, inputPrice);

    const url = 'https://api.airtable.com/v0/appG8rx5wJGkinFFe/Receipt%20Log';

    const apiHeaders = {
        'Authorization' : 'Bearer keylpPfWBTCbx5mnW',
        'Content-Type': 'application/json'

    };

    /**
    const expense =  `{
        "fields": {
          "Short Description": "${inputTitle}",
          "Receipt Photo": [
            {
              "url": "https://dl.airtable.com/0cWfA9hiTOWP5QfdUNij_cactuscastle.jpg"
            }
          ],
          "Total": ${inputPrice},
          "Notes": "A cute blue cactus with golden spines, will go great in the dining room.",
          "Date & Time": "2015-11-06T14:22:00.000Z",
          "Category": "Interior Decor",
          "Who Paid?": "Maritza",
          "Item Photo": [
            {
              "url": "https://dl.airtable.com/OLrFmkx5Rm6PqQ0IUW2S_Pilosocereus_azureus.jpg"
            }
          ]
        }
    },`;
    */

    const expense = `{
        "records": [
          {
            "fields": {
              "Short Description": "Cactus",
              "Receipt Photo": [
                {
                  "url": "https://dl.airtable.com/0cWfA9hiTOWP5QfdUNij_cactuscastle.jpg"
                }
              ],
              "Total": 11.5,
              "Notes": "A cute blue cactus with golden spines, will go great in the dining room.",
              "Date & Time": "2015-11-06T14:22:00.000Z",
              "Category": "Interior Decor",
              "Who Paid?": "Maritza",
              "Item Photo": [
                {
                  "url": "https://dl.airtable.com/OLrFmkx5Rm6PqQ0IUW2S_Pilosocereus_azureus.jpg"
                }
              ]
            }
          },
          {
            "fields": {
              "Short Description": "Tweezers",
              "Receipt Photo": [
                {
                  "url": "https://dl.airtable.com/7tWTPKsrS92w6kC2DllD_myfingersreallyhurt.jpg"
                }
              ],
              "Total": 5.36,
              "Notes": "Fine point tweezers, great for extracting cactus spines",
              "Date & Time": "2015-11-10T16:20:00.000Z",
              "Category": "Health & Personal Care",
              "Who Paid?": "Quinns",
              "Item Photo": [
                {
                  "url": "https://dl.airtable.com/o7svLcJVQ0GbpPRTTjcj_Tweezers.jpg"
                }
              ]
            }
          }
        ]
      }`

    
    fetch(url, { method: 'POST', body: JSON.stringify(expense), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
           


});