function paros(szam){ return szam%2 == 0 }
[1,2,3,4,5,6].filter(paros)
//Array(3) [ 2, 4, 6 ]

[1,2,3,4,5,6].filter(function(szam){return szam%2 == 0})
//Array(3) [ 2, 4, 6 ]

[1,2,3,4,5,6].filter((szam)=>{return szam%2 == 0})
//Array(3) [ 2, 4, 6 ]

[1,2,3,4,5,6].filter(szam => szam%2 == 0)
//Array(3) [ 2, 4, 6 ]