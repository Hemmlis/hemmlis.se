+++
date = "2017-11-17T13:36:30+01:00"
title = "I want to lease furniture"

+++
<form id="lease-form">
  <fieldset class="subscription"> 
    <legend>Subscription</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>If you're staying for one semester you can opt to pay for the entire semester in advance.</p>
        <p>Our ordinary subscription plan has a minimum lease of 10 months.</p>
      </div>
    </div>
    <input type="radio" name="subscription" value="short" id="subscriptionShort">
    <label for="subscriptionShort">
      <span class="subscription-name">One semester</span>
      <span class="subscription-length">At least 5 months</span>
      <span class="subscription-cost" data-price="499">499 kr/mo.</span>
    </label>
    <input type="radio" name="subscription" value="long" id="subscriptionLong" checked>
    <label for="subscriptionLong">
      <span class="subscription-name">Standard</span>
      <span class="subscription-length">At least 10 months</span>
      <span class="subscription-cost" data-price="399">399 kr/mo.</span>
    </label>
  </fieldset>
  <fieldset> 
    <legend>Contact info</legend>
    <label for="name">Your name</label>
    <input required autofocus type="text" name="name" placeholder="Name Surname" id="name" size="30">
    <label for="email">Your e-mail address</label>
    <input required type="email" name="email" placeholder="your@email.com" id="email" size="30">
    <label for="telephone">Your phone number (with country calling code)</label>
    <input required type="tel" name="telephone" placeholder="+46 70 423 32 22" id="telephone" size="18">
  </fieldset>
  <fieldset> 
    <legend>Delivery address</legend>
    <label for="street">Street</label>
    <input required type="text" name="street" placeholder="Streetroad 12" id="street" size="40">
    <div>
      <div>
        <label for="postal">Postal code</label>
        <input required type="text" name="postal" placeholder="222 22" id="postal" size="6">
      </div>
      <div>
        <label for="city">City</label>
        <input required type="text" name="city" placeholder="Lund" id="city" value="Lund" disabled>
      </div>
    </div>
    <label for="room">Apartment number or other information</label>
    <input type="text" name="room" placeholder="LGH0000" id="room" size="9">
  </fieldset>
  <fieldset> 
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>The add-on services are limitied in availability.</p>
        <p>The bedset includes a duvet, a pillow, and a bed sheet set</p>
      </div>
    </div>
    <legend>Add-on services</legend>
    <input type="checkbox" name="sofa" id="sofa">
    <label for="sofa">A sofa <span data-price="100">100 kr / mo.</span></label>
    <input type="checkbox" name="officeChair" id="officeChair">
    <label for="officeChair">An office chair <span data-price="75">75 kr / mo.</span></label>
    <input type="checkbox" name="bedSet" id="bedSet">
    <label for="bedSet">A bedset <span data-price="75">75 kr / mo.</span></label>
    <div class="l-center">
      <label for="otherAddon">Other requests</label>
      <input type="input" placeholder="e.g. a lamp" name="otherAddon" id="otherAddon" size="25" style="margin-left:1em;">
    </div>
  </fieldset>
  <fieldset> 
    <legend>Extras</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Delivery to your home, but not into your apartment, is always included.</p>
        <p>The wider bed is 120 cm (king size), as opposed to the ordinary bed which is 90 cm.</p>
      </div>
    </div>
    <input type="checkbox" name="homeDelivery" id="homeDelivery">
    <label for="homeDelivery">In-room delivery <span data-fee="299">299 kr</span></label>
    <input type="checkbox" name="wideBed" id="wideBed">
    <label for="wideBed">A wider bed (120 cm)<span data-price="100">100 kr / mo.</span></label>
  </fieldset>
  <fieldset>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Ordinary delivery is usually within five days from specified date.</p>
        <p>Leave a comment in the field for special requests or contact us for more information.</p>
      </div>
    </div>
    <legend>Delivery</legend>
    <p>When do you wish to have your furniture delivered?</p>
    <label for="delivery">Date</label>
    <input required type="date" name="delivery" placeholder="Date" id="delivery">
    <label for="other">Other information</label>
    <input type="text" name="other" placeholder="Other questions or remarks" id="other" size="30">
  </fieldset>
  <fieldset>
    <legend>Payment</legend>
    <input type="radio" name="payment" value="1" data-name="/ mo." id="paypermonth" checked>
    <label class="label-wide" for="paypermonth">
      <span class="subscription-name">Per month</span>
      <span class="subscription-length">Get an invoice every month</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="3" data-name="per quarter" id="payperquarter">
    <label data-show="long" class="label-wide" for="payperquarter">
      <span class="subscription-name">Per quarter</span>
      <span class="subscription-length">Get an invoice every 3rd month</span>
    </label>
    <input data-show="long" type="radio" name="payment" value="6" data-name="per half-year" id="payperhalfyear">
    <label data-show="long" class="label-wide" for="payperhalfyear">
      <span class="subscription-name">Per half-year</span>
      <span class="subscription-length">Get an invoice every 6th month</span>
    </label>
    <input data-show="short" type="radio" name="payment" value="5" data-name="for all" id="payall">
    <label data-show="short" class="label-wide" for="payall">
      <span class="subscription-name">Everything at once</span>
      <span class="subscription-length">Get an invoice for the whole semester</span>
    </label>
  </fieldset>
  <fieldset>
    <legend>Invoicing</legend>
    <div class="help">
      <span class="help-icon">?</span>
      <div class="help-info">
        <p>Invoice payments can be made through bank transactions or to our Paypal account.</p>
        <p>Invoice will be sent through e-mail depending on your prefered payment period.</p>
      </div>
    </div>
    <input type="checkbox" name="useInvoiceEmail" id="useInvoiceEmail" value="useInvoiceEmail">
    <label class="label-wide" for="useInvoiceEmail">Send the invoice to another e-mail address</label>
    <div class="l-center" data-show="useInvoiceEmail" style="padding-top: 1em">
      <label for="invoiceEmail">E-mail address for invoicing</label><br />
      <input required type="invoiceEmail" name="invoiceEmail" placeholder="faktura@mail.se" id="invoiceEmail" size="30">
    </div>
  </fieldset>
  <div class="l-center">
    <div style="width: 60%; margin: 0 auto;">
      <p><i>The personal information received through this form will only be used for order treatment.</i></p>
      <p>We will contact you through email within 24 hours with more order confirmation details.</p>
    </div>
    <input role="button" class="l-button" type="submit" value="Submit order">
  </div>
  <div class="l-floating costs l-grid">
    <div>
      <p>Subscription cost</p>
      <h2><span id="monthlyCost">399</span> kr <span id="payPeriod">/ mo.</span></h2>
    </div>
    <div>
      <p>One time fee</p>
      <h2><span id="feeCost">0</span> kr</h2>
    </div>
  </div>
</form>