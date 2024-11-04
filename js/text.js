


const sec_2 = document.querySelector('.section_2');
const text = document.querySelectorAll('.sec_2_title');
const secText = document.querySelector('.sec_2_text');

const scrollHandler = () => {

    const pageY = window.scrollY;

    // console.log(pageY);

    const secTop_2 = sec_2.offsetTop;
    const secTextTop = secText.offsetTop;

    // console.log(secTop_1);

    if(pageY >= secTop_2 / 3){
        text[0].classList.add('textActive');
    }else{
        text[0].classList.remove('textActive');
    }

    if(pageY >= secTop_2){
        text[1].classList.add('textActive');
    }else{
        text[1].classList.remove('textActive');
    }

    if(pageY >= secTextTop * 3){
        secText.classList.add('textBoxActive');
    }else{
        secText.classList.remove('textBoxActive');
    }

}


window.addEventListener('scroll', scrollHandler);   