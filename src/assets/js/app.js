// (function () {
// 	"use strict";

// 	var treeviewMenu = $('.app-menu');

// 	// Toggle Sidebar
// 	$('[data-toggle="sidebar"]').click(function(event) {
// 		event.preventDefault();
// 		$('.app').toggleClass('sidenav-toggled');
// 	});

// 	// Activate sidebar treeview toggle
// 	$("[data-toggle='treeview']").click(function(event) {
// 		event.preventDefault();
// 		if(!$(this).parent().hasClass('is-expanded')) {
// 			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
// 		}
// 		$(this).parent().toggleClass('is-expanded');
// 	});

// 	// Set initial active toggle
// 	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

// 	//Activate bootstrip tooltips
// 	$("[data-toggle='tooltip']").tooltip();

// })();

// /* Waves configuration */
// (function(){
//     "use strict";

//     Waves.init();
//     Waves.attach('.app-menu-item', ['waves-effect', 'waves-dark']);
//     Waves.attach('.treeview-item', ['waves-effect', 'waves-dark']);
// })();

// /* Nice scroll */
// (function(){
//     "use strict";

//     $(".app-sidebar").niceScroll({
//         cursorwidth: 10,
//         cursorcolor: "#a8a8a8"
//     });
// })();