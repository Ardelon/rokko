import { createElement } from 'ardelon-create-element';

const loadCardList = (props) => {
	const cardListContainer = createElement({
		classList: ['card-list-container'],
	});

	props.forEach((member) => {
		const card = generateCard(member);
		cardListContainer.append(card);
	});

	return cardListContainer;
};

const generateCard = (props) => {
	const cardContainer = createElement({ classList: ['card-container'] });
    const image = createElement({type:'img', src:props.image, classList:['card-image']})
    const credentials = createElement({type:'h5', innerText:props.name, classList:['card-credentials']})

    cardContainer.append(image,credentials)
    return cardContainer
};

export default loadCardList;
