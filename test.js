data = [{
    'img1' : 'Asset/620o0v.png',
    'img2' : 'Asset/patrick.jpg',
    'title' : 'Web E-Commerce',
    'subtitle' : 'yesyesyesyes',
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
    'img1' : 'Asset/hollow.jpeg',
    'img2' : 'Asset/typingcover.jpg',
    'title' : 'Whaaaaaat',
    'subtitle' : 'yesyesyesyes',
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}]

var container = document.querySelector('.container-project')

data.foreach(Element => {
    container.innerHTML +=
    `<div class = "project">
    <div class = "img-project">
        <img src="`+Element.img1+`" alt="">
        <img src="${Element.img2}" alt="">
    </div>
    <div class = "desc-project">
        <h1>${Element.title}</h1>
        <h2>${Element.subtitle}</h2>
        <p>${Element.desc}</p>
    </div>
    <button class = "read-more">Read More</button>
</div>`
})

