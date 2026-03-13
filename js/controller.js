function addItem() {

    let text = model.viewState.inputText.trim();

    if (text === "") return;

    model.data.items.push({
        id: Date.now(),
        name: text
    });

    model.viewState.inputText = "";

    updateView();
    document.getElementById("itemInput").focus();
}

function removeItem(id) {

    for (let i = 0; i < model.data.items.length; i++) {

        if (model.data.items[i].id === id) {
            model.data.items.splice(i, 1);
            break;
        }

    }

    updateView();
}
