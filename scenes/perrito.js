this.onStart(function() {
    this.motion.moveTo(-260, -74);
    lib.tynker.platformer.set_camera_to_me();
    lib.tynker.platformer.setup_and_run_character();
    lib.tynker.platformer.set_properties(1, 5, 5, 3, 3);
});

this.onMessageReceived(56, function () {
    this.looks.setCostume("actor1");
});

this.onMessageReceived(4, function () {
    this.looks.setCostume("actor");
});

this.onKeyPress("up arrow", function () {
    lib.tynker.platformer.jump(100);
});

this.onKeyPress("left arrow", function () {
    lib.tynker.platformer.walk_left_distance(20, 20);
});

this.onKeyPress("right arrow", function () {
    lib.tynker.platformer.walk_right_distance(20, 20);
});

this.onKeyPress("down arrow", function () {
    lib.tynker.platformer.slam(100);
    lib.tynker.platformer.attack();
});
