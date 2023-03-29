function drawCard (title, data, appendTo) {
    $(appendTo).empty();
    $(appendTo).append(<h2>${title}</h2>);
    let $table = $('<table>').addClass('table');
    let $tr = $('<tr>').addClass('row');
    for (let key in data[0]) {
        $tr.append($('<th>').addClass('header').text(key));
        $($table).append($tr);
    }
  
    for (let i = 0; i < data.length; i++) {
        $tr = $('<tr>').addClass('row');
        for (let key in data[i]) {
            let $td = $('<td>').addClass('entry').text(data[i][key])
            $tr.append($td);
        }
        $($table).append($tr);
    }
    $(appendTo).append($table);
  }

res.send (drawCard("People-Filter", rows, $(" #holder ")))

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

  //Syntax --> app.METHOD(PATH, HANDLER); handler is the function executed when the route is matched


