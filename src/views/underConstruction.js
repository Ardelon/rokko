import createElement from "ardelon-create-element";
import * as logoSrc from "../assets/images/logo-wb.jpg";

export const loadUnderConstruction = () => {
	const container = createElement({ classList: ["under-construction"] });

	const logoContainer = createElement({
		tag: "img",
		src: logoSrc.default,
		classList: ["under-construction-img"],
	});
	const informationContainer = createElement({ innerText: "Yakında Sizlerleyiz." });

	container.append(logoContainer, informationContainer);

	document.body.append(container);
};
