<template>
  <div class="goofy-container">
    <h1 class="title">La checklist avant de partir</h1>
    <ul class="goofy-list">
      <li class="goofy-item">❄️ <span class="placeholder">Équipements (voiture) pour la neige (on est à 1000m en Savoie, il risque de neiger)</span></li>
      <li class="goofy-item">🌲 <span class="placeholder">De quoi faire une petite rando pour respirer le grand air</span></li>
      <li class="goofy-item">🛁 <span class="placeholder">Serviette de bain (Draps fournis mais pas la serviette de bain)</span></li>
      <li class="goofy-item">👙 <span class="placeholder">Maillot pour le jacuzzi (indispensable!)</span></li>
      <li class="goofy-item">🎰 <span class="placeholder">La carte de bingo que tu as reçu dans ton invitation</span></li>
<!--      <li class="goofy-item">🪵 <span class="placeholder">Un morceau de ce que tu veux pour le BYOS</span></li>-->
      <li class="goofy-item">🎲 <span class="placeholder">Si t'aimes les jeux de société tu peux en ramener!</span></li>
      <li class="goofy-item">🍾 <span class="placeholder">Pas besoin de nourriture ou d'alcool, mais une bouteille de digestif ou autre est la bienvenue si tu veux vraiment faire découvrir les boissons de ton grand père</span></li>
    </ul>
    <div class="animated-gif">
      <img src="https://media.giphy.com/media/l41YdEKkMbqtuf8is/giphy.gif" alt="goofy gif" />
    </div>
  </div>
</template>

<style scoped>
.goofy-container {
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ff6600);
  padding: 20px;
  border: 5px dashed #000;
  color: #ff00ff;
  font-family: 'Comic Sans MS', sans-serif;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #ffff00;
  text-shadow: 3px 3px #ff00ff;
  animation: blink 1s infinite alternate;
}

.goofy-list {
  list-style-type: none;
  padding: 0;
  font-size: 1.5rem;
}

.goofy-item {
  background: #ff6600;
  color: #00ffcc;
  margin: 10px 0;
  padding: 10px;
  border: 3px solid #ff00ff;
  border-radius: 15px;
  box-shadow: 5px 5px #ffcc00;
}

.placeholder {
  font-style: italic;
  color: #ffffff;
  background: #ff00ff;
  padding: 3px 6px;
  border-radius: 5px;
}

.animated-gif img {
  width: 100px;
  margin-top: 20px;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
</style>
