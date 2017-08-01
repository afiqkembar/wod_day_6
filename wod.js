function input(n){
 if(n>=0 && n<60*24)
 f=n/60;
 s=n%60;
 document.write(f%10+f/10+s%10+s/10);
}

input(240);
