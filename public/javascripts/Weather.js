var main = function(){
	$('#change').click(function(){
		var weather_city = $('#weather_city').val();	
		var unit = $('input[name="units"]:checked').val();
		var weather = '';
		var rain_falling = false;
		
		$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=" + weather_city + "&units=" + unit + "&APPID=ed722f92d0a2e80036671cf7bb7a2740", function( data )
		{
			weather = data.weather[0].main;
			$('#description').html(data.weather[0].description);
			$('#temp').html(data.main.temp);
			if(unit === "imperial"){
				$('#temp').append(' Fahrenheit');
			} else {
				$('#temp').append(' Celsius');
			}
			
			$('#city').html(data.name);
			$('#wind_speed').html(data.wind.speed);
			if(unit === "imperial"){
				$('#wind_speed').append(' feet/s');
			} else {
				$('#wind_speed').append(' meter/s');
			}
			
			$('#pressure').html(data.main.pressure);
			$('#pressure').append(' hpa');

			var wind_dir = Math.floor(data.wind.deg);
			if (349 < wind_dir && wind_dir < 360 || 0 < wind_dir && wind_dir < 11) {
				$('#wind_direction').text('N');
			} else if (11 < wind_dir && wind_dir < 34) {
				$('#wind_direction').text('NNE');	
			} else if (34 < wind_dir && wind_dir < 56) {
				$('#wind_direction').text('NE');
			} else if (56 < wind_dir && wind_dir < 79) {
				$('#wind_direction').text('ENE');
			} else if (79 < wind_dir && wind_dir < 101) {
				$('#wind_direction').text('E');
			} else if (101 < wind_dir && wind_dir < 124) {
				$('#wind_direction').text('ESE');
			} else if (124 < wind_dir && wind_dir < 146) {
				$('#wind_direction').text('SE');
			} else if (146 < wind_dir && wind_dir < 169) {
				$('#wind_direction').text('SSE');
			} else if (169 < wind_dir && wind_dir < 191) {
				$('#wind_direction').text('S');
			} else if (191 < wind_dir && wind_dir < 214) {
				$('#wind_direction').text('SSW');
			} else if (214 < wind_dir && wind_dir < 236) {
				$('#wind_direction').text('SW');
			} else if (236 < wind_dir && wind_dir < 259) {
				$('#wind_direction').text('WSW');
			} else if (259 < wind_dir && wind_dir < 281) {
				$('#wind_direction').text('W');
			} else if (281 < wind_dir && wind_dir < 304) {
				$('#wind_direction').text('WNW');
			} else if (304 < wind_dir && wind_dir < 326) {
				$('#wind_direction').text('NW');
			} else if (326 < wind_dir && wind_dir < 349) {
				$('#wind_direction').text('NNW');
			}				
			
			if(weather === "Clouds" ) {
				$('.menu').css('background-color', '#A0B0AD');
				$('body').css('background-color', '#5D8CC2');
			} else if (weather === "Clear"){
				$('.menu').css('background-color', '#F1D62D');
				$('body').css('background-color', '#5D8CC2');
			} else if (weather === "Rain"){
				$('.menu').css('background-color', '#A0B0AD');
				$('body').css('background-color', '#5D8CC2');
			} else if (weather === "Snow"){
				$('.menu').css('background-color', 'white');
				$('body').css('background-color', '#5D8CC2');
			}
		});
		
		$('#more_information').show();
		$('.information').show();
		$('.location').show();
	});
	
	$('#more_information').click(function(){
		$('.more_information').toggle();
	});
};

$(document).ready(main);