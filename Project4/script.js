$(document).ready(function(){   

    $.getJSON("recipe2.json")
        .done(function( data ) {
           console.log(data);
  
           for( let i = 0; i<data.length; i++){
              let item = data[i];
              //output each item into HTML
  
               console.log(i, item); //check index and item in console

               let key = item["MEAL TYPE"];

                let container = '.'+key;
                console.log(container);

              //you can output each item into HTML
               let element = `<div class="item">
                 <div class="name">${item["NAME"]}</div>
               </div>`

               $(container).append(element);

            
           }
  
        });
  
  }); 