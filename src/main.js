document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{
    
    document.getElementById('start').addEventListener('click',
    (event) => {
    event.preventDefault();
    document.getElementById('page1').style.display='block';
    document.getElementById('page2').style.display='none';
    showCards(filterData);
    
});

showCards(window.pokemon)

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
                        <p style=" color: grey"> Numero: ${ filterData[i].num }</p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${filterData[i].name}<i class="material-icons right">close</i></span>
                        <p> Numero: ${ filterData[i].num }</p>
                        <p> Tipo: ${ filterData[i].type}</p>
                        <span class="link" data-pokemon='${filterData[i].id}'></span>
                    </div>
                </div>

             
                 <!-- Modal Trigger -->
                 <a class="waves-effect waves-light btn modal-trigger" href="#modal1">ver más</a>

                <!-- Modal Structure -->
                <div id="modal1" class="modal">
                     <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                 </div>
                </div>

            </div> 
          ` 
      }
      
}


    //Evento para mostrar data filtrada en el select filtrar
    document.getElementById('select-type').addEventListener('change',()=>{
        let condition = document.getElementById('select-type').value;
        // console.log(condition);
        if (condition !== "All"){
            let filterData = window.data.filterData(window.pokemon, condition);
            // console.log(filterData);
            showCards(filterData);
        } else {
            showCards(window.pokemon);
        }
      });



    //   showOrder(POKEMON.pokemon)

    // function showOrder(sortData) {
      
    //   document.getElementById('root').innerHTML = '';
      
    //     document.getElementById('pokemon-list').innerHTML = '';
    //       for (let i = 0; i < POKEMON.pokemon.length; i++) {
    //           document.getElementById('pokemon-list').innerHTML += `
    //               <div class="col s6 m3" >
    //               <div class="card">
    //                   <img class="imagen-pokemon responsive-img" src="${POKEMON.pokemon[i].img}" >
    //                   <div class="card-content">
    //                       <span class="card-title activator grey-text text-darken-2"><h6>${POKEMON.pokemon[i].name}</h6><i class="material-icons right">more_vert</i></span>
    //                       </div>
    //                       <div class="card-reveal">
    //                       <span class="card-title grey-text text-darken-4">${POKEMON.pokemon[i].name}<i class="material-icons right">close</i></span>
    //                       <p> Numero: ${POKEMON.pokemon[i].num }</p>
    //                       <p> Tipo: ${POKEMON.pokemon[i].type}</p>
    //                       <span class="link" data-pokemon='${POKEMON.pokemon[i].id}'></span>
    //                       </div>
    //                   </div>
    //                   </div> ` 
    //         }
    //   }


    //Evento imprimir nombre ordenado de a-z y z-a en select ordenar
    document.getElementById('select-order').addEventListener('change',() => {
        //metodo change me permite elegir una opcion diferente cada vez
        
        let sortOrder = document.getElementById('select-order').value;
        if (sortOrder === "a-z"){
            let dataSort = window.data.sortData(window.pokemon,'name',sortOrder);
            showCards(dataSort);
        }
        if (sortOrder === "z-a"){
            let dataSort = window.data.sortData(window.pokemon,'name',sortOrder);
            showCards(dataSort);
        }
        if (sortOrder === "1-151"){
            let dataSortNumber = window.data.sortData(window.pokemon,'num',sortOrder);
            showCards(dataSortNumber);
        }
        if (sortOrder === "151-1"){
            let dataSortNumber = window.data.sortData(window.pokemon,'num',sortOrder);
            showCards(dataSortNumber);
        }
        if (sortOrder === "AllSort"){
            let sortOrder = "1-151";
            let dataSortNumber = window.data.sortData(window.pokemon,'num',sortOrder);
            showCards(dataSortNumber);

        }
    });



    


    //Muestra grafico al presionar estadisticas
    document.getElementById("stats").addEventListener("click",
        (event) => {
        event.preventDefault();
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="block";
    });



    //Grafico estadisticas, cantidad de pokemones por tipo
    window.google.charts.load("current",{packages:["corechart"]});
    window.google.charts.setOnLoadCallback(drawChart);
      
    function drawChart() {
        var data = window.google.visualization.arrayToDataTable([
        ['Tipo Pokemon', 'Cantidad por tipo'],
        ['Grass',      window.data.filterData(window.window.pokemon,"Grass").length],
        ['Poison',     window.data.filterData(window.window.pokemon,'Poison').length],
        ['Flying',     window.data.filterData(window.window.pokemon,'Flying').length],
        ['Fire',       window.data.filterData(window.window.pokemon,'Fire').length],
        ['Water',      window.data.filterData(window.window.pokemon,'Water').length],
        ['Bug',        window.data.filterData(window.window.pokemon,'Bug').length],
        ['Normal',     window.data.filterData(window.window.pokemon,'Normal').length],
        ['Electric',   window.data.filterData(window.window.pokemon,'Electric').length],
        ['Ground',     window.data.filterData(window.window.pokemon,'Ground').length],
        ['Fighting',   window.data.filterData(window.window.pokemon,'Fighting').length],
        ['Psychic',    window.data.filterData(window.window.pokemon,'Psychic').length],
        ['Rock',       window.data.filterData(window.window.pokemon,'Rock').length],
        ['Ice',        window.data.filterData(window.window.pokemon,'Ice').length],
        ['Ghost',      window.data.filterData(window.window.pokemon,'Ghost').length],
        ['Dragon',     window.data.filterData(window.window.pokemon,'Dragon').length],
       
        ]);

        var options = {
            'width':600, 
            'heigth':200,
            title: 'My Daily Activities',
            is3D: true,
        };
        
        var chart = new window.google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
        }


    //Menu responsive
    
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        window.M.Sidenav.init(elems);
    
      });

      document.getElementById("start-1").addEventListener("click",
      (event) => {
      event.preventDefault();
      document.getElementById("page1").style.display="block";
      document.getElementById("page2").style.display="none";
  });

    //Imprimir grafico en opcion estadisticas del menu responsive
    document.getElementById("stats-1").addEventListener("click",
        (event) => {
        event.preventDefault();
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="block";
        
    });

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems);
       
    });

    
    }

   