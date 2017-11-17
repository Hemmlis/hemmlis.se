+++
date = "2017-11-17T13:36:30+01:00"
title = "Jag vill hyra möbler"

+++

<form id="lease-form">
  <fieldset> 
    <legend>Kontaktinformation</legend>
    <label for="name">Ditt namn</label>
    <input required autofocus type="text" name="name" placeholder="Förnamn Efternamn" id="name" size="30">
    <label for="email">Din e-mailadress</label>
    <input required type="email" name="email" placeholder="din@mail.se" id="email">
    <label for="telephone">Ditt telefonnummer</label>
    <input required type="tel" name="telephone" placeholder="0046123456789" id="telephone" size="15">
  </fieldset>
  <fieldset> 
    <legend>Leveransadress</legend>
    <label for="street">Gata</label>
    <input required type="text" name="street" placeholder="Gatuvägen 12" id="street" size="30">
    <div>
      <div>
        <label for="postal">Postnummer</label>
        <input required type="text" name="postal" placeholder="22222" id="postal" size="6">
      </div>
      <div>
        <label for="city">Stad</label>
        <input required type="text" name="city" placeholder="Lund" id="city" value="Lund">
      </div>
    </div>
    <label for="room">Lägenhetsnummer eller annat</label>
    <input type="text" name="room" placeholder="LGH0000" id="room" size="9">
  </fieldset>
  <fieldset> 
    <legend>Leverans</legend>
    <p>När vill du få dina möbler?</p>
    <label for="delivery">Datum</label>
    <input required type="date" name="delivery" placeholder="Datum" id="delivery">
    <label for="other">Övrig information</label>
    <input type="text" name="other" placeholder="Övriga frågor eller anmärkningar" id="other" size="30">
  </fieldset>
  <div class="l-center">
    <input role="button" class="l-button" type="submit" value="Skicka in">
  </div)>
</form>