$(function(){

//Watch form submit
$('form').on("submit",function(event){

	event.preventDefault()

	
		if ($('item').not(null)){
			const toDoItem = $('#item').val();
			const listItem = `<li>
							 <span class="check todo"></span>${toDoItem}	
							 </li>`;
			$('ul').append(listItem);
		};

	});

		$('ul').on("click","li",function(){
			$(this).toggleClass("completed");
			$(this).find('span.check').toggleClass('todo done');
		});
});