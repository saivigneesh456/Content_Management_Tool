document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const addButton = document.getElementById('add-post');
    const updateButton = document.getElementById('update-post');
    let editingPost = null;

    addButton.addEventListener('click', function() {
        addBlogPost();
    });

    updateButton.addEventListener('click', function() {
        updateBlogPost();
    });

    function addBlogPost() {
        const title = document.getElementById('new-title').value;
        const content = document.getElementById('new-content').value;
        const image = document.getElementById('new-image').value;
        const video = document.getElementById('new-video').value;

        // Get current date and time
        const currentDate = new Date();
        const formattedDate = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;

        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const postDate = document.createElement('span');
        postDate.className = 'post-date';
        postDate.textContent = `Posted on ${formattedDate}`;

        const postImage = document.createElement('img');
        postImage.src = image;
        postImage.alt = 'Blog Post Image';

        const postVideo = document.createElement('iframe');
        postVideo.src = video;
        postVideo.width = '560';
        postVideo.height = '315';
        postVideo.frameborder = '0';
        postVideo.allowfullscreen = true;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editBlogPost(blogPost, title, content, image, video);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            blogPost.remove();
        });

        blogPost.appendChild(postTitle);
        blogPost.appendChild(postContent);
        blogPost.appendChild(postDate); // Add post date to the blog post
        blogPost.appendChild(postImage);
        blogPost.appendChild(postVideo);
        blogPost.appendChild(editButton);
        blogPost.appendChild(deleteButton);

        blogPostsContainer.appendChild(blogPost);
        clearForm();
    }

    function editBlogPost(post, title, content, image, video) {
        editingPost = post;
        document.getElementById('new-title').value = title;
        document.getElementById('new-content').value = content;
        document.getElementById('new-image').value = image;
        document.getElementById('new-video').value = video;

        addButton.style.display = 'none';
        updateButton.style.display = 'block';
    }

    function updateBlogPost() {
        if (editingPost) {
            const title = document.getElementById('new-title').value;
            const content = document.getElementById('new-content').value;
            const image = document.getElementById('new-image').value;
            const video = document.getElementById('new-video').value;

            // Update post's content
            const postTitle = editingPost.querySelector('h2');
            const postContent = editingPost.querySelector('p');
            const postDate = editingPost.querySelector('.post-date'); // Select post date element
            const postImage = editingPost.querySelector('img');
            const postVideo = editingPost.querySelector('iframe');

            postTitle.textContent = title;
            postContent.textContent = content;
            postDate.textContent = `Posted on ${getCurrentFormattedDate()}`; // Update post date
            postImage.src = image;
            postImage.alt = 'Blog Post Image';
            postVideo.src = video;

            clearForm();
        }

        addButton.style.display = 'block';
        updateButton.style.display = 'none';
        editingPost = null;
    }

    function clearForm() {
        document.getElementById('new-title').value = '';
        document.getElementById('new-content').value = '';
        document.getElementById('new-image').value = '';
        document.getElementById('new-video').value = '';
    }

    function getCurrentFormattedDate() {
        const currentDate = new Date();
        return `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;
    }
});
