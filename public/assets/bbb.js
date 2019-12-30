$(document).ready(function(){

    $('form').submit(function(e){

        e.preventDefault();
        const item1 = $('#12');
        

        var bb = item1.val();

        console.log(bb);

        $(location).attr('href', `https://mighty-lake-16570.herokuapp.com/bb/${bb}`);
  
        return false;
  
    });
  
    
});
