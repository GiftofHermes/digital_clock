
const body = document.body
const switch_theme_button = document.getElementById('theme_switcher')

let old_theme = 'dark'
let theme = localStorage.getItem('theme')
if (theme) {
  body.classList.replace(old_theme, theme);
} else {
  theme = old_theme
}

function switch_theme() {
  old_theme = theme
  theme = (theme=='light') ? 'dark' : 'light'
  body.classList.replace(old_theme, theme)
  localStorage.setItem('theme', theme)
}

switch_theme_button.addEventListener("click", switch_theme);
