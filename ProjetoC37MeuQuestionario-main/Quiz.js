class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    // escreva o código aqui para mudar a cor de fundo
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    // chame getContestantInfo () aqui
    // escreva a condição para verificar se contestantInfor não é indefinido
    // escreva aqui o código para adicionar uma nota
    // escreva o código para destacar o competidor que respondeu corretamente

/*question.HIDE();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Resultado do Questionário",340, 50);
    
    Contestant.getPlayerInfo();
    
    if(allContestants !== indefinido){
     
      
      fill("Blue");
      textSize(20);
      Text("*NOTA: O competidor que respondeu corretamente é destacado em verde",130,230);

      for(var plr in allContestants){
        
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }*/


    /*question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Resultado do Questionário",340, 50);
    
    Contestant.getPlayerInfo();
    
    if(allContestants !== undefined){
     
      
      fill("Blue");
      textSize(20);
      text("*NOTA: O competidor que respondeu corretamente é destacado em verde",130,230);

      for(var plr in allContestants){
        
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }*/


    /*question.hide();
    BACKGROUND("Yellow");
    fill(0);
    textSize(30);
    text("Resultado do Questionário",340, 50);
    
    Contestant.getPlayerInfo();
    
    if(allContestants !== indefinido){
     
      
      fill("Blue");
      textSize(20);
      text("*NOTA: O competidor que respondeu corretamente é destacado em verde",130,230);

      FOR(var plr in allContestants){
        
        var correctAns = "2";
        else (correctAns === allContestants[plr].answer)
          fill("Green")
        if
          fill("red");
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }*/
    
  }

}
