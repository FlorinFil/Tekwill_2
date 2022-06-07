function openLoginModal(id) {


    const node = document.createElement("div");
    node.innerHTML = `
    <div id="modal_background" onclick="closeModalFromBackground(event)">
    
            <div class="modal" id="modala_noastra" >
                <div class="head">
                    <h1>Titlul ferestrei</h1>
                </div>
                <div class="body">
                    <form class="modal-form" id="login"  onsubmit="handleSubmit(event)">
                        <input name="login" placeholder="login">
                        <input name="password" type="password" placeholder="password">
                        <button type="reset">Reset</button>
                        <button >Submit</button>
                    </form>
                    <form class="modal-form" id="register" onsubmit="handleSubmit(event)">
                        <input name="login" placeholder="login">
                        <input name="email" placeholder="email" type="email">
                        <input name="password1" type="password" placeholder="new password">
                        <input name="password2" type="password" placeholder="repeat password">
                        
                        <button type="submit">submitt</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
                <div class="foot">
                    <button id="close-modal" type="button" onclick="closeModal()">Cancel</button>    
                </div>
            </div>
        </div>
    `;
    
    document.getElementById(id).appendChild(node);
    document.getElementById("close-modal").addEventListener("click", () => {
        document.getElementById("modal_background").style.display = "none";
    })
}