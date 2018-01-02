+++
date = "2017-11-17T13:36:30+01:00"
title = "Jag vill hyra möbler"

+++
<form id="lease-form">
  <fieldset class="subscription"> 
    <legend>Abonnemang</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Hyr för en termin och betala hela kostnaden i klump om du vet att du behöver möbler för enbart en termin</p>
        <p>Vårt vanliga erbjudande är annars löpande med en minsta uthyrningstid på 10 månader</p>
      </div>
    </div>
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
    <label for="telephone">Ditt telefonnummer (med landsnummer)</label>
    <input required type="tel" name="telephone" placeholder="+46 70 423 32 22" id="telephone" size="18">
  </fieldset>
  <fieldset> 
    <legend>Leveransadress</legend>
    <label for="street">Gata</label>
    <input required type="text" name="street" placeholder="Gatuvägen 12" id="street" size="40">
    <div>
      <div>
        <label for="postal">Postnummer</label>
        <input required type="text" name="postal" placeholder="222 22" id="postal" size="6">
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
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Tillvalen kan inte garanteras.</p>
        <p>Bäddsetet inkluderar täcke, kudde, lakan och påslakan</p>
      </div>
    </div>
    <legend>Tillval</legend>
    <input type="checkbox" name="sofa" id="sofa">
    <label for="sofa">En soffa <span data-price="100">100 kr / mån</span></label>
    <input type="checkbox" name="officeChair" id="officeChair">
    <label for="officeChair">En kontorsstol <span data-price="75">75 kr / mån</span></label>
    <input type="checkbox" name="bedSet" id="bedSet">
    <label for="bedSet">Ett bäddset <span data-price="75">75 kr / mån</span></label>
    <div class="l-center">
      <label for="otherAddon">Övriga önskemål</label>
      <input type="input" placeholder="T.ex. en stålampa" name="otherAddon" id="otherAddon" size="25" style="margin-left:1em;">
    </div>
  </fieldset>
  <fieldset> 
    <legend>Extra</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Leverans till, men ej in i, ditt hem inkluderas alltid i priset.</p>
        <p>Den bredare sängen är 120 cm bred, till skillnad från den 90 cm breda sängen som annars ingår.</p>
      </div>
    </div>
    <input type="checkbox" name="homeDelivery" id="homeDelivery">
    <label for="homeDelivery">Leverans in i rummet <span data-fee="299">299 kr</span></label>
    <input type="checkbox" name="wideBed" id="wideBed">
    <label for="wideBed">En bredare säng (120 cm)<span data-price="100">100 kr / mån</span></label>
  </fieldset>
  <fieldset>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Vi levererar i normala fall inom 5 dagar från valt datum.</p>
        <p>Lämna en kommentar i fältet för speciella önskemål, eller kontakta oss för mer information</p>
      </div>
    </div>
    <legend>Leverans</legend>
    <p>När önskar du få dina möbler levererade?</p>
    <label for="delivery">Datum</label>
    <input required type="date" name="delivery" placeholder="Datum" id="delivery">
    <label for="other">Övrig information</label>
    <input type="text" name="other" placeholder="Övriga frågor eller anmärkningar" id="other" size="30">
  </fieldset>
  <fieldset>
    <legend>Betalning</legend>
    <input type="radio" name="payment" value="1" data-name="/ mån" id="paypermonth" checked>
    <label class="label-wide" for="paypermonth">
      <span class="subscription-name">Per månad</span>
      <span class="subscription-length">Få en faktura varje månad</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="3" data-name="per kvartal" id="payperquarter">
    <label data-show="long" class="label-wide" for="payperquarter">
      <span class="subscription-name">Per kvartal</span>
      <span class="subscription-length">Få en faktura var 3:e månad</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="6" data-name="per halvår" id="payperhalfyear">
    <label data-show="long" class="label-wide" for="payperhalfyear">
      <span class="subscription-name">Per halvår</span>
      <span class="subscription-length">Få en faktura var 6:e månad</span>
    </label>
    <input data-show="short" type="radio" name="payment" value="5" data-name="för allt" id="payall">
    <label data-show="short" class="label-wide" for="payall">
      <span class="subscription-name">Allt på en gång</span>
      <span class="subscription-length">Få en faktura för hela terminen</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Fakturering</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Betalning av fakturor sker via banktransaktion eller till vårt Paypal-konto.</p>
        <p>Fakturorna skickas via e-mail baserat på din valda faktureringsperiod.</p>
      </div>
    </div>
    <input type="checkbox" name="useInvoiceEmail" id="useInvoiceEmail" value="useInvoiceEmail">
    <label class="label-wide" for="useInvoiceEmail">Skicka fakturan till en annan mailadress</label>
    <div class="l-center" data-show="useInvoiceEmail" style="padding-top: 1em">
      <label for="invoiceEmail">E-mailadress för fakturering</label><br />
      <input type="invoiceEmail" name="invoiceEmail" placeholder="faktura@mail.se" id="invoiceEmail" size="30">
    </div>
  </fieldset>
  <div class="l-center">
    <div style="width: 60%; margin: 0 auto;">
      <p><i>Personuppgifterna i detta formulär kommer endast används för behandling av din beställning.</i></p>
      <p>Vi kontaktar dig medelst e-mail inom 24 timmar för orderbekräftelse och mer information.</p>
    </div>
    <input role="button" class="l-button" type="submit" value="Beställ">
  </div>
  <div class="l-floating costs l-grid">
    <div>
      <p>Abonnemangskostnad</p>
      <h2><span id="monthlyCost">399</span> kr <span id="payPeriod">/ mån</span></h2>
    </div>
    <div>
      <p>Engångskostnad</p>
      <h2><span id="feeCost">0</span> kr</h2>
    </div>
  </div>
</form>