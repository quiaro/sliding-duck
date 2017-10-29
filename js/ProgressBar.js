import $ from 'jquery';

class ProgressBar {
  constructor(initValue, targetValue) {
    this.value = 0;
    this.initValue = initValue;
    this.targetValue = targetValue;
    this.$root = $('.progress-bar-container');
    this.$indicator = $('.indicator', this.$root);
    this.$current = $('.indicator .value', this.$root);
    this.$target = $('.target .value', this.$root);
    this.$remaining = $('.help .remaining', this.$root);
    this.$progressBar = $('.progress-bar', this.$root)
  }

  getBarWidth(currentValue, fullValue) {
    return Math.round(currentValue * 100 / fullValue);
  }

  show() {
    const barWidth = this.getBarWidth(this.initValue, this.targetValue);

    this.$current.text(this.initValue);
    this.$target.text(this.targetValue);
    this.$remaining.text(this.targetValue - this.initValue);
    this.$indicator.css('left', barWidth + '%');
    this.$progressBar.css('width', '0%');

    document.getElementById('dialog').showModal();

    // Show progress bar animation after a short delay to
    // make sure the dialog is fully visible (unfortunately, there doesn't
    // seem to an event hook to use for this)
    setTimeout(() => {
      const updateBarWidth = this.getBarWidth(this.initValue, this.targetValue);
      this.$progressBar.css('width', updateBarWidth + '%');
    }, 600)
  }
}

export default ProgressBar;
