import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }

    get listTemplate() {
        return `
        <section class="row p-3 m-0">
        <div class="col-3 p-0 m-0 bg-success-subtle">
          <div class="btn-flex-container d-flex justify-content-center">
            <!-- start crazy button -->
            <button class="btn btn-outline-info start-crazy-button" onclick="app.JumblesController.setActive('${this.id}')">START</button>
          </div>
        </div>
        <div class="col-3 p-0 m-0 bg-success-subtle fastest-time-easy text-center fw-bold">
          ${this.name}
        </div>
        <!-- leader board for crazy -->
        <div class="col-3 p-0 m-0 bg-success-subtle fastest-time-easy text-center fw-bold">Fastest Time ${this.fastestTime}
        </div>
        <div class="col-3 p-0 m-0 bg-success-subtle fastest-time-easy text-center fw-bold">BEST :keyboard::
        </div>
      </section>
        `
    }

    get activeTemplate() {
        return `<div class="prompt-container p-3 m-0 mt-3 d-flex flex-column border border-3 border-black rounded shadow">
        <!-- TITLE -->
        <div class="title-container d-flex flex-row justify-content-between px-5 py-3">
          <h5>${this.name}</h5>
          <h5>Fastest Time: ${this.fastestTime}</h5>
        </div>
        <!-- PROMPT -->
        <p class="p-0 m-0 text-center">${this.body}</p>
      </div>
      <div class="input-container d-flex flex-column align-content-center">
        <!-- JUMBLE INPUT FIELD -->
        <form onsubmit="app.JumblesController.submitForm()">
        <textarea name="input" id="" cols="130" rows="10" class="border border-3 border-black rounded mt-3 shadow"
          id="text-area" placeholder="type what you see above here"></textarea>
        <!-- SUBMIT BUTTON -->
        <button type="submit" class="btn btn-outline-dark border-3 mt-3 shadow">Submit</button>
        </form>
      </div>`
    }
}

