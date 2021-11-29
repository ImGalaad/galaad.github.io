function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    setTheme('theme-dark');
  }
  function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
  }
  (function () {
   if (localStorage.getItem('theme') === 'theme-light') {
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
  })();