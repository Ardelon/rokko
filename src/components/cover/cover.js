import {createElement}  from 'ardelon-create-element';
import * as logoSrc from '../../assets/images/rokko-logo.png';
const loadCover = () => {

    const coverContainer = createElement({classList:['cover-container']});
    const coverBackground = createElement({classList:['cover-background']});
    const cover = createElement({type:'img', src:logoSrc.default,classList:['cover-image']});

    coverContainer.append(coverBackground,cover)
    return coverContainer
}

export default loadCover