#pragma strict

var audi: AudioSource = GetComponent.<AudioSource>();

var door_open : AudioClip;
var door_close : AudioClip;

function Start () {
}

function Update () {

if(Input.GetKeyDown(KeyCode.Keypad6)){

audi.PlayOneShot(door_open);

}else if(Input.GetKeyDown(KeyCode.Keypad3)){

audi.PlayOneShot(door_close);

}


}