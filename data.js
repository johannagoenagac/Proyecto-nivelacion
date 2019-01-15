window.data={

filterData:(data,condition) => { //Funcion filterData
  const pokemonData = data; //variable data
  const pokemonType= pokemonData.filter(types => { //variable typo, metodo para filtrar por tipo de pokemon
  return types.type.indexOf(condition) !== -1;//retorna tipo de pokemon, si el valor es distinto a -1 retorna

  });
  return pokemonType
},

sortData:(data,sortBy,sortOrder) => { //funcion sort 
  let pokemonData = data; 
  if(sortOrder===''){
    return pokemonData
  }
  if(sortBy === "name" && sortOrder === "a-z"){ //Si ordeno por y mi orden será de la a-z
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
return pokemonData; 
}
}