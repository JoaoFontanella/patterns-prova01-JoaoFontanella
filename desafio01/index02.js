class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance; 
    }

    this.settings = {};
    Config.instance = this; 
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }
}

const lang01 = new Config();
lang01.setConfig("lang01", "pt-BR");
const lang02 = new Config();
lang02.setConfig("lang02", "eu-US")
const lang03 = new Config();
console.log(lang03.getConfig("lang01"));
console.log(lang03.getConfig("lang02"));