let aprimi = [];
let arr_glob = [];

window.onload = function() {
    primi_fino(10001);
    for(let i = 0; i<aprimi.length;i++){
        document.getElementById("k10").innerHTML += aprimi[i] +" ";
    }
}

function calcola(){
    let inp = document.getElementById("inp").value;
    let vis = document.getElementById("inp2");

    if(!isNaN(parseInt(inp))){
        arr_glob.push(parseInt(inp));
        vis.innerHTML += parseInt(inp) + " ";
    }else{
        alert("Inserire un numero valido");
    }
}

function calcolavero(){
    aprimi = [];
    document.getElementById("ris").innerHTML = "Numeri primi: ";
    primi_fino(max_arr(arr_glob)+1);
    for(let i = 0; i<arr_glob.length; i++){
        if(aprimi.indexOf(arr_glob[i])!=-1){
            document.getElementById("ris").innerHTML += arr_glob[i] + " ";
        }
    }
}

function cancella(){
    arr_glob = [];
    document.getElementById("inp2").innerHTML = "";
}

function primi_fino(fine){
    aprimi = [];
    let primo;
    for(let i = 2; i<fine; i++){
        primo = true;
        for(let j = 2; j<i; j++){
            if(i%j==0){
                primo = false;
            }
        }
        if(primo){
            aprimi.push(i);
        }
    }
}

function max_arr(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max) { max = arr[i]; }
    }
    return max;
}