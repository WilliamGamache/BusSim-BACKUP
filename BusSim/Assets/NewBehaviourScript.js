#pragma strict

var leftBlinkLight = GameObject.Find("Blinker Left");
var leftBlinkLightBackSide = GameObject.Find("Blinker Left Back Side");
var leftBlinkLightFrontSide = GameObject.Find("Blinker Left Front Side");
var leftBlinkLightFront = GameObject.Find("Blinker Left Front");

var rightBlinkLight = GameObject.Find("Blinker Right");
var rightBlinkLightBackSide = GameObject.Find("Blinker Right Back Side");
var rightBlinkLightFrontSide = GameObject.Find("Blinker Right Front Side");
var rightBlinkLightFront = GameObject.Find("Blinker Right Front");

var audi: AudioSource = GetComponent.<AudioSource>();

function Start () {
leftBlinkLight.SetActive(false);
leftBlinkLightBackSide.SetActive(false);
leftBlinkLightFrontSide.SetActive(false);
leftBlinkLightFront.SetActive(false);
rightBlinkLight.SetActive(false);
rightBlinkLightBackSide.SetActive(false);
rightBlinkLightFrontSide.SetActive(false);
rightBlinkLightFront.SetActive(false);
}

function Update () {

if(Input.GetKeyDown(KeyCode.Keypad7)){

leftBlinkLight.SetActive(true);
leftBlinkLightBackSide.SetActive(true);
leftBlinkLightFrontSide.SetActive(true);
leftBlinkLightFront.SetActive(true);
rightBlinkLight.SetActive(false);
rightBlinkLightBackSide.SetActive(false);
rightBlinkLightFrontSide.SetActive(false);
rightBlinkLightFront.SetActive(false);
audi.Play();

}else if(Input.GetKeyDown(KeyCode.Keypad9)){

leftBlinkLight.SetActive(false);
leftBlinkLightBackSide.SetActive(false);
leftBlinkLightFrontSide.SetActive(false);
leftBlinkLightFront.SetActive(false);
rightBlinkLight.SetActive(true);
rightBlinkLightBackSide.SetActive(true);
rightBlinkLightFrontSide.SetActive(true);
rightBlinkLightFront.SetActive(true);
audi.Play();

}

if(Input.GetKeyUp(KeyCode.Keypad7)){

leftBlinkLight.SetActive(false);
leftBlinkLightBackSide.SetActive(false);
leftBlinkLightFrontSide.SetActive(false);
leftBlinkLightFront.SetActive(false);
rightBlinkLight.SetActive(false);
rightBlinkLightBackSide.SetActive(false);
rightBlinkLightFrontSide.SetActive(false);
rightBlinkLightFront.SetActive(false);
audi.Stop();

}else if(Input.GetKeyUp(KeyCode.Keypad9)){

leftBlinkLight.SetActive(false);
leftBlinkLightBackSide.SetActive(false);
leftBlinkLightFrontSide.SetActive(false);
leftBlinkLightFront.SetActive(false);
rightBlinkLight.SetActive(false);
rightBlinkLightBackSide.SetActive(false);
rightBlinkLightFrontSide.SetActive(false);
rightBlinkLightFront.SetActive(false);
audi.Stop();

}

}