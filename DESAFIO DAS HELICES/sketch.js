
//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;

//variaveis
var motor;
var world;

var solo, parado;

var helice;
var botao;

function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    parado = {
      isStatic:true,
    }
    //cria o corpo do solo
    solo = Bodies.rectangle(300,390,600,30, parado);
    //adiciona no mundo
    World.add(mundo, solo);

    mexendo = {
      isStatic:false
    }

    bola = Bodies.circle(300,100, 30, mexendo);
    World.add(mundo, bola);

    helice = Bodies.rectangle(200,200,200,20,parado);
    World.add(mundo, helice)

    botao = createImg("cima.jpg");
    botao.size(70, 60);
    botao.position(500,50);
    botao.mouseClicked(empurrarBola);

    ellipseMode(RADIUS);
    rectMode(CENTER);

    //crie as helices


}

var angulo = 0;
function draw() {
  background("cyan");
    
  Engine.update(motor);
 
  push();
  translate(helice.position.x, helice.position.y)
  rotate(angulo);
  fill("white");
  rect(0,0,200,20)
  pop();

  //aumenta o valor do ângulo
  angulo+=0.1;

  //desenha o solo
  fill('brown');
  rect(solo.position.x, solo.position.y, 600, 30);

  //desenha a bolinha
  fill("blue");
  ellipse(bola.position.x, bola.position.y, 30);

  //exiba as helices

}

//é aqui que adiciona a função para aplicar força na bola
function empurrarBola(){
  Body.applyForce(bola, {x:0,y:0}, {x:0, y:-0.1})
}