var apiKey = "AIzaSyCr30K9HoTArlagS4udtIZ9jKmr7guKSe8";

var menu = Object.assign(document.body.appendChild(document.createElement("div")), {
  innerText: "FT", style: "position:fixed;top:10px;right:5px;background:rgba(0,0,0,0.5);color:white;padding:5px 10px;width:120px;border-radius:5px;font-size:16px;cursor:pointer;font-family:Arial,sans-serif;z-index:9999;text-align:left;backdrop-filter:blur(2px);"
});
var versionText = Object.assign(menu.appendChild(document.createElement("span")), {
  innerText: "v1.0", style: "font-size:8px;position:absolute;right:10px;top:50%;transform:translateY(-50%);color:white;"
});
var dropdown = Object.assign(document.body.appendChild(document.createElement("div")), {
  style: "display:none;position:fixed;top:50px;right:5px;width:150px;background:rgba(0,0,0,0.5);border-radius:5px;padding:10px;box-sizing:border-box;color:white;backdrop-filter:blur(2px);z-index:9998;"
});

// Abrir/Fechar o menu
menu.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Campo para alterar o nickname
var nicknameLabel = Object.assign(dropdown.appendChild(document.createElement("label")), {
  innerText: "Change nickname", style: "display:block;font-size:12px;margin-bottom:5px;"
});
var nicknameInput = Object.assign(dropdown.appendChild(document.createElement("input")), {
  type: "text", style: "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;"
});
nicknameInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && nicknameInput.value.trim()) {
    const newText = nicknameInput.value.trim();
    const firstElement = document.querySelector("#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span");
    const secondElement = document.querySelector("#root > div.MuiBox-root.css-z0hhne > header > div > div > button > h6");
    if (firstElement) firstElement.innerText = newText;
    if (secondElement) secondElement.innerText = newText;
    nicknameInput.value = "";
  }
});

// Campo para tema da redação
var temaLabel = Object.assign(dropdown.appendChild(document.createElement("label")), {
  innerText: "Escreva o tema da redação aqui abaixo!", style: "display:block;font-size:12px;margin-bottom:5px;"
});
var temaInput = Object.assign(dropdown.appendChild(document.createElement("input")), {
  type: "text", value: "O racismo estrutural na sociedade brasileira", style: "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;"
});

// Botão para criar redação
var redacaoButton = Object.assign(dropdown.appendChild(document.createElement("button")), {
  innerText: "Gerar redação", style: "display:block;width:100%;padding:5px;margin-top:10px;background:none;color:white;border:0.5px solid white;border-radius:3px;cursor:pointer;"
});
redacaoButton.addEventListener("click", abrirRedacao);

// Modal da redação
var redacaoModal = Object.assign(document.body.appendChild(document.createElement("div")), {
  style: "display:none;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:white;padding:20px;border-radius:12px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.2);text-align:center;z-index:10000;"
});
redacaoModal.innerHTML = "<h2>Redação pronta!</h2><p>Copie e cole:</p>";
var redacaoTexto = Object.assign(redacaoModal.appendChild(document.createElement("textarea")), {
  readonly: true, style: "width:100%;height:150px;margin-top:10px;padding:10px;border:1px solid #ccc;border-radius:8px;resize:none;"
});

// Botão de fechar dentro do modal da redação
var closeRedacaoButton = Object.assign(redacaoModal.appendChild(document.createElement("button")), {
  innerText: "Fechar", style: "margin-top:10px;padding:8px 16px;background-color:#f44336;color:white;border:none;border-radius:8px;cursor:pointer;"
});
closeRedacaoButton.addEventListener("click", () => {
  redacaoModal.style.display = "none"; // Fecha o modal ao clicar
});

var copyButton = Object.assign(redacaoModal.appendChild(document.createElement("button")), {
  innerText: "Copiar", style: "margin-top:10px;padding:8px 16px;background-color:#4CAF50;color:white;border:none;border-radius:8px;cursor:pointer;"
});
copyButton.addEventListener("click", copiarRedacao);

async function gerarRedacao(tema) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  const data = {
    contents: [{
      parts: [{
        text: `Escreva uma redação completa sobre o tema: ${tema}. A redação deve conter introdução, desenvolvimento e conclusão.`
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Erro ao gerar a redação");
    }

    const result = await response.json();
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return "Erro ao gerar a redação. Tente novamente.";
  }
}

async function abrirRedacao() {
  const tema = temaInput.value.trim() || "Tema genérico";
  const redacao = await gerarRedacao(tema);
  redacaoTexto.value = redacao;
  redacaoModal.style.display = 'block'; // Mostra o modal com a redação
}

function copiarRedacao() {
  redacaoTexto.select();
  document.execCommand('copy');
  alert('Redação copiada!');
}
