class TV {
    turnOn() {
      console.log("TV ligada.");
    }
  
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class SmartTV {
    turnOn() {
      console.log("Smart TV conectada à internet e ligada.");
    }
  
    turnOff() {
      console.log("Smart TV desligada e desconectada da internet.");
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  const tv = new TV();
  const remote1 = new RemoteControl(tv);
  remote1.pressPowerButton(true);
  remote1.pressPowerButton(false);
  
  console.log("----");
  
  const smartTV = new SmartTV();
  const remote2 = new RemoteControl(smartTV);
  remote2.pressPowerButton(true);
  remote2.pressPowerButton(false);  