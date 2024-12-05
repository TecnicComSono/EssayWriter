(function () {
  'use strict';
  const version = 'V2.0.0';

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
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
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
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
      }

      create();
    })();

    console.log("Oneko cat loaded by marcos10pc");
  }

        const playAudio = (url) => {
            const audio = new Audio(url);  // Cria um objeto de áudio com a URL fornecida
            audio.play();  // Toca o áudio
        };

        playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/gcelzszy.wav');
  DRLoad();
  OnekoLoad();
})();
