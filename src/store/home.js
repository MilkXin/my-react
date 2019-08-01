import { observable, action } from 'mobx'

export default class Home{
    @observable msg = 'home page'

    @action showMsg = () => {
        console.log('msg:', this.msg)
    }
}