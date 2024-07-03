import { Ui } from "./ui.module.js";

export class Home{
    constructor(){
    this.getCategoryGames('mmorpg')
       let links=document.querySelectorAll('.nav-link') .forEach(link=>
        link.addEventListener('click',()=>{          
          this.changeLinkStatus(link)
           let category= link.getAttribute('data-category');
            this.getCategoryGames(category);
        })
       );
       
       this.ui=new Ui();
    }
    async changeLinkStatus(link){
            document.querySelector('.navbar .active').classList.remove('active');
            link.classList.add('active');
           
            
    }
     async getCategoryGames(category){
	   const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };
try{
      const apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await apiGames.json();
      console.log(response);
      this.ui.displayGame(response);
}catch{
    console.log(error);
}
      

};
        
       
    }
