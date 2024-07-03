export  class Ui{
constructor(){

}

    displayGame(data){
        let gamesBox=``
        for(let i=0;i<data.length;i++){
        gamesBox+=`<div class="col-4">
         <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" >
    <div class="card-body">
      <figure class="position-relative">
        <img class="card-img-top object-fit-cover h-100 " src="${data[i].thumbnail}" alt="">

      </figure>
      <figcaption>
        <div class="hstack justify-content-between">
          <h3 class="small">${data[i].title}</h3>
          <span class="badge text-bg-primary p-2">Free</span>
        </div>
        <p class="card-text small text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>

      </figcaption>
     
    </div>
     <footer class="card-footer small hstack justify-content-between">
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
      </footer>
  </div>
</div>
`

        
    }
    document.querySelector('#data').innerHTML=gamesBox;
}
}
    