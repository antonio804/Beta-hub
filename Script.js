// Selecionando elementos
const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');

// Função para adicionar um item à lista
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Por favor, digite um item.");
        return;
    }

    // Criando o novo item da lista
    const li = document.createElement('li');
    li.textContent = itemText;

    // Criando o botão de remover
    const removeButton = document.createElement('button');
    removeButton.textContent = "×";
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function () {
        shoppingList.removeChild(li);
    };

    // Adicionando o botão de remover ao item
    li.appendChild(removeButton);

    // Adicionando o item à lista
    shoppingList.appendChild(li);

    // Limpando o campo de entrada
    itemInput.value = "";
}

