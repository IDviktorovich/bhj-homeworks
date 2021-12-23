const initTabs = (wrapperId) => {
    const wrapper = document.querySelector(wrapperId);
    const tabList = wrapper.querySelectorAll('.tab');
    const tabContent = wrapper.querySelectorAll('.tab__content');
    
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener('click', function() {
            let current = wrapper.getElementsByClassName("tab_active");
            current[0].className = current[0].className.replace(" tab_active", "");
            this.className += " tab_active";
    
            tabContent.forEach((item, index) => {
                if (index === i) {
                    item.classList.add('tab__content_active');
                } else {
                    item.classList.remove('tab__content_active');
                }
            });
        });
    }
}

initTabs('#tabs1');
