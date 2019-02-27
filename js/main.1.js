console.log("yep");

$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  $('.modal').modal();
  // $('.tabs').tabs();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible({
    accordion: true,
    inDuration: 300,
    onOpenStart: function(){
      console.log("onOpenStart")
    },
    onOpenEnd: function() {
      console.log("onOpenEnd")
    }
  });

});

document.addEventListener('DOMContentLoaded', function() {
      var elem = document.querySelector('#tabs');
      var instance = M.Tabs.init(elem, {
      swipeable: true,
        onShow: function() {
          console.log("ON show tab");
          var t = document.querySelector('.tabs-content');
          console.log(t);
          t.style.height = "1000px";
        }
      });



});

    // document.addEventListener('DOMContentLoaded', function() {
      // var elems = document.querySelectorAll('.collapsible');
      // var instances = M.Collapsible.init(elems, {accordion: true});
      // instance.open(3);
      // var instances = M.Collapsible.init(elems, options);
      // var instance = M.Collapsible.getInstance(elem);
      // instance.open(3);
    // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, options);
  // });


  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.fixed-action-btn');
  //   var instances = M.FloatingActionButton.init(elems, options);
  // });


  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.collapsible');
  //   var instances = M.Collapsible.init(elems, {accordion: true});
  //   // var instances = M.Collapsible.init(elems, options);
  // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, options);
  // });

  
  //  ================================================================== TABS
  // document.addEventListener('DOMContentLoaded', function() {
  //   var instance = M.Tabs.init(el, options);
  // });

  //  ================================================================== tabs
       
      
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.tooltipped');
  //   var instances = M.Tooltip.init(elems, options);
  // });

  //   document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.scrollspy');
  //   var instances = M.ScrollSpy.init(elems, options);
  // });

// const username = new MDCTextField(document.querySelector('.username'));
// const password = new MDCTextField(document.querySelector('.password'));

