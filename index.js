document.querySelector("form[role=search]").addEventListener("submit", search);

function search(event) {
    event.preventDefault();
    const searchValue=document.querySelector("#searchInput").value;
    const apiUrl=`https://world.openfoodfacts.org/api/v0/product/${searchValue}.json?fields=labels,generic_name,ingredients_text,nutriments,product_name,ecoscore_grade,nutriscore_grade,image_front_url,nova_group`;
    console.log(apiUrl);
    fetch(apiUrl)
        .then((response) => {
            if(!response.ok) {
                throw new Error("La réponse du réseau n'est pas ok");
            }
            return response.json();
        })
        .then((data) =>{
            console.log(data.product);
            showData(data.product);
        })
        .catch((error) => {
            console.error("L'opération fetch n'a pas abouti:", error);
        })
}
console.log("test");
function showData(p){
    const n=p.nutriments;

    let productName = p.product_name
    if (productName) {
        document.querySelector(".nom_du_produit").textContent=productName;
    } else {
    document.querySelector(".nom_du_produit").textContent="Nom inconnu.";
    }

    let genericName = p.generic_name
    if (genericName) {
        document.querySelector(".description_produit>p").textContent= genericName;
    } else {
    document.querySelector(".description_produit>p").textContent="Description inconnue.";
    }

    let ingredientsText= p.ingredients_text;
    if (ingredientsText){
        document.querySelector(".liste_ingredients>p").textContent= ingredientsText;
    } else {
        document.querySelector(".liste_ingredients>p").textContent= "Ingrédients non définis.";
    }
    

    document.querySelector("#energie>td.quantite").textContent=n["energy-kcal_value"];
    document.querySelector("#matieres_grasses>td.quantite").textContent=n["fat_value"];
    document.querySelector("#acides_gras_satures>td.quantite").textContent=n["saturated-fat_value"];
    document.querySelector("#glucides>td.quantite").textContent=n["carbohydrates_value"];
    document.querySelector("#sucres>td.quantite").textContent=n["sugars_value"];
    document.querySelector("#fibres_alimentaires>td.quantite").textContent=n["fiber_value"];
    document.querySelector("#proteines>td.quantite").textContent=n["proteins_value"];
    document.querySelector("#sel>td.quantite").textContent=n["salt_value"];

    document.querySelector("#energie>td.unite").textContent=n["energy-kcal_unit"];
    document.querySelector("#matieres_grasses>td.unite").textContent=n["fat_unit"];
    document.querySelector("#acides_gras_satures>td.unite").textContent=n["saturated-fat_unit"];
    document.querySelector("#glucides>td.unite").textContent=n["carbohydrates_unit"];
    document.querySelector("#sucres>td.unite").textContent=n["sugars_unit"];
    document.querySelector("#fibres_alimentaires>td.unite").textContent=n["fiber_unit"];
    document.querySelector("#proteines>td.unite").textContent=n["proteins_unit"];
    document.querySelector("#sel>td.unite").textContent=n["salt_unit"];

    let srcImage = p.image_front_url;
    document.querySelector("#image_produit_large").setAttribute("src", (url = srcImage));
    document.querySelector("#image_produit_small").setAttribute("src", (url = srcImage));

    let srcNutriscore = p.nutriscore_grade;
    switch (srcNutriscore){
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        document.querySelector(".nutriscore").setAttribute("src", `ressources/Nutri-score-${srcNutriscore}.svg`);
        break;
    default : 
        document.querySelector(".nutriscore").setAttribute("src", `ressources/nutriscore-unknown.svg`);
    }
    
    
    let srcNovascore = p.nova_group;
    switch (srcNovascore) {
        case 1:
        case 2:
        case 3:
        case 4:
        document.querySelector(".novascore").setAttribute("src", `ressources/NOVA_group_${srcNovascore}.svg`);
        break;
    default:
        document.querySelector(".novascore").setAttribute("src", `ressources/nova-group-unknown.svg`);
    }

    let srcEcoscore = p.ecoscore_grade;
    switch (srcEcoscore){
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        document.querySelector(".ecoscore").setAttribute("src", `ressources/Eco-score_${srcEcoscore}.svg`);
        break;
    default : 
    document.querySelector(".ecoscore").setAttribute("src", `ressources/ecoscore-not-applicable.svg`);
    }
    
    
//         const l = p.labels

//         let imgLabels = {
//       l[`en:green-dot`];
//  l[`Organi ];
//  l[`EU Organi ];
//  l[`AB Agriculture Biologique];
//   l[`PDO ];
//   l[`PGI`];
// }
    
//     // const imgLabels = {
//     //     'en:green-dot': 'ressources/Green_dot_logo.svg',
//     //     'Organic': 'ressources/bio.96x90.png',
//     //     'EU Organic': 'ressources/bio-european.135x90.png'
//     //   };

//       let labelsImg = imgLabels[l];
      
//       switch (l) {
//         case 'en:green-dot':
//           document.querySelector(".point_vert").src=labelsImg;
//           break;
//         case 'Organic':
//             document.querySelector(".point_vert").setAttribute("src", labelsImg)
//           break;
//         case 'EU Organic':
//             document.querySelector(".point_vert").setAttribute("src", labelsImg)
//           break;
//         default:
//             document.querySelector(".point_vert").setAttribute("src", "");
//             document.querySelector(".point_vert").setAttribute("alt", "non défini")
//           break;
//       }


}

