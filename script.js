const fb = document.getElementById('fbButton');

fb.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/vielle.trias'; // Replace with the desired URL
});


const twt = document.getElementById('twtButton');

twt.addEventListener('click', () => {
  window.location.href = 'https://twitter.com/lxviele'; // Replace with the desired URL
});

const insta = document.getElementById('instaButton');

insta.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/lxviele/'; // Replace with the desired URL
});

const linkedin = document.getElementById('linkedInButton');

linkedin.addEventListener('click', () => {
  window.location.href = 'https://www.linkedin.com/in/laviele-trias-3630911b9/'; // Replace with the desired URL
});

const github = document.getElementById('githubButton');

linkedin.addEventListener('click', () => {
  window.location.href = 'https://github.com/Alunxina'; // Replace with the desired URL
});

const hobbit = document.getElementById('hobbitButton');

hobbit.addEventListener('click', () => {
  window.location.href = 'https://github.com/Alunxina/Hobbit-Text-Adventure-Javadoc'; // Replace with the desired URL
});

const diwata = document.getElementById('diwataButton');

diwata.addEventListener('click', () => {
  window.location.href = 'https://github.com/Alunxina/Trias-Website-Lab-1'; // Replace with the desired URL
});

const aroundupv = document.getElementById('aroundupvButton');

aroundupv.addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/file/d/1g-AY-J2_7v3YjFtYbj6PUi5sGU8FGcyI/view?usp=sharing'; // Replace with the desired URL
});


const lagaw = document.getElementById('lagawButton');

lagaw.addEventListener('click', () => {
  window.location.href = 'https://github.com/Cmpdleon/cmsc129'; // Replace with the desired URL
});

const navbarLinks = document.querySelectorAll('.navbarlinks a');

navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView();
    });
});

const topLink = document.getElementById('topLink');

topLink.addEventListener('click', () => {
    window.scrollTo({ top: 0});
});

const contactLinks = document.querySelectorAll('.sectiononewrap a');

contactLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView();
    });
});
