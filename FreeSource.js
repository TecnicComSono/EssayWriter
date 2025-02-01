(function () {
  "use strict";

  var version = "V3.1.4";

  // img url
  const novaImagem1 =
    "https://cdn.jsdelivr.net/gh/TecnicComSono/FontesClient/fonteslogo1.png";
  const novaImagem2 = novaImagem1;
  const novaImagem3 = novaImagem1;
  const logoMini = "https://i.ibb.co/j5cJ5Hf/imagem-2024-12-04-194348740-removebg-preview.png";

  // img
  const seletorImagem1 =
    "#root > div.MuiBox-root.css-z0hhne > div.MuiDrawer-root.MuiDrawer-docked.css-em35d7 > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div.MuiBox-root.css-1j0h67t > img";
  const seletorImagem2 =
    "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.css-o37zhb > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-3.css-ja4s3e > img";
  const seletorImagem3 =
    "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.css-gsuwte > div > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-spacing-xs-1.MuiGrid-grid-xs-12.css-1k7k5az > div:nth-child(1)";
  const selectMiniLogo =
    "#root > div.MuiBox-root.css-z0hhne > div.MuiDrawer-root.MuiDrawer-docked.css-1wa2t5h > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div.MuiBox-root.css-1j0h67t > img";
  
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
    alterarImagem(selectMiniLogo, LogoMini);
  }

  const observer = new MutationObserver(() => {
    substituirImagens();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener("load", substituirImagens);

  function DRLoad() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js";
    script.onload = () => {
      DarkReader.setFetchMethod(window.fetch);
      DarkReader.enable({
        brightness: 125,
        contrast: 105,
        sepia: 0,
        grayscale: 0,
      });
      console.log("Dark Reader carregado.");
    };
    document.head.appendChild(script);
  }

  function OnekoLoad() {
    const GIF_URL =
      "https://cdn.jsdelivr.net/gh/TecnicComSono/FontesClient/oneko.gif";

    const nekoEl = document.createElement("div");
    let nekoPosX = 32,
      nekoPosY = 32;
    let mousePosX = 0,
      mousePosY = 0;
    let frameCount = 0,
      idleTime = 0;
    let idleAnimation = null,
      idleAnimationFrame = 0;
    const nekoSpeed = 10;

    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratch: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function create() {
      nekoEl.id = "oneko";
      nekoEl.style.width = "32px";
      nekoEl.style.height = "32px";
      nekoEl.style.position = "fixed";
      nekoEl.style.zIndex = "999999";
      nekoEl.style.backgroundImage = `url('${GIF_URL}')`;
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
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
        sprite[1] * 32
      }px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;
      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation == null
      ) {
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
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    create();

    console.log("Oneko cat loaded by marcos10pc");
  }

  function sendToast(text, duration = 5000, gravity = "bottom") {
    Toastify({
      text: text,
      duration: duration,
      gravity: gravity,
      position: "center",
      stopOnFocus: true,
      style: { background: "#000000" },
    }).showToast();
  }

  const playAudio = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  /* injecting */

  playAudio(
    "https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/gcelzszy.wav"
  );
  DRLoad();
  OnekoLoad();

  function createToastContainer() {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      container.style.position = "fixed";
      container.style.bottom = "10px";
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
      container.style.zIndex = "9999";
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.gap = "10px";
      document.body.appendChild(container);
    }
    return container;
  }

  function getNickname() {
    const nicknameElement = document.querySelector(
      "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span"
    );

    if (nicknameElement) {
      return nicknameElement.textContent;
    }
    return "Usuário";
  }

  function showToast(message, options = {}) {
    const {
      duration = 3000,
      backgroundColor = "#000000",
      textColor = "#ffffff",
      boxShadow = "0 4px 10px rgba(0, 0, 0, 0.25)",
      icon = "⭐",
      includeNickname = true,
    } = options;

    const container = createToastContainer();

    const toast = document.createElement("div");
    toast.style.padding = "10px 20px";
    toast.style.backgroundColor = backgroundColor;
    toast.style.color = textColor;
    toast.style.boxShadow = boxShadow;
    toast.style.fontFamily = "Arial, sans-serif";
    toast.style.fontSize = "14px";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "10px";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = icon;
    iconElement.style.fontSize = "16px";
    iconElement.style.color = textColor;
    toast.appendChild(iconElement);

    const textElement = document.createElement("span");
    if (includeNickname) {
      const nickname = getNickname();
      textElement.textContent = `Bem-vindo(a), ${nickname}`;
    } else {
      textElement.textContent = message;
    }
    toast.appendChild(textElement);

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  showToast("Tema da sala do futuro alterado com sucesso!", {
    icon: "✅",
    includeNickname: false,
  });

  showToast("Welcome", {});

  const loadingStyle = document.createElement("style");
  loadingStyle.innerHTML = `
              #doritus-loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-family: Arial, sans-serif;
                font-size: 2rem;
                opacity: 0;
                z-index: 9999;
                transition: opacity 0.5s ease-in-out;
              }
              #doritus-loading span {
                display: block;
              }
              #doritus-loading .client {
                color: lightgreen;
              }
            `;
  document.head.appendChild(loadingStyle);

  const loadingScreen = document.createElement("div");
  loadingScreen.id = "doritus-loading";
  loadingScreen.innerHTML = `
              <span>DORITUS.CLIENT</span>
            `;
  document.body.appendChild(loadingScreen);

  function showLoadingScreen() {
    loadingScreen.style.opacity = "1";
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.remove();
        loadingStyle.remove();
      }, 500);
    }, 1000);
  }

  showLoadingScreen();

var menu = document.createElement("div");
menu.innerText = "FT";

menu.style.position = "fixed";
menu.style.top = "10px";
menu.style.right = "5px";
menu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
menu.style.color = "white";
menu.style.padding = "5px 10px";
menu.style.width = "120px";
menu.style.borderRadius = "5px";
menu.style.fontSize = "16px";
menu.style.cursor = "pointer";
menu.style.fontFamily = "Arial, sans-serif";
menu.style.zIndex = "9999";
menu.style.textAlign = "left";
menu.style.backdropFilter = "blur(2px)";

// Criando o elemento de versão
var versionText = document.createElement("span");
versionText.innerText = version;
versionText.style.fontSize = "8px";
versionText.style.position = "absolute";
versionText.style.right = "10px";
versionText.style.top = "50%";
versionText.style.transform = "translateY(-50%)";
versionText.style.color = "white";

menu.appendChild(versionText);

// Criando o menu expansível
var dropdown = document.createElement("div");
dropdown.style.display = "none"; // Menu começa oculto
dropdown.style.position = "fixed";
dropdown.style.top = "50px"; // Abaixo do botão principal
dropdown.style.right = "5px";
dropdown.style.width = "120px";
dropdown.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
dropdown.style.borderRadius = "5px";
dropdown.style.padding = "10px";
dropdown.style.boxSizing = "border-box";
dropdown.style.color = "white";
dropdown.style.backdropFilter = "blur(2px)";
dropdown.style.zIndex = "9998";

// Criando a opção "Alterar nickname"
var nicknameLabel = document.createElement("label");
nicknameLabel.innerText = "Alterar nickname";
nicknameLabel.style.display = "block";
nicknameLabel.style.fontSize = "12px";
nicknameLabel.style.marginBottom = "5px";

var nicknameInput = document.createElement("input");
nicknameInput.type = "text";
nicknameInput.style.width = "100%";
nicknameInput.style.marginBottom = "10px";
nicknameInput.style.padding = "5px";
nicknameInput.style.border = "white solid 2px";
nicknameInput.style.borderRadius = "3px";
nicknameInput.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
nicknameInput.style.color = "white";

// Adicionando comportamento de alteração ao pressionar Enter
nicknameInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const newText = nicknameInput.value.trim();
    if (newText) {
      // Altera o texto do primeiro elemento
      const firstElement = document.querySelector(
        "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span"
      );
      if (firstElement) firstElement.innerText = newText;

      // Altera o texto do segundo elemento
      const secondElement = document.querySelector(
        "#root > div.MuiBox-root.css-z0hhne > header > div > div > button > h6"
      );
      if (secondElement) secondElement.innerText = newText;

      // Reseta o input
      nicknameInput.value = "";
    }
  }
});

// Adicionando as opções ao dropdown
dropdown.appendChild(nicknameLabel);
dropdown.appendChild(nicknameInput);

// Função para abrir/fechar o menu ao clicar no botão
menu.addEventListener("click", function () {
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Adicionando o menu principal e o dropdown ao body
document.body.appendChild(menu);
document.body.appendChild(dropdown);

  function loadWidgetBot() {
    const script = Object.assign(document.createElement("script"), {
      src: "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3",
      async: true,
      onload: () => {
        const discEmbed = new Crate({
          server: "1317527789934739506",
          channel: "1317528101432852500",
          location: ["bottom", "right"],
          notifications: true,
          indicator: true,
          allChannelNotifications: true,
          defer: false,
          color: "#000000",
        });
        plppdo.on("domChanged", () =>
          window.location.href.includes("saladofuturo.educacao.sp.gov.br")
            ? discEmbed.show()
            : discEmbed.hide()
        );
      },
    });
    document.body.appendChild(script);
  }

  loadWidgetBot();
})();
