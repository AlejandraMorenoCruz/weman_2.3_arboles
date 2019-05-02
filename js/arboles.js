//obtiene el momento actual
var ahora = new Date();
// obtiene
//Esto lo hizo Horus
/*var

class Tree{
  constructor(personas){
      //genera el arbol como Tal
      this.root = null;
  }
  add(node){
    //aquí funciones para agregar nodos
  }
}

//ejecuta el constructor de Tree

var arbol = new Tree();
arbol.add("prueba");*/

function Node() {
  this.value = val; // valor del nodo
  this.children = []; // lista de referencias a los nodos hijos
}
function Tree() {
  this.root = null; // referencia al nodo raíz
}
