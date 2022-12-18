function searchToggle(obj, evt){
     
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
            document.querySelector('.close').style.opacity='1';
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
            document.querySelector('.close').style.opacity='0';
        }
    }