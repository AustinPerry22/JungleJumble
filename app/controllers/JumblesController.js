import { AppState } from "../AppState.js"
import { jumblesService } from "../services/JumblesService.js"
import { setHTML } from "../utils/Writer.js"

function _drawJumbles() {
    let jumbles = AppState.jumbles
    let content = ''
    jumbles.forEach(jumble => content += jumble.listTemplate)
    setHTML('jumblesList', content)
}

function _drawActive() {
    let active = AppState.activeJumble
    setHTML('activeJumble', active.activeTemplate)
}

export class JumblesController {
    constructor() {
        console.log(AppState.jumbles)
        _drawJumbles()
    }

    setActive(jumbleId) {
        jumblesService.setActive(jumbleId)
        _drawActive()
    }


}