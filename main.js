 document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{


showCards(POKEMON.pokemon)

function showCards(filterData) {

document.getElementById('root').innerHTML = '';

  document.getElementById('pokemon-list').innerHTML = '';
    for (let i = 0; i < filterData.length; i++) {
        document.getElementById('pokemon-list').innerHTML += `
            <div class="col s6 m3" >
            <div class="card">
                <img class="imagen-lol responsive-img" src="${filterData[i].img}" >
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-2"><h6>${filterData[i].name}</h6><i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${filterData[i].name}<i class="material-icons right">close</i></span>
                    <p> Numero: ${ filterData[i].num }</p>
                    <p> Tipo: ${ filterData[i].type}</p>
                    <span class="link" data-pokemon='${filterData[i].id}'></span>
                    </div>
                </div>
                </div> ` 
      }
}

    document.getElementById('select-type').addEventListener('change',()=>{
        let condition = document.getElementById('select-type').value;
        // console.log(condition);
        let filterData = window.data.filterData(POKEMON.pokemon, condition);
        // console.log(filterData);
        showCards(filterData);   
      });



      showOrder(POKEMON.pokemon)

    function showOrder(sortData) {
      
      document.getElementById('root').innerHTML = '';
      
        document.getElementById('pokemon-list').innerHTML = '';
          for (let i = 0; i < POKEMON.pokemon.length; i++) {
              document.getElementById('pokemon-list').innerHTML += `
                  <div class="col s6 m3" >
                  <div class="card">
                      <img class="imagen-pokemon responsive-img" src="${POKEMON.pokemon[i].img}" >
                      <div class="card-content">
                          <span class="card-title activator grey-text text-darken-2"><h6>${POKEMON.pokemon[i].name}</h6><i class="material-icons right">more_vert</i></span>
                          </div>
                          <div class="card-reveal">
                          <span class="card-title grey-text text-darken-4">${POKEMON.pokemon[i].name}<i class="material-icons right">close</i></span>
                          <p> Numero: ${POKEMON.pokemon[i].num }</p>
                          <p> Tipo: ${POKEMON.pokemon[i].type}</p>
                          <span class="link" data-pokemon='${POKEMON.pokemon[i].id}'></span>
                          </div>
                      </div>
                      </div> ` 
            }
      }

    document.getElementById('select-order').addEventListener('change',() => {
        let sortOrder = document.getElementById('select-order').value;
        let dataSort = window.data.sortData(POKEMON.pokemon,'name',sortOrder);
        console.log(sortOrder)
        showCards(dataSort);
    });


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });//Nav Responsive


    }

    