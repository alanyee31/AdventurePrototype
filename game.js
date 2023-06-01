class Room extends AdventureScene {
    constructor() {
        super("room", "Inside your house");
        
    }

    onEnter() {
        var choice = this.registry.get('weather');


        let door = this.add.text(this.w * 0.3, this.w * 0.3, "🚪door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A door leading outside."))
            .on('pointerdown', () => {
                if(choice === 1){
                    this.showMessage("You open the door to a lightning strike");
                    this.scene.start('storm')
                } else if (choice === 2){
                    this.showMessage("You fight against the wind to open the door");
                    this.gotoScene('wind');
                } else if (choice === 3){
                    this.showMessage("You open the door to a rainstorm.");
                    this.gotoScene('rain');
                } else if (choice === 4){
                        this.showMessage("You open the door to a heatwave.");
                        this.gotoScene('drought');
                } else {
                    this.showMessage("There may be more to do inside first.");
                }

            });


        let battery = this.add.text(this.w * 0.5, this.w * 0.5, "🔋 battery")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a brand new battery.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the battery.");
                this.gainItem('battery');
                this.tweens.add({
                    targets: battery,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => battery.destroy()
                });
            })

        let controller = this.add.text(this.w * 0.1, this.w * 0.15, "🎮 weather controller")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("battery")) {
                    this.showMessage("You Insert the battery");
                } else {
                    this.showMessage("It has no batteries, maybe you can find one.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("battery")) {
                    this.loseItem("battery");
                    this.showMessage("*the controller powers up*");
                    controller.setText("🎮 weather controller turned on");
                    this.gotoScene('controllerUI');
                }
            })

        let umbrella = this.add.text(this.w * 0.3, this.w * 0.4, "☂️ Umbrella")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's an umbrella")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the umbrella.");
                this.gainItem('umbrella');
                this.tweens.add({
                    targets: umbrella,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => umbrella.destroy()
                });
            })

    }
}

class ControllerUI extends AdventureScene {
    constructor() {
        super("controllerUI", "Weather controller buttons");
        
        this.weather;

    }
    onEnter() {
        this.registry.set('weather', this.weather);

        let yellowbutton = this.add.circle(700, 250, 200, 0xffff00)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A yellow button that reads storm");
            })
            .on('pointerdown', () => {
                this.showMessage(`A light flashes followed 
by a loud thunderclap`);
                this.tweens.add({
                    targets: yellowbutton,
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 500,
                });
                this.tweens.add({
                    targets: greenbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: bluebutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: redbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.weather = 1;
                this.registry.set('weather', this.weather);
            });
        
        let greenbutton = this.add.circle(700, 850, 200, 0x00ff00)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A green button that reads wind");
            })
            .on('pointerdown', () => {
                this.showMessage("You see trees being blown violently outside");
                this.tweens.add({
                    targets: yellowbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: greenbutton,
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 500,
                });
                this.tweens.add({
                    targets: bluebutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: redbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.weather = 2;
                this.registry.set('weather', this.weather);
            });

        let bluebutton = this.add.circle(400, 550, 200, 0x0000ff)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A blue button that reads rain");
            })
            .on('pointerdown', () => {
                this.showMessage("You suddenly hear heavy rainfall outside");
                this.tweens.add({
                    targets: yellowbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: greenbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: bluebutton,
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 500,
                });
                this.tweens.add({
                    targets: redbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.weather = 3;
                this.registry.set('weather', this.weather);
            });

        let redbutton = this.add.circle(1000, 550, 200, 0xff0000)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A red button that reads drought");
            })
            .on('pointerdown', () => {
                this.showMessage("You feel the temperature get noticably warmer");
                this.tweens.add({
                    targets: yellowbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: greenbutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: bluebutton,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                });
                this.tweens.add({
                    targets: redbutton,
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 500,
                });
                this.weather = 4;
                this.registry.set('weather', this.weather);
            });

        this.add.text(640, 250, "Storm")
            .setFontSize(this.s * 2);
        this.add.text(650, 850, "Wind")
            .setFontSize(this.s * 2); 
        this.add.text(350, 550, "Rain")
            .setFontSize(this.s * 2); 
        this.add.text(930, 550, "Drought")
            .setFontSize(this.s * 2); 

        this.add.text(1200, 50, "Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Stop playing with weather controller.");
            })
            .on('pointerdown', () => {
                this.gotoScene('room');
            });

    }
}

class Rain extends AdventureScene {
    constructor() {
        super("rain", "Outside, in the heavy rain");
    }
    onEnter() {
        if (this.hasItem("umbrella")){
            this.add.text(50,50, 
`You walk around the street
observing the beautiful rain
around you. The rain pitters
and patters on your umbrella
as you hold onto it.`).setFontSize(80);
        } else {
            this.add.text(50,50, 
`You decide not to go outside
without an umbrella due to 
the heavy rain.`).setFontSize(80);
        }
    }
}

class Wind extends AdventureScene {
    constructor() {
        super("wind", "Outside, with heavy winds blowing");
    }
    onEnter() {
        if (this.hasItem("umbrella")){
            this.add.text(50,50, 
`You are swept off your feet
due to the strongwinds 
blowing on your umbrella 
and meet an untimely end.`).setFontSize(80);
        } else {
            this.add.text(50,50, 
`Despite the strong winds 
making it difficult to walk, 
you wander about the windy 
paradise watching trees and 
debris get blown around.`).setFontSize(80);
        }
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, `Control the weather 
and your adventure`).setFontSize(100);
        this.add.text(50,300, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('room'));
        });
    }
}

class Storm extends Phaser.Scene {
    constructor() {
        super('storm')
    }
    create() {
        this.add.text(50,50, 
`The moment you take a step outside, 
You are struck by a lightning bolt 
and killed instantly`).setFontSize(80);
    }
}

class Drought extends Phaser.Scene {
    constructor() {
        super('drought')
    }
    create() {
        this.add.text(50,50, 
`You take a step outside and notice the 
area around you has become a dry barren 
wasteland you walk around looking for 
water, but there is none in sight`).setFontSize(80);
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Room, ControllerUI, Rain, Storm, Wind, Drought],
    title: "Adventure Game",
});


