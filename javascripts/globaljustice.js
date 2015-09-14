$(window).load(function(){
  // two column layout
  sortTwoColumn();
  $('.eaSubmitResetButtonGroup').appendTo($('.en_right_wrapper').last());
  $('body').addClass('twocolumn');

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }
  // add a class for picker labels higher than the handle
  $('.picker-label').each(function(){
    var label = $(this);
    var handle = label.siblings('.picker-handle');
    if (label.height() > 25){
      label.parent().addClass('multiline');
    }
  });

  // move validation icon next to label
  // and the error message below the label
  $('.eaErrorMessage').each(function() {
    var self = $(this);
    var label = self.siblings('.eaFormElementLabel');
    var field = self.siblings('.eaFormField');
    var icon = $('.eaValidationIcon', label.parent());
    icon.appendTo(label);
    self.appendTo(field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var self = $(e.target);
    if (!self.is(':empty')) {
      self.parent().addClass('validationError');
    }
  });

  var $thermometerEl = $('.pgbar-thermometer');
  var thermometerTarget = 250; // default
  var thermometerStart = 0; // default
  var thermometerService = 'EaEmailAOTarget'; // default: campaign
  var thermometerDataTarget = $thermometerEl.data('target');
  if (typeof thermometerDataTarget !== 'undefined') {
    var parsedTarget = parseInt(thermometerDataTarget, 10);
    if (!isNaN(parsedTarget) && parsedTarget > 0) {
      thermometerTarget = parsedTarget;
    }
  }
  var thermometerDataStart = $thermometerEl.data('start');
  if (typeof thermometerDataStart !== 'undefined') {
    var parsedStart = parseInt(thermometerDataStart, 10);
    if (!isNaN(parsedStart) && parsedStart > 0) {
      thermometerStart = parsedStart;
    }
  }
  var thermometerDataService = $thermometerEl.data('service');
  if (typeof thermometerDataService !== 'undefined') {
     if (thermometerDataService == 'NetDonor' || thermometerDataService == 'EaEmailAOTarget') {
      thermometerService = thermometerDataService;
    }
  }
  $thermometerEl.eActivistThermometer({
  // Global justice test campaign
    token: 'aaca5a76-0f02-4e3a-a546-1cf6bafabe56',
    campaignId: $('input[name="ea.campaign.id"]').val(),
    target: thermometerTarget,
    initialValue: thermometerStart,
    service: thermometerService,
    targetDataColumn: 'participatingSupporters'
  });

  // initial hide
  $('.background-info-hidden').hide();
  // on click show element with id set in data-toggle of .info-toggle
  // and hide the toggle (link)
  $('.info-toggle').on('click', function(e) {
    var $toggle = $(this);
    var $target = $('#background-info');
    // when we have found our/a target
    if ($target.length > 0) {
      $toggle.hide();
      $target.slideDown(300);
    }
    e.preventDefault();
    return false;
  });

  // to reset the bottom padding of the right wrapper in case we are on
  // a form without payment icons
  // done this way to provide a reasonable experience even without JS, i.e.
  // trading off hidden icons vs too much padding at bottom
  var $rightWrapper = $('form .en_right_wrapper');
  var $paymentIcons = $('.payment-icons', $rightWrapper);
  if ($paymentIcons.length < 1) {
    $rightWrapper.addClass('no-payment-icons');
  }

  // update/get/set functions for sessionStorage use with Leadpanel
  function getLpPrefillStorage() {
    var saved = JSON.parse(sessionStorage.getItem('leadpanel_prefill'));
    if (saved === null) {
      saved = {};
    }
    return saved;
  }
  function setLpPrefillStorage(newValues) {
    var savedValues = JSON.parse(sessionStorage.getItem('leadpanel_prefill'));
    if (savedValues === null) {
      savedValues = {}
    }
    if (Object.keys(savedValues).length > 0) {
      for (prop in newValues) {
        savedValues[prop] = newValues[prop];
      }
    } else {
      savedValues = newValues;
    }
    sessionStorage.setItem('leadpanel_prefill', JSON.stringify(savedValues));
  }
  function updateLpPrefillStorage(key, value) {
    if (typeof key === 'undefined' || typeof value === 'undefined') {
      throw new TypeError('Not enough arguments for updateLpPrefillStorage');
    }
    if (key === null) {
      throw new TypeError('Key cannot be null for updateLpPrefillStorage');
    }
    var saved = getLpPrefillStorage();
    saved[key + ''] = value + '';
    setLpPrefillStorage(saved);
  }

  // initialize storage pre-checked checkboxes
  $('input[type=checkbox]:checked').each(function(e) {
    var v = $(this).val();
    var name = $(this).attr('name');
    if (typeof name === 'undefined' || name.length < 1) {
      return;
    }
    updateLpPrefillStorage(name, v);
  });

  // on value changes update the storage
  $('input, select, textarea').on('change', function(e) {
    var v = $(this).val();
    var name = $(this).attr('name');
    if (typeof name === 'undefined' || name.length < 1) {
      return;
    }
    if ($(this).attr('type') === 'checkbox' && !$(this).prop('checked')) {
      v = ''; // unset value if unchecked, the html elements value for a
              // checkbox stays the same, regardless the checked state
    }
    updateLpPrefillStorage(name, v);
  });
});
