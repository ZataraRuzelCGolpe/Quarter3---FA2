<script>
       function calculate(operation) {
        var n1 = Number(document.getElementById("n1").value);
        var n2 = Number(document.getElementById("n2").value);
        var result = 0;
        var message = "";

       if (operation == '+') 
       {
        result = n1 + n2;
        message = "The sum of " + n1 + " and " + n2 + " is " + result;
       }
       else if (operation == '-') 
       {
        result = n1 - n2;
        message = "The difference of " + n1 + " and " + n2 + " is " + result;
       } 
       else if (operation == '*') 
       {
         result = n1 * n2;
         message = "The product of " + n1 + " and " + n2 + " is " + result;
       } 
       else if (operation == '/')
       {
        result = n1 / n2;
        message = "The quotient of " + n1 + " and " + n2 + " is " + result;
       } 
       else if (operation == '%') 
       {
        result = n1 % n2;
        message = "The remainder of " + n1 + " and " + n2 + " is " + result;
       }

    document.getElementById("result").textContent = message;
}
    </script>