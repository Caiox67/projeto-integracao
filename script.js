const URL_PLANILHA = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRwJIl4V-JSaeSo5ofTtBT31cKtZQ9Tt5s-vYxa2r1rAJH4tlg1C11crdXh-8NK69QSrYR1murpX4tD/pub?gid=0&single=true&output=csv';

const cardapio = document.getElementById('cardapio');

async function carregarCardapio() {
    const resposta = await fetch(URL_PLANILHA);
    const texto = await resposta.text();

    const linhas = texto.trim().split('\n');
    linhas.shift();

    cardapio.innerHTML = '';

    linhas.forEach((linha) => {
        const [nome, preco, categoria] = linha.split(',');
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `

        <div>
            <div>${nome}</div>
            <div class="categoria">${categoria}</div>
        </div>
        <div class="preco">R$ ${Number(preco).toFixed(2).replace('.', ',')}</div>`;
        cardapio.appendChild(item);
    });
}
carregarCardapio();
