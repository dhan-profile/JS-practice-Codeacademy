// ***************** The this Keyword ******************* //
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo(){
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}. `);
  }
};

console.log(robot.provideInfo());


// ***************** Arrow Functions and this ******************* //
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


// ***************** Privacy ******************* //
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();


// ***************** Getters ******************* //
/*Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property!*/
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return "My current energy level is "+this._energyLevel;
    }
    else{
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};
console.log(robot.energyLevel);


// ***************** Setters ******************* //
/*setter methods reassign values of existing properties within an object.*/
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }
    else{
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);


// ***************** Factory Functions ******************* //
const robotFactory = (model, mobile) => {
return {
  model : model,
  mobile : mobile,
    beep(){
    console.log('Beep Boop');
  }
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();


// ***************** Property Value Shorthand ******************* //
const robotFactory = (model, mobile) => {
  return {
    model,    // SHORTHAND 
    mobile,   // SHORTHAND 
    beep() {
      console.log('Beep Boop');
    },
  }
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// ***************** Destructured Assignment ******************* //
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
//const functionality = robot.functionality; // THIS CAN B WRITTEN AS:
const {functionality} = robot;
functionality.beep();      // SINCE functionality = robot.functionality; ===> robot.functionality.beep() === functionality.beep();  


// ***************** Destructured Assignment ******************* //

