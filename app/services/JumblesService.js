import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

class JumblesService {

    submitForm(formData) {

        if (formData.input == AppState.activeJumble.body) {
            console.log('win')
            this.endGame()
        } else {
            console.log('lose')
            window.alert('you lose')
        }

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
        console.log(typeTime, AppState.activeJumble.fastestTime)
        if (typeTime < AppState.activeJumble.fastestTime) {
            AppState.activeJumble.fastestTime = typeTime
            AppState.emit('jumbles')
            AppState.emit('activeJumble')
            saveState('jumbles', AppState.jumbles)
        }
    }
}

export const jumblesService = new JumblesService()