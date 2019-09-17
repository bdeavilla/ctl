function fedpov(house,income,percentage){
	// Determines if your income is less than or equal to 
	// a percentage of the 2018 federal poverty guidelines 
	// for the contiguous United States. See
	// https://www.federalregister.gov/documents/2018/01/18/2018-00814/annual-update-of-the-hhs-poverty-guidelines
	
		var line = NaN;
	
		if (household == 1) {
			line = 12140;
		} else if (household == 2) {
			line = 16460;
		} else if (household == 3) {
			line = 20780;
		} else if (household == 4) {
			line = 25100;
		} else if (household == 5) {
			line = 29420;
		} else if (household == 6) {
			line = 33740;
		} else if (household == 7) {
			line = 38060;
		} else if (household == 8) {
			line = 42380;
		} else if (household > 8) {
			line = 42380 + (house-8)*4320;
		}
	
		if (income <= (line*(125/100))) {
			return true;
		} else {
			return false;
		}
	}	
