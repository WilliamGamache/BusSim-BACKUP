#pragma strict

public var audi: AudioSource = GetComponent.<AudioSource>();

function Start () {
}

function Update () {

if(Input.GetKeyDown(KeyCode.Keypad0)){

audi.Play();

}
if(Input.GetKeyUp(KeyCode.Keypad0)){

audi.Stop();

}

}