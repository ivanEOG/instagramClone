const postDisplay = document.getElementById("post-display")
let liked = false
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



function render(){
    let renderPost = ""
    for (let i = 0; i < posts.length; i ++){



        renderPost += 
        `
        <div class="post-container">
            <div class="post-profile">
                <img id="post-avatar"  class="circle-avatar" src="${posts[i].avatar}">
                <div class="profile-data">
                    <p class="post-pofile-name">${posts[i].name}</p>
                    <p class="post-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-img" src="${posts[i].post}">
            <div class="interactive-elements">
                <img id="like-icon" class="action-icon-style" src="images/icon-heart.png" onclick="likePost(${posts[i].likes})">
                <img id="comment-icon" class="action-icon-style" src="images/icon-comment.png">
                <img id="share-icon" class="action-icon-style" src="images/icon-dm.png">
            </div>
            <div class="likes-commetns-count">
                <p class="likes"><span>${posts[i].likes}</span> Likes</p>
                <p class="comments"><span class="username-commetn">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </div>
        `
        
    }

    postDisplay.innerHTML = renderPost


}

render()



function likePost(arr){
    if(liked === false){
        liked = true
        for(let i = 0; i < posts.length; i++){
            if(posts[i].likes===arr){
                posts[i].likes = arr + 1
                console.log(posts[i].likes)
            }
        }
    }else{
        liked = false
        for(let i = 0; i < posts.length; i++){
            if(posts[i].likes===arr){
                posts[i].likes = arr - 1
                console.log(posts[i].likes)
            }
        }
    }      
    render()
} 




