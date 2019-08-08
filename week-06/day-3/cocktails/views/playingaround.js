<body>
    <h1>Cocktails</h1>

    <div class='nav'>
        <a href=''>ALL</a>
    </div>

    <div class='table'>
        <table style="width:100%">
            <tr>
                <th>NAME</th>
                <th>PRICE</th>
            </tr>

            <!-- <% for (let i = 0; i < cocktails.length; i++){ %>
            <tr>
                <td><%cocktails[i].name%></td>
                <td><%cocktails[i].price%></td>
              </tr>
        <%}%> -->
    </table>
        <ul class='drinks'>
                <% for (let i = 0; i < cocktails.length; i ++){ %>
                <li><%=cocktails[i].name%></li>
                <li><%=cocktails[i].contains%></li>
                <%}%>
        </ul>
        
        <ul class = 'prices'>
                <% for (let i = 0; i < cocktails.length; i ++){ %>
                <li><%=cocktails[i].price%></li>
                <%}%>
        </ul>
    </div>

</body>


<body>
    <h1>Cocktails</h1>

    <div class='nav'>
        <a href=''>ALL</a>
    </div>

    <div class='drinks'>
        <h2>NAME</h2>
        <ul>
            <% for (let i = 0; i < cocktails.length; i ++){ %>
            <li><%=cocktails[i].name%></li>
            <li><%=cocktails[i].contains%></li>
            <%}%>
        </ul>
    </div>

    <div class = 'prices'>
        <h2>PRICES</h2>
        <p><% for (let i = 0; i < cocktails.length; i ++){ %>
            <li><%=cocktails[i].price%></li>
            <%}%></p>
    </div>

</body>