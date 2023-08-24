import { AppState } from "../AppState.js"

class JumblesService {
    setActive(jumbleId) {
        console.log(jumbleId)
        let foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = foundJumble
        console.log(AppState.activeJumble)
    }
}

export const jumblesService = new JumblesService()