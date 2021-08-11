# jrbmercado.com Website Source Code - Version 1.1
The source code that is running my portfolio website.<br>
https://www.jrbmercado.com/

## Featured Applications

### QR Code Generator
Enter a url and click generate. Afterwards, a scannable QR code will be generated on the page and you can right click the image to save it to your computer.<b>
This generator sends a url GET request to Google chart's QR Code API to generate a code based on the url the user inputted.<br></b>
API Documentation: https://developers.google.com/chart/infographics/docs/qr_codes<br>

<!-- Example for QR Code Generator -->
<i> Input: https://www.google.com/ <br>
Output: <br> ![exampleQR_25](https://user-images.githubusercontent.com/60119119/127780748-fd818360-21f5-4e79-b7ee-85012b723789.png)</i><br>

### Random Dog Picture Viewer
Click on a button to get a new picture or gif of a random dog on the internet. This generator sends a request to the API, processes the returned JSON and updates the image html element.<br>
API Documentation: https://github.com/AdenFlorian/random.dog<br>
