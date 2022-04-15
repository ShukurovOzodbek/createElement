// const select = document.querySelector('select')
// select.onchange = () => {
//     console.log(select.value)
// }

const inp =  document.querySelector('input')
const select = document.querySelector('select')
const textarea = document.querySelector('textarea')
const btn = document.querySelector('button') 
const body = document.body

btn.onclick = () => {

    if(inp.value.length == 0) {
        alert('write your name');
    }else if(textarea.value.length == 0) {
        alert('Write your comment');
    }else{
        // create Element
        const posts = document.createElement('div')
        posts.className = 'posts'
        body.append(posts)
        const box = document.createElement('div')
        box.className = 'box'
        posts.append(box)
        let arr = [' https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=stefan-stefancik-QXevDflbl8A-unsplash.jpg','    https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dan-ROJFuWCsfmA-unsplash.jpg','https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg','https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jakob-owens-DQPP9rVLYGQ-unsplash.jpg',' https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=max-ilienerwise-YvWJOXHNJ94-unsplash.jpg']
        const img = document.createElement('img')
        random = Math.floor(Math.random()  * arr.length)
        img.setAttribute('src', arr[random])
        const rigth = document.createElement('div')
        rigth.className = 'rigth'
        box.append(rigth)
        rigth.append(img)
        const left = document.createElement('div')
        left.className = 'left'
        const top = document.createElement('div')
        top.className = 'top'
        box.append(left)
        left.append(top)
        const h3 = document.createElement('h3')
        h3.innerHTML = inp.value
        top.append(h3)
        const option = document.createElement('div')
        option.className = 'option'
        option.innerHTML = select.value
        top.append(option)
        const post = document.createElement('div')
        post.className = 'post'
        left.append(post)
        const span = document.createElement('span')
        span.innerHTML = textarea.value
        post.append(span)
        inp.value = ''
        textarea.value = ''
        select.value = 'Male'
    }
}