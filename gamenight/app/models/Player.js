export class Player {

    // static id to keep track of for the next id. Using Int like values
    static counterId = 1;
    
    constructor(name) {
      this.name = name;

      //Setting the 
      this.id = Player.counterId;

      //incrementing the value for the next user
      Player.counterId++;

      // Their score is defaulted to start at 0
      this.score = 0;

      // Additional properties can be added here as needed
    }

    //REVIEW Is there a way to help with html for the string with help outs in the index.html?
    get PlayerTemplateCard(){
    return /* html */`
        <div class= " col-md-4 mb-3 px-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        ${this.name} - ${this.score}
                    </div>
                    <div>
                        <button onclick="app.PlayersController.decreasePlayerScore('${this.id}')" role="button" class="mdi mdi-minus"> </button>
                        <button onclick="app.PlayersController.increasePlayerScore('${this.id}')" role="button" class="mdi mdi-plus-circle"> </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
  }