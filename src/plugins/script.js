const body = document.body;
        // console.log(body);
        let lastScroll = 0;

        window.addEventListener('scroll', ()=>{
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll){
                body.classList.add('scroll-down')
            }
            else{
                body.classList.remove('scroll-down')
            }
            lastScroll = currentScroll;
        })