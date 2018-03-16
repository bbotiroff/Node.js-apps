$(document).ready(function(){


    $('#todo-list button').on('click', function(){

      var item = $('input');
      var todo = {item: item.val()};


      $.ajax({
        type: 'POST',
        url: '/'
        success: function(data){
          $('#outputData').text(data);
          location.reload();
        }




      });

    });




















    // $('form#todo-list').on('submit', function(){
    //
    //           var item = $('form#todo-list input');
    //           var todo = {item: item.val()};
    //
    //     $.ajax({
    //       type: "POST",
    //       url: "/todo",
    //       data: todo,
    //       success: function(data){
    //         //do something cool framework with fron-end
    //
    //       console.log(data);
    //         // location.reload();
    //       }
    //     });
    //
    //     });
    //
    //
    //   $('li').on('click', function(){
    //
    //
    //     var item = $(this).text();
    //       console.log(this.innerHTML);
    //     $.ajax({
    //       type: 'DELETE',
    //       url: '/todo/' + item,
    //       success: function(data){
    //         //do something cool framework with fron-end
    //
    //         location.reload();
    //       }
    //
    //     });
    //
    //
    //   });


});
