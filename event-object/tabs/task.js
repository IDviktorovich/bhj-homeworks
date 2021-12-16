const tabs = document.getElementById('tabs1');
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

let arrTab = Array.from(tab);
let arrTabContent = Array.from(tabContent);

let tabIndex = arrTab.findIndex(item => item.className = 'tab tab_active');
let tabContentIndex = arrTabContent.findIndex(item => item.className = 'tab__content tab__content_active')  
console.log(tabIndex);



for (let i = 0; i < arrTab.length; i++) {
    
    arrTab[i].addEventListener('click', function() {
        let current = document.getElementsByClassName("tab_active");
        current[0].className = current[0].className.replace(" tab_active", "");
        this.className += " tab_active";
    });

    
}
