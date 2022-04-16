const forms = document.forms.card__serve
const inputs =  forms.querySelectorAll('input')
const p = forms.querySelectorAll('p')

const pattern = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    cardname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

forms.onsubmit = (event) => {
    event.preventDefault()

    let arr = []

    inputs.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length == 0) {
            if(inp.nextSibling.nextSibling) {
                arr.push('invalid')
                inp.classList.add('invalid')
            }
        }
    })
    if(arr.length == 0) {
        setTimeout(() => {
            submit()
        }, 1000);

    }

}

inputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
});

function submit() {
    let user = {}

    let fm = new FormData(forms)

    fm.forEach((value, key) => {
        user[key] = value
    })

    inputs.forEach(element => {
        element.value = ''
        element.classList.remove('valid')
    });
    // create element
    let givGradient = []

    
    const container = document.querySelector('.card_box')
    const box = document.createElement('div')
    container.style.display = 'block'
    box.className = 'card' 
    container.append(box)
    const h1 = document.createElement('h1')
    h1.innerHTML = user.cardname
    box.append(h1)
    const empty = document.createElement('div')
    empty.className = 'empty'
    box.append(empty)
    const number = document.createElement('span')
    number.innerHTML = user.phone
    number.className = 'number'
    box.append(number)
    const img = document.createElement('img')
    img.setAttribute('src', './eye.png')
    number.append(img)
    const name = document.createElement('span')
    name.className = 'name'
    name.innerHTML = user.name
    box.append(name)
    
    // img.onclick = () => {
    //     let a = Array(number).slice(3, 9)
    //     img.setAttribute('src', './eye2.png')
    //     img.onclick = () => {
    //         img.setAttribute('src', './eye.png')
    //     }
    // }
    let boxes = document.querySelectorAll('.card')
    boxes[1].classList.add('active')
    boxes[2].classList.add('active_gradient')
    if(boxes.length >= 4) {
        alert('Your Limit 3 cards')
        box.remove()
    }
}
