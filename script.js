const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
function seeDinos(a, ...b){
console.log(a);
console.log(b);
}
seeDinos(...jPDinos);

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcom: "Jeff Goldblum"
};
const {alanGrant, ellieSattler, ianMalcom} = jPCharacters;
seeCharacters = () => {
    console.log(ellieSattler);
}
seeCharacters ();