
var config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 620,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 300 },
            debug: false
        }
    }
};



var game = new Phaser.Game(config);
var platforms;
s

function preload ()
{
    this.load.image('background', 'assets/background/star_bg_sm.png');
    this.load.image('meteor', 'assets/meteor.png');
    this.load.image('ship', 'assets/ship.png');


}

function create ()
{


    this.add.image(0, 0, 'background').setOrigin(0, 0);

    meteor = this.physics.add.staticGroup();

    meteor.create(400, 568, 'meteor').setScale(2).refreshBody();

    meteor.create(600, 400, 'meteor');

    player = this.physics.add.sprite(540, 540, 'ship');
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'ship', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('ship', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, meteor);

    cursors = this.input.keyboard.createCursorKeys();

}

function update ()
{

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(160);

        player.anims.play('down', true);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-160);

        player.anims.play('up', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }
}