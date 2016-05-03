function createMeterList(meters)
{
	var start_div = "<div class=\"form-group\">";
	var end_div = "</div>" ;

	var label = "<label> Which meter data do you want ?</label>" ;

	var select_start = "<select class=\"form-control\" id=\"which_meter\">" ;
	var select_end = "</select>"

	var option = "";
	for (var i = 0; i < meters.length; i++) {
		option += "<option>" + meters[i] + "</option>"
	};


	var select_elem = start_div + label + select_start + option + select_end + end_div ;
	
	return select_elem ;
}


function createParametersList(params)
{
	var start_div = "<div class=\"form-group\">";
	var end_div = "</div>" ;

	var label = "<label> Which parameter(s) do you want ?</label>" ;

	var select_start = "<select multiple class=\"form-control\" id=\"which_params\">" ;
	var select_end = "</select>"

	var option = "";
	for (var i = 0; i < params.length; i++) {
		option += "<option>" + params[i] + "</option>"
	};


	var select_elem = start_div + label + select_start + option + select_end + end_div ;
	
	return select_elem ;
}

function createRoomList(rooms, size)
{
	var start_div = "<div class=\"form-group\">";
	var end_div = "</div>" ;

	var label = "<label> Which room data do you want ?</label>" ;

	var select_start = "<select class=\"form-control\" id=\"which_clsroom\">" ;
	var select_end = "</select>"

	var option = "";
	for (var i = 0; i < size; i++) {
		option += "<option>" + rooms[i] + "</option>"
	};


	var select_elem = start_div + label + select_start + option + select_end + end_div ;
	
	return select_elem ;
}

function fetchData(START_TIME, END_TIME, DATASET_NUMBER, DATASET_NAME, DATA)
{

	/*$.ajax ( {
					type:"GET",
					dataType:"JSONP",
					url:"",
					data:{'start':START_TIME, 'end':END_TIME,'dataset_number':DATASET_NUMBER, 'dataset_name':DATASET_NAME, 'options':DATA},
					success: function(data) 
							{
								
								
							} 
					
				});
	*/
	alert('hello');
}

