﻿'use strict';

angular.module('championsApplication.controllers', []).controller('standingsController', standingsController);

function standingsController($scope, $templateCache, standingsService)
{
	$scope.peticion = function()
	{
		$scope.activityPeticion = true;
		standingsService.realizarPeticion().success(function(response)
		{
			$scope.season = response.MRData.StandingsTable.season;
			$scope.standings = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

			$scope.activityPeticion = false;
		});

	};
}
