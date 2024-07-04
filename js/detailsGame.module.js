import { Ui } from "./ui.module.js";


 export class DetailsGame{
    constructor(id){
        this.ui=new Ui()
        document.querySelector('#btnClose').addEventListener('click',()=>{
            document.querySelector('#games').classList.remove('d-none')
            document.querySelector('#gamesDetails').classList.add('d-none')
            
        })
this.getGameDetails(id);
    }

   async getGameDetails(id){
        const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };
      try{
        const dataDetails= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response= await dataDetails.json()
        console.log(response);
        this.ui.displayDetails(response)

      }catch{
        console.log('error');
      }

    }
}