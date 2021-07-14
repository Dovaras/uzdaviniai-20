const spanQuery = document.querySelector('span');

function myFunction() {
    document.getElementById("myForm").submit();
  }


function spanClick() { document.getElementByid("myForm").submit(); }

spanQuery.addEventListener('click', spanClick);