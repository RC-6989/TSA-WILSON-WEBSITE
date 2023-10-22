function togglemenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function([string1, string2],target id,[color1,color2])    
consoleText(['TSA', 'Tamil Student Association', 'Donald A. Wilson', 'By Students', "Diversity, Inclusivity, Culture"], 'text',['black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
const hoverText = document.getElementById('hover-text');
const body = document.body;
let hoverTimeout;

hoverText.addEventListener('mouseenter', () => {
  hoverTimeout = setTimeout(() => {
    body.style.backgroundColor = '#000000'; /* New background color after delay */
  }, 1200); // Delay of 500 milliseconds (0.5 seconds)
});

hoverText.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimeout); // Clear the timeout if you move the mouse away before 0.5 seconds
  body.style.backgroundColor = '#EDEDE4'; /* Reset the background color when not hovering */
});

const hoverText2 = document.getElementById('hover-text2');
let hoverTimeout2;

hoverText2.addEventListener('mouseenter', () => {
  hoverTimeout2 = setTimeout(() => {
    body.style.backgroundColor = '#000000'; /* New background color after delay */
  }, 1200); // Delay of 500 milliseconds (0.5 seconds)
});

hoverText2.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimeout2); // Clear the timeout if you move the mouse away before 0.5 seconds
  body.style.backgroundColor = '#EDEDE4'; /* Reset the background color when not hovering */
});

const hoverText3 = document.getElementById('hover-text3');
let hoverTimeout3;

hoverText3.addEventListener('mouseenter', () => {
  hoverTimeout3 = setTimeout(() => {
    body.style.backgroundColor = '#000000'; /* New background color after delay */
  }, 1200); // Delay of 500 milliseconds (0.5 seconds)
});

hoverText3.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimeout3); // Clear the timeout if you move the mouse away before 0.5 seconds
  body.style.backgroundColor = '#EDEDE4'; /* Reset the background color when not hovering */
});

const hoverText4 = document.getElementById('hover-text4');
let hoverTimeout4;

hoverText4.addEventListener('mouseenter', () => {
  hoverTimeout4 = setTimeout(() => {
    body.style.backgroundColor = '#000000'; /* New background color after delay */
  }, 1200); // Delay of 500 milliseconds (0.5 seconds)
});

hoverText4.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimeout4); // Clear the timeout if you move the mouse away before 0.5 seconds
  body.style.backgroundColor = '#EDEDE4'; /* Reset the background color when not hovering */
});