(function() {
	test('colsToPixelWidth 48 Cols', function() {
		var pixelWidth;

		pixelWidth = gel.colsToPixelWidth(48);

		equals(768, pixelWidth);
	});

	test('colsToPixelWidth minimum', function() {
		var pixelWidth;

		pixelWidth = gel.colsToPixelWidth(1);

		equals(16, pixelWidth);
	});

	test('colsToPixelWidth maximum', function() {
		var pixelWidth;

		pixelWidth = gel.colsToPixelWidth(61);

		equals(976, pixelWidth);
	});

	test('colsToPixelWidth invalid', function() {
		var pixelWidth;

		pixelWidth = gel.colsToPixelWidth(62);

		equals(null, pixelWidth);
	});
})();