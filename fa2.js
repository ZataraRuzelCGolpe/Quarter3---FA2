<script>
        function add(num1, num2) {
            return num1 + num2;
        }

        function subtract(num1, num2) {
            return num1 - num2;
        }

        function multiply(num1, num2) {
            return num1 * num2;
        }

        function divide(num1, num2) {
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

            switch (operation) {
                case 'add':
                    result = add(num1, num2);
                    break;
                case 'subtract':
                    result = subtract(num1, num2);
                    break;
                case 'multiply':
                    result = multiply(num1, num2);
                    break;
                case 'divide':
                    result = divide(num1, num2);
                    break;
                case 'remainder':
                    result = remainder(num1, num2);
                    break;
                default:
                    result = "Invalid operation";
            }

            let message = `The ${operation} of ${num1} and ${num2} is ${result}.`;
            printResult(message);
        }
    </script>
