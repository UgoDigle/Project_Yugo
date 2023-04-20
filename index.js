document.querySelector("#energie>td.quantite").textContent="123";
document.querySelector("#matieres_grasses>td.quantite").textContent="456";
document.querySelector("#acides_gras_satures>td.quantite").textContent="789";
document.querySelector("#glucides>td.quantite").textContent="101";
document.querySelector("#sucres>td.quantite").textContent="112";
document.querySelector("#fibres_alimentaires>td.quantite").textContent="131";
document.querySelector("#proteines>td.quantite").textContent="415";
document.querySelector("#sel>td.quantite").textContent="161";

document.querySelector("#energie>td.unite").textContent="Kcal";
document.querySelector("#matieres_grasses>td.unite").textContent="g";
document.querySelector("#acides_gras_satures>td.unite").textContent="g";
document.querySelector("#glucides>td.unite").textContent="g";
document.querySelector("#sucres>td.unite").textContent="g";
document.querySelector("#fibres_alimentaires>td.unite").textContent="g";
document.querySelector("#proteines>td.unite").textContent="g";
document.querySelector("#sel>td.unite").textContent="g";

document.querySelector(".liste_ingredients>p").textContent=`Aubergines fraîches et pré frites en dés (aubergines, huile de tournesol) (42%), tomates en morceaux,
jus de tomates, oignons en dés, garniture de CÉLERI en dés, huile d'olive vierge (3.2%), sucre, olives
vertes en rondelles, raisins secs, sel, câpres, amidon, basilic, ail en poudre, acidifiant : acide
lactique, poivre blanc en poudre.`;

document.querySelector(".description_produit>p").textContent="375g aubergines en caponata - D'aucy - 375 g";

document.querySelector(".nom_du_produit").textContent="Aubergines en caponata cuisinées à l'huile d'olive vierge (3.2%)";

let srcImage = document.querySelector(".image_produit").getAttribute("src");

let srcNutriscore = document.querySelector(".nutriscore").getAttribute("src");
let srcNovascore = document.querySelector(".novascore").getAttribute("src");
let srcEcoscore = document.querySelector(".ecoscore").getAttribute("src");

function search(event) {
    event.preventDefault();
    const searchValue=document.querySelector("#searchInput").value;
    const apiUrl=`https://world.openfoodfacts.org/api/v0/product/${searchValue}.json?fields=generic_name,ingredients_text`;
    console.log(apiUrl);
}