define(
  'ephox.alloy.navigation.KeyMatch',

  [
    'ephox.katamari.api.Arr',
    'ephox.katamari.api.Fun'
  ],

  function (Arr, Fun) {
    var inSet = function (keys) {
      return function (event) {
        return Arr.contains(keys, event.raw().which);
      };
    };

    var and = function (preds) {
      return function (event) {
        return Arr.forall(preds, function (pred) {
          return pred(event);
        });
      };
    };

    var is = function (key) {
      return function (event) {
        return event.raw().which === key;
      };
    };

    var isShift = function (event) {
      return event.raw().shiftKey === true;
    };

    var isControl = function (event) {
      return event.raw().ctrlKey === true;
    };

    return {
      inSet: inSet,
      and: and,
      is: is,
      isShift: isShift,
      isNotShift: Fun.not(isShift),
      isControl: isControl,
      isNotControl: Fun.not(isControl)
    };
  }
);