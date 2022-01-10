// Za sad nista od ovog koda nije moje, ali razumijem vecinu

let loader_wrapper = document.querySelector('.loader_wrapper');
window.addEventListener('load', function(){
    loader_wrapper.style.display='none';
});


let = tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');
   
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            contents.forEach((content)=>{
                content.classList.remove('is-active');
            });
            tabs.forEach((tab)=>{
                tab.classList.remove('is-active');
            });
            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        });
    });

    // E ovo je moje 
    function myFunction() {
        document.getElementById('bdy').scrollIntoView();
      };