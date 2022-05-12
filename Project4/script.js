$(document).ready(function(){   

    $.getJSON("recipe3.json")
        .done(function( data ) {
           console.log(data);
  
           for( let i = 0; i<data.length; i++){
              let item = data[i];
              //output each item into HTML
  
               console.log(i, item); //check index and item in console

               let key = item["MEALTYPE"];

                let container = '.'+key;
                console.log(container);

              //you can output each item into HTML

               let element = `<a href="${item["LINK"]}"><div class="item">
                 <div class="name">${item["NAME"]}</div>
               </div></a>`

               $(container).append(element);

            
           }
  
        });
  
  }); 