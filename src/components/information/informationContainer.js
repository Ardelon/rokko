import {createElement} from 'ardelon-create-element';
import {members} from '../../data/members';
import loadCardList from './personCard';
const loadInformationContainer = () => {

    const informationContainer = createElement({classList:['information-container']});
    const header = createElement({classList:['header']});
    const body = createElement({classList:['body']});
    const title = createElement({type:'h1', classList:['title'], innerText:'ROKKO'})
    const description = createElement({type:'h4', classList:['desktop-description'], innerText:'Rock Kültürünü Koruma Derneği orem Ipsum is simply dummy text of the printing and typesettin Rock Kültürünü Koruma Derneği orem Ipsum is simply dummy text of the printing and typesettin Rock Kültürünü Koruma Derneği orem Ipsum is simply dummy text of the printing and typesettin Rock Kültürünü Koruma Derneği orem Ipsum is simply dummy text of the printing and typesettin'});
    const mobileDescription = createElement({type:'h4', classList:['mobile-description'], innerText:'Rock Kültürünü Koruma Derneği orem Ipsum is simply dummy text of the printing and typesettin'})
    
    const cardList = loadCardList(members);
    
    
    header.append(title,description,mobileDescription);
    body.append(cardList);
    informationContainer.append(header,body);

    return informationContainer

}

export default loadInformationContainer