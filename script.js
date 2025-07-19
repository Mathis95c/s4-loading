window.onload = () => {


  // Lecture du son d'intro une seule fois
  const introSound = document.getElementById('intro-sound');
  introSound.play().catch(e => {
    console.warn("Lecture du son bloquée par le navigateur. Elle sera autorisée après interaction.");
  });
};
