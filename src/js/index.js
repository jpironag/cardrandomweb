/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//includ e your own styles
import '../style/index.scss';

window.onload = function(){
    //console.log('Poker Refresh!');

    document.querySelector('.error').style.display = "none";
    document.getElementById("button").onclick = refreshPage;
    refreshPage();
    
    function refreshPage() {
        
        var colorCardNaipes = [["&#9829","&#9830"],["&#9824","&#9827"]];
        var typeOfCard = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
            
        function setNaipes(iNaipes,jNaipes) {
            if (iNaipes === 1) {
                document.getElementById("naipesUp").style.color = "black";
                document.getElementById("naipesDown").style.color = "black";
                document.getElementById("typeOfCard").style.color = "black";
            } else {
                document.getElementById("naipesUp").style.color = "red";
                document.getElementById("naipesDown").style.color = "red";
                document.getElementById("typeOfCard").style.color = "red";
            }
     
            return colorCardNaipes[iNaipes][jNaipes]};
            
        function setTypeOfCard(rCard) {
            return typeOfCard[rCard]} ;
        
        var randNaipes = Math.floor((Math.random() * colorCardNaipes.length));
        var ranNaipesChild = Math.floor((Math.random() * colorCardNaipes[randNaipes].length));
        var ranTypeOfCard = Math.floor((Math.random() * typeOfCard.length));
        
        document.querySelector("#naipesUp").innerHTML = setNaipes(randNaipes,ranNaipesChild);
        document.querySelector("#naipesDown").innerHTML = setNaipes(randNaipes,ranNaipesChild);
        document.querySelector("#typeOfCard").innerHTML = setTypeOfCard(ranTypeOfCard);
    }
    
};