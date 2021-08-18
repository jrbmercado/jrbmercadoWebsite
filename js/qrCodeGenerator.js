function generateQR(){
    // Reset image to the smallest gif possible (basically no image at all)
    document.getElementById("qrImageBox").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    var urlInput = document.getElementById("urlPrompt").value; // Get the url inputted by the user
    var googleAPI = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl="; // Use Google's QR API
    // Update the image source to be a concatination of google and user inputted URL
    document.getElementById("qrImageBox").src = googleAPI+urlInput; 
}