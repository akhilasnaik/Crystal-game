$( document ).ready(function() {
			var crystal1 = 0
			var crystal2 = 0
			var crystal3 = 0
			var crystal4 = 0
			var userScore = 0
			var randomNum = 0
			var wins = 0
			var losses = 0 
			
			var game = function(){
				crystal1 = Math.floor((Math.random() * 12) + 1);
				crystal2 = Math.floor((Math.random() * 12) + 1);
				crystal3 = Math.floor((Math.random() * 12) + 1);
				crystal4 = Math.floor((Math.random() * 12) + 1);
				randomNum = Math.floor((Math.random() * 120) + 19);
				$("#randomNum").text(randomNum);

				userScore = 0
				$("#user_score").text(" " + userScore);
       			console.log(crystal1);
				console.log(crystal2);
				console.log(crystal3);
				console.log(crystal4);
				console.log(randomNum);
			};

     		game(); //calling game function


			$("#crystal1").click(function(){
				userScore = userScore + crystal1;
				$("#user_score").text(" " + userScore);
				match();
			});

			$("#crystal2").click(function(){
				userScore = userScore + crystal2;
				$("#user_score").text(" " + userScore);
				match();
			});

			$("#crystal3").click(function(){
				userScore = userScore + crystal3;
				$("#user_score").text(" " + userScore);
				match();
			});

			$("#crystal4").click(function(){
				userScore = userScore + crystal4;
				$("#user_score").text(" " + userScore);
				match();
			});

    		
			var match = function(){
    			if(userScore > randomNum){
    				alert("Try again - you lost!!!!!!!");
    				losses = losses + 1
    				$("#losses").text(losses);
    				game();
    				
    			}
    			else if (userScore === randomNum){
    				alert("Woooo wooooo - you WON!!!!!");
    				wins = wins + 1
    				$("#wins").text(wins);
    				game();
    			}	
    		};

});
