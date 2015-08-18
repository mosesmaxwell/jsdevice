/**
 * device.js - v0.0.1 - 2015-08-18
 * 
 *
 * Copyright (c) 2015 CTS/MosesMaxwell
 * Licensed  <>
 */
"use strict";
var vibrate = navigator.vibrate || navigator.mozVibrate;
function toggleVibrate(ob)
{
	var ON = 'Vibrate ON';
	var OFF = 'Vibrate OFF';
	switch(ob.innerHTML)
	{
		case ON:
			ob.innerHTML = OFF;
			vibrate();
			break;
		case OFF:
			ob.innerHTML = ON;
			vibrate(0);
			break;
	}
}