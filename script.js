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