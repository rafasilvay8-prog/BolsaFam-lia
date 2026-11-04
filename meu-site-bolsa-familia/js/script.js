// Painel de acessibilidade
const accessibilityToggle = document.getElementById("accessibility-toggle");
const accessibilityPanel = document.getElementById("accessibility-panel");
const closeAccessibility = document.getElementById("close-accessibility");

if (accessibilityToggle && accessibilityPanel) {
  accessibilityToggle.addEventListener("click", () => {
    const isOpen = accessibilityToggle.getAttribute("aria-expanded") === "true";
    accessibilityToggle.setAttribute("aria-expanded", String(!isOpen));
    accessibilityPanel.hidden = isOpen;
  });
}
if (closeAccessibility && accessibilityPanel && accessibilityToggle) {
  closeAccessibility.addEventListener("click", () => {
    accessibilityPanel.hidden = true;
    accessibilityToggle.setAttribute("aria-expanded", "false");
    accessibilityToggle.focus();
  });
}

let fontScale = 1;
const rootElement = document.documentElement;
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");
const toggleContrast = document.getElementById("toggle-contrast");
const resetAccessibility = document.getElementById("reset-accessibility");
if (increaseFont) increaseFont.addEventListener("click", () => {
  fontScale = Math.min(1.25, +(fontScale + 0.05).toFixed(2));
  rootElement.style.setProperty("--font-scale", fontScale);
});
if (decreaseFont) decreaseFont.addEventListener("click", () => {
  fontScale = Math.max(0.85, +(fontScale - 0.05).toFixed(2));
  rootElement.style.setProperty("--font-scale", fontScale);
});
if (toggleContrast) toggleContrast.addEventListener("click", () => document.body.classList.toggle("high-contrast"));
if (resetAccessibility) resetAccessibility.addEventListener("click", () => {
  fontScale = 1;
  rootElement.style.setProperty("--font-scale", 1);
  document.body.classList.remove("high-contrast");
});

// Conteúdo numérico centralizado em um único objeto para facilitar atualizações.
// ATENÇÃO: valores fornecidos como referência pelo solicitante; confirme a competência oficial antes de publicar.
const bolsaFamiliaData = {
  referenceMonth: "Competência a confirmar",
  families: "19,08 milhões",
  benefits: [
    { code: "BRC", value: "50,08 milhões", description: "Benefícios de Renda de Cidadania" },
    { code: "BCO", value: "17,91 milhões", description: "Benefícios Complementares" },
    { code: "BPI", value: "8,44 milhões", description: "Benefícios de Primeira Infância" },
    { code: "BVG", value: "670,1 mil", description: "Benefícios Variáveis Familiares Gestante" },
    { code: "BVN", value: "339,7 mil", description: "Benefícios Variáveis Familiares Nutriz" },
    { code: "BVC", value: "11,61 milhões", description: "Benefícios Variáveis Familiares Criança" },
    { code: "BVA", value: "2,74 milhões", description: "Benefícios Variáveis Familiares Adolescente" }
  ]
};
const familyStatNumber = document.getElementById("family-stat-title");
if (familyStatNumber) familyStatNumber.textContent = bolsaFamiliaData.families;
const statReference = document.getElementById("stat-reference");
if (statReference) {
  statReference.textContent = `Valor de referência informado no briefing • ${bolsaFamiliaData.referenceMonth}; validar em fonte oficial antes da publicação.`;
}
bolsaFamiliaData.benefits.forEach((benefit) => {
  const item = document.querySelector(`[data-benefit-code="${benefit.code}"]`);
  if (!item) return;
  const code = item.querySelector(".benefit-copy strong");
  const value = item.querySelector(".benefit-copy b");
  const description = item.querySelector(".benefit-copy span");
  if (code) code.textContent = benefit.code;
  if (value) value.textContent = benefit.value;
  if (description) description.textContent = benefit.description;
});

// O marco de 2003 é o único com texto histórico fornecido nesta versão.
const yearButton = document.querySelector('[data-year="2003"]');
const historyText = document.getElementById("history-text");
if (yearButton && historyText && typeof historyText.animate === "function") {
  yearButton.addEventListener("click", () => {
    yearButton.classList.add("is-active");
    yearButton.setAttribute("aria-pressed", "true");
    historyText.animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 200, easing: "ease-out" });
  });
}


// VLS


const video = document.getElementById("videoVSL");
const placeholder = document.getElementById("videoPlaceholder");

if (video && placeholder) {

    video.addEventListener("loadeddata", () => {
        placeholder.style.display = "none";
    });

    video.addEventListener("error", () => {
        placeholder.style.display = "flex";
    });

}
