import {createElement}  from 'ardelon-create-element';
import * as logoSrc from '../../assets/images/rokko-logo.png';
const loadCover = () => {

    const coverContainer = createElement({classList:['cover-container']});
    const coverBackground = createElement({classList:['cover-background']});
    const cover = createElement({type:'img', src:logoSrc.default,classList:['cover-image']});

    const bodyCover = createElement({classList:['body-cover']})
    coverContainer.append(coverBackground,cover)
    document.body.append(bodyCover)
    return coverContainer
}

export default loadCover