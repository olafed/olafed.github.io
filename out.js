/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {

	var testCanvas = document.getElementById('testCanvas');

	testCanvas.width = testCanvas.scrollWidth;
	testCanvas.height = testCanvas.scrollWidth;

	var ctx = testCanvas.getContext('2d');

	var addBtn = document.getElementById('addBtn');
	var removeBtn = document.getElementById('removeBtn');
	var generateDonutBtn = document.getElementById('generateDonutBtn');
	var generatePieBtn = document.getElementById('generatePieBtn');
	var generateBarBtn = document.getElementById('generateBarBtn');
	var reloadForm = document.getElementById('reloadForm');

	function addFormElement(index) {

		var form = document.querySelector('form');
		var newDiv = document.createElement("div");
		newDiv.classList.add("form-inline");

		var newInputValueLabel = document.createElement("label");
		newInputValueLabel.classList.add("mr-sm-2");
		newInputValueLabel.classList.add("mb-2");
		newInputValueLabel.setAttribute("for", "value-" + index);
		newInputValueLabel.innerText = "Wartość:";

		var newInputValue = document.createElement("input");
		newInputValue.classList.add("mr-sm-2");
		newInputValue.classList.add("mb-2");
		newInputValue.classList.add("form-control");
		newInputValue.setAttribute("type", "tel");
		newInputValue.setAttribute("maxlength", "3");
		newInputValue.setAttribute("min", "0");
		newInputValue.setAttribute("max", "100");
		newInputValue.setAttribute("size", "3");
		newInputValue.setAttribute("id", "value-" + index);
		newInputValue.setAttribute("name", "value-" + index);

		var newInputDescriptionLabel = document.createElement("label");
		newInputDescriptionLabel.classList.add("mr-sm-2");
		newInputDescriptionLabel.classList.add("mb-2");
		newInputDescriptionLabel.setAttribute("for", "description-" + index);
		newInputDescriptionLabel.innerText = "Opis:";

		var newInputDescription = document.createElement("input");
		newInputDescription.classList.add("mr-sm-2");
		newInputDescription.classList.add("mb-2");
		newInputDescription.classList.add("form-control");
		newInputDescription.setAttribute("type", "text");
		newInputDescription.setAttribute("id", "description-" + index);
		newInputDescription.setAttribute("name", "description-" + index);

		var newInputColorLabel = document.createElement("label");
		newInputColorLabel.classList.add("mr-sm-2");
		newInputColorLabel.classList.add("mb-2");
		newInputColorLabel.setAttribute("for", "color-" + index);
		newInputColorLabel.innerText = "Kolor:";

		var newInputColor = document.createElement("input");
		newInputColor.classList.add("mr-sm-2");
		newInputColor.classList.add("mb-2");
		newInputColor.setAttribute("type", "color");
		newInputColor.setAttribute("id", "color-" + index);
		newInputColor.setAttribute("name", "color-" + index);

		form.insertBefore(newDiv, addBtn);
		newDiv.appendChild(newInputValueLabel);
		newDiv.appendChild(newInputValue);
		newDiv.appendChild(newInputDescriptionLabel);
		newDiv.appendChild(newInputDescription);
		newDiv.appendChild(newInputColorLabel);
		newDiv.appendChild(newInputColor);
	}

	function removeFormElement() {
		var toDelete = document.querySelector('.form-inline:last-of-type');
		toDelete.parentElement.removeChild(toDelete);
	}

	var formChangeControl = function formChangeControl() {
		var _this = this;

		_classCallCheck(this, formChangeControl);

		this.addElement = function () {
			_this.index++;
			_this.tableOfIndex.push(_this.index);
			addFormElement(_this.index);
		};

		this.removeElement = function () {
			removeFormElement();
			_this.index--;
			_this.tableOfIndex.pop();
		};

		this.checkSumFromForm = function () {
			var sum = 0;
			var sumError = document.getElementById('sum-error');
			for (var i = 1; i <= _this.tableOfIndex.length; i++) {
				var dataValue = parseInt(document.getElementById('value-' + i).value);
				sum += dataValue;
			}
			if (sum == 100) {
				_this.draw = true;
				sumError.classList.add('hidden');
			} else {
				sumError.classList.remove('hidden');
			}
		};

		this.createDataFromForm = function () {
			_this.tableOfData = [];
			var a = 0;
			var b = 0;
			var rectX = 10;
			var rectY = 50;

			var posX = testCanvas.width / 2;
			var posY = testCanvas.height / 2;
			var radiusLength = testCanvas.width / 4;

			for (var i = 1; i <= _this.tableOfIndex.length; i++) {
				var dataValue = document.getElementById('value-' + i).value;
				var dataDescription = document.getElementById('description-' + i).value;
				var dataColor = document.getElementById('color-' + i).value;
				b += Math.PI * 2 * (dataValue / 100);
				_this.tableOfData.push({
					value: dataValue,
					description: dataDescription,
					color: dataColor,
					x: posX,
					y: posY,
					radius: radiusLength,
					start: a,
					stop: b,
					speed: (b - a) / 100,
					rectStartX: rectX,
					rectStartY: rectY,
					speedRect: (rectX + dataValue * 5) / 100
				});
				a = b;
				rectY += 55;
			}
			return _this.tableOfData;
		};

		this.displayDataFromForm = function () {
			var form = document.querySelector('form');
			var legend = document.querySelector('.legend');
			var legendTitle = document.querySelector('.legend-title');
			form.classList.add('hidden');
			legend.classList.remove('hidden');
			legendTitle.classList.remove('hidden');

			_this.tableOfData.forEach(function (element) {
				var result = document.createElement("div");
				result.classList.add('legend-row');
				result.innerHTML = "<p class=\"legend-dot\" style=\"background-color:" + element.color + "\"></p><p class=\"legend-description\">" + element.value + "% " + element.description + "</p>";
				legend.appendChild(result);
			});
		};

		this.index = 1;
		this.tableOfIndex = [this.index];
		this.tableOfData = [];
		this.displayData = false;
		this.draw = false;
	};

	//przykładowe wartości do testów, docelowo będą pobrane z inputów
	// var data = [50, 50];
	// const data = [10, 10, 20, 30, 20, 10];
	// var data = [30, 30, 30, 10];
	// var data = [20, 20, 20, 20, 20];


	function drawPiece(element) {
		ctx.fillStyle = element.color;
		ctx.beginPath();
		ctx.arc(element.x, element.y, element.radius, element.start, element.start + element.speed);
		ctx.lineTo(element.x, element.y);
		ctx.fill();
		element.speed += (element.stop - element.start) / 100;
	}

	function drawRectangle(element) {
		ctx.fillStyle = element.color;
		ctx.beginPath();
		ctx.rect(element.rectStartX, element.rectStartY, element.speedRect, 50);
		ctx.fill();
		element.speedRect += element.value * 5 / 100;
	}

	function addTextToPiece(element) {
		var moveX = Math.cos(element.start + (element.stop - element.start) / 2) * element.radius + testCanvas.width / 2;
		var moveY = Math.sin(element.start + (element.stop - element.start) / 2) * element.radius + testCanvas.height / 2;
		var lineToX = Math.cos(element.start + (element.stop - element.start) / 2) * (element.radius * 1.2) + testCanvas.width / 2;
		var lineToY = Math.sin(element.start + (element.stop - element.start) / 2) * (element.radius * 1.2) + testCanvas.height / 2;
		var textX = Math.cos(element.start + (element.stop - element.start) / 2) * (element.radius * 1.4) + testCanvas.width / 2;
		var textY = Math.sin(element.start + (element.stop - element.start) / 2) * (element.radius * 1.4) + testCanvas.height / 2;
		var fontSize = testCanvas.width / 2 / 10;
		var text = element.value + "%";

		ctx.strokeStyle = "lightgrey";
		ctx.beginPath();
		ctx.moveTo(moveX, moveY);
		ctx.lineTo(lineToX, lineToY);
		ctx.stroke();

		ctx.font = fontSize + "px Calibri";
		ctx.fillStyle = element.color;
		if (textY < testCanvas.height * 0.3) {
			ctx.textBaseline = "alphabetic";
		} else if (textY > testCanvas.height * 0.7) {
			ctx.textBaseline = "hanging";
		} else {
			ctx.textBaseline = "middle";
		}
		ctx.textAlign = "center";
		ctx.fillText(text, textX, textY);
	}

	function addTextToRectangle(element) {
		var fontSize = testCanvas.width / 2 / 10;
		var text = element.value + "%";
		var textX = element.rectStartX + element.value * 5 + 10;
		var textY = element.rectStartY;
		ctx.font = fontSize + "px Calibri";
		ctx.fillStyle = element.color;
		ctx.textBaseline = "top";
		ctx.textAlign = "start";
		ctx.fillText(text, textX, textY);
	}

	var AnimatedPieChart = function AnimatedPieChart(arr) {
		var _this2 = this;

		_classCallCheck(this, AnimatedPieChart);

		this.animatePieChart = function () {
			ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);

			_this2.pieces.forEach(drawPiece);

			if (Math.round((_this2.pieces[0].start + _this2.pieces[0].speed) * 1000) / 1000 <= Math.round(_this2.pieces[0].stop * 1000) / 1000) {
				window.requestAnimationFrame(_this2.animatePieChart);
			} else {
				window.cancelAnimationFrame(_this2.animatePieChart);
				_this2.pieces.forEach(addTextToPiece);
			}
		};

		this.pieces = arr;
	};

	;

	var AnimatedDonutChart = function AnimatedDonutChart(arr) {
		var _this3 = this;

		_classCallCheck(this, AnimatedDonutChart);

		this.animateDonutChart = function () {
			ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);

			_this3.pieces.forEach(drawPiece);

			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(testCanvas.width / 2, testCanvas.height / 2, testCanvas.width / 4 * 0.75, 0, Math.PI * 2);
			ctx.fill();

			if (Math.round((_this3.pieces[0].start + _this3.pieces[0].speed) * 1000) / 1000 <= Math.round(_this3.pieces[0].stop * 1000) / 1000) {
				window.requestAnimationFrame(_this3.animateDonutChart);
			} else {
				window.cancelAnimationFrame(_this3.animateDonutChart);
				_this3.pieces.forEach(addTextToPiece);
			}
		};

		this.pieces = arr;
	};

	;

	var AnimatedBarGraph = function AnimatedBarGraph(arr) {
		var _this4 = this;

		_classCallCheck(this, AnimatedBarGraph);

		this.animateBarGraph = function () {
			ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);

			_this4.pieces.forEach(drawRectangle);

			if (_this4.pieces[0].speedRect <= _this4.pieces[0].value * 5) {
				window.requestAnimationFrame(_this4.animateBarGraph);
			} else {
				window.cancelAnimationFrame(_this4.animateBarGraph);
				_this4.pieces.forEach(addTextToRectangle);
			}
		};

		this.pieces = arr;
	};

	;

	var formChange = new formChangeControl();

	addBtn.addEventListener('click', function (e) {
		e.preventDefault();
		formChange.addElement();
	});

	removeBtn.addEventListener('click', function (e) {
		e.preventDefault();
		formChange.removeElement();
	});

	generateDonutBtn.addEventListener('click', function (e) {
		formChange.checkSumFromForm();
		if (formChange.draw == true) {
			formChange.createDataFromForm();
			if (formChange.displayData == false) {
				formChange.displayDataFromForm();
				formChange.displayData = true;
			}
			var animation = new AnimatedDonutChart(formChange.tableOfData);
			animation.animateDonutChart();
		}
	});

	generatePieBtn.addEventListener('click', function (e) {
		formChange.checkSumFromForm();
		if (formChange.draw == true) {
			formChange.createDataFromForm();
			if (formChange.displayData == false) {
				formChange.displayDataFromForm();
				formChange.displayData = true;
			}
			var animation = new AnimatedPieChart(formChange.tableOfData);
			animation.animatePieChart();
		}
	});

	generateBarBtn.addEventListener('click', function (e) {
		formChange.checkSumFromForm();
		if (formChange.draw == true) {
			formChange.createDataFromForm();
			if (formChange.displayData == false) {
				formChange.displayDataFromForm();
				formChange.displayData = true;
			}
			var animation = new AnimatedBarGraph(formChange.tableOfData);
			animation.animateBarGraph();
		}
	});

	reloadForm.addEventListener('click', function (e) {
		location.reload();
	});
});

/***/ })
/******/ ]);