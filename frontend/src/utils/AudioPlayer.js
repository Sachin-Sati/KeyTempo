import { Howl } from 'howler';

class AudioPlayer {
    constructor(src) {
        this.sound = new Howl({
            src: [src],
            html5: true,
        });
        this.playId = null;         // store the ID of current audio
    }

    play() {
        if (!this.playId || !this.sound.playing(this.playId)) {     // checks if audio isn't already playing
            this.playId = this.sound.play();
        }
    }

    pause() {
        if (this.playId !== null) {
            this.sound.pause(this.playId);          // pause the current audio
        }
    }

    setSpeed(speed) {
        if (this.playId !== null) {
            this.sound.rate(speed, this.playId);    // set playback speed for current audio
        }
    }

    isPlaying() {
        return this.playId !== null && this.sound.playing(this.playId);
    }
}

export default new AudioPlayer('/music.mp3');