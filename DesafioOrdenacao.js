let frascos = [12, 5, 23, 17, 8, 14, 3, 19];
let count = [];
let i, z = 0;
let max = Math.max(...frascos)

for(i = 0; i <= max ; i++){
    count[i] = 0;
}
for(i = 0; i < frascos.length; i++){
    count[frascos[i]]++;
}
for(i = 0; i <= max; i++){
    while(count[i] -- > 0){
        frascos[z++] = i
    }
}
for(i=0; i < frascos.length; i++){
    console.log(frascos[i])
}
