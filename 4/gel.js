var gel = {
	colsToPixelWidth: function(cols) {
		if (cols > 61) {
			return null;
		}
		else {
			return cols * 16;
		}
	}
};