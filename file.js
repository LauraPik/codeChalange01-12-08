// -------------------------------------section 1----------------------------------
// masyvas su objektais
let duomenys = [
    {vardas: 'Jonas', 
    amzius: 25, 
    miestas: 'Vilnius'}, 

    {vardas: 'Ona', 
    amzius: 30, 
    miestas: 'Kaunas'},

    {vardas: 'Tadas', 
    amzius: 35, 
    miestas: 'Alytus'},

    {vardas: 'Petras', 
    amzius: 23, 
    miestas: 'Telciai'}

]


//pasizymiu html'e datalistus
let datalistName  = document.querySelector('#name-list');

let datalistAge  = document.querySelector('#age-list');


let datalistCity  = document.querySelector('#city-list');

//prasuku cikla, kad atvaizduoti duomenis is masyvo su objektais

for(let i = 0; i < duomenys.length; i++){
    let optionName = document.createElement('option');
    let optionAge = document.createElement('option');
    let optionCity = document.createElement('option');

    datalistName.appendChild(optionName);
    datalistAge.appendChild(optionAge);
    datalistCity.appendChild(optionCity);
    

    optionName.textContent = duomenys[i].vardas;
    optionAge.textContent = duomenys[i].amzius;
    optionCity.textContent = duomenys[i].miestas;
}


// -------------------------------------------section 2--------------------------------


let inputName  = document.querySelector('#names');
let inputAge  = document.querySelector('#age');
let inputCity  = document.querySelector('#city');

console.log(duomenys[0].vardas)

function addRowtoTable(e){
    
    let tbody = document.querySelector('.tableBody');
    
    
        if( inputName.value == duomenys[0].vardas && inputAge.value == duomenys[0].amzius && inputCity.value == duomenys[0].miestas ){
        let tr = document.createElement('tr');
        tbody.appendChild(tr)
        let tdName = document.createElement('td');
        tr.appendChild(tdName);
        tdName.textContent = duomenys[0].vardas;

        let tdAge = document.createElement('td');
        tr.appendChild(tdAge);
        tdAge.textContent = duomenys[0].amzius;
        
        let tdCity = document.createElement('td');
        tr.appendChild(tdCity);
        tdCity.textContent = duomenys[0].miestas;

    }
    else if(inputName.value == duomenys[1].vardas && inputAge.value == duomenys[1].amzius && inputCity.value == duomenys[1].miestas){
        let trOne = document.createElement('tr');
        tbody.appendChild(trOne)

        let tdName = document.createElement('td');
        trOne.appendChild(tdName);
        tdName.textContent = duomenys[1].vardas;

        let tdAge = document.createElement('td');
        trOne.appendChild(tdAge);
        tdAge.textContent = duomenys[1].amzius;
        
        let tdCity = document.createElement('td');
        trOne.appendChild(tdCity);
        tdCity.textContent = duomenys[1].miestas;

    }
    else if(inputName.value == duomenys[2].vardas && inputAge.value == duomenys[2].amzius && inputCity.value == duomenys[2].miestas){
        let trTwo = document.createElement('tr');
        tbody.appendChild(trTwo)

        let tdName = document.createElement('td');
        trTwo.appendChild(tdName);
        tdName.textContent = duomenys[2].vardas;

        let tdAge = document.createElement('td');
        trTwo.appendChild(tdAge);
        tdAge.textContent = duomenys[2].amzius;
        
        let tdCity = document.createElement('td');
        trTwo.appendChild(tdCity);
        tdCity.textContent = duomenys[2].miestas;

    }
    else if(inputName.value == duomenys[3].vardas && inputAge.value == duomenys[3].amzius && inputCity.value == duomenys[3].miestas){
        let trThree = document.createElement('tr');
        tbody.appendChild(trThree)

        let tdName = document.createElement('td');
        trThree.appendChild(tdName);
        tdName.textContent = duomenys[3].vardas;

        let tdAge = document.createElement('td');
        trThree.appendChild(tdAge);
        tdAge.textContent = duomenys[3].amzius;
        
        let tdCity = document.createElement('td');
        trThree.appendChild(tdCity);
        tdCity.textContent = duomenys[3].miestas;

    }
}


if(inputName.value ==' '){
    inputAge.style.display = "none"
    inputCity.style.display = "none"
}else{
    inputAge.style.display = "inline"
    inputCity.style.display = "inline"
}

inputName.addEventListener('input', addRowtoTable);
inputAge.addEventListener('input', addRowtoTable);
inputCity.addEventListener('input', addRowtoTable);