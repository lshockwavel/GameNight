export class Player {
    constructor(name) {
      this.name = name;

      // Their score is defaulted to start at 0
      this.score = 0;

      // Additional properties can be added here as needed
    }

    //REVIEW Is there a way to help with html for the string with help outs in the index.html?
    get PlayerTemplateCard(){
    return /* html */`
        <div class="card">
            <div class="card-body">
                ${this.name} - ${this.score}
            </div>
            <div>
                <button onclick="app.PlayersController.decreasePlayerScore('${this.name}')" role="button"> - </button>
                <button onclick="app.PlayersController.increasePlayerScore('${this.name}')" role="button"> + </button>
            </div>
        </div>
        `;
    }

    // get listHTMLTemplate() {
    //     return /* html */`
    //     <div class="col-md-6 mb-3">
    //       <div class="d-flex justify-content-between align-items-center px-3">
    //         <p class="fs-2 mb-0">${this.name}</p>
    //         <div class="d-flex gap-2 align-items-center">
    //           <i onclick="app.PlayersController.decreasePlayerScore('${this.id}')" class="mdi mdi-minus-circle fs-3" role="button" title="Decrease Score"></i>
    //           <span class="fs-1 text-light">${this.score}</span>
    //           <i onclick="app.PlayersController.increasePlayerScore('${this.id}')" class="mdi mdi-plus-circle fs-3" role="button" title="Increase Score"></i>
    //         </div>
    //       </div>
    //       <hr>
    //     </div>
    //     `
    //   }
  }