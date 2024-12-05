const version = "V2.0.0";

// Inicializa a lista de plugins carregados
const loadedPlugins = [];

// Função para carregar o Dark Reader
function DRLoad() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js";
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

// Função para carregar scripts de URL externa
async function loadScript(url, label) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${label}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(script => {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = script;
            document.head.appendChild(scriptElement);
            loadedPlugins.push(label);
            console.log(`${label} carregado.`);
        })
        .catch(error => console.error(error));
}

// Chama as funções
DRLoad();
(function() {
    'use strict';

    const GIF_URL = "https://doritus.mmrcoss.tech/assets/js/oneko.gif";

    (function oneko() {
        const nekoEl = document.createElement("div");
        let nekoPosX = 32;
        let nekoPosY = 32;
        let mousePosX = 0;
        let mousePosY = 0;
        let frameCount = 0;
        let idleTime = 0;
        let idleAnimation = null;
        let idleAnimationFrame = 0;
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
    console.log("Criando o oneko..."); // Log para verificar a execução
    const nekoEl = document.createElement("div");
    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.zIndex = "999999";
    nekoEl.style.backgroundImage = `url('${GIF_URL}')`;
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = "16px";
    nekoEl.style.top = "16px";

    // Tenta adicionar o elemento ao body
    try {
        document.body.appendChild(nekoEl);
        console.log("Elemento oneko adicionado ao DOM.");
    } catch (error) {
        console.error("Erro ao adicionar o elemento oneko:", error);
    }
}

    })();
})();
