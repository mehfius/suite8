

function resizeImage(file,cb){

// Get the image

	var oFReader = new FileReader();
	oFReader.readAsDataURL(file);
	
	oFReader.onload = function (oFREvent) {

		var temp = new Image();

		temp.src=oFREvent.target.result;

		temp.onload = function(){
		
			// callback(image);

			var image = convertCanvasToFile(convertImageToCanvas(temp));

			// Actions
			//document.getElementById("canvasHolder").appendChild(canvas);
			
 			//if(this.width!=this.height){
				
			//	alert("O sistema só permite foto quadrada. Recorte a foto e tente novamente.");
				
 		//	}else{
				
				cb(image);
				
		//	}

			
			
			
		};
		
	};

	// Converts image to canvas; returns new canvas element
	function convertImageToCanvas(image) {

		var canvas = document.createElement("canvas");

			var width  = 1280;
			var height = width * (image.height / image.width);

			canvas.height = height;
			canvas.width = width;

			canvas.getContext("2d").drawImage(image, 0, 0,width,height);

		return canvas;

	}

	// Converts canvas to an image
	function convertCanvasToImage(canvas) {

		var image = new Image();

		image.src = canvas.toDataURL("image/jpeg");

		return image;

	}

	function convertCanvasToFile(canvas) {
	
		var dataURL = canvas.toDataURL("image/jpeg");

		var blobBin = atob(dataURL.split(',')[1]);
		var array = [];

		for(var i = 0; i < blobBin.length; i++) {

			array.push(blobBin.charCodeAt(i));

		}

		var file=new Blob([new Uint8Array(array)], {type: 'jpg'});

		return file;
		
	}

}