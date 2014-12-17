# progress bar

    <div class="pgbar-thermometer">
      <div class="t_body">
        <div class="t_level">&nbsp;</div>
      </div>
      <span class="t_current">0</span> people have taken action
    </div>

# background info

* the class `.info-toggle` on the element enables the "show more info" logic
* a click on the toggle shows the element with the id `#background-info` and
  hides the toggle
* the class `.background-info-hidden` on the more info container sets the
  container to be hidden on page load (this is done that way to show the
  background info in case JS is disabled)

```html
<a class="info-toggle">More info</a>

<div id="background-info" class="background-info-hidden">
  <h2>Background info</h2>
  <p>more more more info</p>
</div>
```

# videos

    <div class="video">
      Paste the embed code from youtube, vimeo, ... here
    </div>

# share links

    <ul class="share-links">
      <li class="facebook"><a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook"><i></i><span>Facebook</span></a></li>
      <li class="twitter"><a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter"><i></i><span>Twitter</span></a></li>
      <li class="email last"><a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email"><i></i><span>E-Mail</span></a></li>
    </ul>

with links

    <ul class="share-links">
      <li class="facebook first"><a class="button" href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fe-activist.com%2Fea-action%2Faction%3Fea.client.id%3D1784%26ea.campaign.id%3D34164" title="Share this via Facebook!" target="_blank" data-share="facebook"><i></i><span>Facebook</span></a></li>
      <li class="twitter"><a class="button" href="http://twitter.com/share?text=Global%20Justice&amp;url=http%3A%2F%2Fe-activist.com%2Fea-action%2Faction%3Fea.client.id%3D1784%26ea.campaign.id%3D34164" title="Share this via Twitter!" target="_blank" data-share="twitter"><i></i><span>Twitter</span></a></li>
      <li class="email last"><a class="button" href="http://action.wdm.org.uk/ea-action/action?ea.client.id=1784&amp;ea.campaign.id=34207" title="Share this via E-Mail!" target="_blank" data-share="email"><i></i><span>E-Mail</span></a></li>
    </ul>

# submission tracking

place this snippet on the thankyou page

    <input type="hidden" name="track-submission" value="1">

# payment icons

snippets for inclusion of logos at the bottom of a form

    <div class="payment-icons">
      <img alt="Logo secure pay" title="Secure payment" src="//moreonion.github.io/global-justice-wdm/images/payment_secure.png">
      <img alt="Logo VISA" title="Payable with VISA" src="//moreonion.github.io/global-justice-wdm/images/payment_visa.png">
      <img alt="Logo MasterCard" title="Payable with MasterCard" src="//moreonion.github.io/global-justice-wdm/images/payment_mastercard.png">
      <img alt="Logo Direct Debit" title="Payable with direct debit" src="//moreonion.github.io/global-justice-wdm/images/payment_dd.png">
    </div>

# form intro

use this snippet for the copy box above the actual form (the class adds a separator below the text)

    <div class="intro">
      <h2>Form Heading</h2>
      <p> Form Intro Text ... </p>
    </div>
