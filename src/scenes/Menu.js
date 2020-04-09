class Menu extends Phaser.Scene 
{
    constructor() 
    {
        super("menuScene");
    }

    create() 
    {
        // display menu first
        this.add.text(20, 20, "Rocket Patrol Menu");

        // launch the next scene
        this.scene.start("playScene");
    }
}