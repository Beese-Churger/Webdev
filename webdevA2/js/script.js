/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 
    
  var icon = document.querySelector(".icon");
  icon.addEventListener("click", ()=>{
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } 
    else {
      x.className = "navbar";
    }
    return false;
  
  });
  

 /*****************************************************************************
 * SCROLL TO TOP
 ****************************************************************************/
var mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo({top: 0, behavior: "smooth"});
}

/*****************************************************************************
 * SIDEBAR
 ****************************************************************************/
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var openbtn = document.getElementById('obtn');
openbtn.addEventListener("click", openNav);
function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
var closebtn = document.getElementById('cbtn');
closebtn.addEventListener("click", closeNav);
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
  }
  
/*****************************************************************************
 * SLIDES
 ****************************************************************************/
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  }

var a = function fn(){

}
/*****************************************************************************
 * CHESSBOARD
 ****************************************************************************/
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var dot = '\u25CF';

  var boards = 34;

  for(x = 0; x < boards; x++)
  {
	let cb = document.querySelectorAll(".chessboard")[x];

	for (let i = 8; i > 0; i--) {
		let row = document.createElement("div");
		for (let j = 0; j < 8; j++) {
			let newS = document.createElement("div");
			newS.id = [x]+letters[j] + numbers[i-1];

			if(cb.classList.contains('label'))
			{
				newS.appendChild(document.createTextNode(letters[j] + numbers[i-1]));
			}

	
			row.appendChild(newS);
		}
		cb.append(row);
	}
	if(cb.classList.contains('c1'))
	{
		setRooks(x);
	}
	else if(cb.classList.contains('c2'))
	{
		setRooks(x);
		setKnights(x);
	}
	else if(cb.classList.contains('c3'))
	{
		setRooks(x);
		setKnights(x)
		setBishops(x);
	}
	else if(cb.classList.contains('c4'))
	{
		setRooks(x);
		setKnights(x)
		setBishops(x);
		setQueens(x);
		setKings(x);
	}
	else if(cb.classList.contains('c5'))
	{
		setRooks(x);
		setKnights(x);
		setBishops(x);
		setQueens(x);
		setKings(x);
		setPawns(x);
	}

	else if(cb.classList.contains('p1'))
	{
		setPawns(x);
	}
	else if(cb.classList.contains('p2'))
	{
		setPawns2(x);
	}
	else if(cb.classList.contains('p3'))
	{
		setPawns3(x);
	}
	else if(cb.classList.contains('p4'))
	{
		setPawns4(x);
	}

	else if(cb.classList.contains('n1'))
	{
		setKnights(x);
	}
	else if(cb.classList.contains('n2'))
	{
		setKnights2(x);
	}
	else if(cb.classList.contains('n3'))
	{
		setKnights3(x);
	}
	else if(cb.classList.contains('n4'))
	{
		setKnights4(x);
	}

	else if(cb.classList.contains('b1'))
	{
		setBishops(x);
	}
	else if(cb.classList.contains('b2'))
	{
		setBishops2(x);
	}
	else if(cb.classList.contains('b3'))
	{
		setBishops3(x);
	}
	else if(cb.classList.contains('b4'))
	{
		setBishops4(x);
	}

	else if(cb.classList.contains('r1'))
	{
		setRooks(x);
	}
	else if(cb.classList.contains('r2'))
	{
		setRooks2(x);
	}
	else if(cb.classList.contains('r3'))
	{
		setRooks3(x);
	}
	else if(cb.classList.contains('r4'))
	{
		setRooks4(x);
	}

	else if(cb.classList.contains('q1'))
	{
		setQueens(x);
	}
	else if(cb.classList.contains('q2'))
	{
		setQueens2(x);
	}
	else if(cb.classList.contains('q3'))
	{
		setQueens3(x);
	}
	else if(cb.classList.contains('q4'))
	{
		setQueens4(x);
	}

	else if(cb.classList.contains('k1'))
	{
		setKings(x);
	}
	else if(cb.classList.contains('k2'))
	{
		setKings2(x);
	}
	else if(cb.classList.contains('k3'))
	{
		setKings3(x);
	}
	else if(cb.classList.contains('k4'))
	{
		setKings4(x);
	}
	else if(cb.classList.contains('k5'))
	{
		setKings5(x);
	}
	else if(cb.classList.contains('k6'))
	{
		setKings6(x);
	}
	else if(cb.classList.contains('k7'))
	{
		setKings7(x);
	}
	else if(cb.classList.contains('k8'))
	{
		setKings8(x);
	}
	else if(cb.classList.contains('opening'))
	{
		setDefault(x);
	}
	else if(cb.classList.contains('middle'))
	{
		setDefault(x);
	}
	else if(cb.classList.contains('ending'))
	{
		setDefault(x);
	}
  }
  




  //set all the default locations
function setDefault(x)
{
	setRooks(x);
	setKnights(x);
	setBishops(x);
	setQueens(x);
	setKings(x);
	setPawns(x);
}
  

  function setRooks(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wR.png';
	document.getElementById([x]+"a1").appendChild(img);
	document.getElementById([x]+"a1").classList.add("wRook");

	var img = document.createElement('img');
	img.src = 'img/wR.png';
	document.getElementById([x]+"h1").appendChild(img);
	document.getElementById([x]+"h1").classList.add("wRook");

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+"a8").appendChild(img);
	document.getElementById([x]+"a8").classList.add("bRook");

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+"h8").appendChild(img);
	document.getElementById([x]+"h8").classList.add("bRook");
  }

  function setKnights(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+"b1").appendChild(img);
	document.getElementById([x]+"b1").classList.add("wKnight");

	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+"g1").appendChild(img);
	document.getElementById([x]+"g1").classList.add("wKnight");

	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+"b8").appendChild(img);
	document.getElementById([x]+"b8").classList.add("bKnight");

	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+"g8").appendChild(img);
	document.getElementById([x]+"g8").classList.add("bKnight");
  }

  function setBishops(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wB.png';
	document.getElementById([x]+"c1").appendChild(img);
	document.getElementById([x]+"c1").classList.add("wBishop");

	var img = document.createElement('img');
	img.src = 'img/wB.png';
	document.getElementById([x]+"f1").appendChild(img);
	document.getElementById([x]+"f1").classList.add("wBishop");


	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+"c8").appendChild(img);
	document.getElementById([x]+"c8").classList.add("bBishop");


	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+"f8").appendChild(img);
	document.getElementById([x]+"f8").classList.add("bBishop");
  }

  function setQueens(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wQ.png';
	document.getElementById([x]+"d1").appendChild(img);
	document.getElementById([x]+"d1").classList.add("wQueen");

	var img = document.createElement('img');
	img.src = 'img/bQ.png';
	document.getElementById([x]+"d8").appendChild(img);
	document.getElementById([x]+"d8").classList.add("bQueen");
  }

  function setKings(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wK.png';
	document.getElementById([x]+"e1").appendChild(img);
	document.getElementById([x]+"d8").classList.add("wKing");

	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+"e8").appendChild(img);
	document.getElementById([x]+"d8").classList.add("bKing");
  }

  function setPawns(x)
  {
	  for(let i = 0; i < 8; i++)
	  {
		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+letters[i]+2).appendChild(img);
		document.getElementById([x]+letters[i]+2).classList.add("wPawn");

		var img = document.createElement('img');
		img.src = 'img/bP.png';
		document.getElementById([x]+letters[i]+7).appendChild(img);
		document.getElementById([x]+letters[i]+7).classList.add("wPawn");
	  }
  }

/*****************************************************************************
 * PAWNS
 ****************************************************************************/
  function setPawns2(x)
  {
	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'e2').appendChild(img);
	document.getElementById([x]+'e3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e4').appendChild(document.createTextNode(dot));

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'b3').appendChild(img);
	document.getElementById([x]+'b4').appendChild(document.createTextNode(dot));
  }

  function setPawns3(x)
  {
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wP.png';
	var p1 = document.getElementById([x]+'e4');
	p1.classList.add("tobMoved");
	p1.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wPawn");
	img.classList.add("aPiece");

	var img = document.createElement('img');
	img.src = 'img/bN.png';
	var k = document.getElementById([x]+'d5');
	k.appendChild(img);
	k.classList.add("target");

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'e5').appendChild(img);
  }

  function setPawns4(x)
  {
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wP.png';
	var p1 = document.getElementById([x]+'h7');
	p1.classList.add("tobMoved");
	p1.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wPawn");
	img.classList.add("promote");
	img.classList.add("aPiece");

	var promote = document.getElementById([x]+'h8');
	promote.classList.add("target");

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'a2').appendChild(img);
  }

/*****************************************************************************
 * KNIGHTS
 ****************************************************************************/
  function setKnights2(x){
	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+'d5').appendChild(img);
	document.getElementById([x]+'d5').classList.add("bKnight");

	document.getElementById([x]+'b4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'b6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'c3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c7').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e7').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'f4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f6').appendChild(document.createTextNode(dot));
  }

  function setKnights3(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/bN.png';
	var k = document.getElementById([x]+'d5');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("bKnight");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'b6').classList.add("target");
	document.getElementById([x]+'c7').classList.add("target");
	document.getElementById([x]+'e3').classList.add("target");
	document.getElementById([x]+'e7').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'b4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'f4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'b5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'c4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'f6').appendChild(img);
  }

  function setKnights4(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wN.png';
	var k = document.getElementById([x]+'d5');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wKnight");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'f4').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+'c6').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+'b3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'f4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'d6').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'e5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'d3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'e4').appendChild(img);
  }

/*****************************************************************************
 * BISHOPS
 ****************************************************************************/
  function setBishops2(x){
	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'e5').appendChild(img);
	document.getElementById([x]+'e5').classList.add("bBishop");

	document.getElementById([x]+'a1').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'b2').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f6').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'g7').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'h8').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'h2').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'g3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d6').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c7').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'b8').appendChild(document.createTextNode(dot));
  }

  function setBishops3(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wB.png';
	var b = document.getElementById([x]+'c4');
	b.classList.add("tobMoved");
	b.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wBishop");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'b3').classList.add("target");
	document.getElementById([x]+'a2').classList.add("target");
	document.getElementById([x]+'b5').classList.add("target");
	document.getElementById([x]+'a6').classList.add("target");
	document.getElementById([x]+'d5').classList.add("target");
	document.getElementById([x]+'e6').classList.add("target");
	document.getElementById([x]+'d3').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'d4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+'e2').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'f7').appendChild(img);
  }

  function setBishops4(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/bB.png';
	var k = document.getElementById([x]+'c6');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("bBishop");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'a8').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/wR.png';
	document.getElementById([x]+'a8').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+'f3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'g2').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'b6').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wB.png';
	document.getElementById([x]+'c7').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'b4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+'e6').appendChild(img);

  }

/*****************************************************************************
 * ROOKS
 ****************************************************************************/
   function setRooks2(x){
	var img = document.createElement('img');
	img.src = 'img/wR.png';
	document.getElementById([x]+'e4').appendChild(img);
	document.getElementById([x]+'e4').classList.add("wRook");

	document.getElementById([x]+'a4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'b4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'g4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'h4').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e8').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e7').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e2').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e1').appendChild(document.createTextNode(dot));
  }

  function setRooks3(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wR.png';
	var b = document.getElementById([x]+'d5');
	b.classList.add("tobMoved");
	b.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wRook");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'e5').classList.add("target");
	document.getElementById([x]+'c5').classList.add("target");
	document.getElementById([x]+'b5').classList.add("target");
	document.getElementById([x]+'a5').classList.add("target");
	document.getElementById([x]+'d1').classList.add("target");
	document.getElementById([x]+'d2').classList.add("target");
	document.getElementById([x]+'d3').classList.add("target");
	document.getElementById([x]+'d4').classList.add("target");
	document.getElementById([x]+'d6').classList.add("target");


	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'f4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'g5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'f5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'c4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+'d7').appendChild(img);
  }

  function setRooks4(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wR.png';
	var k = document.getElementById([x]+'d4');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wRook");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'a4').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+'a4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+'g4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'d6').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'f4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'d7').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'f5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'c5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'c2').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+'c6').appendChild(img);

  }

/*****************************************************************************
 * QUEENS
 ****************************************************************************/
	function setQueens2(x){
		var img = document.createElement('img');
		img.src = 'img/wQ.png';
		document.getElementById([x]+'e4').appendChild(img);
		document.getElementById([x]+'e4').classList.add("wQueen");
	
		document.getElementById([x]+'a4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'b4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'f4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'g4').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'h4').appendChild(document.createTextNode(dot));
	
		document.getElementById([x]+'e8').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e7').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e3').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e2').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'e1').appendChild(document.createTextNode(dot));

		document.getElementById([x]+'b1').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'c2').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'d3').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'f5').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'g6').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'h7').appendChild(document.createTextNode(dot));
	
		document.getElementById([x]+'a8').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'b7').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'c6').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'d5').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'f3').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'g2').appendChild(document.createTextNode(dot));
		document.getElementById([x]+'h1').appendChild(document.createTextNode(dot));
	  }
	
	  function setQueens3(x){
		// piece to move
		img = document.createElement('img');
		img.src = 'img/wQ.png';
		var b = document.getElementById([x]+'e5');
		b.classList.add("tobMoved");
		b.appendChild(img);
		img.setAttribute('draggable', true);
		img.addEventListener('dragstart',dragStart);
		img.addEventListener('dragend', dragEnd);
		img.classList.add("wQueen");
		img.classList.add("aPiece");
	
		// legal moves
		document.getElementById([x]+'d5').classList.add("target");
		document.getElementById([x]+'c5').classList.add("target");
		document.getElementById([x]+'f5').classList.add("target");
		document.getElementById([x]+'g5').classList.add("target");
		document.getElementById([x]+'h5').classList.add("target");

		document.getElementById([x]+'d4').classList.add("target");
		document.getElementById([x]+'c3').classList.add("target");

		document.getElementById([x]+'f6').classList.add("target");
		document.getElementById([x]+'g7').classList.add("target");
		document.getElementById([x]+'h8').classList.add("target");

		document.getElementById([x]+'b8').classList.add("target");
		document.getElementById([x]+'c7').classList.add("target");
		document.getElementById([x]+'d6').classList.add("target");
		document.getElementById([x]+'f4').classList.add("target");

		document.getElementById([x]+'e8').classList.add("target");
		document.getElementById([x]+'e7').classList.add("target");
		document.getElementById([x]+'e6').classList.add("target");
		document.getElementById([x]+'e4').classList.add("target");
		document.getElementById([x]+'e3').classList.add("target");
		document.getElementById([x]+'e2').classList.add("target");
		document.getElementById([x]+'e1').classList.add("target");
	
		// obstacles
		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+'b5').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+'b2').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+'g3').appendChild(img);

		var img = document.createElement('img');
		img.src = 'img/bB.png';
		document.getElementById([x]+'b3').appendChild(img);

		var img = document.createElement('img');
		img.src = 'img/bP.png'
		document.getElementById([x]+'c6').appendChild(img);
	  }
	
	  function setQueens4(x){
		// piece to move
		img = document.createElement('img');
		img.src = 'img/bQ.png';
		var k = document.getElementById([x]+'d4');
		k.classList.add("tobMoved");
		k.appendChild(img);
		img.setAttribute('draggable', true);
		img.addEventListener('dragstart',dragStart);
		img.addEventListener('dragend', dragEnd);
		img.classList.add("bQueen");
		img.classList.add("aPiece");
	
		// legal moves
		document.getElementById([x]+'g1').classList.add("target");
	
		// obstacles
		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+'f3').appendChild(img);

		var img = document.createElement('img');
		img.src = 'img/wP.png';
		document.getElementById([x]+'c2').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/bP.png';
		document.getElementById([x]+'c5').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/bP.png';
		document.getElementById([x]+'g5').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/bP.png';
		document.getElementById([x]+'f4').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/bB.png';
		document.getElementById([x]+'b4').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/wB.png';
		document.getElementById([x]+'g4').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/wQ.png';
		document.getElementById([x]+'a4').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/bN.png';
		document.getElementById([x]+'f6').appendChild(img);
	
		var img = document.createElement('img');
		img.src = 'img/wR.png';
		document.getElementById([x]+'f7').appendChild(img);

		var img = document.createElement('img');
		img.src = 'img/wR.png';
		document.getElementById([x]+'g1').appendChild(img);
	
	  }

/*****************************************************************************
 * KINGS
 ****************************************************************************/
  function setKings2(x){
	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+'d5').appendChild(img);
	document.getElementById([x]+'d5').classList.add("bKing");

	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
  }

  function setKings3(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wK.png';
	var k = document.getElementById([x]+'d4');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wKing");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'d5').classList.add("target");
	document.getElementById([x]+'d3').classList.add("target");
	document.getElementById([x]+'c3').classList.add("target");
	document.getElementById([x]+'c4').classList.add("target");
	document.getElementById([x]+'c5').classList.add("target");
	document.getElementById([x]+'e3').classList.add("target");
	document.getElementById([x]+'e4').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'e5').appendChild(img);
  }

  function setKings4(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wK.png';
	var k = document.getElementById([x]+'e4');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wKing");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'e5').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'e5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'f4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'c3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'g4').appendChild(img);
  }

  function setKings5(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wK.png';
	var k = document.getElementById([x]+'e4');
	k.appendChild(img);


	// legal moves
	document.getElementById([x]+'d3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f3').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'f5').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'f4').appendChild(document.createTextNode('\u274C'));
	document.getElementById([x]+'e5').appendChild(document.createTextNode('\u274C'));

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bB.png';
	document.getElementById([x]+'c7').appendChild(img);
  }

  function setKings6(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/bK.png';
	var k = document.getElementById([x]+'e4');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("bKing");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'d5').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/wP.png';
	document.getElementById([x]+'c2').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wQ.png';
	document.getElementById([x]+'c1').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wB.png';
	document.getElementById([x]+'d1').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wN.png';
	document.getElementById([x]+'c6').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wR.png';
	document.getElementById([x]+'h5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'e5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c5').appendChild(img);
  }

  function setKings7(x){
	// piece to move
	img = document.createElement('img');
	img.src = 'img/wK.png';
	var k = document.getElementById([x]+'d4');
	k.classList.add("tobMoved");
	k.appendChild(img);
	img.setAttribute('draggable', true);
	img.addEventListener('dragstart',dragStart);
	img.addEventListener('dragend', dragEnd);
	img.classList.add("wKing");
	img.classList.add("aPiece");

	// legal moves
	document.getElementById([x]+'e3').classList.add("target");

	// obstacles
	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+'e4').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bN.png';
	document.getElementById([x]+'e3').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bR.png';
	document.getElementById([x]+'c5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'d5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/bP.png';
	document.getElementById([x]+'c3').appendChild(img);
  }

  function setKings8(x){
	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+'d5').appendChild(img);

	var img = document.createElement('img');
	img.src = 'img/wK.png';
	document.getElementById([x]+'e5').appendChild(img);
  }


/*****************************************************************************
 * PHASES
 ****************************************************************************/
   function setOpening(x){
	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+'d5').appendChild(img);
	document.getElementById([x]+'d5').classList.add("bKing");

	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
  }

  function setMiddle(x){
	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+'d5').appendChild(img);
	document.getElementById([x]+'d5').classList.add("bKing");

	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
  }

  function setEnd(x){
	var img = document.createElement('img');
	img.src = 'img/bK.png';
	document.getElementById([x]+'d5').appendChild(img);
	document.getElementById([x]+'d5').classList.add("bKing");

	document.getElementById([x]+'d4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'d6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'c4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'c6').appendChild(document.createTextNode(dot));

	document.getElementById([x]+'e4').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e5').appendChild(document.createTextNode(dot));
	document.getElementById([x]+'e6').appendChild(document.createTextNode(dot));
  }
/*****************************************************************************
 * DRAG FUNCTIONS
 ****************************************************************************/

const targets = document.querySelectorAll('.target');
var toMove;
//Loop through targets
for (const target of targets) {
  target.addEventListener('dragover', dragOver);
  target.addEventListener('dragenter', dragEnter);
  target.addEventListener('dragleave', dragLeave);
  target.addEventListener('drop', dragDrop);
}

function dragStart() {
	
  this.classList.add('hold');
  setTimeout(() => (this.classList.replace('hold', 'invisible'), 0));
  toMove = this;
}
function dragEnd() {
	this.classList.remove('invisible');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.toggle('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

//chess piece
var audio = new Audio('img/public_sound_standard_Move.mp3')
function dragDrop() {
	audio.play();
	toMove.parentElement.classList.add('isMoved');
	this.innerHTML = "";
	setIMG(toMove, this);
	deleteIMG();
}

// delete if dropped correctly
function deleteIMG()
{
	const draggables = document.querySelectorAll('.tobMoved');
	for (const tobMoved of draggables) {
	
		if(tobMoved.classList.contains('isMoved'))
		{
			tobMoved.innerHTML="";
		}
	  }
}

// set img based on moved piece
function setIMG(toMove, imgset)
{
	if(toMove.classList.contains("wPawn"))
	{
		img = document.createElement('img');
		img.src = 'img/wP.png';
		if(toMove.classList.contains("promote"))
		{
			img = document.createElement('img');
			img.src = 'img/wQ.png';
		}
	}
	if(toMove.classList.contains("bPawn"))
	{
		img = document.createElement('img');
		img.src = 'img/bP.png';
	}
	
	if(toMove.classList.contains("wKnight"))
	{
		img = document.createElement('img');
		img.src = 'img/wN.png';
	}
	if(toMove.classList.contains("bKnight"))
	{
		img = document.createElement('img');
		img.src = 'img/bN.png';
	}
	if(toMove.classList.contains("wBishop"))
	{
		img = document.createElement('img');
		img.src = 'img/wB.png';
	}
	if(toMove.classList.contains("bBishop"))
	{
		img = document.createElement('img');
		img.src = 'img/bB.png';
	}
	if(toMove.classList.contains("wRook"))
	{
		img = document.createElement('img');
		img.src = 'img/wR.png';
	}
	if(toMove.classList.contains("bRook"))
	{
		img = document.createElement('img');
		img.src = 'img/bR.png';
	}
	if(toMove.classList.contains("wQueen"))
	{
		img = document.createElement('img');
		img.src = 'img/wQ.png';
	}
	if(toMove.classList.contains("bQueen"))
	{
		img = document.createElement('img');
		img.src = 'img/bQ.png';
	}
	if(toMove.classList.contains("wKing"))
	{
		img = document.createElement('img');
		img.src = 'img/wK.png';
	}
	if(toMove.classList.contains("bKing"))
	{
		img = document.createElement('img');
		img.src = 'img/bK.png';
	}
	
	imgset.appendChild(img)
}