import $ from 'jquery'
import ProgressBar from './js/ProgressBar'
import './css/normalize.css';
import './css/styles.css';
import './css/dialog.css';
import './css/ProgressBar.css';

const progressBar = new ProgressBar(56, 125);

$('body').on('click', (e) => {
  document.getElementById('dialog').close();
})

$('.progress-link').on('click', (e) => {
  e.stopPropagation();
  progressBar.show();
})
