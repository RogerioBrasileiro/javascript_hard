function fillList() {
    var ul = document.querySelector('.lista ul');
    console.log(ul)

    var frases = [
        'Feliz Aniversário',
        'Feliz Natal com muita paz',
        'Feliz ano novo',
        'Fique em paz',
        'Nos vemos em breve',
        'Tricolor de aço',
        'Bora Leão',

    ]

    for (let i = 0; i < frases.length; i++) {
        var liContent = frases[i];

        var li = document.createElement('li');
        li.textContent = liContent;

        ul.appendChild(li);
    }
}

fillList();