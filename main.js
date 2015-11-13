// raw data for calculator
var data = {
	'levels' : {
		1 : {
			'name' : 'Idol'
		},
		2 : {
			'name' : 'Guardian'
		},
		3 : {
			'name' : 'Masterpiece'
		},
	},
	'statues' : {
		'life' : [ {
			'name' : 'Gold Production Increase',
			'effects' : {
				1 : {
					'low' : 6,
					'high' : 10
				},
				2 : {
					'low' : 12,
					'high' : 20
				},
				3 : {
					'low' : 24,
					'high' : 50
				},
			}
		}, {
			'name' : 'Wood, Stone or Iron Production Increase',
			'effects' : {
				1 : {
					'low' : 7,
					'high' : 12
				},
				2 : {
					'low' : 15,
					'high' : 25
				},
				3 : {
					'low' : 30,
					'high' : 62
				},
			}
		}, {
			'name' : 'All Resources Production Increase',
			'effects' : {
				1 : {
					'low' : 3,
					'high' : 5
				},
				2 : {
					'low' : 6,
					'high' : 10
				},
				3 : {
					'low' : 12,
					'high' : 25
				},
			}
		}, ],
		'ice' : [ {
			'name' : 'Building Health increase',
			'effects' : {
				1 : {
					'low' : 3,
					'high' : 6
				},
				2 : {
					'low' : 7,
					'high' : 13
				},
				3 : {
					'low' : 15,
					'high' : 32
				},
			}
		}, {
			'name' : 'Defensive Building Damage increase',
			'effects' : {
				1 : {
					'low' : 4,
					'high' : 7
				},
				2 : {
					'low' : 9,
					'high' : 15
				},
				3 : {
					'low' : 18,
					'high' : 37
				},
			}
		} ],
		'magma' : [ {
			'name' : 'Troop Health increase',
			'effects' : {
				1 : {
					'low' : 4,
					'high' : 7
				},
				2 : {
					'low' : 8,
					'high' : 14
				},
				3 : {
					'low' : 16,
					'high' : 35
				},
			}
		}, {
			'name' : 'Troop Damage increase',
			'effects' : {
				1 : {
					'low' : 3,
					'high' : 6
				},
				2 : {
					'low' : 7,
					'high' : 13
				},
				3 : {
					'low' : 15,
					'high' : 32
				},
			}
		} ],
		'dark' : [ {
			'name' : 'Gunboat Energy increase',
			'effects' : {
				1 : {
					'low' : 5,
					'high' : 8
				},
				2 : {
					'low' : 10,
					'high' : 17
				},
				3 : {
					'low' : 20,
					'high' : 42
				},
			}
		}, {
			'name' : 'Resource Reward increase',
			'effects' : {
				1 : {
					'low' : 6,
					'high' : 10
				},
				2 : {
					'low' : 12,
					'high' : 20
				},
				3 : {
					'low' : 24,
					'high' : 50
				},
			}
		}, {
			'name' : 'Power Stone chance increase',
			'effects' : {
				1 : {
					'low' : 9,
					'high' : 15
				},
				2 : {
					'low' : 18,
					'high' : 30
				},
				3 : {
					'low' : 36,
					'high' : 75
				},
			}
		} ],
	}
};

var app = angular.module('myApp', ['angular.filter']);
app.controller('formCtrl', function($scope) {
	$scope.levels = data.levels;
	$scope.statues = data.statues;
	$scope.calc = function(value, data){
		result = 'N/A';
		data = (data.effects || null);
		if(data === null || value === '' || isNaN(value = parseFloat(value)) || value <= 0.0)
			return result;
		if(value < 1.0)
			value = value * 100;
		if((value = parseInt(value)) > 100)
			return result;
		$.each(data, function(){
			low = this.low;
			high = this.high;
			if(value >= low && value <= high) {
				result = ( (value - low) / (high - low) * 100);
				result = 'Score: ' + parseInt(result) + '%';
			}
		});
		return result;
	};
});