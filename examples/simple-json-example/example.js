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
	for ( var i = 0; i < json.length; i++) {
		taskNames.push(json[i]["category"]);
		tasks.push({
		    "startDate" : new Date(json[i]["from"]),
		    "endDate" : new Date(json[i]["to"]),
		    "taskName" : json[i]["category"],
		    "status" : json[i]["task"]
		});
	}
	var format = "%b-%e-%y";
	var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
	gantt(tasks, "#container1");
});


    var taskStatus2 = {
        "drive 0" : "bar",
        "drive 1" : "bar-failed",
        "drive 2" : "bar-running"
    };
    var tasks2 = [];
      d3.json("data.json", function(error, json) {
        if (error)
            return console.warn(error);
        var taskNames2 = [];
        for ( var i = 0; i < json.length; i++) {
                taskNames2.push(json[i]["task"]);
                tasks2.push({
                    "startDate" : new Date(json[i]["from"]),
                    "endDate" : new Date(json[i]["to"]),
                    "taskName" : json[i]["task"],
                    "status" : json[i]["category"]
                });
        }
        var format = "%b-%e-%y";
        var gantt = d3.gantt().taskTypes(taskNames2).taskStatus(taskStatus2).tickFormat(format);
	gantt(tasks2, "#container2");
    });

};

