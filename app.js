const observer = new IntersectionObserver((enteries) =>{
    enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isintersecting){
            entry.target.classlist.add('show');
        } else {
            entry.target.classlist.remove('show');

        
        }
        
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));