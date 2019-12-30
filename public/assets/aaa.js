$(document).ready(function(){

    $('form').submit(function(e){

        e.preventDefault();
        const item1 = $('#1');
        const item2 = $('#2');
        const item3 = $('#3');
        const item4 = $('#4');
        const item5 = $('#5');
        const item6 = $('#6');

        var aa = {Name: item1.val(),Email:item2.val(),Number:item3.val(),Course: item4.val(),Country: item5.val(),Date: item6.val()};

        console.log(aa);
        $.ajax({
          type: 'POST',
          url: '/aa',
          data: aa,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
              console.log(aa);
              console.log("success in post req from jquery");
          }
        });
  
        return false;
  
    });
  
    
});
