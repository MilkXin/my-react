import Page1 from './page1'
import Page2 from './page2'

class RootStore {
    constructor () {
        this.Page1 = new Page1()
        this.Page2 = new Page2()
    }
}

export default new RootStore()