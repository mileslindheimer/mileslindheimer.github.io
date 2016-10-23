var projects = [
	{
		id: 'imageprocessing',
		name: 'Convolution Optimization', 
		img: 'img/projects/imageprocessing/lena512.bmp', 
		description: 'Optimized naive implementation of 2D image convolution using parallelization, loop unrolling, and cache blocking - 6000% speedup'
	},
  {
  	id: 'raytracer',
  	name: 'Raytracer', 
  	img: 'img/projects/raytracer/pic1.png',
  	description: 'Generates 3D rendering with interactive control, based on input of Bezier patches'
  },
  {
  	id: 'shader',
  	name: '3D Shader', 
  	img: 'img/thumbnails/shader_thumbnail.png',
  	description: 'Generates 3D rendering with interactive control, based on input of Bezier patches'
  },
  {
    id: 'cpu',
    name: 'Virtual CPU', 
    img: 'img/thumbnails/cpu_thumbnail.png',
    description: '16 bit, 4 Registers, runs MIPS, built in Logisim'
  },
  {
    id: 'bezier',
    name: 'Bezier Graphics Engine', 
    img: 'img/thumbnails/bezier_thumbnail.png',
    description: 'Generates 3D rendering with interactive control, based on input of Bezier patches'
  }
];

module.exports = projects;