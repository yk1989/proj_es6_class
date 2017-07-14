

class Cancion {
	constructor (titulo, artista, duracion, codec, genero)
	{
		this.titulo=titulo;
		this.artista=artista;
		this.duracion=duracion;
		this.codec= codec;
		this.genero= genero;
		this.estado=false;
	}

	reproducir()	
	{
		this.estado=true;
	}

	detener()
	{
		this.estado=false;
	}
nombre() {return this.titulo+""+this.artista}
}

var nuevaCancion= new Cancion("Wonder wall","Oasis","3.41","mp3","mariachi");

nuevaCancion.reproducir();
nuevaCancion.nombre();
console.log("la cancion se llama: "+nuevaCancion.nombre()+"El genero es:"+nuevaCancion.genero);

var nuevaCancion2=new Cancion ("listen to our heart","some dude", "6.66","mp5","rock");
nuevaCancion2.reproducir();
console.log("el estado de la cancion es: "+nuevaCancion2.estado+ "El genero es:"+nuevaCancion2.genero);
console.log(nuevaCancion2.nombre());
