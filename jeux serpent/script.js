window.onload = function()
{       
    var canvasWidth =900;
    var canvasheight =600;
    var blocKsize = 30
    var ctx;
    var delay = 100;
    var snakee;
    
    init();
    
    function init()
        {
            var canvas = document.createElement('canvas');
            canvas.width= canvasWidth;
            canvas.height= canvasheight;
            canvas.style.border="1px solid";
            document.body.appendChild(canvas);
            ctx = canvas.getContext('2d');
            snakee = new snake ([[6,4],[5,4],[4,4]]);
            refreshCanvas();

        }
        
        function refreshCanvas()
        {   

            ctx.clearRect(0,0,canvasWidth, canvasheight);  
            ctx.fillStyle = "#ff0000";
            snakee.advance();
            snakee.draw();
            setTimeout(refreshCanvas,delay);
        }
        
        function drawBlock(ctx, position)
        {
            var x = position [0] + blocKsize;
            var y = position [1] + blocKsize;
            ctx.fillRect(x, y,blocKsize, blocKsize);   
        }
    
        function snake(body)
        {
                this.body = body;
                this.draw = function()
                {
                    ctx.save();
                    ctx.fillStyle = "#ff0000";
                    for(var i = 0; i < this.body.length; i++)
                    {
                        drawBlock(ctx, this.body[i]);
                    }
                    ctx.restore();           
                };
            this.advance= function()
            {
                var nexteposition = this.body[0].slice();
                nexteposition[0]+= 1;
                this.body.unshift(nexteposition);
                this.body.pop();
            };
        }
    
}