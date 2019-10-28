var n=0,
    a,
    b,
    m,
    fa,
    fm,
    fafm;

function funcion(num){
  return(Math.sqrt(num)*Math.sin(num)+2*Math.pow(num,2)-1);
}

function Fa_Fm(){
  fafm = fa*fm;
}

function criterio(){
  if (fafm<0){
    a=a;
    b=m;
  }else{
    a=m;
    b=b;
  }

}

function num(){
  a=parseInt(document.getElementById("a").value);
  b=parseInt(document.getElementById("b").value);
}

function media(){
  m = ((a+b)/2);
}

//Anexar fila a la tabla HTML
function appendRow() {
    var tbl = document.getElementById('tabla'), //tabla de referencia
        row = tbl.insertRow(tbl.rows.length),   //fila de la tabla de datos anexados
        i;
        n++;
    //Insertar celdas de la tabla a la nueva fila
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}
//Crear el elemento DIV y añadir a la celda de la tabla

function createCell(cell, text, style) {
  var t,
      div = document.createElement('div'); // crear el elemento DIV
  switch (text) {
    case 0:
      t=n;
      break;

    case 1:
      if (n>1){
        criterio();
      }
      t=a;
      break;

    case 2:
      if (n>1){
        criterio();
      }
      t=b;
      break;

    case 3:
      media();
      t=m;
      break;

    case 4:
      t=fa=funcion(a);
      break;

    case 5:
      t=fm=funcion(m);
      break;

    case 6:
      Fa_Fm();
      t=fafm;
      break;

    default:
    t=0
    break;
  }
    var imp=t.toFixed(6);
    var txt = document.createTextNode(imp);   // crear un nodo de texto
    div.appendChild(txt);                    // anexar nodo de texto para el DIV
    div.setAttribute('class', "style");        // conjunto de atributos de clase DIV
    div.setAttribute('className', style);    // conjunto de atributos de clase para IE (?)
    cell.appendChild(div);                   // DIV añadir a la celda de la tabla
}

// Anexar columna a la tabla HTML
function appendColumn() {
    var tbl = document.getElementById('tabla'), // tabla de referencia
        i;
    // Bucle abierto para cada fila y cada celda
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}
