const interest = document.querySelector('.interests ul');

const interests = interest.children;

for (let i = 0; i < interests.length; i++) {
    let mainInterest = interests[i].firstElementChild;
    let mainInterestCheck = mainInterest.querySelector('.interest__check');
    
    let specificInterest = interests[i].querySelectorAll('ul.interests_active .interest__check');
    
    mainInterestCheck.onchange = () => {
        for (let i = 0; i < specificInterest.length; i++) {
            if (mainInterestCheck.checked) {
                specificInterest[i].checked = true;
            } else {
                specificInterest[i].checked = false;
            }
        }
    }
}




