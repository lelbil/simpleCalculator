var str = "";
var ar = [];

function btnClicked(id){ 
  //alert($("#"+id).attr("data-value"));
  ar.push($("#"+id).attr("data-value"));
  $(".displayer").html(ar.join(""));
}
function execute() {
  //var finStr = finAr.join("");
  var finVal = eval(ar.join(""));
  ar = finVal.toString().split(""); 
  $(".displayer").html(finVal);
}
function del() {
  ar.pop();
  $(".displayer").html(ar.join(""));
}
function ac() {
  ar = [];
    $(".displayer").html(ar.join(""));
}
function para() {
  for (var i = ar.length; i>=0 ; i--) {
    if (ar[i] == ")") {
     break;
    }
    if (ar[i] == "(") {
      ar.push(")"); break;
    }
  }
  if (ar[ar.length - 1] != ")") {
    ar.push("(");
  }
  $(".displayer").html(ar.join(""));
}
$(document).ready(function() {
	 $(document).keypress(function(event){
    var x = event.which || event.keyCode;
    //alert(x);
    switch (x) {
      case 49: var clickedId = "1"; btnClicked(clickedId); break;
      case 50: var clickedId = "2"; btnClicked(clickedId); break;
      case 51: var clickedId = "3"; btnClicked(clickedId); break;
      case 52: var clickedId = "4"; btnClicked(clickedId); break;
      case 53: var clickedId = "5"; btnClicked(clickedId); break;
      case 54: var clickedId = "6"; btnClicked(clickedId); break;
      case 55: var clickedId = "7"; btnClicked(clickedId); break;
      case 56: var clickedId = "8"; btnClicked(clickedId); break;
      case 57: var clickedId = "9"; btnClicked(clickedId); break;
      case 48: var clickedId = "0"; btnClicked(clickedId); break;
      case 46: var clickedId = "point"; btnClicked(clickedId); break;
      case 112: case 80: var clickedId = "pi"; btnClicked(clickedId); break;
      case 43: var clickedId = "plus"; btnClicked(clickedId); break;
      case 45: var clickedId = "minus"; btnClicked(clickedId); break;
      case 42: var clickedId = "times"; btnClicked(clickedId); break;
      case 47: var clickedId = "divide"; btnClicked(clickedId); break;
      case 0: var clickedId = "power"; btnClicked(clickedId); break;
      case 13: 
        execute(); break;
      case 8: 
        del(); break;
      case 99: case 67: 
        ac(); break;
      case 40: case 41: 
        para(); break;
      default: break; //do nothing
    }
  });
  
  $('.btn').click(function() {
    var clickedId = this.id;
    //alert(clickedId);
    switch (clickedId) {
      case "1":
      case "0":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "point":
      case "pi":
      case "plus":
      case "minus":
      case "times":
      case "divide":
      case "power":
        btnClicked(clickedId);
        break;
      case "enter": 
        execute(); break;
      case "del": 
        del(); break;
      case "ac": 
        ac(); break;
      case "para": 
        para(); break;
    }
  });
});