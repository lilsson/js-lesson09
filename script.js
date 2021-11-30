// *1
// function getPost(postId) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//              if(postId < 100) {
//               resolve('hello');
//           }else{
//               reject('error');
//           }
//         }, 1000)

//     });
// }
// function getPostTitle(postTitle) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//              if(postTitle < 100) {
//               resolve('hello');
//           }else{
//               reject('error');
//           }
//         }, 1000)

//     });
// }

// Promise.all([
//     getPost(50),
//     getPostTitle(10)
// ]).then(function(responses) {
//     console.log(responses);
// })
// .catch(function(error) {
//     console.log(error);
// });
// *2
// function test1() {
//     setTimeout( () => {
//         console.log('test1');
//     },  3000)
// }

// function test2() {
//     setTimeout( () => {
//         console.log('test2');
//     },  2000)
// }

// async function testFunction() {
//     await test1();
//     await test2();
// }

//  testFunction ();
//  console.log('hello');

// *3

// function getPost(postId) {
//         return new Promise(function(resolve, reject){
//             setTimeout(function() {
//                  if(postId < 100) {
//                   resolve('hello');
//               }else{
//                   reject('error');
//               }
//             }, 1000)
    
//         });
//     }
//     function getPostTitle(postTitle) {
//         return new Promise(function(resolve, reject){
//             setTimeout(function() {
//                  if(postTitle < 100) {
//                   resolve('hello');
//               }else{
//                   reject('error2');
//               }
//             }, 1000)
    
//         });
//     }
    
//     async function renderPage() {
//         let posts;
        
//         try {
//            posts = await getPost(10);
//         }
        
//         catch(error) {
//             console.log(error);
//         }
        
//     }

//     renderPage();

// slider

let data = [
    {
        id: 1,
        imageUrl:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        title: 'title 1',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title 2',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl:'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        title: 'title 3',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl:'https://imgv3.fotor.com/images/homepage-feature-card/Fotor-image-cropper.jpg',
        title: 'title 4',
        url: 'https://google.com'
    }
]

let arrowLeft = document.getElementById('arrow-left');
let sliderContent = document.getElementById('slider-content');
let arrowRight = document.getElementById('arrow-right');
let sliderIndex = 0;
let dotsList = document.getElementsByClassName('dot');

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.setAttribute('class', 'title');
    tagTitle.append(item.title);

    return tagTitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => { 
        let dot = document.createElement('div');
        dot.setAttribute('class', 'dot');
        dot.setAttribute('data-id', element.id -1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id; 
            setSlide();
        }

        dots.appendChild(dot);

    });

    console.log(dots);
    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2tag = createH2tag(data[sliderIndex]);
    let imgtag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(h2tag);
    slideItem.appendChild(imgtag);


    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
    currentDotActive();

}
function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
    if( sliderIndex <= 0) {
        sliderIndex = data.length -1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if( sliderIndex >= data.length -1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);

// setInterval( () => {
//     arrowRightClick();
// }, 3000);

setSlide();