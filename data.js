window.data={

filterData:(data,condition) => { //Funcion filterData
  const pokemonData = data; //variable data
  const pokemonType= pokemonData.filter(types => { //variable typo, metodo para filtrar por tipo de pokemon
  return types.type.indexOf(condition) !== -1;//retorna tipo de pokemon/si el valor es distinto a -1 retorna /retorna posicion donde esta, si es -1 es por que no lo encuentra
  //indexOf busca la propiedad que quieres filtrar 
  });
  return pokemonType
},

sortData:(data,sortBy,sortOrder) => { //funcion sort 
  let pokemonData = data; 
  // if(sortOrder===''){
  //   return pokemonData
  // }
  if(sortBy === "name" && sortOrder === "a-z"){ //Si ordeno por name y mi orden será de la a-z
    pokemonData.sort((a,b) => { //ordenar
      if(b.name>a.name){ //si b.name es mayor que a.name entonces me retorna -1
        return -1;
      }
      if(a.name>b.name){ // si a.name es mayor que b.name, retorna 1
       return 1;
      }
      return 0; //si no retorna 0
    });
  }

  if(sortBy==="name" && sortOrder === "z-a" ){
    pokemonData.sort((a,b)=>{
     if(a.name>b.name){
      return -1;
  }
     if(b.name>a.name){
       return 1;
  }
      return 0;
  });
    
}

if(sortBy === "num" && sortOrder === "1-151"){ //Si ordeno por num y mi orden será de la 1-151
  pokemonData.sort((a,b) => { //ordenar
    if(b.id>a.id){ //si b.id es mayor que a.id entonces me retorna -1
      return -1;
    }
    if(a.id>b.id){ // si a.id es mayor que b.id, retorna 1
     return 1;
    }
    return 0; //si no retorna 0
  });
}

if(sortBy==="num" && sortOrder === "151-1" ){
  pokemonData.sort((a,b)=>{
   if(a.id>b.id){
    return -1;
}
   if(b.id>a.id){
     return 1;
}
    return 0;
});
  
}

return pokemonData; 
}

}