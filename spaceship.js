
class Spaceship {

  constructor(name, crew, phasers, shields) {

    this.name = name;
    this.crew = crew;
    this.crew.forEach((crew) => {crew.currentShip = this})
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = false;
    this.phasersCharge = 'uncharged';
    this.docked = (this.crew.length > 0 ? false : true)
  }


}
