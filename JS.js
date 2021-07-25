window.onload = function()
{
    var V1=0;
    var V2=0;
    var result=0;
    var sign='';
    var arr = [];
    var index=0;

    function displayValue()
    {
        var y = "";
        if(sign==='+')
        {
            index=arr.indexOf('+');
        }
        else if(sign==='-')
        {
            index=arr.indexOf('-');
        }
        else if(sign==='/')
        {
            index=arr.indexOf('/');
        }
        else if(sign==='*')
        {
            index=arr.indexOf('*');
        }

        if(sign!='')
        {
            for(var i=index+1; i<=arr.length; i++)
            {
                y=y+arr[i];
            }
            y=parseInt(y);
        }
        else
        {
            for(var i=0; i<=arr.length; i++)
            {
                y=y+arr[i];
            }
            y=parseInt(y);
        }
        document.getElementById('result').innerHTML=y;  
    };

    document.getElementById('btn-1').onclick = function()
    {
        arr.push('1');
        displayValue();
    };
    document.getElementById('btn-2').onclick = function()
    {
        arr.push('2');
        displayValue();
    };
    document.getElementById('btn-3').onclick = function()
    {
        arr.push('3');
        displayValue();
    };
    document.getElementById('btn-4').onclick = function()
    {
        arr.push('4');
        displayValue();
    };
    document.getElementById('btn-5').onclick = function()
    {
        arr.push('5');
        displayValue();
    };
    document.getElementById('btn-6').onclick = function()
    {
        arr.push('6');
        displayValue();
    };
    document.getElementById('btn-7').onclick = function()
    {
        arr.push('7');
        displayValue();
    };
    document.getElementById('btn-8').onclick = function()
    {
        arr.push('8');
        displayValue();
    };
    document.getElementById('btn-9').onclick = function()
    {
        arr.push('9');
        displayValue();
    };
    document.getElementById('btn-0').onclick = function()
    {
        arr.push('0');
        displayValue();
    };
    document.getElementById('btn-add').onclick = function()
    {
        var y = "";
        arr.push('+');
        sign='+';
        document.getElementById('result').innerHTML='+';
        index=arr.indexOf('+')
        for(var i=0; i<index; i++)
        {
            y=y+arr[i];
        }
        V1 = parseInt(y);

    };
    document.getElementById('btn-mul').onclick = function()
    {
        var y = "";
        arr.push('*');
        sign='*';
        document.getElementById('result').innerHTML='*';
        index=arr.indexOf('*')
        for(var i=0; i<index; i++)
        {
            y=y+arr[i];
        }
        V1 = parseInt(y);
    };
    document.getElementById('btn-sub').onclick = function()
    {
        var y = "";
        arr.push('-');
        index=arr.indexOf('-')
        sign='-';
        document.getElementById('result').innerHTML='-';
        for(var i=0; i<index; i++)
        {
            y=y+arr[i];
        }
        V1 = parseInt(y);
    };
    document.getElementById('btn-div').onclick = function()
    {
        var y = "";
        arr.push('/');
        index=arr.indexOf('/')    
        sign='/';
        document.getElementById('result').innerHTML='/';
        for(var i=0; i<index; i++)
        {
            y=y+arr[i];
        }
        V1 = parseInt(y);
    };
    document.getElementById('btn-result').onclick = function()
    {
        var y = "";
        for(var i=index+1; i<=arr.length; i++)
        {
            y=y+arr[i];
        }
        V2=parseInt(y);
        if(sign==='+')
        {
            result=V1+V2;
        }
        else if(sign==='-')
        {
            result=V1-V2;
        }
        else if(sign==='/')
        {
            result=V1/V2;
        }
        else
        {
            result=V1*V2;
        }
        document.getElementById('result').innerHTML=result;
        V1=result;
        arr=[V1];
    };
    document.getElementById('btn-dot').onclick = function()
    {
        result=0;
        sign='';
        V1=0;
        V2=0;
        arr=[];
        document.getElementById('result').innerHTML='DISPLAY';
    }

    
}



