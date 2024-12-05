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
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Usando o proxy CORS
    const proxiedUrl = proxyUrl + url;

    return fetch(proxiedUrl)
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

// Carrega o script do oneko.js usando o proxy CORS
loadScript('https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js', 'onekoJs');
