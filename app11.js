const htmlencode = require('htmlencode');
let description = "<p>Keep your little one calm and happy while taking their temperature with Infant Pacifier Thermometer. The contoured orthodontic nipple fits comfortably in a child&#39;s mouth. Also features an easy-to-read digital display, and a beeping function to let you know when it&#39;s finished (approx. 3 minutes).</p>\n\n<p><span style=\"font-size:14px;\"><strong>Features:</strong></span></p>\n\n<ul>\n\t<li>Measuring Range: 35.5 Degree C to 42.0 Degree C</li>\n\t<li>Weight: 19g</li>\n\t<li>Accurate reading in under 20 secs</li>\n\t<li>Quick and simple to use.</li>\n\t<li>On/Off button with Automatic shut off</li>\n</ul>\n\n<p>&nbsp;</p>\n"

let x = htmlencode.htmlDecode(description)
console.log(x)