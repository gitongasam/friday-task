// Perform a GET request to fetch all posts
// async function getAllPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
    
//   }
//   getAllPosts()

//   post
fetch('https://jsonplaceholder.typicode.com/posts/',{
    method:"post",
    header:{
        "content-type":'application.json'
    },
    body: JSON.stringify({
                     title: 'foo',
                   body: 'bar',
                  userId: 1,
                })
})
.then(res => console.log(res))



//   async function createdPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//   }
//   createdPost()
 
//   // Perform a POST request to create a new post
//   async function createPost(newPost) {
//     try {
//       const response = await fetch('https://api.example.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPost),
//       });
//       const createdPost = await response.json();
//       return createdPost;
//     } catch (error) {
//       console.error('Error creating post:', error);
//       throw error;
//     }
//   }
  
//   // Perform a PUT request to update an existing post
//   async function updatePost(postId, updatedPost) {
//     try {
//       const response = await fetch(`https://api.example.com/posts/${postId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedPost),
//       });
//       const updatedPostData = await response.json();
//       return updatedPostData;
//     } catch (error) {
//       console.error(`Error updating post ${postId}:`, error);
//       throw error;
//     }
//   }
  
//   // Perform a DELETE request to delete a post
//   async function deletePost(postId) {
//     try {
//       await fetch(`https://api.example.com/posts/${postId}`, {
//         method: 'DELETE',
//       });
//       console.log(`Post ${postId} deleted successfully.`);
//     } catch (error) {
//       console.error(`Error deleting post ${postId}:`, error);
//       throw error;
//     }
//   }
  
//   // Filter posts based on a specific condition
//   function filterPosts(posts, condition) {
//     return posts.filter(condition);
//   }
  
//   // Usage examples
  
//   // Fetch all posts
//   getAllPosts()
//     .then(posts => {
//       console.log('All posts:', posts);
//     })
//     .catch(error => {
//       // Handle error
//     });
  
//   // Create a new post
//   const newPost = {
//     title: 'New Post',
//     content: 'This is a new post.',
//   };
//   createPost(newPost)
//     .then(createdPost => {
//       console.log('Created post:', createdPost);
//     })
//     .catch(error => {
//       // Handle error
//     });
  
//   // Update an existing post
//   const postId = '123'; // ID of the post to update
//   const updatedPost = {
//     title: 'Updated Post',
//     content: 'This post has been updated.',
//   };
//   updatePost(postId, updatedPost)
//     .then(updatedPostData => {
//       console.log('Updated post:', updatedPostData);
//     })
//     .catch(error => {
//       // Handle error
//     });
  
//   // Delete a post
//   const postIdToDelete = '456'; // ID of the post to delete
//   deletePost(postIdToDelete)
//     .then(() => {
//       console.log('Post deleted successfully.');
//     })
//     .catch(error => {
//       // Handle error
//     });
  
//   // Filter posts
//   const condition = post => post.category === 'technology'; // Example filter condition
//   const filteredPosts = filterPosts(posts, condition);
//   console.log('Filtered posts:', filteredPosts);
  