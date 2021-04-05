let media = 0;
let soma=0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index<numbers.length ; index+=1){
    console.log(numbers[index]);
    soma = soma + numbers[index];
    console.log('A soma dos numbers eh: '+ soma);
    media = soma / (numbers.length + 1);
    console.log('A media é: '+media);
}
if(media>20){
    console.log('valor maior que 20');
}else{
    console.log('Valor menor que 20');
}
let maiorValor = 0
for(let index2=0;index2<numbers.length;index2++){
    if(numbers[index2]> maiorValor){
        maiorValor=numbers[index2]
    }else{
        maiorValor=maiorValor
    }
    console.log('O maior valor é: '+maiorValor);
}
let quantidadeOddNumbers=0;
for(let index3=0;index3<numbers.length;index3++){
    if(numbers[index3]%2 ==0){
        quantidadeOddNumbers=quantidadeOddNumbers;
    }else{
        quantidadeOddNumbers=quantidadeOddNumbers+1;
    
    }
}
console.log(quantidadeOddNumbers);

let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
for(let index4=0;index4<array.length; index4+=1){
    console.log(array[index4]);
}
for(let index5=0;index5<array.length; index5+=1){
    console.log(array[index5]/2);
}