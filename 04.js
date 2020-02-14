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

console.log(temp);
