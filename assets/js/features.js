 
function formatText(command) {
    document.execCommand(command, false, null);
}

 
function insertLink() {
    const url = prompt("Enter your URL:");
    if (url) {
        document.execCommand("createLink", false, url);
    }
}

 
function addBulletPoint() {
    document.execCommand("insertUnorderedList", false, null);
}

 
function updateStats() {
    const content = document.getElementById('editor').innerText.trim();
    const words = content.split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.ceil(words / 200);  

    document.getElementById('word-count').innerText = `Word Count: ${words}`;
    document.getElementById('read-time').innerText = `Estimated Read Time: ${readTime} minutes`;
}

 
function saveBlogPost() {
    const content = document.getElementById('editor').innerHTML;
    if (content.trim() === "") {
        alert("Please write some content before saving.");
        return;
    }

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    existingPosts.push(content);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
    document.getElementById('editor').innerHTML = '';  
    updateStats();  
    alert('notes saved successfully!');
    loadBlogPosts();
}

 
function loadBlogPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsDiv = document.getElementById('blog-posts');
    blogPostsDiv.innerHTML = '';

    if (savedPosts.length === 0) {
        blogPostsDiv.innerHTML = '<p>Empty here</p>';
        return;
    }

    savedPosts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
            <div>${post}</div>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        blogPostsDiv.appendChild(postDiv);
    });
}

 
function deletePost(index) {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    savedPosts.splice(index, 1);
    localStorage.setItem('blogPosts', JSON.stringify(savedPosts));
    loadBlogPosts();
}
