example();

function example() {
    var tasks = [];

    var taskStatus = {
	"server 0" : "bar",
	"server 1" : "bar-failed",
	"server 2" : "bar-running"
    };

      d3.json("data.json", function(error, json) {
	if (error)
	    return console.warn(error);
	var taskNames = [];
console.log(json);
	for ( var i = 0; i < json.length; i++) {
		taskNames.push(json[i]["category"]);
		tasks.push({
		    "startDate" : new Date(1000*json[i]["from"]),
		    "endDate" : new Date(1000*json[i]["to"]),
		    "taskName" : json[i]["category"],
		    "status" : json[i]["task"]
		});
	}
console.log(tasks);
	var format = "%b-%e-%y";
	var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
	gantt(tasks);
    });

};

