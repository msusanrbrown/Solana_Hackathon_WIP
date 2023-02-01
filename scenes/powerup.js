this.onStart(function() {
    lib.tynker.platformer.setup_and_run_collectible();
});

this.onStart(function() {
    lib.tynker.platformer.make_invincible_when_collected(10);
});

this.onCollision(function () {
    blockLooksNextLevel();
});