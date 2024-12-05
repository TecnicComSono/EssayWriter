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

// Carregar Dark Reader
DRLoad();
