


const sec_3 = document.querySelector('.section_3');
const textEl = document.querySelectorAll('.sec_3_con_box');

const scrollsHandler = () => {

    const pageY = window.scrollY;

    // console.log(pageY);

    const secTop_3 = sec_3.offsetTop;



    if(pageY > secTop_3 / 2){
        textEl[0].classList.add('con_3_1');
    }else{
        textEl[0].classList.remove('con_3_1');
    }

    if(pageY > secTop_3 / 2){
        textEl[1].classList.add('con_3_2');
    }else{
        textEl[1].classList.remove('con_3_2');
    }

    if(pageY > secTop_3 / 2){
        textEl[2].classList.add('con_3_3');
    }else{
        textEl[2].classList.remove('con_3_3');
    }


}


window.addEventListener('scroll', scrollsHandler);   