export default function ServiceCard(props) {

    return `
        <div class="section-items-frete">
            <ul class="box-frete">
                <li class="item-frete">
                    <span class="item-1">Serviço</span>
                    <span class="item-1">${props.name}</span>
                </li>
                <li class="item-frete">
                    <span class="item-1">Prazo</span>   
                    <span class="item-1">${props.days}</span>
                </li>
                <li class="item-frete">
                    <span class="item-1">Preço</span>
                    <span class="item-1">${props.price}</span>
                </li>
                <li class="item-frete">
                    <span class="item-1">Data da postagem</span>
                    <span class="item-2">16/09/2024</span>
                </li>
            </ul>
        </div>
            `
}