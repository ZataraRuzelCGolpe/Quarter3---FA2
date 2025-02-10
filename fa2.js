<script>
        function add() 
        {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var sum = num1 + num2;
            printResult("The sum of " + num1 + " and " + num2 + " is " + sum + ".");
        }

        function subtract() 
        {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var diff = num1 - num2;
            printResult("The difference of " + num1 + " and " + num2 + " is " + diff + ".");
        }

        function multiply() 
        {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var prod = num1 * num2;
            printResult("The product of " + num1 + " and " + num2 + " is " + prod + ".");
        }

        function divide() 
        {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var quot = num1 / num2;
            printResult("The quotient of " + num1 + " and " + num2 + " is " + quot + ".");
        }

        function remainder() 
        {
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var rem = num1 % num2;
            printResult("The remainder of " + num1 + " and " + num2 + " is " + rem + ".");
        }

        function printResult(message) 
        {
            document.getElementById("result").innerHTML = message;
        }
        

    </script>
