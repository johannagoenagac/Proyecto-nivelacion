global.window=global;//Llama al test contenido aquí
global.assert=require('chai').assert;//
require('../src/data.js');//require: lo que requiero para que corra mi test
require('../src/data/pokemon/pokemon.js');

describe('pokemon', () => {
    it('Debería ser un objeto', () => {
        window.assert.equal(typeof window.pokemon, 'object');//funcion (parametros a comparar) typeof= me dice si es un objeto
      });

    describe('data.filterData',()=>{ //testenado funcion filter
        it('Debería ser una funcion',()=>{
            window.assert.equal(typeof window.data.filterData,'function');//typeof me muestra lo que 
        });

        it('Debería retornar el primer pokemon del tipo planta',()=>{
            let pokemonGrass=window.data.filterData(window.pokemon,'Grass')[0].name;
            window.assert.equal(pokemonGrass,'Bulbasaur');
        });

        it('Debería retornar el tercer pokemon del tipo agua ',()=>{
            let pokemonWater=window.data.filterData(window.pokemon,'Water')[2].name;
            window.assert.equal(pokemonWater,'Blastoise');   
        });        

        });
    
      })

      describe('data.sortData',()=>{ //testenado funcion sort
        it('Debería ser una funcion',()=>{
            window.assert.equal(typeof window.data.sortData,'function');//typeof si es una función
        });

        it('Deberia retornar el primer pokemon con letra a',()=>{
          let pokemonLetterA=window.data.sortData(window.pokemon,'name','a-z')[0].name;
          window.assert.equal(pokemonLetterA,'Abra');
      });

      it('Debería retornar el numero 50 de los pokemones ',()=>{
          let pokemonNumber50=window.data.sortData(window.pokemon,'num','1-151')[49].name;
          window.assert.equal(pokemonNumber50,'Diglett');   
      });  
      
      it('Debería retornar el numero 120 de los pokemones ',()=>{
        let pokemonNumber120=window.data.sortData(window.pokemon,'num','151-1')[31].name;
        window.assert.equal(pokemonNumber120,'Staryu');   
    });        


      });
  
    
