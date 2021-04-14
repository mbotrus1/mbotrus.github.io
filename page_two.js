/* Declare global variables */
var tile_values = [];
var clicked_tiles = [];

var clicked_tile_ids = [];
var turned = 0;

Array.prototype.randomize = function()
{   /* vary tile locations */
    var ii = this.length;
    var rand_val;
    var temp_val;
    while(--ii > 0)
	{   /* places images in table in random locations */
        rand_val = Math.floor(Math.random() * (ii+1)); /* initialize random states */
        temp_val = this[rand_val]; 
        this[rand_val] = this[ii];
        this[ii] = temp_val;
    }
}
function game_Mode(difficulty)
{   /* handle game logic */ 
    turned = 0;
    var output = '';
    tile_values.randomize();

    for(var ii = 0; ii < tile_values.length; ii++)
	{   /* Output  */
        output += '<div id="tile_'+ii+'"><img src=images/'+tile_values[ii]+'.jpg></div>';
    }
    document.getElementById('board').innerHTML = output;
    output="";
	
    setTimeout(function()
	{
        for(var ii = 0; ii < tile_values.length; ii++)
		{
            output += '<div id="tile_'+ii+'" onclick="flip(this,\''+tile_values[ii]+'\')"></div>';
        }
        document.getElementById('board').innerHTML = output;
    }, difficulty);

    setTimeout(function()
	{
        timer();
    }, difficulty-500);
}


function flip(tile,value)
{
    if(tile.innerHTML == "" && clicked_tiles.length < 2)
	{   /* check for one clicked tile */
        tile.innerHTML = '<img src=images/'+value+'.jpg>';
        if(clicked_tiles.length == 0)
		{
            clicked_tiles.push(value);
            clicked_tile_ids.push(tile.id);
        }
        else if(clicked_tiles.length == 1)
		{
            clicked_tiles.push(value);
            clicked_tile_ids.push(tile.id);
            if(clicked_tiles[0] == clicked_tiles[1])
			{
                turned += 2;
                clicked_tiles = [];
                clicked_tile_ids = [];
                if(turned == tile_values.length)
				{
                    alert("Congrats you Win!");
                    location.reload();
                }
            }
            else 
			{
                function flipBack()
				{
                    var tile1 = document.getElementById(clicked_tile_ids[0]);
                    var tile2 = document.getElementById(clicked_tile_ids[1]);
                    tile1.innerHTML = "";
                    tile2.innerHTML = "";
                    clicked_tiles = [];
                    clicked_tile_ids = [];
                }
                
                setTimeout(flipBack, 1000);
            }
        }
    }
}

function timer()
{   /* timer function  */
    if(document.getElementById("numPics8").checked)
        var my_time = 120000;
    if(document.getElementById("numPics10").checked)
        var my_time = 150000;
    if(document.getElementById("numPics12").checked)
        var my_time = 180000;
    
    var count_date = new Date().getTime()+my_time;

    var x = setInterval(function() 
	{   /* display page time */
        var current = new Date().getTime();  
        var distance = count_date - current;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (60000));
        var seconds = Math.floor((distance % (60000)) / 1000);
        document.getElementById("timer").innerHTML = '<b>'+ minutes + ":" + seconds+'</b>';
        
        if (distance < 0) 
		{
            clearInterval(x);
            document.getElementById("timer").innerHTML = "No more Time!";
            alert("You ran out of your time.");
            location.reload();
        }
    }, 1000);
}

function radioCheck()
{ /* check if pictures are matched */
    if(document.getElementById("numPics8").checked)
        tile_values = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
    if(document.getElementById("numPics10").checked)
        tile_values = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10'];
    if(document.getElementById("numPics12").checked)
        tile_values = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10','11','11','12','12'];
}