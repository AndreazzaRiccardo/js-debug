const input = document.querySelector('input');
const array = null; // 1. Deve essere impostato come []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return; // 2. deve essere solo input.value

    array.add(input.value); //3. il metodo giusto è push

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.text = input.value; // 4. il metodo è innerText
    document.querySelector('ul').push(li); // 5. deve essere appena e non push

    let counter = ''; // 6. il counter deve avere un valore numerico
    let item    = array[0];
    const max   = 1; // 7. max cambia quindi è let e non const
    const elems = [];

    for (let i = 0; i < array; i++) { // 8. qui ci va array.length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) { // 9. qui bisogna incrementare j e non i
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) // 10. qui mancano le parentesi graffe
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert'); // 11. qui per prendere il primo alert devo aggiungere l'indice [0]

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte'); // 12. devo usare i backtick per utilizzare il template literal
});