let arr = ['anderson', 'ana', 'henrique', 'camila']

for (let i = 0; i < arr.length; i++) {
    console.log('----------');
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//Show even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < nums.length; i++) {
    let numAtual = nums[i]
    if(numAtual % 2 === 0){
        console.log(numAtual);
    }
}

//Tabuada
for (let i = 1 ; i <= 10; i++){
    console.log('tabuada do: ', i ,'!'); 
    for (let j = 1; j <= 10; j++) {  //Repete 10 vezes dentro de uma rep do primeiro for.
        console.log(j * i);     
    }
}