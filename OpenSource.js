const version = 'V2.0.0';

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

// Função para carregar o script do Oneko diretamente do seu repositório
function loadOneko() {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/TecnicComSono/Platform-Destroyer-Client/refs/heads/main/oneko.js';  // Seu novo URL do repositório
    script.onload = () => {
        console.log("Oneko carregado com sucesso.");
    };
    script.onerror = (e) => {
        console.error("Erro ao carregar o script do Oneko", e);
    };
    document.head.appendChild(script);
}

// Carregar Dark Reader
DRLoad();

// Carregar o script do Oneko
loadOneko();

// Ajuste para garantir a visibilidade do Oneko
(function() {
    const interval = setInterval(() => {
        const onekoEl = document.getElementById('oneko');
        if (onekoEl) {
            // Garantir que o elemento seja visível e posicionado corretamente
            onekoEl.style.zIndex = '999999';  // Coloca acima de outros elementos
            onekoEl.style.position = 'fixed';
            onekoEl.style.left = '16px';
            onekoEl.style.top = '16px';
            onekoEl.style.display = 'block';  // Assegura que o elemento esteja visível
            onekoEl.style.backgroundImage = 'url("https://raw.githubusercontent.com/TecnicComSono/Platform-Destroyer-Client/refs/heads/main/oneko.gif")';  // URL do seu GIF
            clearInterval(interval);  // Interrompe o loop assim que o oneko for encontrado
        }
    }, 100);  // Verifica a cada 100ms se o elemento oneko foi carregado
})();
