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
})
.factory('Events', function($http){
	var events = [{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}
				 ,{"title":"A good event title", "location":"12345 North South Street", "description":"description", "type":"sports", "date":"06/06/2014", "time":"6pm - 8pm"}];
	// $.ajax({
 //            url: 'http://afternoon-depths-8369.herokuapp.com/events/eventlist',
 //            type: 'GET',
 //            crossDomain: true,
 //            dataType: 'json',
 //            success: function(resp) { 
 //                console.log('success GET');
 //                console.log(resp);
 //            },
 //            error: function() { alert('Failed!'); }
 //        });
	return {
		query: function(){
			//return events;
			// $.ajax({
	  //           url: 'http://afternoon-depths-8369.herokuapp.com/events/eventlist',
	  //           type: 'GET',
	  //           crossDomain: true,
	  //           dataType: 'json',
	  //           success: function(resp) { 
	  //               console.log('success GET');
	  //               console.log(resp);
	  //           },
	  //           error: function() { alert('Failed!'); }
	  //       });
			return $http.get("http://afternoon-depths-8369.herokuapp.com/events/eventlist");
		}		
	}
})
.factory('Volunteers', function($http){
	return {
		query: function(){
			return $http.get("http://afternoon-depths-8369.herokuapp.com/volunteers/volunteerlist");
		}
	}
});
