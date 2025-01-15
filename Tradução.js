const translateButton = document.getElementById("translate-button");
let isEnglish = false;

const translations = {
  "Bem-vindo ao Portfólio": "Welcome to the Portfolio",
  "Concluído": "Completed",
  "Em Progresso": "In Progress",
  "Qualidades": "Qualities",
  "Metas e Projetos": "Goals and Projects",
  "Persistência": "Persistence",
  "Facilidade no uso de IA": "Ease of using AI",
  "Determinação": "Determination",
  "Cooperatividade": "Cooperation",
  "Facilidade na comunicação": "Ease of communication",
  "Meu GitHub não demonstra muita atividade porque eu costumo fazer uploads apenas das versões beta e realizo commits apenas quando os projetos estão prontos ou quase concluídos.":"My GitHub doesn't show much activity because I usually upload only the beta versions and make commits only when the projects are finished or nearly completed."
};

translateButton.addEventListener("click", () => {
  const texts = document.querySelectorAll("h1, p, li, a");

  texts.forEach((element) => {
    const originalText = element.textContent.trim();
    // Traduz ou reverte com base no idioma atual
    if (isEnglish) {
      // Traduz de volta para Português
      const portugueseText = Object.keys(translations).find(
        (key) => translations[key] === originalText
      );
      if (portugueseText) {
        element.textContent = portugueseText;
      }
    } else {
      // Traduz para Inglês
      if (translations[originalText]) {
        element.textContent = translations[originalText];
      }
    }
  });

  // Alterna o estado do idioma
  isEnglish = !isEnglish;

  // Atualiza o texto do botão
  translateButton.textContent = isEnglish ? "PT" : "EN";
});