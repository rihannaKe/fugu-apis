function drawList(data){
    var ul = document.createElement('ul');

    for(let i=0; i<=data.length-1;i++){
        var li = document.createElement('li');

        var input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('id','list-item-'+(i+1));

        var label= document.createElement('label');
        label.setAttribute('for','list-item-'+(i+1));
        if(i===0){
      label.setAttribute('class','first');
    }else {
      label.setAttribute('class','last');
    }
        label.innerHTML= data[i].label;

        var ulIn = document.createElement('ul');
        for(let j=0; j<=data[i].links.length-1;j++){
            var liIn = document.createElement('li');
            var aIn = document.createElement('a');
            aIn.setAttribute('href',data[i].links[j].url);
      aIn.setAttribute('target','_blank');
            aIn.innerHTML= data[i].links[j].label
            liIn.appendChild(aIn);

      var descIn = document.createElement('p');
      descIn.innerHTML= data[i].links[j].note;
      liIn.appendChild(descIn);

            ulIn.appendChild(liIn);
        }

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(ulIn);
    ul.appendChild(li);
    }
 document.getElementById('index').appendChild(ul);
}

document.addEventListener('DOMContentLoaded', function() {
 fetch('content.json')
   .then(res => res.json())
   .then(response => drawList(response))
   .catch(error => alert(error) );
 }, false);