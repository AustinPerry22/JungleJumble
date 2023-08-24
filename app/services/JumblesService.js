import { AppState } from "../AppState.js"

class JumblesService {

    submitForm(formData) {

        if (formData.input == AppState.activeJumble.body) {
            console.log('win')
        } else {
            console.log('lose')
        }
        this.endGame()
    }

    setActive(jumbleId) {
        console.log(jumbleId)
        let foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = foundJumble
        this.startGame()
    }

    startGame() {
        console.log('start')
        AppState.activeJumble.startTime = Date.now()
        console.log(AppState.activeJumble)
    }

    endGame() {
        console.log('end')
        AppState.activeJumble.endTime = Date.now()
        let typeTime = (AppState.activeJumble.endTime - AppState.activeJumble.startTime) / 1000
        if (typeTime > AppState.activeJumble.fastestTime) {
            AppState.activeJumble.fastestTime = typeTime
            AppState.emit('jumbles')
            AppState.emit('activeJumble')
        }
        console.log(AppState.activeJumble)
    }
}

export const jumblesService = new JumblesService()