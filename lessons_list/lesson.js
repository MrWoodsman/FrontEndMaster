document.querySelectorAll('.code_card_small').forEach((e) => {
    e.addEventListener('click',set_code)
})
var get_array 
function set_code(e) {
    // console.warn(e.target);
    const element = e.target
    document.querySelectorAll('.code_card_small').forEach((b) => {
        b.classList.remove('active')
    })
    element.classList.add('active')
    // 
    if (element.getAttribute('code') == '1') {
        // console.warn('HTML');
        get_array = html_lessons
        document.title = 'MASTER FRONT-END | HTML'
    } else if (element.getAttribute('code') == '2') {
        // console.warn('CSS');
        get_array = css_lessons
        document.title = 'MASTER FRONT-END | CSS'
    } else if (element.getAttribute('code') == '3') {
        // console.warn('JAVASCRIPT');
        get_array = js_lessons
        document.title = 'MASTER FRONT-END | JS'
    }
    const nextURL = 'lessons_list/lessons.html?id='+encodeURIComponent(element.getAttribute('code'));
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL)
    load_data()
}

function start(num) {
    // console.warn(e.target);
    const element = document.querySelectorAll('.code_card_small')[num-1]
    document.querySelectorAll('.code_card_small').forEach((b) => {
        b.classList.remove('active')
    })
    element.classList.add('active')
    // 
    if (element.getAttribute('code') == '1') {
        // console.warn('HTML');
        get_array = html_lessons
        document.title = 'MASTER FRONT-END | HTML'
    } else if (element.getAttribute('code') == '2') {
        // console.warn('CSS');
        get_array = css_lessons
        document.title = 'MASTER FRONT-END | CSS'
    } else if (element.getAttribute('code') == '3') {
        // console.warn('JAVASCRIPT');
        get_array = js_lessons
        document.title = 'MASTER FRONT-END | JS'
    }
    load_data()
}
var arr
window.onload = function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    // console.warn(data);
    start(data.id)
}

function load_data() {
    const box = document.querySelector('#lesson_list_box')
    document.querySelector('#description_box').innerHTML = `${get_array.description}`
    document.body.style.setProperty(`--web_set_color`,`${get_array.color}`)
    document.querySelector('#change_title').innerText = `${get_array.title}`
    box.innerHTML = ``
    get_array.list.forEach((e) => {
        const card = document.createElement('div')
        card.addEventListener('click',open_lesson)
        const p = document.createElement('p')
        card.setAttribute('db_id',e.id)
        card.setAttribute('lesson_type',get_array.type)
        p.classList.add('card_content')
        p.innerText = `${e.description}`
        card.classList.add('lesson_card')
        card.innerHTML = `<h1 class="card_title"><div class="number">${e.id}</div>${e.title}</h1>`
        card.appendChild(p)
        box.appendChild(card)
    })
    // AFTER LOAD ADD TO EVRYCARD EVENT

}
function open_lesson(e) {
    console.warn('open '+e.target.getAttribute('db_id'));
    // var b = document.getElementById('name').value,
        url = 'lesson_web/lesson_web.html?id=' + encodeURIComponent(e.target.getAttribute('db_id'))+'&name='+encodeURIComponent(e.target.getAttribute('lesson_type'));

    document.location.href = url;
}
