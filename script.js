// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Admin Modal Functionality
    const adminModal = document.getElementById('admin-modal');
    const adminAccessBtn = document.getElementById('toggle-form-btn');
    const closeModal = document.querySelector('.close');
    const loginBtn = document.getElementById('login-btn');
    const adminPassword = document.getElementById('admin-password');
    const addPostForm = document.getElementById('addPostForm');
    const adminAccessRealBtn = document.getElementById('admin-access-btn');
    
    // Show admin modal
    adminAccessBtn.addEventListener('click', function() {
        adminModal.classList.add('active');
    });
    
    // Close admin modal
    closeModal.addEventListener('click', function() {
        adminModal.classList.remove('active');
        adminPassword.value = '';
    });
    
    // Admin login
    loginBtn.addEventListener('click', function() {
        // Simple password check (in a real app, this would be more secure)
        if (adminPassword.value === 'admin123') {
            adminModal.classList.remove('active');
            adminPassword.value = '';
            adminAccessBtn.style.display = 'none';
            adminAccessRealBtn.style.display = 'inline-block';
            alert('Admin access granted!');
        } else {
            alert('Incorrect password!');
        }
    });
    
    // Toggle add post form
    adminAccessRealBtn.addEventListener('click', function() {
        addPostForm.classList.toggle('active');
    });
    
    // Posts functionality
    const postsContainer = document.getElementById('posts-container');
    const addPostBtn = document.getElementById('add-post-btn');
    
    // Sample posts data
    let posts = [
        {
            id: 1,
            title: "Chemistry in Everyday Life",
            date: "July 10, 2023",
            excerpt: "Exploring how chemistry impacts our daily lives from the food we eat to the products we use.",
            image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "#"
        },
        {
            id: 2,
            title: "Introduction to Cloud Computing",
            date: "August 15, 2023",
            excerpt: "Understanding the basics of cloud computing and its applications in modern technology.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "#"
        }
    ];
    
    // Function to render posts
    function renderPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content">
                    <div class="post-date">${post.date}</div>
                    <h3>${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="${post.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }
    
    // Add new post
    addPostBtn.addEventListener('click', function() {
        const title = document.getElementById('post-title').value;
        const date = document.getElementById('post-date').value;
        const excerpt = document.getElementById('post-excerpt').value;
        const image = document.getElementById('post-image').value;
        const link = document.getElementById('post-link').value;
        
        if (title && date && excerpt && image) {
            const newPost = {
                id: posts.length + 1,
                title,
                date,
                excerpt,
                image,
                link: link || '#'
            };
            
            posts.unshift(newPost);
            renderPosts();
            
            // Reset form
            document.getElementById('post-title').value = '';
            document.getElementById('post-date').value = '';
            document.getElementById('post-excerpt').value = '';
            document.getElementById('post-image').value = '';
            document.getElementById('post-link').value = '#';
            
            // Hide form
            addPostForm.classList.remove('active');
            
            alert('Post added successfully!');
        } else {
            alert('Please fill all required fields!');
        }
    });
    
    // Initial render of posts
    renderPosts();
    
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.textContent = 'Sending...';
        btnLoader.style.display = 'block';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(function() {
            // Reset form
            contactForm.reset();
            
            // Show success message
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.className = 'form-status success';
            
            // Reset button
            btnText.textContent = 'Send Message';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
            
            // Hide status message after 5 seconds
            setTimeout(function() {
                formStatus.style.display = 'none';
            }, 5000);
        }, 2000);
    });
    
    // Print resume functionality
    const printResumeBtn = document.getElementById('print-resume');
    
    printResumeBtn.addEventListener('click', function() {
        // In a real implementation, this would open the print dialog for the PDF
        alert('Print functionality would open the print dialog for the resume PDF.');
    });
});
