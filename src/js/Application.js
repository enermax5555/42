import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
	  this.emojis = this.emojis.map((emoji) => `${emoji}${this.banana}`)
	  let emojiId = document.getElementById("emojis");
	  let paragrahp = document.createElement('p');
	  paragrahp.textContent = this.emojis.join('');
	  emojiId.appendChild(paragrahp);
  }
}
