'use strict';

/* Directives */


angular.module('sportscorp.directives', [])
.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}])
.directive('sportsNavigation', function($document){
	return {
		templateUrl: "partials/navigation.html"
		,link: function(scope, element, iAttrs, controller, transcludeFn) {
			var l$, $navBtn, $navMenu, menuOpen = false;
			var _bindVar = function(){
				l$ = $;
				$navBtn = l$("#navBtn");
				$navMenu = l$("#navMenu");
			}
			var _bindEvents = function(){
				$navBtn.on('click', function(){
					_animateNav();
				});
			}
			function _animateNav(){
				$navMenu.transition({"left":(menuOpen)?'101%':'50%'}, 'fast', function(){
					menuOpen = !menuOpen;
				});
			}
			function closeNavIfOpen(){
				if(menuOpen){
					_animateNav();
				}
			}
			function abc(){
				_animateNav();
			}
			scope.close = _animateNav;
			scope.closeNavIfOpen = closeNavIfOpen;
			scope.abc = abc;
			$document.bind('click', function(event){
				var isClickedElementChildOfPopup = element
				.find(event.target)
				.length > 0;
				console.log(isClickedElementChildOfPopup);
				if (isClickedElementChildOfPopup)
					return;
				if (!menuOpen)
					return;
				_animateNav();
			});
			(function init(){
				_bindVar();
				_bindEvents();
			})();
		}
	}
})
.directive('sportsAchievements', function(){
	return {
		scope: {
			description: '@'
		}
		,templateUrl: "partials/achievement-dialog.html"
		,link: function(scope, element, attrs) {

		}
	}
});
