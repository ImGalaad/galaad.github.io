function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
     setTheme('theme-ultra-dark');
 } else {
     setTheme('theme-dark');
 }
}
(function () {
 if (localStorage.getItem('theme') === 'theme-ultra-dark') {
     setTheme('theme-ultra-dark');
 } else {
     setTheme('theme-dark');
 }
})();