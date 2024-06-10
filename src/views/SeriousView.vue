<template>
  <div class="serious-text">
    <h2>Informations</h2>

    <h3>Tout Compris (All Inclusive)</h3>
    <p>
      L'anniversaire est entièrement all inclusive, ce qui signifie que tout est pris en charge pour que tu passes
      un moment inoubliable sans te soucier des détails, pas besoin de ramener tes cacahuètes et ta Manzana !
    </p>
    <p>
      Malheureusement, je n'aurais surement pas touché mes BSPCE d'ici là, donc je demande une participation financière
      à hauteur de ce que tu peux.
    </p>
    <p>
      Les contreparties par
      <RouterLink to="money"> ici</RouterLink>&nbsp
    </p>
    <p>
      Plus les contributions seront généreuses, plus l'univers des possibles sera grand (pour info, le cachet de David
      Guetta s'élève à 200 000€).
    </p>
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


    <h3>Infos Supplémentaires</h3>
    <p>
      Le reste des infos se trouvent sur ce site, il sera mis à jour au fur et à mesure !
    </p>
    <p>
      <RouterLink to="/">Page d'acceuil</RouterLink>
    </p>


    <h3>Participer</h3>
    <p>Pour t'inscrire, remplit le formulaire en cliquant sur le lien ci-dessous.</p>
    <p>Si tu ne participes pas/ne sait pas encore, envoie moi un message pour prévenir ! </p>

    <p><a href="https://docs.google.com/forms/d/1FxksGiPw5jN7kdatgcXkmvJ1sN1vCOTpbNz97oKC8q0/prefill" target="_blank">Formulaire d'inscription</a></p>
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
</style>
