let modalWrap = null;
let btn;
const observer = new MutationObserver(function() {
    if (document.querySelector("#btn")) {
        btn = document.querySelector("#btn");
        btn.addEventListener("click", beerModal);
        console.log("yes!");
        observer.disconnect();
    }
});
target = document.querySelector("body");
const config = {
    attributes: true,
    childList: true,
    subtree: true
};
observer.observe(target, config);
const beerModal = ()=>{
    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
    document.body.append(modalWrap);
    const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
};

//# sourceMappingURL=index.c7ec8904.js.map
