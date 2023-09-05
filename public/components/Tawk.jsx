// components/TawkToWidget.js

import React, { useEffect } from 'react';

const TawkToWidget = () => {
	useEffect(() => {
		var Tawk_API = Tawk_API || {};
		var Tawk_LoadStart = new Date();
		(function () {
			var s1 = document.createElement('script'),
				s0 = document.getElementsByTagName('script')[0];
			s1.async = true;
			s1.src = 'https://embed.tawk.to/64f6f51ea91e863a5c11b898/default';
			s1.charset = 'UTF-8';
			s1.setAttribute('crossorigin', '*');
			s0.parentNode.insertBefore(s1, s0);
		})();
	}, []);

	return <div />;
};

export default TawkToWidget;
