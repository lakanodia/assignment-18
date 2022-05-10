let data = [
{
    id: 1,
    imageUrl: 'https://blog.1password.com/posts/2021/women-in-tech/header.svg',
    title: 'slide title 1',
    url:'https://www.google.com/'
},
{
    id: 2,
    imageUrl: 'https://women-in-tech.org/wp-content/uploads/2021/08/wit-home7-980x551.png',
    title: 'slide title 1',
    url:'https://www.google.com/'
},
{
    id: 3,
    imageUrl: 'https://blog.1password.com/posts/2021/women-in-tech/header.svg',
    title: 'slide title 3',
    url:'https://www.google.com/'
},
{
    id: 4,
    imageUrl: 'https://women-in-tech.org/wp-content/uploads/2021/08/wit-home7-980x551.png',
    title: 'slide title 4',
    url:'https://www.google.com/'
}
];

let arrowLeft = document.getElementById('leftArrow');
let arrowRight = document.getElementById('rightArrow');
let slideContent = document.getElementById('sliderContent');

let sliderIndex = 0;

function createImgTag(item) {
    let imgDivTag = document.createElement('img');
    imgDivTag.setAttribute('scr', item.imageUrl);
    imgDivTag.setAttribute('alt', item.id);
    imgDivTag.classList.add('backgroundImg');
    return imgTag;
}

function createH2Tag(item){
    let h2Tag = document.createElement('h2');
    h2Tag.classList.add('slid-title');
    h2Tag.append(item.title);
    return h2Tag;
}

function setSlider(){
    slideContent.innerHTML = ' ';
    let imgTag = createImgTag(data[sliderIndex]);
    let h2slideTag = createImgTag(data[sliderIndex]);
    slideContent.appendChild(imgTag);
    slideContent.appendChild(h2slideTag);
}

