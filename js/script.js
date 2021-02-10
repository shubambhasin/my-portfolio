const themeToggler = document.querySelector(".theme-toggler")

themeToggler.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    
    document.querySelector(".navigation").classList.toggle("dark")
    document.querySelector(".orange").classList.toggle("dark")
    document.querySelector(".bg-gray").classList.toggle("dark")
    document.querySelector(".footer").classList.toggle("dark")

})

const toggleBtn = document.querySelector('.toggler')
const navItems = document.querySelector('.nav-items')
toggleBtn.addEventListener('click', toggleNav)


function toggleNav()
{

    console.log("Nav toggle")
    if(navItems.getAttribute('id', 'hidden'))
    
    {

        navItems.setAttribute('id', "")

    }
    else
    {
        navItems.setAttribute( 'id' ,"hidden")
    }

    

}