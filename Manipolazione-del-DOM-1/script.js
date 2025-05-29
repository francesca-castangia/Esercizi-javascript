function addProduct () {
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");

    const inputText = input.value;
    
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.innerText = inputText;

    li.appendChild(checkbox);
    li.appendChild(span);

    ul.appendChild(li);

    input.value = "";
}