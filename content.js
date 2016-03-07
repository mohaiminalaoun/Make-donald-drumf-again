var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) 
{

    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) 
    {
        var node = element.childNodes[j];

        //nodetype 3 is read-only, and means text
        if (node.nodeType === 3)
         {
            var text = node.nodeValue;

            var replacedText = text.replace(/Trump/gi, 'Drumpf');

            if (replacedText !== text) 
            {
                
                element.replaceChild(document.createTextNode(replacedText), node);

            }
        }
    }
}