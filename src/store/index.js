import Home from './home'
import Page2 from './page2'

class RootStore {
    constructor () {
        this.Home = new Home()
        this.Page2 = new Page2()
    }
}

export default new RootStore()