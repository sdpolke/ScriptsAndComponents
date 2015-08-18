
//====================================================================================
//== Script to drag and place 3D object in world space based on touch/mouse input in X directions
// License : WTFPL
//===================================================================================
#pragma strict
 
 private  var screenPoint:Vector3 ;
 private  var offset:Vector3;
 public var rb:Rigidbody;
 public var thrust:float;
 
 function Start(){
 	//get rigidbody component
     rb = GetComponent(Rigidbody);
 }
 function  OnMouseDown() { 
 	//Get world to screen point so that screenPoint is mapped correctly to world point
     screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
     //calculate offset of touch
     offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
 }
 
 function OnMouseDrag() {  
 	//On Drag calsulate the new position based on mouse/touch position
     var curScreenPoint:Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
     var curPosition:Vector3   = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
     curPosition = Vector3(curPosition.x, gameObject.transform.position.y,gameObject.transform.position.z);    
     transform.position = curPosition;
 }
 
 function OnMouseUp() {
     
     //Do actions of mouse up
     
 }
 
