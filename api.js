<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container"></div>
    <button onclick="getanimal()">getanimal</button>
</body>
<script>
    
    async function getanimal()
    {
        
       const response = await fetch("https://catfact.ninja/fact")
        const final = await response.json()
        console.log(final);
    }
</script>
</html>
