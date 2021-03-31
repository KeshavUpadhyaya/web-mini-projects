const sounds = [
  'alarm',
  'bird-chirp',
  'rocket-whoosh',
  'stadium-applause'
];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  const soundButtonsDiv = document.getElementById('sound-buttons');

  soundButtonsDiv.appendChild(btn);

  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  })

  btn.innerText = sound;
})

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  })
}