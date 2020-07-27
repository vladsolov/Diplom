function BlockMenu(selector){
    let menu = $(selector);
    let button = menu.find('.block-menu__button');
    let links = menu.find('.block-menu__link');
    let overlay = menu.find('.block-menu__overlay');


    button.on('click', (e)=>{
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', ()=> toggleMenu());
    overlay.on('click', ()=>toggleMenu());

    function toggleMenu(){
        menu.toggleClass('block-menu_active');

        if(menu.hasClass('block-menu_active')){
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow','visible');
        }
    }
}

BlockMenu('.block-menu');