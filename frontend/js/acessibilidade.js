
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;



function togglePainel() {
  const painel = document.getElementById('painel-acessibilidade');
  painel.classList.toggle('oculto');
  painel.classList.toggle('visivel');
}



function toggleFonte() {
  const atual = document.body.style.fontSize;
  document.body.style.fontSize = atual === '1.2em' ? '' : '1.2em';
}


function toggleFonteLegivel() {
  const atual = document.body.style.fontFamily;
  document.body.style.fontFamily = atual.includes('OpenDyslexic') ? '' : '"OpenDyslexic", Arial, sans-serif';
}


function modoContraste() {
  document.body.classList.toggle('contraste');
}


function mascaraLeitura() {
  const existente = document.getElementById('mascara-leitura');
  if (existente) {
    existente.remove();
  } else {
    const mascara = document.createElement('div');
    mascara.id = 'mascara-leitura';
    mascara.style.position = 'fixed';
    mascara.style.top = '50%';
    mascara.style.left = '0';
    mascara.style.width = '100%';
    mascara.style.height = '60px';
    mascara.style.backgroundColor = 'rgba(0,0,0,0.6)';
    mascara.style.pointerEvents = 'none';
    mascara.style.transform = 'translateY(-50%)';
    mascara.style.zIndex = '9999';
    document.body.appendChild(mascara);
  }
}


function guiaLeitura() {
  const existente = document.getElementById('guia-leitura');
  if (existente) {
    existente.remove();
    document.removeEventListener('mousemove', moverGuia);
  } else {
    const guia = document.createElement('div');
    guia.id = 'guia-leitura';
    guia.style.position = 'fixed';
    guia.style.top = '0';
    guia.style.left = '0';
    guia.style.width = '100%';
    guia.style.height = '2px';
    guia.style.backgroundColor = 'blue';
    guia.style.pointerEvents = 'none';
    guia.style.zIndex = '9999';
    document.body.appendChild(guia);
    document.addEventListener('mousemove', moverGuia);
  }
}


function moverGuia(e) {
  const guia = document.getElementById('guia-leitura');
  if (guia) guia.style.top = `${e.clientY}px`;
}


function ativarLupa() {
  document.body.style.zoom = document.body.style.zoom === '1.2' ? '1' : '1.2';
}


function cursorGrande() {
  const atual = document.body.style.cursor;
  document.body.style.cursor = atual.includes('cur1043.cur')
    ? 'auto'
    : 'url(https://cur.cursors-4u.net/cursors/cur-11/cur1043.cur), auto';
}




function controleVoz() {
  if (!window.SpeechRecognition) {
    alert("Seu navegador não suporta reconhecimento de voz.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';

  recognition.onresult = function (event) {
    const comando = event.results[0][0].transcript.toLowerCase();

    if (comando.includes('contraste')) modoContraste();
    if (comando.includes('fonte')) toggleFonte();
    if (comando.includes('tipo')) toggleFonteLegivel();
    if (comando.includes('lupa')) ativarLupa();
    if (comando.includes('cursor')) cursorGrande();
    if (comando.includes('guia')) guiaLeitura();
    if (comando.includes('máscara')) mascaraLeitura();
  };

  recognition.start();
}


function ativarVLibras() {
  if (document.querySelector('[vw]')) return;

  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  document.body.appendChild(script);

  const div = document.createElement('div');
  div.innerHTML = `
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}
