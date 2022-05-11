let data = [
{
    id: 1,
    imageUrl: 'https://s3-cdn.designerjourneys.com/blog/wp-content/uploads/2021/01/25080547/john-hernandez-IL-fBBnF-GU-unsplash-2-scaled.jpg',
    title: 'Philippines',
    url:'https://www.google.com/'
},
{
    id: 2,
    imageUrl: 'https://a.cdn-hotels.com/gdcs/production129/d1719/eaa3ce8a-cb82-4e0c-9b8a-1dda760d14d2.jpg',
    title: 'Tailand ',
    url:'https://www.google.com/'
},
{
    id: 3,
    imageUrl: 'https://i2.wp.com/www.alltherooms.com/blog/wp-content/uploads/2018/09/Feature-Beaches-in-the-Maldives-By-Nikolay-007.jpg?fit=1000%2C667&ssl=1',
    title: 'maldives',
    url:'https://www.google.com/'
},
{
    id: 4,
    imageUrl: 'https://media.cntraveler.com/photos/5e56daf217b1dc0008f2fba6/master/pass/03-waileabeach-hawaii-2020-GettyImages-144924389.jpg',
    title: 'Hawaii',
    url:'https://www.google.com/'
}
];

let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow');
let slideContent = document.getElementById('sliderContent');
let dotList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createATag(item){
    let ATag = document.createElement('a');
    ATag.setAttribute('href', item.url);
    ATag.classList.add('a-link');
    return ATag;
}

function createImgTag(item){
    slideContent.style.backgroundImage = 'url('+ item.imageUrl +')';
    slideContent.style.backgroundRepeat = "no-repeat";
    slideContent.style.backgroundSize = "cover";
}

function createH2Tag(item){
    let H2Tag = document.createElement('h2');
    H2Tag.setAttribute('href',item.title);
    H2Tag.classList.add('h2-link');
    H2Tag.append(item.title);

    return H2Tag;
}

function createDots(item){
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);
        
        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })

    return dots;
}


function setSlider(){
    slideContent.innerHTML = '';

    createImgTag(data[sliderIndex]);
    let linkTag = createATag(data[sliderIndex]);
    let titleTag = createH2Tag(data[sliderIndex]);
    let dots = createDots();
    
    linkTag.appendChild(titleTag);
    slideContent.appendChild(linkTag);
    slideContent.appendChild(dots);

    currentDotActive();

}

function currentDotActive(){
    dotList[sliderIndex].classList.add('active');
}

function leftArrowClick(){
    if(sliderIndex<=0){
        sliderIndex= data.length-1;
        setSlider();
        return;
    }
    sliderIndex--;
    setSlider();
}

function rightArrowClick(){
    if(sliderIndex>=data.length-1){
        sliderIndex= 0;
        setSlider();
        return;
    }
    sliderIndex++;
    setSlider();
}

leftArrow.addEventListener('click', leftArrowClick);
rightArrow.addEventListener('click', rightArrowClick);

setInterval(() => {
    rightArrowClick();
}, 3000);

setSlider();
