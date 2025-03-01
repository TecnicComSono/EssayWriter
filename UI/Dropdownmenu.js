var version = "1.0.0";
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
  var versionText = document.createElement("span");
  versionText.innerText = version;
  versionText.style.fontSize = "8px";
  versionText.style.position = "absolute";
  versionText.style.right = "10px";
  versionText.style.top = "50%";
  versionText.style.transform = "translateY(-50%)";
  versionText.style.color = "white";
  menu.appendChild(versionText);
  var dropdown = document.createElement("div");
  dropdown.style.display = "none";
  dropdown.style.position = "fixed";
  dropdown.style.top = "50px";
  dropdown.style.right = "5px";
  dropdown.style.width = "120px";
  dropdown.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  dropdown.style.borderRadius = "5px";
  dropdown.style.padding = "10px";
  dropdown.style.boxSizing = "border-box";
  dropdown.style.color = "white";
  dropdown.style.backdropFilter = "blur(2px)";
  dropdown.style.zIndex = "9998";
  var nicknameLabel = document.createElement("label");
  nicknameLabel.innerText = "Change nickname";
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
  nicknameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const newText = nicknameInput.value.trim();
      if (newText) {
        const firstElement = document.querySelector(
          "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span"
        );
        if (firstElement) firstElement.innerText = newText;
        const secondElement = document.querySelector(
          "#root > div.MuiBox-root.css-z0hhne > header > div > div > button > h6"
        );
        if (secondElement) secondElement.innerText = newText;
        nicknameInput.value = "";
      }
    }
  });
  dropdown.appendChild(nicknameLabel);
  dropdown.appendChild(nicknameInput);
  menu.addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  });
  document.body.appendChild(menu);
  document.body.appendChild(dropdown);
