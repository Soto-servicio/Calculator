/* class telefono{
    constructor(marca, color, memoria){
    this.marca = marca;
    this.color = color;
    this.memoria = memoria;
    this.info=`Soy un telefono de marca ${this.marca}, de color ${this.color} y tengo de memoria ${this.memoria}GB `
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
    }
    

    class redmi extends telefono{
        constructor(marca, color, memoria, precio){
            super(marca, color, memoria);
            this.precio = precio
        }
    }


   let xiaomi = new redmi("redmi" , "rojo" , 5, 1555);

   
    let texto = "Hola maldita";
    
    let resultado = texto.concat( ", dame de tu querida cuca");
    
    document.write(resultado);
    console.log(xiaomi) */
/* 
    let edad = 

    if(edad>= 18){ 
        document.write("es mayor de edad") ;
    }
    else{
        document.write("no es mayor de edad");
    } */


    /* let saberEdad = */
    
    
 /*     function saberEdad(nombre, edad){if(edad>= 18){ 
        document.write( ` ${nombre} es mayor de edad`) ;
    }
    else{
        document.write(`${nombre} no es mayor de edad`);
    }}

 
    saberEdad("Martina", 17)
  */

/* 
    let vela = "O";
    
    


    if(vela === "On") {
        document.write("La vela esta encendida")
    } else {
        document.write ("la vela esta apagada, hay que buscar cerillos")

        vela = "On"
        document.write("<br>" + "Ya esta encendida") 

        console.log(vela)
    } */

 
/* 

    for (let i= 100; i>0 ; i--) {
       segundos = i;
       document.write(segundos +" Seg" + "<br>")
        
    }
 */




 /* 
 let nombre1 = prompt("Jugador 1, cual es tu nombre?");

 let nombre2 = prompt("Jugador 2, cual es tu nombre?");
 
  let op1 = prompt(nombre1 + " Elije tu mano: piedra, papel o tijera?");

let op2 = prompt(nombre2 + " Elije tu mano: piedra, papel o tijera?");
 
           

     
        if(op1 === "piedra" && op2 === "papel"){
        document.write(`Felicidades ${nombre1}, has ganado con papel`)}

        else if(op1 === "piedra" && op2 === "tijera"){
        document.write(`Felicidades ${nombre1}, has ganado con piedra`)}

        else if(op1 === "piedra" && op2 === "piedra") {    
        document.write(`Ha sido un empate`)  }

        else if(op1 === "tijera" && op2 === "papel") {
        document.write(`Felicidades ${nombre1}, has ganado con tijera`) }

        else if(op1 === "tijera" && op2 === "piedra"){  
        document.write(`Felicidades ${nombre2}, has ganado con piedra`) }
 
        else if(op1 === "tijera" && op2 === "tijera"){    
        document.write("Ha sido un empate") }

       else if(op1 === "papel" && op2 === "papel"){
        document.write("Ha sido un empate")}

        else if(op1 === "papel" && op2 === "tijera"){
        document.write(`Felicidades ${nombre2}, has ganado con tijera`)}

        else if(op1 === "papel" && op2 === "piedra") {
        document.write(`Felicidades ${nombre1}, has ganado con papel`)}
    

      */

     

        /* let nombre = "Antonio";

        let apellido= "Colmenarez";

        let userPlatzi = "antonio37";

        let edad = 20 ;

        let correo = "antonio@gmail.com";

        let mayorEdad = 18;

        let dineroAhorrado = 325;

        let deudas = 127;
       

        let fullName = nombre + " " +apellido;
        
        let dineroReal = dineroAhorrado - deudas;

        function frase(nickname){ 
            document.write( `Mi nombre es ${fullName} pero prefiero que me digas ${nickname}`)
           
            
        }
         frase("Feliciano lopez")
         
         
         document.write(dineroReal) */



        /*  let tipoDeSuscripcion = "ExpertPlus";

         if(tipoDeSuscripcion === "Free"){
             document.write("Solo puedes tomar cursos gratis")
         }
         else if(tipoDeSuscripcion === "Basic"){
             document.write("Puedes tomar casi todos los cursos de Platzi durante un mes")
         }
        else if(tipoDeSuscripcion === "Expert"){
             document.write("Puedes tomar casi todos los cursos de Platzi durante un año")
         }
         else if(tipoDeSuscripcion==="ExpertPlus"){
             document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
         } */



        /*  let propuesta=prompt("¿Cuanto es 2 + 2?")

         if(propuesta == "4"){
             document.write("Felicidades amigo eres un webo pelado en esto del bigboss")
         }
         else{
             document.write("Eres una mierda, vuelvelo a hacer maldito hijo de perra")
         } */

      /*    for (let i = 0; i < 5; i++) {
            console.log("El valor de i es: " + i);
        } */

         
/* let i = 0;
         while(i < 5){
             
             let sumar = i++;
             console.log("el valor de i es : " + i)

         } */

         
                 /*  for (let i = 10; i >= 2; i--) {
                     console.log("El valor de i es: " + i);
                 }

 */


        let i = 10

         while(i>2){
             const restar = i--;
             console.log("el valor de i es :" + i)
         }
