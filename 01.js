function grade(point) {
  if(point >= 90)
  	return 'A';
  else if(point >= 80)
  	return 'B';
  else if(point >= 70)
    return 'C';
  else if(point >= 60)
    return 'D';
  else 
  	return 'E';
}

console.log(grade(90));
