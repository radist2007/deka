console.log("yep");
  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    // $('.collapsible').collapsible({
    //   accordion: true,
    //   inDuration: 300,
    //   onOpenStart: function(){
    //     console.log("onOpenStart")
    //   },
    //   onOpenEnd: function() {
    //     console.log("onOpenEnd")
    //   }

    // });
    $('.modal').modal();
    $('.tabs').tabs();
    // $('.tabs').tabs('swipeable', true);
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();

      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {
        accordion: true
      });
      console.log(instances);
      // instances.open(3);
    // var elem = document.querySelector('.collapsible');
    // var instance = M.Collapsible.init(elem, {
    //   accordion: true
    // });

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

