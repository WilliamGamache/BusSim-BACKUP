using UnityEngine;
using System.Collections;

public class ScrapGuy : MonoBehaviour {



	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	public AudioClip impact;
	public AudioSource audioSource;

		void OnTriggerEnter(Collider other) 
		{
			
				audioSource.PlayOneShot(impact);
			
		}
	}

