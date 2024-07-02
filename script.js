document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Menu Icon Toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    // Scroll Event Listener for Navigation Links
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    }

    // Form Submission Event Listener
    const dataForm = document.getElementById('dataForm');
    if (dataForm) {
        console.log('dataForm element found');
        dataForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting and refreshing the page

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const jobTitle = document.getElementById('jobTitle').value;
            const description = document.getElementById('description').value;

            const data = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nJob Title: ${jobTitle}\nDescription: ${description}\n`;

            const blob = new Blob([data], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const downloadLink = document.getElementById('downloadLink');

            downloadLink.href = url;
            downloadLink.download = 'data.txt';
            downloadLink.style.display = 'block';
            downloadLink.textContent = 'Download your data file';
        });
    } else {
        console.error('Element with id "dataForm" not found');
    }
});
