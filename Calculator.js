function display(val) {
   var v = document.getElementById('displaybox');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('displaybox').value;
   var num2 = eval(num1);
   document.getElementById('displaybox').value = num2;
}
function clear() {
   var inp = document.getElementById('displaybox');
   inp.value = '';
}
function back() {
   var ev = document.getElementById('displaybox');
   ev.value = ev.value.slice(0,-1);
}