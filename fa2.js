  <script>
        function sum(num1, num2) {
            return num1 + num2;
        }

        function difference(num1, num2) {
            return num1 - num2;
        }

        function product(num1, num2) {
            return num1 * num2;
        }

        function quotient(num1, num2) {
            return num1 / num2;
        }

        function remainder(num1, num2) {
            return num1 % num2;
        }

        function printResult(message) {
            document.getElementById("result").innerHTML = message;
        }

        function calculate(operation) {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            let result;
            let opText; 

            switch (operation) {
                case 'sum':
                    result = sum(num1, num2);
                    opText = "sum"; 
                    break;
                case 'difference':
                    result = difference(num1, num2);
                    opText = "difference"; 
                    break;
                case 'product':
                    result = product(num1, num2);
                    opText = "product"; 
                    break;
                case 'quotient':
                    result = quotient(num1, num2);
                    opText = "quotient"; 
                    break;
                case 'remainder':
                    result = remainder(num1, num2);
                    opText = "remainder"; 
                    break;
                default:
                    result = "Invalid operation";
                    opText = "invalid operation"; 
            }

            let message = `The ${opText} of ${num1} and ${num2} is ${result}.`
            printResult(message);
        }
    </script>
