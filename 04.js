function duplicateRemover(obj) {
  var temp=[];
	var i=0;
    
    for(i=0; i<obj.length; i++){
        if(obj[i].age <= 21){
        	temp.push(obj[i]);
        }
    }
    
    return temp;
}
const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
];

console.log(duplicateRemover(people));
