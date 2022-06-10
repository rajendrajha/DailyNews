fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=677255ebaba74d8a9c54b69e0285511a').then(res => res.json())
    .then(data => {
        data?.articles.forEach(e => {
            container = document.querySelector('.container');
            img = e?.urlToImage;
            content = e?.content;
            author = e?.author;
            url = e?.url;
            title = e?.title;
            card = document.createElement('div');
            card.classList.add('card')
            card.innerHTML = `
                <p class="card-text">${title}</p>
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${content}</p>
                <p class="card-text">To get full information visit - <a style='color:blue;' href='${url}'>${url}</a></p>
                <p class="card-text">Made by- ${author}</p>
                </div>
    `
            container.append(card)
        });
    })
btn = document.getElementById('SearchingHeadlines');
btn.addEventListener('click', (e) => {
    e.preventDefault()
    input = document.getElementById('input');
    keyword = input.value.slice(0, 2)
    keyword = keyword.toLowerCase()

    fetch(`https://newsapi.org/v2/top-headlines?country=${keyword}&apiKey=677255ebaba74d8a9c54b69e0285511a`).then(res => res.json())
        .then(data => {
            container = document.querySelector('.container');
            container.innerHTML = ''
            data?.articles.forEach(e => {
                container = document.querySelector('.container');
                img = e?.urlToImage;
                content = e?.content;
                author = e?.author;
                url = e?.url;
                title = e?.title;
                card = document.createElement('div');
                card.classList.add('card')
                card.innerHTML = `
            <p class="card-text">${title}</p>
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${content}</p>
            <p class="card-text">To get full information visit - <a style='color:blue;' href='${url}'>${url}</a></p>
            <p class="card-text">Made by- ${author}</p>
            </div>
            `
                if (img == '') {
                    card.innerHTML = ''
                }
                container.append(card)
            });
        })
})
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    // if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    //  return false;
    // }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
       }     
    
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        return false;
       }      
 }
 document.addEventListener('contextmenu', event => event.preventDefault());
function COUNT(str) { 
    return str.split(" ").length;
}