import { action, computed, observable } from 'mobx'

class SiteState {
  // observables
  @observable backgroundColor = '#fff'

  // getters
  @computed get computedValue() {
    return 'COMPUTED'
  }

  // actions
  @action.bound changeBackgroundColor(color) {
    this.backgroundColor = color
    console.log('changing background color to:', color)
  }
}

export default new SiteState()
