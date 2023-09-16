import { createElement } from "ardelon-create-element";
import * as logoSrc from "../assets/images/logo-wb.jpg";

export const loadUnderConstruction = () => {
  const dumyContainer = createElement({
    classList: ["under-construction-wrapper"],
  });
  const container = createElement({ classList: ["under-construction"] });

  const logoContainer = createElement({
    tag: "img",
    src: logoSrc.default,
    classList: ["under-construction-img"],
  });
  const informationContainer = createElement({
    innerText: "Yakında Sizlerleyiz.",
  });

  container.append(logoContainer, informationContainer);
  dumyContainer.append(container);
  document.body.append(dumyContainer);
};

export const firstBoardDecisions = () => {
  const container = createElement({ classList: ["board-decision"] });
  const firstTitle = createElement({
    tag: "h1",
    innerText: "İlk Görevlendirme Kararı",
  });
  const paragraph = createElement({
    tag: "p",
    innerText: `Dernek kurucu üyeleri dernek merkezinde, 16.09.2023 tarihinde toplanmış ve ilk genel kurul toplantısının; 07/10/2023 Cumartesi günü saat 10:00'da dernek merkezinde, üye çoğunluğu sağlanamadığı takdirde 14/10/2023 tarihinde aynı yer ve saatte toplanılmasına karar verilmiştir.`,
  });

  container.append(firstTitle, paragraph);

  document.body.append(container);
};
