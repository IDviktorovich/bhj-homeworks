const rotatorList = document.querySelectorAll('.rotator__case');

const arrRotator = Array.from(rotatorList);
console.log(arrRotator);

let index = arrRotator.findIndex(item => item.classList.contains('rotator__case_active'))
console.log(index);
console.log(arrRotator[0]);

let rotatorLoop = setTimeout(function loop() {
    
    // let current = document.querySelector('.rotator__case_active');
    
    // current.classList.toggle('rotator__case_active');

    // (index !== arrRotator.length-1) ? current.nextElementSibling.classList.toggle('rotator__case_active') : current = arrRotator[0];
    
    arrRotator[index].classList.toggle('rotator__case_active');

    (index !== arrRotator.length-1) ? index += 1 : index = 0;

    arrRotator[index].classList.toggle('rotator__case_active');
    
    
    rotatorLoop = setTimeout(loop, 1000);
}, 1000);

