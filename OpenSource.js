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

// Carrega o Dark Reader
DRLoad();

// Carrega o script do oneko.js usando JSDelivr (com suporte para CORS)
loadScript('https://cdn.jsdelivr.net/gh/adryd325/oneko.js@main/oneko.js', 'onekoJs');
