(function () {
  'use strict';
  const version = 'V2.0.0';

    const novaImagem1 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const novaImagem2 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const novaImagem3 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const seletorImagem1 = "#root > div.MuiBox-root.css-z0hhne > div.MuiDrawer-root.MuiDrawer-docked.css-em35d7 > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div.MuiBox-root.css-1j0h67t > img";
    const seletorImagem2 = "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.css-o37zhb > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-3.css-ja4s3e > img";
    const seletorImagem3 = "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.css-gsuwte > div > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-spacing-xs-1.MuiGrid-grid-xs-12.css-1k7k5az > div:nth-child(1)"
    function alterarImagem(seletor, novaSrc) {
        const imagem = document.querySelector(seletor);
        if (imagem) {
            imagem.src = novaSrc;
        }
    }
    function substituirImagens() {
        alterarImagem(seletorImagem1, novaImagem1);
        alterarImagem(seletorImagem2, novaImagem2);
        alterarImagem(seletorImagem3, novaImagem3);
    }
    const observer = new MutationObserver(() => {
        substituirImagens();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('load', substituirImagens);
  
  // Função para carregar o DarkReader
  function DRLoad() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js";
    script.onload = () => {
      DarkReader.setFetchMethod(window.fetch);
      DarkReader.enable({
        brightness: 125,
        contrast: 105,
        sepia: 0,
        grayscale: 0
      });
      console.log("Dark Reader carregado.");
    };
    document.head.appendChild(script);
  }

  // Função para carregar o Oneko (o gato animado)
  function OnekoLoad() {
    const GIF_URL = "https://cdn.jsdelivr.net/gh/TecnicComSono/Platform-Destroyer-Client/oneko.gif";

    (function oneko() {
      const nekoEl = document.createElement("div");
      let nekoPosX = 32, nekoPosY = 32;
      let mousePosX = 0, mousePosY = 0;
      let frameCount = 0, idleTime = 0;
      let idleAnimation = null, idleAnimationFrame = 0;
      const nekoSpeed = 10;
      const spriteSets = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratch: [[-5, 0], [-6, 0], [-7, 0]],
        tired: [[-3, -2]],
        sleeping: [[-2, 0], [-2, -1]],
        N: [[-1, -2], [-1, -3]],
        NE: [[0, -2], [0, -3]],
        E: [[-3, 0], [-3, -1]],
        SE: [[-5, -1], [-5, -2]],
        S: [[-6, -3], [-7, -2]],
        SW: [[-5, -3], [-6, -1]],
        W: [[-4, -2], [-4, -3]],
        NW: [[-1, 0], [-1, -1]]
      };

      function create() {
        nekoEl.id = "oneko";
        nekoEl.style.width = "32px";
        nekoEl.style.height = "32px";
        nekoEl.style.position = "fixed";
        nekoEl.style.zIndex = "999999";
        nekoEl.style.backgroundImage = url('${GIF_URL}');
        nekoEl.style.imageRendering = "pixelated";
        nekoEl.style.left = "16px";
        nekoEl.style.top = "16px";
        document.body.appendChild(nekoEl);

        document.onmousemove = (event) => {
          mousePosX = event.clientX;
          mousePosY = event.clientY;
        };
        window.onekoInterval = setInterval(frame, 100);
      }

      function setSprite(name, frame) {
        const sprite = spriteSets[name][frame % spriteSets[name].length];
        nekoEl.style.backgroundPosition = ${sprite[0] * 32}px ${sprite[1] * 32}px;
      }

      function resetIdleAnimation() {
        idleAnimation = null;
        idleAnimationFrame = 0;
      }

      function idle() {
        idleTime += 1;
        if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
          idleAnimation = ["sleeping", "scratch"][Math.floor(Math.random() * 2)];
        }

        switch (idleAnimation) {
          case "sleeping":
            if (idleAnimationFrame < 8) {
              setSprite("tired", 0);
              break;
            }
            setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
            if (idleAnimationFrame > 192) {
              resetIdleAnimation();
            }
            break;
          case "scratch":
            setSprite("scratch", idleAnimationFrame);
            if (idleAnimationFrame > 9) {
              resetIdleAnimation();
            }
            break;
          default:
            setSprite("idle", 0);
            return;
        }
        idleAnimationFrame += 1;
      }

      function frame() {
        frameCount += 1;
        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
          idle();
          return;
        }

        idleAnimation = null;
        idleAnimationFrame = 0;

        if (idleTime > 1) {
          setSprite("alert", 0);
          idleTime = Math.min(idleTime, 7);
          idleTime -= 1;
          return;
        }

        let direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";

        setSprite(direction, frameCount);
        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;
        nekoEl.style.left = ${nekoPosX - 16}px;
        nekoEl.style.top = ${nekoPosY - 16}px;
      }

      create();
    })();

    console.log("Oneko cat loaded by marcos10pc");
  }

  //misc   
  
  const playAudio = (url) => {
      const audio = new Audio(url);  // Cria um objeto de áudio com a URL fornecida
      audio.play();  // Toca o áudio
  };

// INJECT
  
  playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/gcelzszy.wav');
  DRLoad();
  OnekoLoad();
  // Função para pegar o nome do usuário
function getNickname() {
    const nicknameElement = document.querySelector("#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span");

    // Verifica se o nome foi encontrado
    if (nicknameElement) {
        return nicknameElement.textContent; // Retorna o texto do nome
    }
    return "Usuário"; // Retorna "Usuário" caso o nome não seja encontrado
}

// Função para criar a notificação
function showToast(message, options = {}) {
    const {
        duration = 3000, // Duração padrão de 3 segundos
        backgroundColor = '#000000', // Fundo preto
        textColor = '#ffffff', // Texto branco
        boxShadow = '0 4px 10px rgba(0, 0, 0, 0.25)', // Sombra leve
        icon = '⭐', // Ícone da estrela por padrão
        includeNickname = true, // Se deve incluir o nickname ou não
    } = options;

    // Cria o container
    const container = createToastContainer();

    // Cria o elemento do toast
    const toast = document.createElement('div');
    toast.style.padding = '10px 20px';
    toast.style.backgroundColor = backgroundColor;
    toast.style.color = textColor;
    toast.style.boxShadow = boxShadow;
    toast.style.fontFamily = 'Arial, sans-serif';
    toast.style.fontSize = '14px';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px'; // Espaçamento entre ícone e texto
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';

    // Adiciona o ícone (estrela)
    const iconElement = document.createElement('span');
    iconElement.innerHTML = icon; // Adiciona o ícone da estrela
    iconElement.style.fontSize = '16px';
    iconElement.style.color = textColor;
    toast.appendChild(iconElement);

    // Adiciona o texto (com o nickname, se necessário)
    const textElement = document.createElement('span');
    if (includeNickname) {
        const nickname = getNickname(); // Pega o nome do usuário
        textElement.textContent = Olá, ${nickname}; // Mensagem com o nome
    } else {
        textElement.textContent = message; // Apenas a mensagem, sem nickname
    }
    toast.appendChild(textElement);

    // Adiciona o toast ao container
    container.appendChild(toast);

    // Faz o toast aparecer
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Remove o toast após a duração especificada
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300); // Aguarda a transição antes de remover
    }, duration);
}

// Exemplo de uso:
// A primeira mensagem com a mensagem "Doritus.Client injetado com sucesso!"
showToast('Doritus.Client injetado com sucesso!', {
    icon: '✅', // Ícone de check
    includeNickname: false, // Não inclui o nome do usuário
});

// A segunda mensagem com "Seja bem-vindo"
showToast('Seja bem-vindo!', {
});


})();
