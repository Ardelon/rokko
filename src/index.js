import loadCover from "./components/cover/cover";
import loadInformationContainer from "./components/information/informationContainer";
import './assets/style.scss'

const cover = loadCover();
const informationContainer = loadInformationContainer();

document.body.append(cover,informationContainer)