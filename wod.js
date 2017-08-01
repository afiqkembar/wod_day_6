/*function input(n){
   if(n>=0 && n<60*24)
     f = n / 60;
     s = n % 60;
  document.write((f/10)+(f%10)+(s/10)+(s%10));
  }

input(808);*/

function lateRide(input) {
    if(input>=0 && input<60*24){
        var first = input/60;
        var second = input%60;
        var a =Math.floor(first/10);
        var b =Math.floor(first%10);
        var c =Math.floor(second/10);
        var d =Math.floor(second%10);
        var v = a+b+c+d;
        document.write(v);
    }
}
lateRide(808);
