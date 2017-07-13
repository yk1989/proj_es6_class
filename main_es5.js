"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cancion = function () {
	function Cancion(titulo, artista, duracion, codec, genero) {
		_classCallCheck(this, Cancion);

		this.titulo = titulo;
		this.artista = artista;
		this.duracion = duracion;
		this.codec = codec;
		this.genero = genero;
		this.estado = false;
	}

	_createClass(Cancion, [{
		key: "reproducir",
		value: function reproducir() {
			this.estado = true;
		}
	}, {
		key: "detener",
		value: function detener() {
			this.estado = false;
		}
	}, {
		key: "nombre",
		value: function nombre() {
			return this.titulo + "" + this.artista;
		}
	}]);

	return Cancion;
}();

var nuevaCancion = new Cancion("Wonder wall", "Oasis", "3.41", "mp3");

nuevaCancion.reproducir();
nuevaCancion.nombre();
console.log(nuevaCancion.nombre());

var nuevaCancion2 = new Cancion("listen to our heart", "some dude", "6.66", "mp5");
nuevaCancion2.reproducir();
console.log("el estado de la cancion es: " + nuevaCancion2.estado + "El genero es:" + nuevaCancion2.genero);
console.log(nuevaCancion2.nombre());
