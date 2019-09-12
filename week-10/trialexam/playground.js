app.get('/a/:alias', (req, res) => {
    connection.query('SELECT * FROM alias WHERE alias=?'[alias], (err, rows) => {
        if (err) {
            console.log(err);
        } else if (rows.length > 0) {
            connection.query('UPDATE alias SET hitCount = hitCount +1 WHERE alias = ?', [rows[0].alias], (err, resp) => {
                if (err) {
                    console.log(err)
                } else {
                    res.redirect(rows[0].url);
                }
            });
        } else {
            res.sendStatus(404);
        }
    });
});

app.delete('/api/links/:id',(req,res)=>{
    const id = req.params.id;

    connection.query('SELECT * FROM alias WHERE id = ?',[id],(err,rows)=>{
        if (err){
            console.log(err);
        } else if (rows.length < 1){
            res.sendStatus(404);
        } else if (rows.length > 0){
            connection.query('DELETE FROM alias WHERE id = ?',[id],(err,resp)=>{
                if (err){
                    console.log(err)
                } else {
                    res.sendStatus(204);
                }
            })
        }
    })
})

/* app.delete('/api/links/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM alias WHERE id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else if (rows.length > 0) {
            connection.query('DELETE FROM alias WHERE id = ?', [id], (err, resp) => {
                res.send(resp)
            });
        }
    })
});
 */