function cal()
{
var a=parseInt(document.getElementById("vA").value);
var b=parseInt(document.getElementById("vB").value);
var c=parseInt(document.getElementById("vC").value);

var r=(Math.pow(b,2)-(4*a*c));
if(a==0 || r<0)
{
    document.getElementById("resp").innerHTML="Infinito o raices negativas";

}
else
{
    x1=(-b+(Math.sqrt(r))/2*a);
    x1=(-b-(Math.sqrt(r))/2*a); 


document.getElementById("resp").innerHTML="x1:"+x1+"x2:"+x2;
}
}
/*funciones con botones para cambiar de imagenes aplicando javascript y html*/
function cambiarimg1()
{
    document.getElementById("macho").src="img/comida5.jpg";
}
function cambiarimg2()
{
    document.getElementById("macho").src="img/comida6.jpg";
}
function cambiarimg3()
{
    document.getElementById("macho").src="img/comida1.jpg";
}
/*funciones nombre y edad en casillas*/
/*function myfuncion1()
{
    document.getElementById("msg1").innerHTML=document.getElementById("nombre").value;
    document.getElementById("msg1").innerText="<b>"+document.getElementById("nombre").value+"</b>";
}*/
/*function myfuncion2()
{
    document.getElementById("msg2").innerHTML=document.getElementById("edad").value;
    document.getElementById("msg2").innerText="<b>"+document.getElementById("edad").value+"</b>";
}*/
/*funcion evento con codigo ascii saber letras 64-123*/
/*function myfuncion1(event)
{
    if(event.keyCode>64 && event.keyCode<123)
    {
        document.getElementById("msg1").innerHTML=document.getElementById("nombre").value;
    }
    else
    {
        document.getElementById("msg1").innerHTML="Error";
    }

}
function myfuncion2(event)
{
    if(event.keydcode>48 && event.keydcode <57)
    {
        document.getElementById("msg2").innerHTML=document.getElementById("edad").value;
    }
    else
    {
        document.getElementById("msg2").innerHTML="Error";
    }

}*/
/*funcion calculador*/
function myfuncion1()
{
    document.getElementById("msg1").innerHTML=document.getElementById("nombre").value;
    document.getElementById("msg1").innerText="<b>"+document.getElementById("nombre").value+"</b>";
}

