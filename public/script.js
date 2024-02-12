// Menu food

function showTheMenus(buttonId, targetClassName) {
    document.getElementById(buttonId).addEventListener('click', function() {
      var otherElements = document.getElementsByClassName('divs');
      var thisElement = document.getElementsByClassName(targetClassName);
  
      for (var i = 0; i < otherElements.length; i++) {
        otherElements[i].classList.add('hidden');
      }
  
      for (var i = 0; i < thisElement.length; i++) {
        thisElement[i].classList.remove('hidden');
        // da editare
        thisElement.scrollIntoView({behavior:smooth, block:start});
      }

      
    });
  }
  
  showTheMenus('buttA', 'divA');
  showTheMenus('buttB', 'divB'); 
  showTheMenus('buttC', 'divC');
  showTheMenus('buttD', 'divD');
  showTheMenus('buttE', 'divE');
  showTheMenus('buttF', 'divF');
  showTheMenus('buttG', 'divG');

// Toggle Menu

function dropMenu() {
  var secondChild = document.querySelector('#hamButton > :nth-child(2)');
  var menuWindow = document.querySelector('#menuWindow');
  
  if (secondChild.classList.contains('hidden')) {
    document.querySelector('#hamButton > :first-child').classList.remove('rotate-45');
    document.querySelector('#hamButton > :first-child').classList.remove('top-1');
    document.querySelector('#hamButton > :nth-child(3)').classList.remove('-rotate-45');
    document.querySelector('#hamButton > :nth-child(3)').classList.remove('-top-1');
    
    setTimeout(function() {
      secondChild.classList.remove('hidden');
    }, 70); // Ritardo di 70 millisecondi

    menuWindow.classList.add('-top-60');
    menuWindow.classList.remove('top-16');
  } else {
    document.querySelector('#hamButton > :first-child').classList.add('rotate-45');
    document.querySelector('#hamButton > :first-child').classList.add('top-1');
    document.querySelector('#hamButton > :nth-child(3)').classList.add('-rotate-45');
    document.querySelector('#hamButton > :nth-child(3)').classList.add('-top-1');
    
    setTimeout(function() {
      secondChild.classList.add('hidden');
    }, 70); // Ritardo di 70 millisecondi

    menuWindow.classList.remove('-top-60');
    menuWindow.classList.add('top-16');
  }
}


document.querySelector('#hamButton').addEventListener('click', dropMenu);

// Funzione per lo scrolling alla sezione "contatti"
function scrollToContatti() {
  // Seleziona l'elemento con id "contatti"
  const contattiSection = document.getElementById('contatti');
  // Esegui lo scrolling alla posizione della sezione "contatti"
  contattiSection.scrollIntoView({ behavior: 'smooth' });
}

// da cancellare

document.addEventListener('click', function(event) {
  var secondChild = document.querySelector('#hamButton > :nth-child(2)');
  if (secondChild.classList.contains('hidden')) {
    dropMenu();
  }
});
