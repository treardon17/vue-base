import { action, computed, observable } from 'mobx'

export default class SiteState {
  // observables
  @observable routes = []

  // setup
  constructor () {
    this.setDefaults()
  }

  setDefaults () {
  }

  // getters
  @computed get computedAge() {
      return this.age + 1
  }

  @action.bound setAge() {
      this.age++
  }
}