const themeToggler = document.querySelector(".theme-toggler")

themeToggler.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    
    document.querySelector(".navigation").classList.toggle("dark")
    document.querySelector(".orange").classList.toggle("dark")
    document.querySelector(".bg-gray").classList.toggle("dark")
})