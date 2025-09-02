import fs from "fs";
let lista = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];
let cuentocompleto = "";
for(let i = 0; i < lista.length; i++){
    let texto = fs.readFileSync("Cuento/parte"+lista[i]+".txt","utf-8");
    cuentocompleto += " " + texto;
    
}
fs.writeFileSync("La-autopista-del.sur.txt",cuentocompleto);
