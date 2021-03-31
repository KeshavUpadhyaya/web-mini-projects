const projects = [
  'auto-write-text',
  'background-changer',
  'carousel',
  'dark-mode-toggle',
  'hamburger-button',
  'image-zoom-effect',
  'pop-up-window',
  'purple-heart-rain',
  'sound-board',
  'toast-notification'
]

projects.forEach((project, index) => {
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerHTML = `${index + 1}. ${formatProjectName(project)}`;

  const section = document.getElementsByTagName('section')[0];
  section.appendChild(link);
});

/**
 * 
 * @param {string} name
 */
function formatProjectName(name) {
  return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

