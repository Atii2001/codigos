//TIPOS DE DATOS
-boolean: puede ser true o false
-string: es una secuencia de caracteres que representan texto, va entre comillas
-number: son numeros (los numeros con coma se hacen con punto ".")
-arrays: refiere a una estructura de datos que se utiliza para almacenar
una colección de elementos en una sola variable.
-objetos:Los objetos son una colección de propiedades y métodos que representan una entidad
o concepto del mundo real.los objetos se crean utilizando llaves "{}" y las propiedades se definen en
formato de clave-valor separados por comas. por ej:
var persona = {
    nombre: "Matias",
    edad: 24,
    nacionalidad: "Argentina"
}
concatenar: junta 2 tipos de datos, ya sea texto con texto, texto con num, etc
undifined: es cuando una variable no esta con ningun valor asignado
null: indica que la variable tiene un valor, pero esta vacio

//VARIABLES
las variables se dividen entre let y const

-LET: Se utiliza para declarar una variable con alcance de bloque. Una
variable declarada con let sólo puede ser accedida dentro del bloque en el que se declaró.

-CONST: Es una palabra clave que se utiliza para declarar una variable con un valor constante.
Una vez que se ha asignado un valor a una variable declarada con const, ese valor no
puede ser reasignado.

La elección entre let y const depende de si se necesita o no que el valor de una variable
sea modificable. En general, se recomienda utilizar const siempre que sea posible, ya
que promueve la inmutabilidad y hace que el código sea más seguro y fácil de
entender y mantener. Solo se debe utilizar let cuando se necesite que el valor de una
variable pueda cambiar.

//OPERADORES ARITMETICOS

SUMA: +
RESTA: -
MULTIPLICACION: *
DIVISION: /
RESTO: %
INCREMENTO: ++ (incrementa el valor de una variable en 1)
DECREMENTO: -- (disminuir el valor de una variable en 1)

//OPERADORES DE ASIGNACION

ASIGNACION: = (asignar valor a una variable)
ASGINACION CON SUMA: += (se utiliza para sumar un valor a una variable y asignar el resultado a la misma variable)
ASIGNACION CON RESTA: -= (se utiliza para restar un valor a una variable y asignar el resultado a la misma variable)
ASIGNACION CON MULTIPLICACION: *=
ASIGNACION CON DIVISION: /=
ASIGNACION CON RESTO: %=

//OPERADORES COMPARATIVOS

IGUALDAD: ==
IGUALDAD ESTRICTA: ===
DESIGUALDAD: !=
DESIGUALDAD ESTRICTA: !==
MAYOR QUE: mayor>menor
MENOR QUE: menor<mayor
MAYOR O IGUAL QUE mayor>= menor
MENOR O IGUAL QUE menor<= mayor

//OPERADORES LOGICOS

AND: &&  (Se utiliza para comprobar si dos condiciones son verdaderas. El resultado de la operación
          AND es verdadero sólo si ambas condiciones son verdaderas.) 
          POR EJEMPLO:
const num1 = 2;
cont num2 = 4; 
console.log(num1 > 0 && num2 >0) //true y true = true
console.log(num1 < 0 && num2 >0) // false y true = false
console.log(num1 > 0 && num2 <0) // true y false = false
console.log(num1 < 0 && num2 <0) // false y false = false

OR:|| (Se utiliza para comprobar si al menos una de las dos condiciones es verdadera. El
    resultado de la operación OR es verdadero si alguna de las dos condiciones es
    verdadera.)
    POR EJEMPLO:
console.log(num1 > 0 && num2 >0) //true y true = true
console.log(num1 < 0 && num2 >0) // false y true = true
console.log(num1 > 0 && num2 <0) // true y false = true
console.log(num1 < 0 && num2 <0) // false y false = false

NOT: ! (Se utiliza para invertir el valor de una expresión booleana. El resultado de la operación
    NOT es verdadero si la expresión booleana es falsa, y falso si la expresión booleana es
    verdadera.)
const num = 2;
console.log( !(num > 0)) // num es mayor que 0 y es true, pero al estar ! pasa a ser false
console.log( !(num < 0)) // num es mayor que 0 y es false, pero al estar ! pasa a ser true


//ESTRUCTURA IF
La estructura if en JavaScript es una sentencia condicional que permite ejecutar un
bloque de código si se cumple una determinada condición. Su sintaxis es la siguiente:

if (condicion){
    codigo que se ejecuta si la condicion es true
}

En la línea del if, se evalúa la condición entre paréntesis. Si esta condición es verdadera, se
ejecuta el bloque de código que se encuentra dentro de las llaves {} que le siguen.

let num = 5;
if (num > 0) {
    console.log("el numero es mayor que 0") // como es true, se va a ejecutar el console.log
} 

//ESTRUCTURA IF-ELSE
Nos permite definir un bloque de código alternativo que se ejecutará en caso de que la condición evaluada
en el if sea falsa.

if (condicion){
    codigo que se ejecuta si la condicion es true
} else{
    codigo que se ejecuta si la condicion es false
}

Si la condición es falsa, se ejecuta el bloque de código que se encuentra dentro de las llaves {}
que siguen a la palabra else.

let numero = -2
if (numero > 0 ){
    console.log("el numero es mayor a 0") // al no ser mayor que 0 no se ejecuta
} else{
    console.log("el numero es menor a 0")  // al ser menor 0 se ejecuta el else
}

//ESTRUCTURA SWITCH
se utiliza cuando se necesitan múltiples condiciones para evaluar una variable o expresión. Esta
estructura toma una expresión como entrada y la compara con diferentes casos. Si la
expresión coincide con un caso específico, se ejecuta el código asociado a ese caso.
Es importante destacar que la instrucción break se utiliza para salir del switch una vez
que se ha encontrado una coincidencia. Si no se utiliza la instrucción break, el switch
seguirá ejecutando el código de todos los casos siguientes, incluso si no se cumplen las
condiciones.
La cláusula default es opcional y se ejecuta si la expresión no coincide con ninguno de
los casos anteriores.

switch (expresion) {
    case valor1:
        // codigo a ejecutar si la expresion es igual a valor
        break;
    case valor2:
        //codigo a ejecutar si la expresion es igual a valor2
        break;
    default:
        //codigo a ejecutar su la expresion no coincide con ninguno de los casos
        break;


//CICLOS
La estrucuras de ciclos o ciclicas son las que debemos utilizar cuando
necesitamos repetir ciertas operaciones de la misma manera durante X cantidad de veces
Para ello usaremos las estructuras for y while

//ESTRUCTURA FOR
FOR: crea un bucle que consiste en tres expresiones opcionales, 
encerradas en parentesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle
ej:

desde: es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclos
hasta: es el unico elemento que decide si se repite o se detiene el ciclos
actualizacion: es el nuevo valor que se asigna despiues de cadaa repeticion a las variables que controlan la repeticion
for (desde; hasta; actualizacion){
    // lo que escriba aca se ejecutara mientras  dure el ciclo
}

por ej:

for (let kilometros = 0; kilometros <= 100; kilometros += 1) {
    console.log(kilometros);
}

Cuando se utiliza break dentro de un ciclo, se detiene la iteración actual y el control del
programa sale del ciclo. De esta manera, se evita que el ciclo siga ejecutándose cuando ya
no es necesario.
por ejemplo:

for (let kilometros = 0; kilometros <= 100; kilometros += 1) {
    if (kilometros == 10){
        break      // osea cuando la secuencia llega a 10 se corta el bucle, no sigue hasta 100
    }
}

a veces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion,
el ciclo saltee esa repeticion y siga la proxima, para eso se utiliza el continue
por ej:

for (let kilometros = 0; kilometros <= 100; kilometros += 1) {
    if (kilometros == 5) {
        continue;  // osea se saltea el 5 y sigue hasta el 10 (quedaria 1,2,3,4,6,7,8,9,10)
    }
    if (kilometros == 10){
        break
    }
}

// ESTRUCTURA FOR OF
es una forma de recorrer y obtener los valores de un objeto iterable, como un array.
for (variable of iterable){
    //codigo a ejecutar
}
Donde "variable" es una variable que se utiliza para almacenar el valor de cada elemento
del iterable y "iterable" es el objeto iterable que se desea recorrer.

Si se desea recorrer un arreglo de números y mostrarlos por consola, se
puede utilizar la estructura for...of de la siguiente manera:

const = numeros [1. 2, 3, 4, 5];
for ( let numero of numeros){  //ahora cada elemento del array numeros tiene el valor de numero
    console.log(numero);
}
En este ejemplo, se declara un arreglo llamado "números" y se utiliza la estructura for...of
para recorrerlo. En cada iteración, se asigna el valor de cada elemento del arreglo a la
variable "numero"

//ESTRUCTURA WHILE
Esta estructura permite ejecutar un bloque de código repetidamente mientras se cumpla
una determinada condición.

while (condition) {
    // codigo a ejecutar
}

En primer lugar, se especifica una condición que se evalúa antes de ejecutar el bloque de
código. Si la condición es verdadera, el código dentro del bloque se ejecutará. Después de
que el bloque se ejecute, la condición se evaluará nuevamente. Si la condición sigue
siendo verdadera, el bloque se ejecutará nuevamente. Este proceso se repetirá hasta que
la condición se evalúe como falsa. Es importante tener en cuenta que si la condición nunca se evalúa como falsa, la
estructura while entrará en un ciclo infinito y el bloque de código se ejecutará
continuamente.

let kilometros = 5;
while (kilometros<= 5) {
    console.log (kilometros);
    kilometros ++1;
}

En este ejemplo, la variable kilometros se inicializa en 1. La condición especifica que el bloque de
código se debe ejecutar mientras kilometros sea menor o igual a 5. Dentro del bloque, se imprime el
valor actual de kilometros y se incrementa en 1. Este proceso se repite hasta que kilometros sea igual a 6,
momento en el que la condición se evalúa como falsa y el ciclo while termina.

// ESTRUCTURA DO WHILE
La diferencia principal es que en la estructura do...while, el
cuerpo del ciclo se ejecuta al menos una vez antes de que se evalúe la condición de
salida.
El ciclo comienza con la palabra clave do, seguida del cuerpo del ciclo encerrado entre
llaves. Después del cuerpo del ciclo, se encuentra la palabra clave while, seguida de una
condición entre paréntesis.
do{
    // codigo a ejecutar
} while (condicion);

POR EJ:

do {
    if (kilometros == 0){
        break;
    }
    console,log (kilometros);
    kilometros += 1;
} while (kilometros <= 100);


// ARRAY
es un tipo de objeto que permite almacenar una colección de elementos, ya sean números, strings, booleanos, objetos u
otros arrays . VAN ENTRE CORCHETES, SEPARADOS POR UNA COMA.
Los elementos en un array se almacenan en posiciones numeradas, llamadas índices, comenzando desde el índice 0.
Para llamar algun elemento del array se tiene que poner su numero de indice tambien entre corchetes.
por ej:
let usuario = ["matias", 24 , "argentina"];
console.log (usuario[0]); // imprime matias
console.log (usuario[1]); // imprime 24

Tambien podria agregar elementos a un array de la siguiente forma:

let usuario = ["matias", 24 , "argentina"];
usuario [3] = "buenos aires"  // el array pasaria a mostrarse asi: ["matias", 24 , "argentina", "buenos aires"]

Y si quiero reempazar algun elemento del array por otro seria de la siguienta forma:

let usuario = ["matias", 24 , "argentina"];
usuario [2] = "buenos aires"     // el array pasaria a mostrarse asi: ["matias", 24 , "buenos aires"]


Tambien se pueden hacer arrays dentro de otros arrays, por ej;

let tareas = [
    ["titulo1", "descripcion1", 1];
    ["titulo2", "descripcion2", 2];
    ["titulo3", "descripcion3", 3];
];
consolelog(tareas) // mostraria (3) [array(3)], [array(3)], [array(3)], 1 array q tiene 3 arrays y cada array tiene 3 arrays

Y para llamar algun elemento hay q poner 2 indices en corchetes
console.log tareas [0][0] // imprime titulo1
console.log tareas [0][2] // imrpime 1
console.log tareas [2][1] // imrpime descripcion3


//CLOSURES

Es una función que puede acceder y recordar variables declaradas en su ámbito léxico (entorno en el que se define la función), incluso después
de que la función haya sido cerrada o finalizada. Esto significa que la función puede recordar y acceder a variables 
que se encontraban en el ámbito léxico en el momento de su definición, incluso si la función es invocada en un ámbito diferente. por ej:

const contador = () => {
    let count = 0;
    return function() {
        count++;
        console.log(count);   
    }
}
const incrementar = contador();

incrementar(); // 1
incrementar(); // 2
incrementar(); // 3

En este ejemplo, la función contador devuelve otra función que incrementa y muestra
un contador cada vez que se invoca. La variable count es una variable privada que sólo
es accesible desde la función anidada que devuelve contador(). La variable incrementar
es una referencia a esta función anidada, y cada vez que se llama a incrementar(), se
incrementa la variable count y se muestra el contador actual.

//OBJETOS

objeto es una colección de datos relacionados y/o funcionalidades , que generalmente consta de variables y funciones, denominadas
propiedades y métodos cuando están dentro de objetos.
Una propiedad es un atributo de un objeto que contiene un valor. Este valor puede ser cualquier tipo de dato
de los que ya hemos visto en clases anteriores.
Cada una de estas combinaciones de propiedad y valor debe estar separada de las otras mediante el uso de una coma
luego de la definición de cada una de ellas.

-ACCEDER Y AGREGAR PROPIEDADES:

Para acceder a las propiedades de un objeto, podemos utilizar o bien la notación de puntos o la de corchetes. POR EJ:

let persona = {
    nombre: "Carlos",
    edad: 33
}
console.log(persona.nombre); // opcion notacion de punto (mas facil)
console.log(persona["edad"]); // opcion corchetes

También podemos utilizar estas notaciones para agregar nuevas propiedades a nuestros
objetos. por ej:

let persona = {
    nombre: "Carlos",
    edad: 33
}

persona.apodo = "Charly"
persona["club"] = "Independiente"

-METODOS DE LOS OBJETOS:

son funciones que están definidas como propiedades de un objeto y que pueden ser llamadas para realizar acciones en ese objeto.

this:se refiere al objeto actual en el que se está ejecutando un código en un determinado momento.
Cuando se utiliza "this" dentro de un objeto, se refiere al propio objeto. Por ejemplo, si
tenemos un objeto "persona" con una propiedad "nombre", podemos utilizar
"this.nombre" dentro de un método para hacer referencia al valor de la propiedad
"nombre" del objeto "persona". por ej:

let persona = {
    nombre: "Carlos",
    apellido: "Perez",
    imprimirNombre: function() {
        console.log('${this.nombre}  ${this.apellido}'); // el this hace referencia a persona
    }
};
persona.imprimirNombre(); // imprime: "Carlos Perez"

Object.entries: Es un método que devuelve un array de arrays con las propiedades y valores del
objeto. Cada array dentro del array resultante contiene dos elementos: la propiedad y su
valor. Por ejemplo:

let entradas = Object.entries(persona);

console.log(entradas); // imprime: [["nombre", "Carlos"], ["apellido", "Perez"], ["edad", 33]]

Object.values: Es un método que devuelve un array con los valores de las propiedades del objeto. Por
ejemplo, si tenemos el mismo objeto "persona" del ejemplo anterior, podemos utilizar
Object.values() para obtener un array con los valores de sus propiedades

let valores = Object.values(persona);
console.log(valores); // ["Carlos", "Perez", 30]

Object.keys: Es un método que devuelve un array con las propiedades del objeto. Por ejemplo, si
tenemos un objeto "persona" con las propiedades "nombre", "apellido".

let propiedades = Object.keys(persona);
console.log(propiedades); // imprime: ["nombre", "apellido", "edad"]

-OPERADOR SPREAD: también conocido como operador de propagación, es un operador
que se utiliza en JavaScript para expandir elementos de un array o propiedades de un
objeto. En el contexto de arrays, el operador spread se utiliza para crear una copia de un array
existente y nos da la posibilidad de agregar también nuevos elementos a la copia. Por
ejemplo:

let numeros1 = [1, 2, 3];
let numeros2 = [...numeros1, 4, 5];

console.log(numeros2); //imprime [1, 2, 3, 4, 5]

En el contexto de objetos, el operador spread se utiliza para crear una copia de un objeto
existente y agregar nuevas propiedades a la copia. Por ejemplo:

let persona1 = { nombre: "Juan", edad: 30};
let persona2 = {...persona1, ciudad: "Buenos Aires"};

console.log(persona2); //imprime: { nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}

El operador spread en JavaScript no solo puede utilizarse para expandir elementos de un
array o propiedades de un objeto, sino también para combinar objetos y arrays.

let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let numeros3 = [7, 8, 9];

let todosLosNumeros = [...numeros1, ...numeros2, ...numeros3]
console.log(todosLosNumeros); //imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9]

En el caso de objetos, el operador spread se utiliza para combinar dos o más objetos en
uno solo. Por ejemplo:

let persona = {nombre: "Juan", edad: 30};
let direccion = {calle: "Av. Rivadavia", numero: 1234};

let perfil = {...persona, direccion};
console.log(perfil); // imprime: {nombre: "Juan", edad: 30, calle: "Av. Rivadavia", numero: 1234}

OPERADOR REST: se utiliza para representar un número
indefinido de argumentos como un array. Esto se utiliza comúnmente en la definición
de funciones para aceptar un número variable de argumentos. El operador rest se denota con tres puntos (...)
seguido de un nombre de variable que será un array que contiene los argumentos restantes.


DESESTRUCTURACION: permite asignar valores de arrays o objetos a variables individuales de manera sencilla y concisa.
Esta característica es muy útil en situaciones en las que se desea extraer información específica
de un objeto o array sin necesidad de acceder a las propiedades o elementos individualmente.

let numeros = [1, 2, 3];
let [primerNumero, segundoNumero, tercerNumero] = numeros;

console.log(primerNumero); //imprime 1
console.log(segundoNumero); //imprime 2
console.log(tercerNumero); //imprime 3

En este ejemplo, se asignan los valores individuales del array "numeros" a las variables
"primerNumero", "segundoNumero" y "tercerNumero" utilizando la sintaxis de
desestructuración de arrays.

Si queremos extraer valores de un objeto, podemos hacerlo de la siguiente manera:

let persona = {nombre: "Juan", edad: 30 };
let { nombre, edad } = persona;

console.log(nombre); // imprime "Juan"
console.log(edad); // imprime: 30

En este ejemplo, se asignan los valores de las propiedades "nombre" y "edad" del objeto
"persona" a las variables del mismo nombre utilizando la sintaxis de desestructuración de
objetos.

// METODOS DE STRING

lenght: es una propiedad que se utiliza para obtener la longitud de una cadena de texto.
Esta propiedad devuelve un número que representa la cantidad de caracteres que hay en la cadena.
por ej:
let cadena = "Hola, mundo!";
let longitud = cadena.lenght;
console.log(longitud); // imprime 12 (los espacios y signos cuentan como 1 espacio)

El método length es muy útil en situaciones en las que se necesita saber la cantidad de caracteres de una cadena de texto,
por ejemplo, para validar una entrada de usuario en un formulario o para generar un documento HTML.

toUpperCase(): se utiliza para convertir todos los caracteres de una cadena de texto a letras mayúsculas. Este método devuelve una
nueva cadena de texto en la que todos los caracteres se han convertido a mayúsculas.
por ej: 

let cadena = "hola, mundo!";
let mayusculas = cadena.toUpperCase();
console.log(mayusculas); // imprime: HOLA,MUNDO!

toLowerCase(): se utiliza para convertir todos los caracteres de una cadena de texto a letras minúsculas. Este método devuelve una
nueva cadena de texto en la que todos los caracteres se han convertido a minúsculas.
por ej:

let cadena = "HOLA, MUNDO!";
let minusculas = cadena.toLowerCase();
console.log(minusculas); // imprime: hola, mundo!


replace(): se utiliza para reemplazar la primera ocurrencia de una subcadena dentro de una cadena de texto con otra subcadena.
Este método devuelve una nueva cadena de texto con el reemplazo realizado.
por ej:

let cadena = "Hola, mundo!";
let nuevaCadena = cadena.replace("mundo", "amigo");
console.log(nuevaCadena); // imrpime: Hola, amigo!


replaceAll(): se utiliza para reemplazar todas las ocurrencias de una subcadena dentro de una cadena de texto con otra subcadena. A
diferencia del método replace(), que solo reemplaza la primera ocurrencia de la subcadena, replaceAll() reemplaza todas las ocurrencias.
por ej: 

let cadena = "Hola mundo, Hola amigos";
let nuevaCadena = cadena.replaceAll("Hola", "Hello");
console.log(nuevaCadena); // imprime: "Hello mundo, Hello amigos"

indexOf(): se utiliza para encontrar el índice de la primera ocurrencia de una subcadena
dentro de una cadena de texto. Si la subcadena no se encuentra en la cadena de texto, el método devuelve -1.
por ej:

let cadena = "Hola, mundo!";
let indice = cadena.indexOf("mundo");
console.log(indice); // imprime: 6 (la palabra mundo empieza en el 6, empezando desde 0)
let indice = cadena.indexOf("Hola",5); // eso es para preguntar si dsp del lugar 5 se encuentra la palabra
console.log(indice); // imprime: -1 (no existe la palabra luego del parametro marcado (5))

trim(): se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto. Los espacios en blanco incluyen los
caracteres de espacio, tabulación, salto de línea y retorno de carro.
por ej:

let cadena = "    Hola, mundo!   ";
let nuevaCadena = cadena.trim();
console.log(nuevaCadena); // imprime: "Hola, mundo!" (el espacio del medio queda porque solo elimina los del inicio y los del final)

split(): se utiliza para dividir una cadena de texto en un array de subcadenas, utilizando un separador especificado como argumento. El
separador puede ser un carácter, una cadena de texto o una expresión regular.
por ej:

let cadena = "Hola-mundo-!";
let subcadenas = cadena.split("-");
console.log(subcadenas); //imprime: ["Hola", "mundo", "!"]

repeat():se utiliza para repetir una cadena de texto un número determinado de veces, especificado como argumento.
por ej:

let cadena = "Hola";
let subcadenas = cadena.repeat(3); // poner entre () la cantidad que quiero que repita
console.log(subcadenas); // imprime: "HolaHolaHola"


charAt(): se utiliza para obtener el carácter de una cadena de texto en una posición específica,
especificada como argumento. El índice de la posición comienza en cero.

let cadena = "Hola";
let caracter = cadena.charAt(1); // poner entre () el caracter desde 0 q quiero que devuelva
console.log(caracter); // imprime: o (el 1 pertenece a o)

concat(): se utiliza para concatenar dos o más cadenas de texto
y devolver una nueva cadena resultante de la unión de las cadenas especificadas como argumento.
por ej: 

let cadena1 = "Hola";
let cadena2 = "mundo";
let nuevaCadena = cadena1.concat(" ", cadena2);
console.log(nuevaCadena); // imprime: "Hola mundo"


startsWith():JavaScript se utiliza para determinar si una cadena de texto comienza con el carácter o la subcadena especificada como argumento.
El método devuelve un valor booleano (verdadero o falso) que indica si la cadena de texto comienza con la subcadena especificada. 
por ej:

let cadena = "Hola mundo";
let resultado = cadena.startsWith("Hola");
console.log(resultado); // imprime true

endsWith(): se utiliza para determinar si una cadena de texto termina con el carácter o la subcadena especificada como argumento.
El método devuelve un valor booleano (verdadero o falso) que indica si la cadena de texto
termina con la subcadena especificada. por ej:

let cadena = "Hola mundo";
let resultado = cadena.endsWith("mundo");
console.log(resultado); // imprime true

includes(): se utiliza para determinar si una cadena de texto contiene una subcadena especificada como argumento. El método devuelve un
valor booleano (verdadero o falso) que indica si la cadena de texto contiene la subcadena especificada.
por ej:

let cadena = "Hola mundo";
let resultado = cadena.includes("do");
console.log(resultado); // imprime true

slice(): se utiliza para extraer una sección de una cadena de texto y devolverla como una nueva cadena. El método toma dos
argumentos opcionales que definen el inicio y el final (no incluido) de la sección a extraer.
por ej:

let cadena = "Hola mundo";
let resultado = cadena.slice(0, 4);
console.log(resultado); // imprime: "Hola" 

// METODOS DE ARRAY

length: se utiliza para obtener la longitud de un array, es decir, el número de elementos que contiene. La propiedad length es un número
entero sin signo que siempre es mayor o igual que cero. por ej:

let animales = ["gato", "perro", "tortuga"];
HTMLFormControlsCollection.log(animales.length) // imprime 3

indexOf: se utiliza para buscar un elemento en un array y devuelve el índice
de la primera ocurrencia del elemento en el array. Si el elemento no se encuentra,
devuelve -1. por ej:

let animales = ["gato", "perro", "tortuga"];
animales.indexOf("perro"); // 1
animales.indexOf("tortuga"); // 2
animales.indexOf("vaca") // -1 (no existe)

toString: se utiliza para convertir un array en una cadena de texto. por ej:

let animales = ["perro", "gato", "tortuga", 4, false]
animales.toString(); // imrpime: "perro,gato,tortuga,4,false"

Concat: se utiliza para concatenar dos o más arrays y devolver un nuevo array que contiene todos los elementos de los arrays concatenados.
por ej:

let animales = ["gato", "perro", "tortuga"];
let masanimales = ["pez", "serpiente", "caballo"];
animales.concat(masanimales); // imrpime: ["gato", "perro", "tortuga", "pez", "serpiente", "caballo"];

push: se utiliza para agregar uno o más elementos al final de un array y devuelve la nueva longitud del array. por ej:

let animales = ["gato", "perro", "tortuga"];
let caballo = "caballo";
animales.push(caballo);
console.log(animales); // imrpime: ["gato", "perro", "tortuga", "caballo"];
console.log("serpiente"); // imprime: ["gato", "perro", "tortuga", "caballo", "serpiente"];

unshift: se utiliza para agregar uno o más elementos al inicio de un array. Este método modifica el array original, aumentando su longitud y
desplazando los elementos existentes hacia la derecha. por ej:

let animales = ["gato", "perro", "tortuga"];
let caballo = "caballo";
animales.unshift(caballo);
console.log(animales); // imrpime: ["caballo", "gato", "perro", "tortuga"];
animales.unshift("serpiente");
console.log(animales); // imprime: ["caballo", "serpiente"; "gato", "perro", "tortuga"];

pop: se utiliza para eliminar el último elemento del array y lo devuelve. por ej:

let animales = ["gato", "perro", "tortuga"];
let animaleliminado = animales.pop();
console.log(animales); // imprime: ["gato", "perro"];
console.log(animaleliminado); // imprime "tortuga"

shift: se utiliza para eliminar el primer elemento del array y lo devuelve. por ej:
 
let animales = ["gato", "perro", "tortuga"];
let animaleliminado = animales.shift();
console.log(animales); // imprime: ["perro", "tortuga"];
console.log(animaleliminado); // imprime "gato"

join: se utiliza para convertir los elementos de un array en una cadena de texto y los une mediante un separador especificado. por ej:

let animales = ["gato", "perro", "tortuga"];
console.log(animales.join(" - ")); // imrpime: gato - perro - tortuga
console.log(animales.join(", ")); // imrpime: gato, perro, tortuga

reverse: se utiliza para invertir el orden de los elementos del array, es decir, el primer elemento se convierte en el último y viceversa. por ej:

let animales = ["gato", "perro", "tortuga"];
animales.reverse()
console.log(animales); // imprime: ["tortuga", "perro", "gato"];

slice: se utiliza para devolver una copia de una parte de un array dentro de un nuevo array, empezando por el valor de inicio pasado como
argumento hasta el fin (no inculido) , que puede ser o no especificado en los argumentos. Este método no modifica el array original. por ej:

let animales = ["gato", "perro", "tortuga", "caballo", "serpiente"];
console.log(animales.slice(1,3)); // imprime ["perro", "caballo"]
console.log(animales.slice(2)); // imprime: ["tortuga", "caballo", "serpiente"]

// METODOS DE ARRAY CON CALLBACKS

Los métodos de array con callback son funciones que se utilizan en JavaScript para manipular y
transformar elementos de un array utilizando una función de retorno (callback).
Estos métodos son útiles para realizar operaciones complejas y sofisticadas en arrays,
y pueden ser utilizados en situaciones donde es necesario procesar grandes cantidades de datos.
Estas funciones son conocidas como high order functions, que son funciones que aceptan una o más funciones como argumentos
o evuelven una función como resultado.

forEach: se utiliza para iterar a través de los elementos de un array y ejecutar una función para cada uno de ellos.
Es una forma sencilla de recorrer un array sin necesidad de utilizar un bucle for o while. por ej:

const numeros = [1, 2, 3];

numeros.forEach((numero) => {
    console.log('Hola, soy el numero ${numero}');
})
 /*   Esto imprime:
 Hola, soy el numero 1
 Hola, soy el numero 2
 Hola, soy el numero 3  */

 map: map() se utiliza para transformar un array en otro array con la misma longitud,
aplicando una función de transformación a cada elemento del array original. Este método no modifica el array original, retorna uno nuevo. por ej:

const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map((numero) => numero * 2);
console.log(numeros); // imprime: [1, 2, 3, 4, 5]
console.log(duplicados); // imprime: [2, 4, 6, 8, 10]

Si bien el método forEach() y el método map() pueden parecer bastante similares a
primera vista, tienen una diferencia fundamental:
- El método map() RETORNA un nuevo array en base al array sobre el que se uso el
método, modificado según lo pedido en la función de callback.
- El método forEach() NO RETORNA NADA. Ejecuta las acciones que se pasan en la
función de callback y nada más.


filter: se utiliza para crear un nuevo array a partir de un array existente,
filtrando los elementos que cumplen una determinada condición. No modifica el array
original, retorna uno nuevo. por ej:

const numeros = [1, 2, 3, 4, 5];
const numerospares = numeros.filter((numero) => numero % === 0);
// recorre el array y devuelve solo los numeros pares que cumplen la condicion de filtro retornada en la funcion callback
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerospares); // [2, 4]

find: se utiliza para buscar el primer elemento dentro de un array que cumpla con una condición dada, y devuelve dicho elemento.
Si no se encuentra ningún elemento que cumpla la condición, el método devuelve undefined. por ej:

const numeros = [1, 2, 3, 4, 5];
const PrimerNumeroPar = numeros.filter((numero) => numero % === 0);
// recorre el array hasta que encuentra un elemento que cumpla la condicion
console.log(PrimerNumeroPar); // imprime 2
const PrimerNumeroMayorA10 = numeros.find((numero) => numero > 10);
// si no encuentra ningun elemento que cumpla la condicion, devuelve undefined
console.log(PrimerNumeroMayorA10); // undefined (no hay numeros mayor a 10)

every: se utiliza para determinar si todos los elementos de un array
cumplen con una condición determinada. Devuelve un valor booleano: true si todos los
elementos cumplen la condición, false en caso contrario. por ej:

const numeros = [1, 2, 3, 4, 5];
numeros.every((numero) => numero > 0);
// retornara true (todos los valores son mayores a 0)
numeros.every((numero) => numero > 2);
// retornara false (no todos los numeros son mayores a 2)

some: se utiliza para determinar si alguno de los elementos de un array
cumple con una condición determinada. Devuelve un valor booleano: true si al menos
un elemento cumple la condición, false en caso contrario. por ej:

const numeros = [1, 2, 3, 4, 5];
numeros.some((numero) => numero > 3);
// retornara true (al menos 1 valor es mayor a 3)
numeros.some((numero) => numero > 6);
// retornara false (ni siquiera un valor es mayor a 6)

sort: se utiliza para ordenar los elementos de un array. Este método cambia
el orden de los elementos en el array original y devuelve el array ordenado.
(NO SE EXPLICO NI DIO EJEMPLOS TODAVIA)

reduce: se utiliza para reducir un array a un único valor. Permite ejecutar una
función reductora sobre cada elemento del array y acumular el resultado en una variable.


//INTRODUCCION AL DOM

//DOM
El Document Object Model (DOM) es una estructura de objetos que representa el
contenido de un documento HTML o XML en un navegador web. El DOM es generado
automáticamente por el navegador web cuando carga una página web.
El DOM se compone de una jerarquía de nodos, donde cada nodo representa un
elemento, un atributo, un comentario o un texto dentro del documento. Estos nodos
están organizados en una estructura de árbol, donde los nodos más altos en la jerarquía
representan el documento en su conjunto, mientras que los nodos más bajos representan
los elementos individuales que forman parte del documento.
El DOM es importante porque permite a los desarrolladores web interactuar con la
página web en tiempo real.


//NODOS

Un nodo, como veníamos viendo, es un objeto que representa un elemento, atributo,
texto o comentario en la estructura de una página web. Cada nodo en el árbol del DOM
tiene una serie de propiedades y métodos que los desarrolladores pueden utilizar para
interactuar con el contenido de la página web.
Hay varios tipos de nodos en el DOM, cada uno de los cuales tiene sus propias
propiedades y métodos. Veamos cuales son los más importantes:

-WINDOW:El nodo "window" es un objeto especial en el Document Object Model (DOM) que
representa la ventana del navegador. En otras palabras, es un objeto que representa
toda la ventana del navegador que está mostrando la página web.
Este Nodo posee una serie de propiedades y métodos que permiten a los
desarrolladores interactuar con la ventana del navegador. Algunas de las propiedades y
métodos más comunes del nodo "window" son las siguientes:
location: esta propiedad se refiere al objeto "location" del DOM, que representa la URL
actual de la página web cargada en la ventana del navegador.
alert(): este método muestra una ventana emergente con un mensaje de alerta.
confirm(): este método muestra una ventana emergente con un mensaje de
confirmación y botones para que el usuario seleccione una opción.
prompt(): este método muestra una ventana emergente con un mensaje y un campo de
entrada donde el usuario puede ingresar texto.
setTimeout(): este método permite a los desarrolladores ejecutar una función después de
un cierto tiempo.
setInterval(): este método permite a los desarrolladores ejecutar una función
repetidamente después de un cierto tiempo.
Además de estas propiedades y métodos, el nodo "window" también tiene otras
propiedades y métodos que permiten a los desarrolladores interactuar con la ventana del
navegador. Por ejemplo, los desarrolladores pueden abrir nuevas ventanas emergentes
con el método window.open(), cerrar ventanas con el método window.close(), y redirigir
a los usuarios a otras páginas web con el método window.location.href.

-DOCUMENT: El nodo "document" es un objeto especial en el Document Object Model (DOM) que
representa el documento HTML cargado en la ventana del navegador. El nodo
"document" es el nodo raíz del DOM y contiene todos los demás nodos del DOM.

-ELEMENT: El nodo "element" es uno de los tipos de nodos que se pueden encontrar en el Document
Object Model (DOM). Representa un elemento HTML en el documento y se utiliza para
interactuar con el contenido y la apariencia de dicho elemento.
Cada elemento HTML en el documento se representa como un nodo "element" en el
DOM, y estos nodos pueden tener una serie de atributos y propiedades que se pueden
utilizar para manipular el contenido y la apariencia de dicho elemento.

-ATRIBUTO(ATTR): El nodo "Attr" es un tipo de nodo que se encuentra en el Document Object Model (DOM) y
representa un atributo de un elemento HTML en el documento. Cada vez que se
establece un atributo en un elemento HTML, se crea un nodo "Attr" en el DOM que
representa ese atributo.
El nodo "Attr" tiene dos propiedades principales: "name" y "value". La propiedad "name"
representa el nombre del atributo y la propiedad "value" representa el valor del atributo.
Los métodos más relevantes para trabajar los atributos son:
getAttribute() , que nos permite obtener el valor de un atributo
setAttribute(), que nos permite agregar un atributo a un elemento.

-TEXT: El nodo "Text" del DOM representa el contenido de texto dentro de un elemento HTML.
Cada vez que hay texto dentro de un elemento HTML, como por ejemplo un párrafo (<p>),
un encabezado (<h1>, <h2>, etc.), una lista (<ul>, <ol>, etc.), un botón (<>), o
cualquier otro elemento HTML que pueda contener texto, este texto se convierte en un
nodo "Text" del DOM.

-COMMENT: El nodo "Comment" del DOM representa un comentario HTML. Un comentario HTML es
un fragmento de texto que se utiliza para agregar notas o comentarios dentro del código
HTML, pero que no se mostrarán en el navegador web. Los comentarios en HTML se
escriben entre los caracteres <!-- y -->.                                                                                                                                                                                </>//</ol>//</ul>//</h2>//</h1>//</p>



// CAPTURAR ELEMENTOS DE UN DOM

Capturar elementos del DOM significa obtener referencias a los nodos del árbol DOM
para poder manipularlos desde JavaScript. Los elementos del DOM pueden ser
etiquetas HTML, como <div>, <p>, <img>, etc., y también pueden ser nodos de texto, nodos
de comentario, etc.                                                                                                                                                   </img>//</p>

-getElementById: Este es un método del objeto document del DOM que se utiliza para obtener una
referencia a un elemento del documento HTML a través de su atributo id. Este método
es muy útil para acceder rápidamente a un elemento específico del DOM, como un botón,
un formulario, un encabezado, una imagen, etc.
El método getElementById() acepta un único parámetro, que es el valor del atributo id
del elemento que se desea obtener. El método devuelve una referencia al objeto del
elemento si existe un elemento en el documento HTML con ese id, o null si no se
encuentra ningún elemento con ese id.

-getElementByTagName: Este método del objeto document del DOM se utiliza para obtener una lista de
elementos del documento HTML que tienen un nombre de etiqueta específico.
El método getElementsByTagName() acepta un único parámetro, que es el nombre de
la etiqueta que se desea buscar en el documento HTML. El método devuelve una lista
de elementos que coinciden con el nombre de la etiqueta especificada.

-getElementByClassName: se utiliza para obtener una lista de
elementos del documento HTML que tienen una clase CSS específica. El método getElementsByClassName() acepta un único parámetro,
que es el nombre de la clase CSS que se desea buscar en el documento HTML. El método devuelve una lista de
elementos que coinciden con el nombre de la clase especificada.

-querySelector: El método querySelector() es una función del DOM que permite buscar un elemento
específico en el árbol del DOM utilizando selectores CSS. Este método devuelve el
primer elemento que coincide con el selector especificado.

-querySelectorAll: El método querySelectorAll() es una función del DOM que permite buscar todos los
elementos que coinciden con un selector CSS determinado en el árbol del DOM. A
diferencia del método querySelector(), este método devuelve una lista de nodos que
cumplen con los criterios de selección.

// HTML COLLECTION

Una HTMLCollection es un objeto del DOM que representa una colección de elementos
HTML que han sido seleccionados a través de un método específico del DOM.
Una HTMLCollection se asemeja a un array en su estructura, ya que los elementos de la
colección se almacenan en un orden numérico. Sin embargo, a diferencia de un array, no
se pueden utilizar la gran mayoría de los métodos de array más importantes para
manipular una HTMLCollection, como reduce(), filter(), map(), etc.
No obstante, se pueden utilizar algunos métodos de los arrays con una HTMLCollection si
se convierte primero en un array. Esto se puede hacer utilizando el método Array.from o
utilizando el operador de propagación.
Es importante destacar que una HTMLCollection es "viva", es decir, que los cambios
realizados en el DOM se reflejan automáticamente en la colección. Esto significa que si
se agrega un nuevo elemento que coincide con la selección de la HTMLCollection, este
elemento se agregará automáticamente a la colección.

//NODELIST

Una NodeList es un objeto que representa una lista de nodos del DOM que se pueden
obtener a través de diferentes métodos, como querySelectorAll(). Es similar a una
HTMLCollection, pero a diferencia de esta última, una NodeList puede contener cualquier
tipo de nodo, no solo elementos HTML.
A diferencia de una HTMLCollection, que se actualiza dinámicamente en función de los
cambios en el DOM, una NodeList es estática y no se actualiza automáticamente. Sin
embargo, se puede actualizar manualmente llamando a la función que la creó.
Tal como con las HTMLCollection se asemeja a un array en su estructura, pero no se
pueden utilizar la gran mayoría de los métodos de array más importantes para manipular
una HTMLCollection, como reduce(), filter(), map(), etc.
No obstante, se pueden utilizar algunos métodos de los arrays con un Nodelist si se
convierte primero en un array. Esto se puede hacer utilizando el método Array.from o
utilizando el operador de propagación.  



// EVENTOS DEL DOM

Los eventos en el DOM son acciones que ocurren en un elemento HTML y que pueden
ser detectadas por el navegador y por tanto, por el código JavaScript que se está
ejecutando en la página.

-addEventListener:Para detectar un evento del DOM, se utiliza el método addEventListener() en el elemento
HTML que se desea observar. Funciona como un “escuchador” de eventos. Este método
recibe dos parámetros: el nombre del evento a observar y la función que se ejecutará
cuando ocurra el evento.

//TIPOS DE EVENTOS

-blur:El evento blur es un evento del DOM que se dispara cuando un elemento pierde el foco
o la atención del usuario. Este evento se utiliza principalmente para realizar validaciones
de formularios o para ejecutar alguna acción cuando el usuario deja de interactuar
con un elemento determinado.

-change:El evento change del DOM se dispara cuando el valor de un elemento de formulario,
como un input de tipo text, select o textarea, ha sido modificado por el usuario y se
ha perdido el enfoque en ese elemento.

-click:El evento click del DOM se desencadena cuando un elemento es presionado y luego
soltado (o "clickeado") con el botón izquierdo del mouse. Este evento es comúnmente
utilizado para realizar acciones cuando un usuario hace clic en un botón, enlace, imagen,
o cualquier otro elemento que pueda ser clickeado.

-dblClick:El evento dblclick del DOM se activa cuando el usuario hace doble clic en un elemento.
Este evento se puede asignar a cualquier elemento del DOM, como un botón, un enlace o
una imagen, entre otros.
El evento dblclick se puede agregar a un elemento usando addEventListener() y, al igual
que con otros eventos del DOM, se puede utilizar una función de devolución de llamada
para controlar lo que sucede cuando se activa el evento.

-focus:El evento focus del DOM se dispara cuando un elemento recibe el foco, es decir, se
selecciona y se hace activo para interactuar con él.
Este evento es útil para realizar acciones específicas cuando el usuario selecciona un
elemento.

-keydown:El evento keydown en el DOM se dispara cuando una tecla es presionada en un
elemento de entrada, como un input o un textarea.
Este evento devuelve información sobre la tecla presionada en forma de objeto
KeyboardEvent. Se puede acceder a la tecla presionada a través de la propiedad keyCode
o key del objeto KeyboardEvent.

-keypress:El evento keypress del DOM se activa cuando una tecla del teclado que produce un
carácter es presionada y liberada en el elemento que tiene el foco. Esto incluye letras,
números, caracteres especiales y signos de puntuación.
Este evento proporciona información sobre la tecla que se ha presionado y soltado,
así como la información sobre la tecla modificador que se ha presionado (por ejemplo,
Ctrl, Alt, Shift). El evento keypress también indica si la tecla se ha mantenido presionada o
se ha pulsado varias veces seguidas (repitiendo la acción).

-keyup:El evento keyup en el DOM se dispara cuando se suelta una tecla después de haberla
presionado. Este evento es útil para detectar cuando el usuario ha terminado de ingresar
texto o ha soltado una tecla específica.Este evento proporciona información sobre la tecla que se ha soltado, incluyendo el
código de tecla y el carácter asociado.

-submit:El evento submit del DOM se dispara cuando un formulario es enviado. Este evento se
puede utilizar para realizar algunas validaciones previas al envío del formulario, como por
ejemplo verificar que los campos estén completos correctamente.

//EVENT

las funciones que se ejecutan con los listeners recibían un parámetro “event” o “e” (Suele tener uno de esos nombres
por convención).
En los listeners de eventos del DOM, el parámetro event representa el evento que se
desencadena en el elemento objetivo (o "target") y contiene información sobre ese
evento, como el tipo de evento, el elemento objetivo y los detalles específicos del
evento en sí (por ejemplo, si se hace clic con el botón izquierdo o derecho del mouse).
El parámetro event es una instancia del objeto Event de JavaScript y proporciona una
variedad de propiedades y métodos que se pueden usar para interactuar con el evento y
manipular su comportamiento.

//TIPOS DE EVENT

-Event.Target: es una propiedad de un objeto de evento que indica el
objetivo del evento. El objetivo se refiere al elemento HTML en el que se produjo el
evento.
Por ejemplo, si se hace clic en un botón en una página web, el evento generado sería un
evento de clic y el event.target sería el elemento de botón en el que se hizo clic.
La propiedad event.target puede ser útil cuando se desea saber qué elemento específico
se activó en un evento determinado. Por ejemplo, se puede utilizar para aplicar un estilo
específico a un botón o cambiar el contenido de un elemento en respuesta a una
acción del usuario.

-Event.preventDefault:se utiliza para evitar el
comportamiento predeterminado de un evento en el navegador.
Por ejemplo, cuando un formulario se envía, la página web se actualiza automáticamente.
A veces, es posible que no deseemos que se actualice la página al enviar el formulario,
sino que queremos realizar una acción personalizada, como enviar una solicitud a un
servidor. Para hacer eso, podemos utilizar event.preventDefault() para detener la acción
predeterminada del formulario.

-Event.stopPropagation:se utiliza para detener la propagación
de eventos en el DOM. Cuando se produce un evento en un elemento, se propaga a
través de sus elementos padres en el árbol DOM, hasta que llega al objeto document. Esto
se conoce como "burbujeo de eventos" o "event bubbling".
Al llamar al método event.stopPropagation() en un manejador de eventos, se detiene la
propagación del evento a través de los elementos padres. Esto significa que el evento
no se propagará más allá del elemento actual.
Este método es útil cuando se desea evitar que un evento sea manejado por elementos
padre. Por ejemplo, si se tiene un elemento secundario dentro de un elemento padre, y se
desea que sólo el elemento secundario maneje el evento, se puede llamar a
event.stopPropagation() en el manejador de eventos del elemento secundario para
evitar que el evento sea propagado al elemento padre.


//CAMBIAR CLASES DESDE JAVASCRIPT

Podemos acceder a las clases y sus métodos utilizando la propiedad classList de los
elementos. Los métodos más comunes son add, remove y toggle.
-add: El método classList.add(clase) nos permite agregar una clase de manera dinámica a un
elemento existente en nuestro árbol de nodos.
-El método classList.remove(clase) nos permite remover una clase de manera dinámica
a un elemento existente en nuestro árbol de nodos.
-El método classList.toggle(clase) nos permite alternar la presencia de una clase de
manera dinámica en un elemento existente en nuestro árbol de nodos.
Básicamente, si la clase no existe, el método la agrega, y si la tiene, la elimina.

//CAMBIAR ATRIBUTOS DESDE JAVASCRIPT

Podemos cambiar y agregar atributos a un elemento del DOM de manera dinámica
utilizando el método setAttribute(). por ej:

const imagen = document.getElementById("imagen");
imagen.setAttribute("src", "https://linkimagen.jpg");
imagen.setAttribute("alt", "descripcion de la imagen");

Aquí podemos ver como mediante el uso del método setAttribute le estamos pasando
como primer parámetro el atributo a setear y como segundo parámetro cuál será el
valor de dicho atributo.

// JSON
JavaScript Object Notation (JSON) es un formato de intercambio de datos basado en
texto que se utiliza para transmitir datos estructurados entre un servidor y una
aplicación web.modernas. Se utiliza para enviar y recibir
datos desde y hacia un servidor, y es compatible con la mayoría de los lenguajes de
programación y plataformas.

JSON.parse(): convierte una cadena de texto que contiene datos en formato JSON y devuelve un objeto JavaScript
que representa estos datos.El formato JSON es similar a la notación literal de objetos JavaScript,
lo que hace que la conversión sea muy fácil y útil en aplicaciones web.

Por ejemplo, si tenemos la siguiente cadena de texto en formato JSON:
let jsonString = '{"name":"Jose", "age":30, "city":"Mar del Plata"}';

Podemos convertirlo en un objeto JavaScript utilizando JSON.parse() de la siguiente
manera:
let obj = JSON.parse(jsonString);

Ahora, obj es un objeto JavaScript que contiene los datos del objeto JSON original:
console.log(obj.name); // imprime: Jose
console.log(obj.age); // imprime: 30
console.log(obj.city); // imprime: Mar del Plata

JSON.stringify(): JSON.stringify() es un método de JavaScript que convierte un objeto JavaScript en una
cadena de texto en formato JSON (JavaScript Object Notation). Esta cadena de texto
JSON puede ser enviada a un servidor, almacenada en una base de datos, o utilizada para
enviar información estructurada a través de la red.
El método JSON.stringify() toma como argumento un objeto de JavaScript y devuelve
una cadena de texto JSON. Si el objeto no puede ser convertido a JSON, se lanzará una
excepción.

Supongamos que tenemos un objeto persona con las siguientes propiedades:
const persona = {
    nombre: 'Jose',
    edad: 30,
    ciudad: 'Mar del Plata',
};

Para convertir este objeto a una cadena JSON, podemos utilizar el método JSON.stringify()
de la siguiente manera:

const personaJSON = JSON.stringify(persona);
console.log(personaJSON); // imprime: '{"nombre":"Jose", "edad":30, "ciudad":"Mar del Plata"}'

// OBJETO STORAGE
El objeto storage en JavaScript se refiere a la interfaz que proporciona una forma de
almacenar y acceder a los datos en la memoria del navegador. Es una característica del
objeto global window, que tiene dos implementaciones: sessionStorage y localStorage.

-localStorage: es un objeto del navegador web que permite a los desarrolladores web
almacenar datos localmente en la máquina del usuario de manera persistente. La
información almacenada en localStorage permanece disponible incluso después de que
se cierra y se vuelve a abrir el navegador.
El objeto localStorage es una instancia de la interfaz Storage, que proporciona un
conjunto de métodos para almacenar, recuperar y eliminar datos. Los datos almacenados
en localStorage se pueden acceder mediante una clave única y se almacenan como una
cadena de texto.

-sessionStorage: es un objeto en JavaScript que permite almacenar datos en el
navegador web de forma similar al localStorage, pero la diferencia principal es que los
datos almacenados en el sessionStorage sólo están disponibles durante la sesión actual
del usuario en el navegador, y se borran automáticamente cuando se cierra la
pestaña o el navegador.
Al igual que el localStorage, el sessionStorage también usa la interfaz de almacenamiento
de clave-valor y proporciona los mismos métodos para almacenar, obtener y eliminar
datos.


//METODOS DE STORAGE
-.setitem: que permite guardar elementos en el localStorage para transformar nuestro objeto en una cadena de
texto JSON que se pueda guardar correctamente en el mismo.
-.getitem: nos sirve para traernos
elementos desde el localStorage, para convertir la cadena de texto JSON en un objeto nuevamente.
-.removeitem: borrar el elemento del localStorage.