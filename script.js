function getComments(commentsId, callback) {
    let req = new XMLHttpRequest ();

    req.addEventListener('load', callback );

    req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    req.send();
}

function getPost(postId) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
             if(postId < 100) {
              resolve('hello');
          }else{
              reject('error');
          }
        }, 1000)

    });
}
function getPostTitle(postTitle) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
             if(postTitle < 100) {
              resolve('hello');
          }else{
              reject('error');
          }
        }, 1000)

    });
}


getPost(50)
.then(function(response) {
    return getPostTitle(10);
})

.then(function(postData) {
    
})
.catch(function(error) {
    console.log(error);
});