document.getElementById('formAdd').addEventListener('submit', e => {
    e.preventDefault();
    
    let inputTitle = document.getElementById('title').value;
    let inputPrice = document.getElementById('price').value;
    console.log(inputTitle, inputPrice);
});