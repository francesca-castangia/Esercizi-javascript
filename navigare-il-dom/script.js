 const ul = document.querySelector('ul');
    
    // 1. Padre di ul
    console.log(ul.parentElement);

    // 2. Secondo elemento figlio di ul
    const secondLi = ul.children[1];
    console.log(secondLi);

    // 3. Fratello successivo del secondo li
    console.log(secondLi.nextElementSibling);

    // 4. Fratello precedente del secondo li
    console.log(secondLi.previousElementSibling);