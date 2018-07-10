#pragma strict

var leftBlinkLight = GameObject.Find("Blinker Left");
var leftBlinkLightBackSide = GameObject.Find("Blinker Left Back Side");
var leftBlinkLightFrontSide = GameObject.Find("Blinker Left Front Side");
var leftBlinkLightFront = GameObject.Find("Blinker Left Front");

var rightBlinkLight = GameObject.Find("Blinker Right");
var rightBlinkLightBackSide = GameObject.Find("Blinker Right Back Side");
var rightBlinkLightFrontSide = GameObject.Find("Blinker Right Front Side");
var rightBlinkLightFront = GameObject.Find("Blinker Right Front");

var hazardOn = false;

var audi: AudioSource = GetComponent.<AudioSource>();

function Start () {
}

function Update () {

if(Input.GetKeyDown(KeyCode.Keypad8)){

leftBlinkLight.SetActive(true);
leftBlinkLightBackSide.SetActive(true);
leftBlinkLightFrontSide.SetActive(true);
leftBlinkLightFront.SetActive(true);
rightBlinkLight.SetActive(true);
rightBlinkLightBackSide.SetActive(true);
rightBlinkLightFrontSide.SetActive(true);
rightBlinkLightFront.SetActive(true);
audi.Play();
hazardOn = true;

}else if(Input.GetKeyDown(KeyCode.Keypad5)){

leftBlinkLight.SetActive(false);
leftBlinkLightBackSide.SetActive(false);
leftBlinkLightFrontSide.SetActive(false);
leftBlinkLightFront.SetActive(false);
rightBlinkLight.SetActive(false);
rightBlinkLightBackSide.SetActive(false);
rightBlinkLightFrontSide.SetActive(false);
rightBlinkLightFront.SetActive(false);
audi.Stop();
hazardOn = false;

}


}