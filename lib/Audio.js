import * as d3 from "d3";

class AudioElement {
  constructor(audioElement) {
    //create audio context using HTML5 API
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    this.audioElement = audioElement;

    //setup volume
    this.audioElement.volume = 1.0;

    try {
      //create analyser using HTML5 API
      this.analyser = this.audioCtx.createAnalyser();

      //create audio source using HTML5 API
      this.audioSrc = this.audioCtx.createMediaElementSource(this.audioElement);

      this._setup();
    } catch (err) {
      console.error(err);
    }
  }
  _setup() {
    //connect audio source with analyser
    this.audioSrc.connect(this.analyser);

    //connect analyser with audio contxt destination
    this.analyser.connect(this.audioCtx.destination);

    //setup fftsize
    this.analyser.fftSize = 256;

    //analyser frequency data
    const frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

    //copy byte frequencyData into frequencyData array
    this.analyser.getByteFrequencyData(frequencyData);
  }

  play(e) {
    if (e) e.preventDefault();

    //start playing
    const canplayPromise = this.audioElement.play();
    var _self = this;

    canplayPromise
      .then(function() {
        _self.timer = d3.timer(elapsed => {
          const frequencyData = new Uint8Array(
            _self.analyser.frequencyBinCount
          );
          //copy byte frequencyData into frequencyData array
          _self.analyser.getByteFrequencyData(frequencyData);
        });
      })
      .catch(function(err) {
        throw new Error(err);
      });
  }

  stop(e) {
    if (e) e.preventDefault();

    if (this.timer) this.timer.stop();
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }
}

export default AudioElement;
