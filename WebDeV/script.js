document.addEventListener("DOMContentLoaded", () => {
  // Select all navigation links
  const navLinks = document.querySelectorAll('.nav__links .link a');
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          alert(`You clicked on ${link.textContent} link!`);
      });
  });

  // Select the action buttons
  const exploreButton = document.querySelector('.primary__btn');
  const seeMoreButton = document.querySelector('.secondary__btn');

  exploreButton.addEventListener('click', () => {
      alert('Explore button clicked!');
  });

  seeMoreButton.addEventListener('click', () => {
      alert('See More button clicked!');
  });

  // Social icons click event
  const socialIcons = document.querySelectorAll('.socials span');
  socialIcons.forEach(icon => {
      icon.addEventListener('click', () => {
          alert(`You clicked on ${icon.firstChild.className} icon!`);
      });
  });
});
