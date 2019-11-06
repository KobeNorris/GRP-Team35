function readURL(f) {
    var input = document.getElementById(f);
    alert(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profilePicture').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}