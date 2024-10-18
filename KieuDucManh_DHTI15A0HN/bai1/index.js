 const tinh = document.querySelector(".tinh");
    let result;
    tinh.addEventListener("click",Xuly)
    function Xuly()
    {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;
        if (isNaN(num1) || isNaN(num2)) {
        result = 'Invalid input';
    } else {
        switch (operation) {
            case 'plus':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = 'Unknown operation';
        }
    }
    document.getElementById('result').value = result;
    }

    

    
