const box = document.querySelectorAll('.box');

box.forEach(item => {
    item.addEventListener('click', () => {
      

        item.classList.toggle('circle')
        
        // if(item.classList.contains('circle')) {
        //     item.classList.remove('circle')
        // }else {
        //     item.classList.add('circle')
        // }
    })
})
