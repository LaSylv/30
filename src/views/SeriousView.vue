<template>
  <div class="serious-text">
    <h2>Informations</h2>

    <h3>Pour Participer</h3>
    <p>Pour t'inscrire, remplit le formulaire en cliquant sur le lien ci-dessous.</p>
    <p>Si tu ne participes pas/ne sait pas encore, envoie moi un message pour prévenir ! </p>

    <div class="row-center"><img src="@/assets/arrow.gif" width="75px"><a class="flashy-link" href="https://docs.google.com/forms/d/1FxksGiPw5jN7kdatgcXkmvJ1sN1vCOTpbNz97oKC8q0/prefill" target="_blank">Formulaire d'inscription</a><img src="@/assets/arrow.gif" class="rotated-180" width="75px"></div>

    <h3>Infos sur le Lieu</h3>
    <p>
      L'événement se déroulera à "Le Pontet", à 2h de Lyon, avec des chambres de 2 à 6 personnes réparties dans 3
      chalets.
    </p>
    <p>
      Si tu souhaites venir avec des enfants, c'est possible, on
      peut voir ca ensemble pour l'orga !
    </p>
    <a href="https://maps.app.goo.gl/G25UncNcQshp6evu5" target="_blank">Découvrir le lieu</a>

    <h3>Participation financière</h3>
    <p>
      L'anniversaire est entièrement all inclusive, ce qui signifie que tout est pris en charge pour que tu passes
      un moment inoubliable sans te soucier des détails, pas besoin de ramener tes cacahuètes et ta Manzana !
    </p>
    <p>
      Malheureusement, je n'aurais surement pas touché mes BSPCE d'ici là, donc je demande une participation financière
      à hauteur de ce que tu peux.
    </p>
    <p>
      Les contreparties par &nbsp;
      <RouterLink to="money"> ici</RouterLink>&nbsp
    </p>
    <p>
      Plus les contributions seront généreuses, plus l'univers des possibles sera grand (pour info, le cachet de David
      Guetta s'élève à 200 000€).
    </p>

    <h3>Infos Supplémentaires</h3>
    <p>
      Le reste des infos se trouvent sur ce site, il sera mis à jour au fur et à mesure !
    </p>
    <p>
      <RouterLink to="/">Page d'acceuil</RouterLink>
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.serious-text {
  background-color: #fff;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h3 {
  margin-top: 5rem;
}

.rotated-180 {
  transform: rotate(180deg);
  transition: transform 0.3s; /* Ajoute une transition pour une rotation fluide */
}

.flashy-link {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 20px;
  color: #ff0000; /* Rouge vif */
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border: 3px solid #ff0000; /* Bordure rouge vif */
  border-radius: 5px;
  background: linear-gradient(45deg, #ffcccc, #ff99cc);
  box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;
  animation: flashy-blink 1s infinite alternate, flashy-move 2s infinite alternate;
}

/* Animation pour changer la couleur et la bordure */
@keyframes flashy-blink {
  0% {
    color: #ff0000;
    border-color: #ff0000;
    background: linear-gradient(45deg, #ffcccc, #ff99cc);
  }
  50% {
    color: #ffff00;
    border-color: #ffff00;
    background: linear-gradient(45deg, #ffffcc, #ffff99);
  }
  100% {
    color: #00ff00;
    border-color: #00ff00;
    background: linear-gradient(45deg, #ccffcc, #99ff99);
  }
}

/* Animation pour bouger légèrement le lien */
@keyframes flashy-move {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-5px, 5px);
  }
  100% {
    transform: translate(5px, -5px);
  }
}

.flashy-link:hover {
  transform: scale(1.2); /* Agrandit le lien au survol */
  box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000;
}
</style>
