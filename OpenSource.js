const version = "V2.0.0";

// Functions
    
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
        };
        document.head.appendChild(script);
    }

// Misc

async function loadScript(url, label) { return fetch(url).then(response => response.text()).then(script => { loadedPlugins.push(label); eval(script); }); }

// Code


loadScript('https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js', 'onekoJs')
