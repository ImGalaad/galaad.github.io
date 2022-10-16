// Python > JS

/* ︵‿୨♡୧‿︵ Set Theme ︵‿୨♡୧‿︵ */
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;}



/* ︵‿୨♡୧‿︵ Toggle Theme ︵‿୨♡୧‿︵ */
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){setTheme('theme-light');}
   else {setTheme('theme-dark');}}

(function(){
   if (localStorage.getItem('theme') === 'theme-light'){setTheme('theme-light');}
   else {setTheme('theme-dark');}})();



/* ︵‿୨♡୧‿︵ Clock ︵‿୨♡୧‿︵ */
// This function displays a clock with date and day.
function clock() {
   var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
   time = new Date(),
   years = time.getFullYear(),
   month = time.getMonth(),
   date = time.getDate(),
   day = time.getDay(),
   hours = time.getHours(),
   minutes = time.getMinutes();
   //seconds = time.getSeconds();

    
   document.querySelectorAll('.date')[0].innerHTML = zeroPadding(years,4) + "." + zeroPadding(month+1,2) + "." + zeroPadding(date,2);
   document.querySelectorAll('.hour')[0].innerHTML = zeroPadding(hours,2) + ' ' + zeroPadding(minutes,2);
   document.querySelectorAll('.day')[0].innerHTML = week[day];}

   setInterval(clock, 1); // Loop this function every millisecond
                          // If you have performance isues :
                          // https://github.com/ImGalaad/imgalaad.github.io/issues



/* ︵‿୨♡୧‿︵ Zero Padding ︵‿୨♡୧‿︵ */
// This function returns a string that contains 
// the num parameter and added zero if needed.
function zeroPadding(num, digit) {
    var zero = '';
      for(var i = 0; i < digit; i++) {zero += '0'}
      return (zero + num).slice(-digit)};
