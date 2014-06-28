'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sportscorp.services', [])
.value('version', '0.1')
.factory('Navigation', function(){
	var nav = [{"name":"Dashboard", "href":"/dashboard"}
			  ,{"name":"Profile", "href":"/profile"}
              ,{"name":"Calendar", "href":"/calendar"}
              ,{"name":"Events", "href":"/event"}
              ,{"name":"Awards", "href":"/award"}
              ,{"name":"Logout", "href":"/logout"}];
	return {
		list: function(){
			return nav;
		}
	}
});
