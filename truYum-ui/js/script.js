function validateForm(){
    
    var title=document.getElementById('txt-1').value;
    
    var price=document.getElementById('txt-2').value;
    var dateOfLaunch=document.getElementById('txt-3').value;
    var category=document.getElementById('category').value;
    if(title==""){
        alert('Title is required');
        return false;
    }
    else if(price==""){
        alert('Price is required');
        return false;
    }
    else if(dateOfLaunch==""){
        alert('Date of Launch is required');
    }
    else if(category==0){
        alert("Select the category");
    }
    else{
        alert('Completed');
        location.href="edit-menu-item-status.html";
    }
}