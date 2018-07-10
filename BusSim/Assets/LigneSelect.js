#pragma strict

import UnityEngine.UI;

var ligneSelector : GameObject;
var ligneDisplay : GameObject;
var ligneDisplay2 : GameObject;



function Start () {

}

function Update () {

}

function Change () {


	if(ligneSelector.GetComponent(Dropdown) == 0){

		ligneDisplay.GetComponent(TextMesh).text = " ";
		ligneDisplay2.GetComponent(TextMesh).text = " ";

	}else if(ligneSelector.GetComponent(Dropdown) == 0){


		ligneDisplay.GetComponent(TextMesh).text = "10";
		ligneDisplay2.GetComponent(TextMesh).text = "10";

	}

}