function addBlogPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const image = document.getElementById('post-image').value;
    const video = document.getElementById('post-video').value;

    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    const postTitle = document.createElement('h2');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const postImage = document.createElement('img');
    postImage.src = image;
    postImage.alt = 'Blog Post Image';

    const postVideo = document.createElement('iframe');
    postVideo.src = video;
    postVideo.width = '560';
    postVideo.height = '315';
    postVideo.frameborder = '0';
    postVideo.allowfullscreen = true;

    blogPost.appendChild(postTitle);
    blogPost.appendChild(postContent);
    blogPost.appendChild(postImage);
    blogPost.appendChild(postVideo);

    const main = document.querySelector('main');
    main.appendChild(blogPost);

    // Clear the form
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
    document.getElementById('post-video').value = '';
}