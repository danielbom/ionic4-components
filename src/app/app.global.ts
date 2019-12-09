import { Injectable } from "@angular/core";

@Injectable()
export class AppState {
  private _state = {};

  // Return a clone of current state
  get state() {
    return this._state = this.clone(this._state);
  }

  // Never allow mutation
  set state(_value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop: string) {
    return this._state[prop];
  }

  // Mutate state internally
  set(prop: string, value: any) {
    return this._state[prop] = value;
  }

  // Simple object clone
  private clone(object) {
    return JSON.parse(JSON.stringify(object));
  }
}