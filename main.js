var data = {
		'levels' : {
			1: {
				'name': 'Idol'
			},
			2: {
				'name': 'Guardian'
			},
			3: {
				'name': 'Masterpiece'
			},
		},
		'statues': {
			'life': [
		         {
					'name': 'Gold Production Increase',
					'effects': {
						1: {'low': 6, 'high': 10},
						2: {'low': 12, 'high': 20},
						3: {'low': 24, 'high': 50},
					}
		         },
		         {
					'name': 'Wood, Stone or Iron Production Increase',
					'effects': {
						1: {'low': 7, 'high': 12},
						2: {'low': 15, 'high': 25},
						3: {'low': 30, 'high': 62},
					}
		         },
		         {
					'name': 'All Resources Production Increase',
					'effects': {
						1: {'low': 3, 'high': 5},
						2: {'low': 6, 'high': 10},
						3: {'low': 12, 'high': 25},
					}
		         },
	         ],
		}
	}

var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
	$scope.test = 123;
	var tmp = {};
	tmp.me = $scope;
    tmp.me.data = data;
    tmp.me.getForm = function() {
    	return $('<form>', {'novalidate': true});
    };
    tmp.me.getRow = function(row, type) {
    	var tmp = {};
    	tmp.me = $scope;
    	tmp.name = (row.name || '');
    	tmp.type = (type || '');
    	tmp.key = tmp.type + '.' + tmp.name;
    	tmp.me[tmp.key] = '';
    	
    	tmp.newDiv = $('<fieldset>', {'class': 'form-group'});
    	tmp.newDiv.append(tmp.label = $('<label>', {'for': tmp.key}).html(tmp.name));
    	tmp.label.append($('<span>', {'class': 'pull-right'}).html("{{" + tmp.key + "}}"))
    	tmp.newDiv.append(tmp.input = $('<input>', {'class': 'form-control', 'type': 'text', 'placeholder': 'percentage', 'ng-model': tmp.key}))
    	
    	return tmp.newDiv;
    }
    tmp.me.init = function() {
    	var tmp = {};
    	tmp.me = $scope;
    	tmp.container = $('[ng-app="myApp"]')
//    	tmp.container.prepend(tmp.me.getForm());
    	console.debug(tmp);return;
    	$.each(tmp.me.data.statues, function(statueType, statuesData){
	    	$.each(statuesData, function(index, statueData){
//	    		tmp.form.append(tmp.input = tmp.me.getRow(statueData, statueType));
	    	});
    	});
    };
    tmp.me.init();
});