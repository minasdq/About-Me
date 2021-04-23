
(window).addEventListener('scroll', ()=>{
    const header= document.getElementById('header');
    if(window.scrollY>30){
       header.classList.add('fixed-menu')
       
    }
    else{
        header.classList.remove('fixed-menu')
    }
    if (window.scrollY>150){
        document.querySelector('.back-to-top').style.display="block";
        document.querySelector('.back-to-top i').style.display="flex";
    }
    else{
        document.querySelector('.back-to-top').style.display="none";
        document.querySelector('.back-to-top i').style.display="none";
    }
    const listGroup=document.querySelectorAll('.list-about')
    if(window.scrollY>200){  
       listGroup.forEach(list=>{   
            list.classList.add('animation-card')   
       }
       )}
    else{
        listGroup.forEach(list=>{   
            list.classList.remove('animation-card')   
       }
       )
    }
      

    if(window.scrollY>670){

        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower  
        counters.forEach(counter => {
            let start=counter.innerText;
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +start;
                const inc = target / speed;
                if (count < target) {
                    start = count + inc;
                    counter.innerText=start.toFixed(0)
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        
     }



 
});

const year=document.getElementById('year')
year.innerHTML=new Date().getFullYear();