/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
    
	$('.ui.dropdown').dropdown();
        $('.ui.checkbox').checkbox();
});

