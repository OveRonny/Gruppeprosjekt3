
updateView();

function updateView() {

    let itemsHTML = "";

    for (let i = 0; i < model.data.items.length; i++) {
        const item = model.data.items[i];

        itemsHTML += `
        <li>
            ${item.name}
            <button onclick="removeItem(${item.id})">❌</button>
        </li>
        `;
    }

    model.app.app.innerHTML = `
        <h1>Handleliste</h1>

        <input 
            id="itemInput"
            type="text"
            placeholder="Skriv vare..."
            value="${model.viewState.inputText}"
            oninput="model.viewState.inputText=this.value"
             onkeydown="if(event.key==='Enter') addItem()"
        >

        <button onclick="addItem()">Legg til</button>

        <ul>
            ${itemsHTML}
        </ul>
    `;
}