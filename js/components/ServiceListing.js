import ServiceCard from "./ServiceCards.js";

export default function SeviceListing(props){
    let serviceConteiner = document.querySelector('.section-container-frete');
    let services = [];
            for (let frete of  props.data){
                if(props.cepOrigin.value >= frete.postCodeStart &&
                   props.cepOrigin.value <= frete.postCodeEnd && 
                   props.cepDestin.value <= frete.postCodeEnd && 
                   props.cepDestin.value >= frete.postCodeStart )   
                {
                    services.push(...frete.services);
                }
            }
            if(services.length <= 0){
                serviceConteiner.innerHTML = "Nenhuma opção de frete encontrada!"
                return;
            }
            
            for(let service of services){
                serviceConteiner.innerHTML += ServiceCard(service);
              }
}

