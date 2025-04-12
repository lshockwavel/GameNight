import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

    // AppState.js

    players = [
      new Player('Dane'),
      new Player('JimBob'),
      new Player('BobJim'),
      new Player('Julius'),
      new Player('Brutus'),
      new Player('Augustus'),
      new Player('Marcus'),
      new Player('Hadrian'),
      new Player('Alexander'),
      new Player('Nero')
    ]
}

export const AppState = createObservableProxy(new ObservableAppState())