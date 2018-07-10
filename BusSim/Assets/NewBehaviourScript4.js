#pragma strict

var audi: AudioSource = GetComponent.<AudioSource>();

var parking_apply : AudioClip;
var parking_loose : AudioClip;
var brake_apply : AudioClip;
var brake_loose : AudioClip;

function Start () {
}

function Update () {

if(Input.GetKeyDown(KeyCode.Space)){

audi.PlayOneShot(parking_apply);

}else if(Input.GetKeyUp(KeyCode.Space)){

audi.PlayOneShot(parking_loose);

}

if(Input.GetKeyDown(KeyCode.S)){

audi.PlayOneShot(brake_apply);

}else if(Input.GetKeyUp(KeyCode.S)){

audi.PlayOneShot(brake_loose);

}


}