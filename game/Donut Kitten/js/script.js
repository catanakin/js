$ (function () {

	// объявить DOM объекты переменными

	var container = $('#container');
	var cat = $('#cat');
	var pole = $('.pole');
	var pole_1 = $('#pole_1');
	var pole_2 = $('#pole_2');
	var score = $('#score');
	var speed_span = $('#speed');
	var restart_btn = $('#restart_btn');

	// основные настройки

	var container_width = parseInt(container.width());
	var container_height = parseInt(container.height());
	var pole_initial_position = parseInt(pole.css('right'));
	var pole_initial_height = parseInt(pole.css('height'));
	var cat_left = parseInt(cat.css('left'));
	var cat_height = parseInt(cat.height());
	var speed = 10;

	// другие переменные

	var go_up = false;
	var score_updated = false;

	var the_game = setInterval(function () {

		if (collision(cat, pole_1) || collision(cat, pole_2) ||
			parseInt(cat.css('top')) <=0 ||
			parseInt(cat.css('top')) > container_height - cat_height) {

				stop_the_game();
		} else {
			var pole_current_position = parseInt(pole.css('right'));

			// update the score when the poles have passed the cat successfully
			// обновить счет при успешном прохождении столбов
			
			if(pole_current_position > container_width - cat_left) {
				if(score_updated === false){
					score.text(parseInt(score.text()) +1);
					score_updated = true;
					} 
				}
				
		}


		var pole_current_position = parseInt(pole.css('right'));

		//проверять что столбы в контейнере

		if (pole_current_position > container_width) {
			var new_height = parseInt(Math.random() * 100);

			// change the pole height
			// изменять высоту столбов

			pole_1.css('height', pole_initial_height + new_height);
			pole_2.css('height', pole_initial_height - new_height);

			// increase speed
			speed = speed + 1;
			speed_span.text(speed);

			score_updated = false;

			pole_current_position = pole_initial_position;
		}

		// движение столбов

		pole.css('right', pole_current_position + speed);

		if (go_up === false) {
		go_down();
	}

	}, 40);

	//движение кота по пробелу

	$(document).on('keydown', function(e) {
		var key = e.keyCode;
		if(key === 32 && go_up === false) {
			go_up = setInterval(up, 50)
		}
	});

	$(document).on('keyup', function(e) {
		var key = e.keyCode;
		if(key === 32) {
			clearInterval(go_up);
			go_up = false;
		}
	});

	
	function go_down () {
		cat.css('top', parseInt(cat.css('top')) + 5);
	}

	function up () {
		cat.css('top', parseInt(cat.css('top')) - 10);
	}

	function stop_the_game () {
		clearInterval(the_game);
		restart_btn.slideDown();
	}

	restart_btn.click(function () {
		location.reload();
	});

	function collision($div1, $div2) {
		var x1 = $div1.offset().left;
		var y1 = $div1.offset().top;
		var h1 = $div1.outerHeight(true);
		var w1 = $div1.outerWidth(true);
		var b1 = y1 + h1;
		var r1 = x1 + w1;
		var x2 = $div2.offset().left;
		var y2 = $div2.offset().top;
		var h2 = $div2.outerHeight(true);
		var w2 = $div2.outerWidth(true);
		var b2 = y2 + h2;
		var r2 = x2 + w2;

		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
		return true;
	}


});
