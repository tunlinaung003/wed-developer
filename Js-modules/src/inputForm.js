const inputForm = ()=> {
    const form = document.createElement("form");
    form.id = "inputForm";

    form.innerHTML =`
        <input name="input-text" />
        <button>Add</button>
    `;

    return form;
}

export default inputForm;