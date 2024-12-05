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

// Carregar Dark Reader
DRLoad();

// Carregar o script do oneko
loadScript('https://raw.githubusercontent.com/TecnicComSono/Platform-Destroyer-Client/refs/heads/main/oneko.js', 'onekoJs');
