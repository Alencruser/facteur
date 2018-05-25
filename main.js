/*Le facteur est a la poste et recupère le courrier

creer le modèle de courrier ( destinataire, message )

instanciation des objets a partir des modèles

a la fin de la tournée, sacoche vide.
*/
function Lettre (adresse,message){
  this.adresse = adresse,
  this.message = message
}
function Habitation (adresse){
  this.adresse = adresse,
 
this.bal = {
    courriers: [],
    deposerCourrier: function(courrier){
      courriers.push(courrier)
      return courriers
    },
    retirerCourrier: function(){
        return courriers = []
    }
}
}
function facteur (){
  this.facteur = {
    panier : [],
  arrivageCourriers: function(){
    panier.push(sacoche)
  },
  livraisoncourrier: function(){
    for (i=0;i<panier.length;i++){
      if (panier[i].adresse==ville[1].adresse || ville[2].adresse || ville[3].adresse || ville[4].adresse ||ville[5].adresse){
        panier.splice(panier[i])
      } 
    } if(i==6){
      console.log(panier)
    }
  }
}
}
roger = new facteur();
var ville = [
maison1 = new Habitation("chemin des développeurs"),
maison2 = new Habitation("Rte de St Go"),
maison3 = new Habitation("rue de l'avenir"),
maison4 = new Habitation("Rue Saint Rome"),
maison5 = new Habitation("rue truc much")
]

var sacoche=[
lettre1 = new Lettre("chemin des développeurs","Salutations"),
lettre2 = new Lettre("chemin des développeurs","Erreur de destinataire"),
lettre3 = new Lettre("Rte de ST Go","Comment allez-vous depuis le temps ?"),
lettre4 = new Lettre("rue de l'avenir","Je me suis mis du shampoing dans les yeux"),
lettre5 = new Lettre("Rue Saint Rome","Tout les chemins mènent à Rome")
]
