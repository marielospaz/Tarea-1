console.log("Lista Doblemente Enlazada")
console.log("")

class Nodo
{
constructor(dato)
{
this.dato = dato
this.sgte = null
this.prev = null
}
}

class listaDobleCircular
{
constructor()
{
console.log("Se ha creado una lista doblemente enlazada circular ")

//Cabeza y la cola apunta a null
this.cabeza = null
this.cola = null
this.nodoActual = null

//longitud de la lista 
this.longitud = 0
}
}

//Metodo para insertar en la lista doble
insertar(dato)
{
let nodo = new Nodo(dato)

//Ver si es primer elemento
if (this.cabeza == null)
{
this.cabeza = nodo
this.cola = nodo

//Hacer que el siguiente y previo apunten a si mismo

nodo.sgte = nodo
nodo.prev = nodo

console.log("Se ha insertado el dato:"+dato+"como primero en la lista")
}
else
{

this.cabeza.prev = nodo
nodo.sgte = this.cabeza

nodo.prev = this.cola
this.cabeza = nodo

this.cola.sgte = nodo

console.log("Se ha insertado en la cabeza el dato: "+dato)
}
}

//Incrementar longitud
this.longitud++



insertarFinal(dato)
{

//Crear un dato con el nodo
let nodo = new Nodo(dato)

//Verificar si es el primer elemento
if (this.cabeza == null)
{
this.cabeza = nodo
this.cola = nodo

nodo.sgte = nodo
nodo.prev = nodo

console.log("Se ha insertado el dato:"+dato+"como primero en la lista")
}
else
{

//la cola siguiente apunta al nuevo nodo
this.cola.sgte = nodo

//el nuevo nodo prvio apunta a la cola
nodo.prev = this.cola

nodo.sgte = this.cabeza

this.cola = nodo

console.log("Se ha insertado en la cola el dato: "+dato)
}

this.longitud++
}

insertarPorPosicion(dato, posicion)
{
    let posicionActual = 1

    //Verificar si la posicion es correcta
    if (posicion > 0 && posicion <= this.longitud)

    //verificar si es la posicion 1
    if (posicion==1)
    {
        this.insertar(dato)
    }
    else
    {
let nodo = new Nodo(dato)

if (posicion == this.longitud)
{
    nodo.prev = this.cola.prev
    nodo.sgte = this.cola

    this.cola.prev.sgte = nodo

    this.cola.prev = nodo}
    else
    {
        this.nodoActual = this.cabeza
        while (posicionActual < posicion)
        {
            this.nodoActual = this.nodoActual.sgte

            posicionActual++
        }

        nodo.prev = this.nodoActual.prev

        nodo.sgte = this.nodoActual

        this.nodoActual.prev.sgte = nodo

        this.nodoActual.prev = nodo


    }

    this. longitud++

    }

    else
    {
console.log("Error insertarPosicion. Posicon: "+posicion+" fuera de rango")


    }
    

    imprimir()
    {
        let salida=""

        if (this.longitud > 0)
        {
            let nodoActual = this.cabeza
            salida += "["+this.longitud+"] = {"

            let contador = 1

            while (contador <=this.longitud)
            {
                if (contador < this.longitud)
                {
                    salida += nodoActual.dato+","
                }
                else
                {
                    salida += nodoActual.dato+"}"
                }

                contador++
                nodoActual = nodoActual.sgte
                }
                 console.log("La lista no tiene elementos ")
                }
            }

            imprimirReverso()
            {
                let salida=""

                if (this.longitud > 0)
                {
                    let nodoActual = this.cola
                    salida += "["+this.longitud+"] = {"
                    let contador = 1

                    while (cotador <= this.longitud)
                    {
                        if (contador < this.longitud)
                        {
                            salida += nodoActual.dato+","

                        }
                        else
                        {
                            salida += nodoActual.dato+"}"

                        }

                        contador++

                        nodoActual = nodoActual.prev
                    }

                    console.log("La lista no tiene elementos ")
                }
            }

            eliminar(dato)
            {
                let posicion = 1

                let encontro = false
                if (this.longitud > 0)
                {
                    console.log("Buscando "+dato+" para eliminar")

                    this.nodoActual = this.cabeza
                    while (posicion <= this.longitud)
                    {
                        if (this.nodoActual.dato == dato)
                        {
                            encontro = true
                            if (this.cabeza == this.cola)
                            {
                                delete (this.cabeza)
                                delete (this.cola)

                                console.log("Se elimino el unico elemento de la lista doble ")
                            }
                            else
                            {
                                if (this.nodoActual == this.cabeza)
                                {
                                    this.nodoActual.sgte.prev = this.cola
                                    this.cabeza = this.nodoActual.sgte
                                    this.cola.sgte = this.cabeza
                                    delete (this.nodoActual)
                                    console.log("Se elimino el elemento de la cabeza de la lista ")
                                }
                                else
                                {
                                    if (this.nodoActual == this.cola)
                                    {
                                        this.nodoActual.prev.sgte = this.cabeza
                                        this.cola = this.nodoActual.prev
                                        this.cabeza.prev = this.cola
                                        delete (this.nodoActual)

                                        console.log("Se elimino el elemento de la cola de la lista ")
                                    }
                                    else
                                    {
                                        this.nodoActual.prev.sgte = this.nodoActual.sgte
                                        this.nodoActual.sgte.prev = this.nodoActual.prev
                                        delete (this.nodoActual)

                                        console.log("Se elimino el dato en medio de la lista doble en posicion :"+posicion)

                                    }
                                }
                            }


                            this.longitud--
                            break;
                        }

                        this.nodoActual = this.nodoActual.sgte

                        posicion++
                    }

                    if (!encontro)
                    {
                        console.log("El dato no fue encontrado ")

                        posicion = -1
                    }
                }
                else{
                    console.log("La lista esta vacia ")
                }
                return posicion 
                }

                getCabeza()
                {
                    let resultado = null

                    if (this.cabeza!=null)
                    {
                        resultado = this.cabeza.dato

                    }

                    console.log("Cabeza: "+resultado)

                    return resultado
                }

                getCola()
                {
                    let resultado = null

                    if (this.cola!=null)
                    {
                        resultado = this.cola.dato
                    }

                    console.log("Cola: "+resultado)

                    return resultado
                }

                darVueltas (segundos)
                {
                    let tiempo = Math.round(new Date().getTime()/1000)

                    this.nodoActual = this.cabeza
                    
                    let vuelta = 0

                    while (tiempo + segundos > Math.round(new Date().getTime()/1000))
                    {
                        console.log("Dato:"+this.nodoActual.dato+" Vuelta:"+vuelta)

                        this.nodoActual = this.nodoActual.sgte
                        
                        if (this.nodoActual == this.cabeza)
                        vuelta++
                    }
                    console.log("Terminaron las vueltas durante "+segundos+"    ")
                }

                darVueltasReversas(segundos)
                {
                    let tiempo = Math.round(new Date().getTime()/1000)

                    this.nodoActual = this.cola
                    
                    let vuelta = 0

                    while (tiempo + segundos > Math.round(new Date().getTime()/1000))
                    {
                        console.log("Dato:"+this.nodoActual.dato+" Vuelta:"+vuelta)

                        this.nodoActual = this.nodoActual.prev
                        
                        if (this.nodoActual == this.cola)
                        vuelta++
                    }
                    console.log("Terminaron las vueltas durante "+segundos+"    ")
                }
            

            let oListaDobleCircular = new listaDobleCircular()

            //Insertar
oListaDobleCircular.insertar("1")
oListaDobleCircular.insertar("2")
oListaDobleCircular.insertar("3")
oListaDobleCircular.insertar("4")
oListaDobleCircular.insertar("5")
oListaDobleCircular.insertar("6")
oListaDobleCircular.insertar("7")
oListaDobleCircular.insertar("8")
oListaDobleCircular.insertar("9")
oListaDobleCircular.insertar("10")

//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

//Insertamos en Posicion
oListaDobleCircular.insertarPorPosicion("Pos 1",1)
oListaDobleCircular.insertarPorPosicion("Pos 4",4)
oListaDobleCircular.insertarPorPosicion("Pos 2",2)

//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

//Insertar varios elementos al final
oListaDobleCircular.insertarFinal("Al final")


//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

//Eliminar en Cabeza
oListaDobleCircular.eliminar("Pos 1")

//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

//Eliminar al final
oListaDobleCircular.eliminar("Al final")

//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

//Eliminar en medio
oListaDobleCircular.eliminar(4)
oListaDobleCircular.eliminar(2)

//Imprimir los datos de la lista
oListaDobleCircular.imprimir()
oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")


//oListaDobleCircular.darVueltas(1)
//console.log("...................")

//oListaDobleCircular.darVueltasReversas(1)

            }