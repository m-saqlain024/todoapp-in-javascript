
const input = document.querySelector('#input__list')
const list = document.querySelector('#list__items')
// console.log(input)

let arr = []

let todoApp= {
    add(){

        if(input.value){
            arr.push(input.value)
            input.value =""
        }
        this.addfun()
    },
    addfun(){
        list.innerHTML= ""
        arr.forEach((value)=>{
            list.innerHTML += `<li id="list">${value}</li>`
        })
    },
    clear(){
        arr.splice(0 , arr.length)
        this.addfun()
    }

}
