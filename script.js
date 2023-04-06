	
	//Select triangle
	function SelectTriangle(){
	var divt = document.querySelector(".form-Triangle-Area");
	var divp = document.querySelector(".form-parallelogram-area");	
	divp.classList.add("hidden");
	divt.classList.remove("hidden");
	}

	//select parallelogram
	function SelectParallelogram(){
	var divt = document.querySelector(".form-Triangle-Area");
	var divp = document.querySelector(".form-parallelogram-area");	
	divt.classList.add("hidden");
	divp.classList.remove("hidden");
	}

	//Calculate Area Of Triangle
		function hitungLuasSegitiga() {
			const alas = document.getElementById('alas').value;
			const tinggi = document.getElementById('tinggi').value;

			const luas = (alas * tinggi) / 2;

			document.getElementById('luas').textContent = luas;
		}

    //Calculate Circumtance of Triangle
    function hitungKelilingSegitiga() {
			const alas   = parseInt(document.getElementById('s1').value);
			const tinggi = parseInt(document.getElementById('s2').value);
      		const miring = parseInt(document.getElementById('s3').value);
			const keliling = alas + tinggi + miring ; 

			document.getElementById('keliling').textContent = keliling;
		}

	//Calculate Area of parallelogram
	function hitungLuasJajarGenjang() {
		const alas = document.getElementById('alas-jg').value;
		const tinggi = document.getElementById('tinggi-jg').value;
		const luas = (alas * tinggi);

		document.getElementById('luas-jg').textContent = luas;
	}
	
	//Calculate Circumtance of parallelogram
	function hitungKelilingJajarGenjang() {
		const a = parseInt(document.getElementById('sisi1').value);
		const b = parseInt(document.getElementById('sisi2').value);
		const keliling = 2 * (a + b);

		document.getElementById('keliling-jg').textContent = keliling;
	}

	//Reset input and output value
	function Reset(){
		document.getElementById("alas").value = "";
		document.getElementById("tinggi").value = "";
		document.getElementById("s1").value = ""; 
		document.getElementById("s2").value = "";
		document.getElementById("s3").value = "";
		document.getElementById("alas-jg").value = "";
		document.getElementById("tinggi-jg").value = "";
		document.getElementById("sisi1").value = "";
		document.getElementById("sisi2").value = "";
		document.getElementById("luas").textContent = "";
		document.getElementById("keliling").textContent = "";
		document.getElementById("luas-jg").textContent = "";
		document.getElementById("keliling-jg").textContent = "";
	
	}