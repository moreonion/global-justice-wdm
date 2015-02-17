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

  $('.pgbar-thermometer').eActivistThermometer({
    // Global justice test campaign
    token: 'aaca5a76-0f02-4e3a-a546-1cf6bafabe56',
    campaignId: $('input[name="ea.campaign.id"]').val(),
    target: 250,
    initialValue: 0,
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
});
