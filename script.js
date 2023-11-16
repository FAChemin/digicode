let entree = document.querySelector('.entree');
let touche = document.querySelectorAll('.touche');
let reponse = document.querySelector('.reponse');
let pentree = document.querySelector('.pentree');
let tableau = [];
let random = Math.floor((Math.random()*9));

for(let i = 0; i<10; i++)
{
    touche[i].addEventListener('click', function()
    {
        pentree.innerHTML += touche[i].innerHTML;

        tableau = [];
        controleReccurence();
        console.log(tableau);
        MajValeurs();
        resultat();
    })
}

function effacer(){
    pentree.innerHTML ="";
}

function resultat(){
    if(pentree.innerHTML === "1248")
    {
        reponse.innerHTML = "Code correct";
        entree.style.backgroundColor = "green";
    }

    else
    {
        reponse.innerHTML = "Code incorrect";
        entree.style.backgroundColor = "red";
    }
}

function controleReccurence(){
    for(let z = 0; tableau.length <10; z++)
    {
        if(tableau.includes(random) === false)
        {
            tableau.push(random);
        }
        else{
            random = Math.floor((Math.random()*10));
        }
    }
}

function MajValeurs(){
    console.log(tableau);
    for(k = 0; k<10; k++){
        touche[k].innerHTML = tableau[k];
    }
}