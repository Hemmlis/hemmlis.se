+++
date = "2017-11-17T13:36:30+01:00"
title = "Jag vill hyra möbler"

+++

<form id="lease-form">
<fieldset class="subscription"> 
    <legend>Abonnemang</legend>
    <input type="radio" name="subscription" value="short" id="subscriptionShort">
    <label for="subscriptionShort">
      <span class="subscription-name">En termin</span>
      <span class="subscription-length">Minst 5 månader</span>
      <span class="subscription-cost" data-price="499">499 kr/mån</span>
    </label>
    <input type="radio" name="subscription" value="long" id="subscriptionLong" checked>
    <label for="subscriptionLong">
      <span class="subscription-name">Standard</span>
      <span class="subscription-length">Minst 10 månader</span>
      <span class="subscription-cost" data-price="399">399 kr/mån</span>
    </label>
  </fieldset>
  <fieldset> 
    <legend>Kontaktinformation</legend>
    <label for="name">Ditt namn</label>
    <input required autofocus type="text" name="name" placeholder="Förnamn Efternamn" id="name" size="30">
    <label for="email">Din e-mailadress</label>
    <input required type="email" name="email" placeholder="din@mail.se" id="email" size="30">
    <label for="telephone">Ditt telefonnummer</label>
    <input required type="tel" name="telephone" placeholder="0046123456789" id="telephone" size="15">
  </fieldset>
  <fieldset> 
    <legend>Leveransadress</legend>
    <label for="street">Gata</label>
    <input required type="text" name="street" placeholder="Gatuvägen 12" id="street" size="40">
    <div>
      <div>
        <label for="postal">Postnummer</label>
        <input required type="text" name="postal" placeholder="22222" id="postal" size="6">
      </div>
      <div>
        <label for="city">Stad</label>
        <input required type="text" name="city" placeholder="Lund" id="city" value="Lund" disabled>
      </div>
    </div>
    <label for="room">Lägenhetsnummer eller annat</label>
    <input type="text" name="room" placeholder="LGH0000" id="room" size="9">
  </fieldset>
  <fieldset> 
    <legend>Tillval</legend>
    <input type="checkbox" name="sofa" id="sofa">
    <label for="sofa">En soffa <span data-price="100">100 kr / mån</span></label>
    <input type="checkbox" name="officeChair" id="officeChair">
    <label for="officeChair">En kontorsstol <span data-price="75">75 kr / mån</span></label>
    <input type="checkbox" name="bedSet" id="bedSet">
    <label for="bedSet">Ett bäddset <span data-price="75">75 kr / mån</span></label>
    <div class="l-center">
      <label for="otherAddon">Övriga önskemål</label>
      <input type="input" placeholder="T.ex. en stålampa" name="otherAddon" id="otherAddon" size="30">
    </div>
  </fieldset>
  <fieldset> 
    <legend>Extra</legend>
    <input type="checkbox" name="homeDelivery" id="homeDelivery">
    <label for="homeDelivery">Leverans in i rummet <span data-fee="299">299 kr</span></label>
    <input type="checkbox" name="wideBed" id="wideBed">
    <label for="wideBed">En bredare säng <span data-price="100">100 kr / mån</span></label>
  </fieldset>
  <fieldset> 
    <legend>Leverans</legend>
    <p>När önskar du få dina möbler levererade?</p>
    <label for="delivery">Datum</label>
    <input required type="date" name="delivery" placeholder="Datum" id="delivery">
    <label for="other">Övrig information</label>
    <input type="text" name="other" placeholder="Övriga frågor eller anmärkningar" id="other" size="30">
  </fieldset>
  <fieldset> 
    <legend>Betalning</legend>
    <input type="radio" name="payment" value="1" data-name="mån" id="paypermonth" checked>
    <label class="label-wide" for="paypermonth">
      <span class="subscription-name">Per månad</span>
      <span class="subscription-length">Få en faktura varje månad</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="3" data-name="kvartal" id="payperquarter">
    <label data-show="long" class="label-wide" for="payperquarter">
      <span class="subscription-name">Per kvartal</span>
      <span class="subscription-length">Få en faktura var 3:e månad</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="6" data-name="halvår" id="payperhalfyear">
    <label data-show="long" class="label-wide" for="payperhalfyear">
      <span class="subscription-name">Per halvår</span>
      <span class="subscription-length">Få en faktura var 6:e månad</span>
    </label>
    <input data-show="short" type="radio" name="payment" value="5" data-name="allt" id="payall">
    <label data-show="short" class="label-wide" for="payall">
      <span class="subscription-name">Allt på en gång</span>
      <span class="subscription-length">Få en faktura för hela terminen</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Fakturering</legend>
    <input type="checkbox" name="useInvoiceEmail" id="useInvoiceEmail" value="useInvoiceEmail">
    <label class="label-wide" for="useInvoiceEmail">Skicka fakturan till en annan mailadress</label>
    <div class="l-center" data-show="useInvoiceEmail">
      <label for="invoiceEmail">E-mailadress för fakturering</label><br />
      <input required type="invoiceEmail" name="invoiceEmail" placeholder="faktura@mail.se" id="invoiceEmail" size="30">
    </div>
  </fieldset>
  <div class="l-center">
    <input role="button" class="l-button" type="submit" value="Skicka in">
  </div>
  <div class="l-floating costs l-grid">
    <div>
      <p>Abonnemangskostnad</p>
      <h2><span id="monthlyCost">399</span> kr / <span id="payPeriod">mån</span></h2>
    </div>
    <div>
      <p>Engångskostnad</p>
      <h2><span id="feeCost">0</span> kr</h2>
  </div>
</form>