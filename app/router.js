import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: JumblesController,
    view: /*html*/`
    <div class="container-fluid">
    <section class="row p-0 m-0">
      <!-- COL 8 -->
      <div class="col-12 col-md-8 p-0 m-0 bg-success-subtle" id="activeJumble">

      </div>
      <!-- COL 4 -->
      <div class="col-12 col-md-4 p-0 m-0 bg-success-subtle d-flex flex-column align-content-start">
        <div class="jumbles-container p-0 m-0 mt-3 border border-3 border-black rounded shadow">
          <!-- EASY SECTION -->
          <div id="jumblesList"></div>
          <section class="row p-0 m-0">
            <div class="col-12 p-0 m-0">
              <div class="create-jumbles-container d-flex flex-column align-items-center">
                <h5>Create Jumble</h5>
                <!-- jumble name -->
                <textarea name="jumbleName" id="jumbleName" cols="40" rows="1" class="rounded"
                  placeholder="name"></textarea>
                <!-- where you create jumble -->
                <textarea name="jumbleJumble" id="jumbleJumble" cols="40" rows="4" class="mt-3 rounded"></textarea>
                <!-- create jumble button -->
                <button class="btn btn-outline-dark mt-3 create-jumble-button"
                  placeholder="place your jumble here">Create</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>

     
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]