import { AppState } from "../AppState.js"

class JumblesService {

    submitForm(formData) {

        if (formData.input == AppState.activeJumble.body) {
            console.log('win')
        } else {
            console.log('lose')
        }
    }

    setActive(jumbleId) {
        console.log(jumbleId)
        let foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = foundJumble
        console.log(AppState.activeJumble)
    }
}

export const jumblesService = new JumblesService()