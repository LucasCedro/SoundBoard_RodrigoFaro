let audios = [
    { caminho: 'audios/ao_potencia.mp3', legenda: 'Ao Potencia' },
    { caminho: 'audios/cavalo.mp3', legenda: 'Cavalo' },
    { caminho: 'audios/ele_gosta.mp3', legenda: 'Ele Gosta' },
    { caminho: 'audios/pare.mp3', legenda: 'Pare' },
    { caminho: 'audios/tapa.mp3', legenda: 'Tapa' },
    { caminho: 'audios/tome.mp3', legenda: 'Tome' },
    { caminho: 'audios/uii.mp3', legenda: 'Uii' },
    { caminho: 'audios/xiii.mp3', legenda: 'xiii' },
    { caminho: 'audios/danca_gatinho.mp3', legenda: 'Dança gatinho' }
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');
let audioTag = document.querySelector('audio');

for (let i = 0; i < 9; i++) {
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i)
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        });
    });
});