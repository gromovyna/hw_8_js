hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
battle = ["Battle","Gave"];
rainbow = destination.concat(battle,native, hero);
rainbow.reverse();
rainbow.pop();
rainbow.push("Vain")
rainbow[0] = 'Richard';
circleColor = ['red','orange','yellow','green','aqua','blue','violet'];

for (i=0; i<rainbow.length; i++){
    document.write(`
    <div style= "display:flex; justify-content:center;" >
        <div style= "display:flex; margin-left:20px; flex-direction:column;align-items:center;">
            <div class="cirlce"  style= "display:flex; border-radius: 50%;
            background-color: ${circleColor[i]};
            width: 100px;
            height: 100px;"></div>
            <h2>${rainbow[i]}</h2>
        
        </div>
    </div>`)
    }
