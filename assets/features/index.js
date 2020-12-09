const people = [
    {name: "Joao", street: "Burslem Street", city: "Porto Alegre", state: "RS", country: "Brazil", telephone: "99999999", birthday: "28/10/1987"},
    {name: "Maria", street: "Snail's Bank", city: "Alegrete", state:"RS" , country: "Brazil", telephone: "88888888", birthday: "25/11/1990"},
    {name: "Pedro", street: "Poolhill Close", city: "Tangamandápio", state: "RS", country: "Brazil", telephone: "77777777", birthday: "28/01/1970"},
    {name: "Jose", street: "Brockenhurst Gardens", city: "Cachoeirinha", state: "RS", country: "Brazil", telephone: "66666666", birthday: "05/01/2000"},
    {name: "Astolfo", street: "Sunnybank Terrace", city: "Anta Gorda", state: "RS", country: "Brazil", telephone: "55555555", birthday: "12/07/1995"}
];

function content(){
    var container = document.querySelector(".sidebar");
    var list = document.createElement("UL");

    people.forEach(element => {
        
        var item = document.createElement("LI");
        var itemText = document.createTextNode(element.name); 
        item.appendChild(itemText);
        list.appendChild(item);
    });
    
    container.appendChild(list);
}

const selectedPerson = document.querySelector(".sidebar");
selectedPerson.addEventListener("click", element =>{
    const NomeSelecionado = element.target.innerText;
    const naLista = nome => nome.name === NomeSelecionado;
    const resposta = people.find(naLista);

    document.querySelector(".selected-person-name").innerText = resposta.name;
    document.querySelector("#street").value = resposta.street;
    document.querySelector("#city").value = resposta.city;
    document.querySelector("#state").value = resposta.state;
    document.querySelector("#country").value = resposta.country;
    document.querySelector("#telephone").value = resposta.telephone;
    document.querySelector("#birthday").value = resposta.birthday;

});
