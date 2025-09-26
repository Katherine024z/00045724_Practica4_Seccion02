# 00045724_Practica4_Seccion02
 ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto? 
Para el caso de las operaciones basicas, JavaScript es un lenguaje de tipado dinámico que reconoce automáticamente el tipo de dato numérico y ejecuta estas operaciones según las reglas matemáticas estándar; los operadores están definidos en el lenguaje y tienen comportamientos específicos bien establecidos. 
Para el caso de la suma y concatenación el operador "+" funciona como suma o concatenación dependiendo del tipo de los operandos (si son numeros se suman y si son string se concatenan, pero también se pueden dar casos que al convertir un string "a" a numero se forme: NaN). 
Para la precedencia de operadores, JavaScript define la precedencia de cada operador: para la aritmetica el orden es de izquierda a derecha y para la exponenciación va de derecha a izquierda siempre teniendo prioridad los paréntesis.


 ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo? 
Si, tiene un comportamiento similar pero presenta algunas diferencias como por ejemplo las condiciones evalúan la "verdad" o "falsedad" de un valor (truthy o falsy), no solo true o false; permite comparar == y === (este ultimo presenta un control mas estricto); las variables declaradas con var se elevan (hoisting) lo que puede generar comportamientos inesperados pero se solucionan parcialmente usando let y const y se pueden usar funciones como valores de retorno para condiciones.
