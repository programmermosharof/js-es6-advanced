let date ;
date = 0;
date = " ";
date = null;
date = -0;

if (!!date) {
    console.log('Truthy');
}else {
    console.log('Falsy');
}



let searchInput = "";
searchInput = 'apple';
if(searchInput) {
    console.log('Search for apple');
}else{
    console.log('Search for something else');
}