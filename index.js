document.addEventListener('keydown', function (event) {
    // Select the audio element based on the pressed key
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    const key = document.querySelector(`.keys[data-key="${event.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;

    audio.play();

    key.classList.add('playing');
});

function removeTransition(event) {
    // Skip if the property is not a 'transform'
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Get all elements with the class 'keys'
const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keyup', function (event) {
   
    const key = document.querySelector(`.keys[data-key="${event.keyCode}"]`);

    if (!key) return;

    key.classList.remove('playing');
});
