'use strict';

angular.module('fdApp').directive('fdFontList', ['Font', function(Font) {
    var template = [
        '<ul id="fonts" class="fonts">',
          '<li ng-repeat="font in fonts" fd-tap="updateFont()" ng-class="{active: font.active}">',
            '<button class="btn btn--activate" ng-class="{primary: font.active, secondary: !font.active}">',
              '{{ font.url.split("/").reverse()[0] }} ({{ font.size }}) <strong ng-style="{ \'font-family\': font.name }">ABCDabcd1234</strong>',
            '</button>',
          '</li>',
          '<li class="u-centered" ng-show="!fonts.length"><i>Empty</i></li>',
        '</ul>'
    ].join('');

    return {
        restrict: 'A',
        replace: true,
        template: template,
        link: function(scope) {
          scope.updateFont = function() {
              angular.forEach(scope.fonts, function(font) {
                  font.active = false;
              });

              this.font.active = true;
              Font.activeFont = this.font.name;
          };
        }
    };
}]);
