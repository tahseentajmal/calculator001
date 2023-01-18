
function Display(data){
	result.value+=data
}
function Clear(){
	result.value=""
}
function Calculate(){
	result.value=eval(result.value) // inbuilt function to evaluate strings
}
function Del(){
	result.value=result.value.slice(0,-1)
}
function PlusMinus(){
	if(result.value[0]==="-"){
		result.value=result.value-result.value[0]
	}
	else{
		result.value="-"+result.value
	}
}
// STRING INDEXING
// 0 1 2 3 4 5 6 7
// negative undexing s[-1] can be used to slice

