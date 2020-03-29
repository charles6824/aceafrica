let selector = e => document.querySelector(e)
let yes = selector("#yes")
let money = selector(".money")
let show = selector(".show")
let hide = selector(".hide")
let first = selector(".first")
let second = selector(".second")

yes.addEventListener("change", () => {
    me = '2500'
    if(yes.value === 'no'){
        money.value = "1000"
    }
    else if(yes.value === 'yes') {
        money.value = '2500'
    }
    else if(yes.value === "") {
        money.value = 'Choose an option'
    }
})
first.addEventListener("click", () =>{
    show.style.display = 'block'
    hide.style.display = 'none'
})
second.addEventListener("click", () =>{
    hide.style.display = 'block'
    show.style.display = 'none'
})