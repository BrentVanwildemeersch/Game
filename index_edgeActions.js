/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
var gamestatus = 'INTRO'
var gamechoise, dotsint, moveint ,game , stopwatchint,scoresDb,colornumber
var score = "" 
var aantalred = 1;
var aantalblue = 1;
var circlesred = [];
var circlesblue = [];
var posblue =1;
var posred = 3
var centerrad =80;
var stageRef, tijd;
var stopWatchText="" ;
var sec=0,min=0,misec=0;
var ccolor ="#2870d2";
var attempt = 1;
var clickedDots = 0;
var redspeed = 100;
var dotcolor = "red"

function initGame(sym)
{  
  
   stageRef = sym;

   //aanmaken van de tekstbox in de gamover pagina
    var textbox = $('<input />').attr({
      'type': 'textbox',
      'id' : 'gebruikersnaam',
      'maxlength' : '30', 
      'height' : '20',
      'width' : '80'     
    }).css({
      'width' : '100px',
      'height' : '25px',
      'font-size' : "20px",
      "background-color" : '#67bd60',
      'border': "1px solid white",
      'border-radius':'5px',
      'color' : 'white',
      'font-weigth' : '800'
    });




   

    //selecteren van correcte element
    var textboxplaceholder = sym.getSymbol("GameOver").$("textboxplaceholder");
    
    //textbox in placeholder plaatsen
    textbox.appendTo(textboxplaceholder);
    console.log("Append textbox")

   
       switch(gamechoise)
   {
      case "PLAY":
      
      sym.getSymbol("title2").playReverse();
      // sym.$('btnscore').hide();
      // sym.$("btnplayonscore2").hide();
       sym.getSymbol("btnplay2").play();
       sym.$('btnscore2').hide();
       sym.getSymbol("txtinfo2").play();
       setTimeout(setBackground,7000);
    

      
      break;

       case "SCORE":
       
       sym.getSymbol("title2").playReverse();
       sym.$("btnplay2").hide();
       sym.getSymbol('btnscore2').play();
       sym.getSymbol('TopScore').play()
       sym.getSymbol('btnplayscore').play();
       GetScores();
       
        
       break; 



   }
 }
function setBackground()
{
  var backgroundnumber =  Math.floor(Math.random()*(5-1+1)+1);
      
          switch(backgroundnumber)
          {
            case 1 :
            $('#Stage').css("background-image","url(images/background1.jpg)","background-repeat")
            break;
            case 2 :
            $('#Stage').css("background-image","url(images/background2.jpg)","background-repeat")
            break;
            case 3 : 
            $('#Stage').css("background-image","url(images/background3.jpg)","background-repeat")
            break;
            case 4 : 
            $('#Stage').css("background-image","url(images/background4.jpg)","background-repeat")
            break;
            case 5 :
            $('#Stage').css("background-image","url(images/background5.jpg)","background-repeat")
            break;
          }
          stageRef.getSymbol("btnplay2").deleteSymbol();
          stageRef.getSymbol("btnscore2").deleteSymbol();

          setTimeout(playGame,100)
          
 }

function showScore()
{

}



function playGame(sym)
{
  //aanmaken eventlistener voor stage
    document.getElementById('Stage').addEventListener("click", ClickControl, false);
  //stage clear
  //achtergrond stage;

   gamestatus = "PLAY"
   var circlesred=[];
   var circlesblue =[];
   //aanmaken timer 
   
   //interval aanmaken om timer aan te roepen
  var stopwatchint = setInterval(stopWatch,10)
   var dotsint = setInterval(initBlueDots,500)

   //aanroepen aanmaken rode stippen
   initRedDots();
   //aanroepen aanmaken blauwe stippen
   initBlueDots();

   //tekenen van de red dots op het canvas
   draw();
  var moveint= setInterval(move,50)

}

function stopWatch()
{
    
   
    misec = misec +10;
    if(misec == 1000)
    {
      misec = 0 ;
      sec = sec + 1 ;
    }
    else {sec = sec}
    if(sec == 60 )
    {
      sec = 0 
      min = min + 1
    }
    stopWatchText = ((min<=9) ? "0"+min : min) + " : " + ((sec<=9) ? "0" + sec : sec) + " : " + misec;
    
}

function initBlueDots()
{  
      
      switch(posblue)
      {
        case 5 : 
        var centerx=  Math.floor(Math.random()*(100-0+1)+0);
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posblue=6
        break;

        case 2 :
        var centerx = Math.floor(Math.random()*(100-0+1)+0)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posblue =5
        break;

        case 6 : 
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posblue=4
        break;

        case 1 :
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posblue=2
        break;

        case 3:
        var centerx = Math.floor(Math.random()*(500-300+1)+300)
        var centery = Math.floor(Math.random()*(80-0+1)+0);
        posblue = 1
        break;

        case 4:
        var centerx = Math.floor(Math.random()*(700-400+1)+400)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posblue = 3
        break;

      }

      var ccolor = 'blue';
      var c = {cx : centerx , cy:centery , color:ccolor};
      circlesblue.push(c);


   
   
}
function initRedDots()
{  
   
   for(var i =0 ; i<aantalred ; i++)
   {
      
      switch(posred)
      {
        case 4 : 
        var centerx=  Math.floor(Math.random()*(100-0+1)+0);
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posred=6
        break;

        case 6 :
        var centerx = Math.floor(Math.random()*(100-0+1)+0)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred =5
        break;

        case 2 : 
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posred=4
        break;

        case 3 :
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred=2
        break;

        case 5:
        var centerx = Math.floor(Math.random()*(500-300+1)+300)
        var centery = Math.floor(Math.random()*(80-0+1)+0);
        posred = 1
        break;

        case 1:
        var centerx = Math.floor(Math.random()*(700-400+1)+400)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred = 3
        break;
      }

      var ccolor = 'red';
      var c = {cx : centerx , cy:centery , color:ccolor};
      circlesred.push(c);
     
    
   }

  
}

function draw()
{     
      var canvas = document.getElementById('playCanvas');
      var centerdot = canvas.getContext('2d');
     
     // var stage = document.getElementById("stage")
     //  stage.addEventListener('click',ClickControl,false)
     
      centerdot.clearRect( 0 , 0 , canvas.width, canvas.height );

      
      //tekenen van de rode dots

      

      if(gamestatus !="GAMEOVER")
      {
      drawRedDots();
      drawBlueDots();
     
      //tekenen van de cirkel
      centerdot.beginPath();
      centerdot.arc(400,240,centerrad,0,2*Math.PI);
      centerdot.shadowBlur=10;
      centerdot.shadowColor="black";
      centerdot.fillStyle=ccolor;
      centerdot.fill(); 
      centerdot.closePath();

      centerdot.font="25px abel,sans-serif";
      centerdot.fillStyle="black";
      centerdot.fillText(stopWatchText,335,245);
      
    }
    else{
      clearInterval(stopwatchint);
      clearInterval(dotsint);
      clearInterval(moveint);
    

      
    }
      
     
    


      
      

}
function drawRedDots()
{
  
     for(var i =0 ; i<circlesred.length ; i++)
         {
            var canvas = document.getElementById('playCanvas');
            var ctx = canvas.getContext('2d');
            var c = circlesred[i];
            ctx.beginPath();
            ctx.arc(c.cx,c.cy,10,0,2*Math.PI);
            ctx.closePath();
            ctx.fillStyle = dotcolor
            ctx.fill();
            
            
         }
}
function drawBlueDots()
{
   for(var i = 0 ; i<circlesblue.length ; i++)
   {
      var canvas = document.getElementById('playCanvas');
      var ctx = canvas.getContext('2d');
      var c = circlesblue[i];
      ctx.beginPath();
      ctx.arc(c.cx,c.cy,10,0,2*Math.PI);
      ctx.closePath();
      ctx.fillStyle = 'blue'
      ctx.fill();
   }
}
function move()
{

   moveRedDots();
   moveBlueDots();

   draw()
   
   
}
function moveBlueDots()
{
    for (var i = 0 ; i<circlesblue.length ; i++)
   {
      var c=circlesblue[i];
      var afstandx = c.cx-400;
      var afstandy = c.cy-240;

      var afstand = Math.sqrt(afstandx*afstandx + afstandy*afstandy);

      
         c.cx = c.cx-afstandx/100;
         c.cy = c.cy-afstandy/100;
    
         

   }
}


function moveRedDots()
{
  if(gamestatus != "GAMEOVER")
  {



   for (var i = 0 ; i<circlesred.length ; i++)
   {
     
      var c=circlesred[i];
      var afstandx = c.cx-400;
      var afstandy = c.cy-240;

      var afstand = Math.sqrt(afstandx*afstandx + afstandy*afstandy);

      if(afstand <= centerrad + 10)
      {
        
      
      circlesred.splice(i,1)
      ccolor = 'red'
      gamestatus= "GAMEOVER"
      score = stopWatchText
      stageRef.getSymbol("GameOver").$('txtscore').html(score);
      stageRef.getSymbol("GameOver").play();
      stageRef.getSymbol("btnHighScores").play();
      stageRef.getSymbol("btnReplay").play();
      AddDot(i);
      clearInterval(stopwatchint);
      clearInterval(dotsint);
      clearInterval(moveint);
      
      

      }
          
    
      
         c.cx = c.cx-afstandx/redspeed;
         c.cy = c.cy-afstandy/redspeed;
      
         
      
   }
 }
}
function GetScores()
{
     LoadHighScores();
}
function LoadHighScores()
{
  $.ajax({
    url: "http://localhost:8080/2NMCT-Brent-Vanwildemeersch-Game/GetScores.php",
    data : "",
    dataType: "json",
    success: function(data)
    {
      
      vulHighScoresOp(data)
    }

  })
  
}
function vulHighScoresOp(data)
{
  
    
      stageRef.getSymbol("TopScore").$("txtscore1").html(data[0].name + "    -    " + data[0].score);
      stageRef.getSymbol("TopScore").$("txtscore2").html(data[1].name + "    -    " + data[1].score);
      stageRef.getSymbol("TopScore").$("txtscore3").html(data[2].name + "    -    " + data[2].score);
      stageRef.getSymbol("TopScore").$("txtscore4").html(data[3].name + "    -    " + data[3].score);
      stageRef.getSymbol("TopScore").$("txtscore5").html(data[4].name + "    -    " + data[4].score);
  
}
function postScore(score)
{
   
  var gebruikersnaam = $("#gebruikersnaam").val()
  $.post("http://localhost:8080/2NMCT-Brent-Vanwildemeersch-Game/AddScore.php",{"name":gebruikersnaam,"score":score});
}
function AddDot(i)
{
    switch(posred)
    {
      case 4 : 
        var centerx=  Math.floor(Math.random()*(100-0+1)+0);
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posred=6
        break;

        case 6 :
        var centerx = Math.floor(Math.random()*(100-0+1)+0)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred =5
        break;

        case 2 : 
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-0+1)+0);
        posred=4
        break;

        case 3 :
        var centerx = Math.floor(Math.random()*(800-700+1)+700)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred=2
        break;

        case 5:
        var centerx = Math.floor(Math.random()*(500-300+1)+300)
        var centery = Math.floor(Math.random()*(80-0+1)+0);
        posred = 1
        break;

        case 1:
        var centerx = Math.floor(Math.random()*(700-400+1)+400)
        var centery = Math.floor(Math.random()*(480-400+1)+400);
        posred = 3
        break;
    }
  
    
    circlesred.splice(i,1,{cx:centerx,cy:centery});
  
    
}

function ClickControl(e)
{
  if(gamestatus=="GAMEOVER")
  {
   // resetGame();
    
  }
  else 
  {
  var canvas = document.getElementById("playCanvas");
  var context = canvas.getContext("2d")
  var rect = canvas.getBoundingClientRect();
  
  var yPosition = e.clientY;
  var xPosition = e.clientX - rect.left;
 
  
  for(var i = 0 ; i<aantalred.length ; i++)
    console.log("")
    var c = circlesred[i];
    var xpositie = c.cx;
    var ypositie = c.cy;

    

    //berekenen afstand tussen klik en centerpunt cirkel
    var centerafstandx = c.cx - xPosition;
    var centerafstandy = c.cy - yPosition;

    var centerafstand =Math.sqrt(centerafstandx*centerafstandx + centerafstandy*centerafstandy)

    if(centerafstand<30)
    {
      
      circlesred.splice(i,1)
      clickedDots = clickedDots + 1
      var colornumber = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      switch(colornumber)
      {
        case 1:
        dotcolor = 'orange'
        break;
        case 2 :
        dotcolor = 'cyan'
        break;
        case 3 : 
        dotcolor = 'yellow'
        break;
        case 4 :
        dotcolor = 'white'
        break;
        case 5 : 
        dotcolor = 'hotpink'
        case 6 : 
        dotcolor = 'darkgreen'
        break;
        case 7 : 
        dotcolor = 'lime'
        break;
      }
      if(clickedDots == 5 )
      {
          redspeed = redspeed -20;
          clickedDots = 0
          
      }
      AddDot(i);
    }
  
   draw();    
    }
      
  

}

function resetGame()
{

 gamestatus =""
    score = '';
    stopWatchText =''
    sec = 0 ;
    misec = 0 ; 
    min = 0
    ccolor='#2870d2'
    redspeed = 120
    circlesred.splice(0 , circlesred.length);
   circlesblue.splice(0,circlesblue.length);
    clearInterval(stopwatchint);
    clearInterval(dotsint);
    clearInterval(moveint);
    playGame();
}










   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${intro}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnplay2}", "click", function(sym, e) {
         // insert code for mouse click here
         gamestatus = 'GAMESTARTED';
         gamechoise='PLAY';
         initGame(sym);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         stageRef = sym;
         stageRef.play();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnscore2}", "click", function(sym, e) {
         // insert code for mouse click here
         gamestatus = 'GAMESTARTED';
         gamechoise='SCORE';
         initGame(sym);

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btnplayscore}", "click", function(sym, e) {
         // insert code for mouse click here
          if(gamestatus != "GAMEOVER")
          {
         gamechoise = 'PLAY';
         sym.getSymbol("TopScore").playReverse();
         sym.getSymbol("btnplayscore").playReverse();
         sym.getSymbol("txtinfo2").play();
         setTimeout(setBackground,7000);
         }
         else 
         {
          gamechoise = 'PLAY';
         sym.getSymbol("TopScore").playReverse();
         sym.getSymbol("btnplayscore").playReverse();
         clearInterval(stopwatchint);
    		clearInterval(dotsint);
    		clearInterval(moveint);
         setTimeout(resetGame,3000);
         }
         
        

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${TopScore}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnHighScores}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("btnHighScores").playReverse();
         sym.getSymbol("btnReplay").playReverse();
         sym.getSymbol("GameOver").playReverse();
         GetScores();
         sym.getSymbol("TopScore").play(3000);
         sym.getSymbol("btnplayscore").play(3000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnReplay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("btnHighScores").playReverse();
         sym.getSymbol("btnReplay").playReverse();
         sym.getSymbol("GameOver").playReverse();
         clearInterval(stopwatchint);
    		 clearInterval(dotsint);
   		   clearInterval(moveint);
         resetGame();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'dot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.play(0);


      });
      //Edge binding end

   })("dot");
   //Edge symbol end:'dot'

   //=========================================================
   
   //Edge symbol: 'btnplay'
   (function(symbolName) {   
   
   })("btnplay");
   //Edge symbol end:'btnplay'

   //=========================================================
   
   //Edge symbol: 'title'
   (function(symbolName) {   
   
   })("title");
   //Edge symbol end:'title'

   //=========================================================
   
   //Edge symbol: 'txtinfo'
   (function(symbolName) {   
   
   })("txtinfo");
   //Edge symbol end:'txtinfo'

   //=========================================================
   
   //Edge symbol: 'btnscore'
   (function(symbolName) {   
   
   })("btnscore");
   //Edge symbol end:'btnscore'

   //=========================================================
   
   //Edge symbol: 'btnscore2'
   (function(symbolName) {   
   
   })("btnscore2");
   //Edge symbol end:'btnscore2'

   //=========================================================
   
   //Edge symbol: 'TopScore'
   (function(symbolName) {   
   
   })("TopScore");
   //Edge symbol end:'TopScore'

   //=========================================================
   
   //Edge symbol: 'TopScore_1'
   (function(symbolName) {   
   
   })("TopScore_1");
   //Edge symbol end:'TopScore_1'

   //=========================================================
   
   //Edge symbol: 'btnHome'
   (function(symbolName) {   
   
   })("btnHome");
   //Edge symbol end:'btnHome'

   //=========================================================
   
   //Edge symbol: 'btnplayscore'
   (function(symbolName) {   
   
   })("btnplayscore");
   //Edge symbol end:'btnplayscore'

   //=========================================================
   
   //Edge symbol: 'btnscoreplay'
   (function(symbolName) {   
   
   })("btnscoreplay");
   //Edge symbol end:'btnscoreplay'

   //=========================================================
   
   //Edge symbol: 'GameOver'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnAdd}", "click", function(sym, e) {
         // insert code for mouse click here
         postScore(score);
         console.log("Score Posted : " + score);

      });
      //Edge binding end

   })("GameOver");
   //Edge symbol end:'GameOver'

   //=========================================================
   
   //Edge symbol: 'btnAdd'
   (function(symbolName) {   
   
   })("btnAdd");
   //Edge symbol end:'btnAdd'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3802495");