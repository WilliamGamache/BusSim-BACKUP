#pragma strict

var audi: AudioSource = GetComponent.<AudioSource>();

var door_open : AudioClip;
var door_close : AudioClip;

var doorEntry = GameObject.Find("Door Entry");
var doorExit = GameObject.Find("Door Exit");
var doorExitBack = GameObject.Find("Door Exit Back");

function Start () {
}

function Update () {

if(Input.GetKeyDown(KeyCode.Keypad6)){

audi.PlayOneShot(door_open);
doorEntry.SetActive(true);
doorExit.SetActive(true);
doorExitBack.SetActive(true);

}else if(Input.GetKeyDown(KeyCode.Keypad3)){

audi.PlayOneShot(door_close);
doorEntry.SetActive(false);
doorExit.SetActive(false);
doorExitBack.SetActive(false);

}


}