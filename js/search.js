
window.onload = () => {
    document.getElementById('textsearch').value = '';
}
function searchToggle(obj, evt) {
     
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

    function search() {
       
        let textsearch = document.getElementById('textsearch').value;
        let paragraph =document.querySelectorAll('p');
      
      console.log(textsearch.length)
        if (textsearch.length > 0) {
            paragraph.forEach((e ,index) => {
                textsearch = textsearch.replace(/[.**?^${}()|[\]\\]/g,"\\$&");
               
                let pattern = new RegExp(`${textsearch}`, "gi");
               
               e.innerHTML = e.textContent.replace(pattern, match => `<span class='mark'>${match}</span>`)
                    
        
               
            })
        }
        
        else {
          
            document.querySelectorAll('.mark').forEach(e => {
                e.classList.remove('mark');
                
            });
        }
        
        
       
    }