import Address from "./components/address.js";
import ServiceCard from "./components/ServiceCards.js";
import SeviceListing from "./components/ServiceListing.js";
const url = 'https://viacep.com.br/ws';

const formCalcularFrete = document.getElementById('calc-frete');
const enderecoOrigem = document.getElementById('endereco-origem');
const enderecoDestino = document.getElementById('endereco-destino');

formCalcularFrete.addEventListener('submit', function(event){
    event.preventDefault();

let cepOrigin = event.target.querySelector('#cepOrigin');
let cepDestin = event.target.querySelector('#cepDestin');

fetch(`${url}/${cepOrigin.value}/json`).then(function(response) {
        return response.json();
    }).then(function(responseBody) {
        enderecoOrigem.innerHTML = Address(responseBody)
    }); 



        fetch(`${url}/${cepDestin.value}/json`).then(function(response) {
                return response.json();
            }).then(function(responseBody) {
                enderecoDestino.innerHTML = Address(responseBody)
            }); 


        fetch('js/db.json').then(function(response){
            return response.json();
        }).then(function(responseBody){


            SeviceListing({
                data: responseBody,
                cepOrigin: cepOrigin,
                cepDestin: cepDestin
            });

        })
});



























//fetch(url).then(function(response) {
//        return response.text();
 //   }) 
 //       .then(function(responseBody){
 //           console.log(responseBody)
//   })

    

//fetch = promise: executa a função. 
//then = ele executa a função somente quando a informação dela estiver //carregada.